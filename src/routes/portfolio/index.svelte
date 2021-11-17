<script context='module'>
  import * as archieml from 'archieml';

  export async function load({ page, fetch, session, stuff }) {
    const entriesUrl = 'https://docs.google.com/document/d/1ClXruC-rmLh2iCEpRHa1kG_6X4FSh935Zo6nCDPuWCI/export?format=txt';
    const entriesResponse = await fetch(entriesUrl);

    const projects = [];

    if (entriesResponse.ok) {
      const entriesResponseText = await entriesResponse.text();
      const entries = archieml.load(entriesResponseText);
      for (const entrySlug in entries) {
        const entryUrl = `https://docs.google.com/document/d/${entries[entrySlug]}/export?format=txt`;
        const entryResponse = await fetch(entryUrl);
        if (entryResponse.ok) {
          const entryResponseText = await entryResponse.text();
          const entry = archieml.load(entryResponseText);
          projects.push({
            title: entry.title,
            thumbnail: entry.thumbnail,
          });
        } else {
          return {
            status: entryResponse.status,
            error: new Error(`could not load url: ${entryUrl}`),
          };
        }
      }
      return { props: { projects } };
    }
    return { 
      status: entriesResponse.status,
      error: new Error(`Could not load url: ${entriesUrl}`),
    };
  }
</script>

<script>
  export let projects = [];
</script>

<ul>
  {#each projects as project}
    <li>{project.title}<img src={project.thumbnail.url} alt={project.thumbnail.alt} /></li>
  {/each}
</ul>
