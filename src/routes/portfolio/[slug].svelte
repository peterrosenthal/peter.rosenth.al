<script context='module'>
  import * as archieml from 'archieml';

  export async function load({ page, fetch, session, stuff }) {
    const slug = page.params.slug;
    const entriesUrl = 'https://docs.google.com/document/d/1ClXruC-rmLh2iCEpRHa1kG_6X4FSh935Zo6nCDPuWCI/export?format=txt';
    const entriesResponse = await fetch(entriesUrl);

    if (entriesResponse.ok) {
      const entriesResponseText = await entriesResponse.text();
      const entries = archieml.load(entriesResponseText);
      if (entries[slug] !== undefined) {
        const entryUrl = `https://docs.google.com/document/d/${entries[slug]}/export?format=txt`;
        const entryResponse = await fetch(entryUrl);
        if (entryResponse.ok) {
          const entryResponseText = await entryResponse.text();
          const entry = archieml.load(entryResponseText);
          return { props: { contents: entry } };
        }
        return {
          status: entryResponse.status,
          error: new Error(`could not load url: ${entryUrl}`),
        };
      } else {
        return {
          status: 404,
          error: new Error(`Project not found: ${slug}`),
        };
      }
    }
    return { 
      status: entriesResponse.status,
      error: new Error(`Could not load url: ${entryiesUrl}`),
    };
  }
</script>

<script>
  export let contents = {
    title: 'Default Entry Title',
    contents: [
      {
        type: 'paragraph',
        text: 'Default paragraph text.'
      },
      {
        type: 'subheading',
        text: 'Default subheading text.'
      },
      {
        type: 'image',
        url: 'http://example.com/',
        alt: 'Default image alt text.'
      },
    ]
  };
</script>

<h1>{contents.title}</h1>
{#each contents.contents as entry}
  {#if entry.type == 'image'}
    <img src={entry.url} alt={entry.alt} />
  {:else if entry.type == 'subheading'}
    <h2>{entry.text}</h2>
  {:else if entry.type == 'paragraph'}
    <p>{entry.text}</p>
  {/if}
{/each}