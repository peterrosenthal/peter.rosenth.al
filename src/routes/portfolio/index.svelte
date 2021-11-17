<script context='module'>
  export async function load({ page, fetch }) {
    const url = 'entries.json';
    const response = await fetch(url);
    if (response.ok) {
      const text = response.text();
      return { props: { text } };
    }
    return { 
      status: response.status,
      error: new Error(`Could not load url: ${url}`),
    };
  }
</script>

<script>
  export let projects = [];
  export let text = '';
</script>

<ul>
  {#each projects as project}
    <li>{project.title}<img src={project.thumbnail.url} alt={project.thumbnail.alt} /></li>
  {/each}
</ul>

{text}
