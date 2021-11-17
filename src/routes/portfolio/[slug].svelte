<script context='module'>
  import portfolio from '$data/portfolio.json';

  export async function load({ page }) {
    const slug = page.params.slug;
    for (let item of portfolio) {
      if (item.slug === slug) {
        return { props: { entry: item.entry } }
      }
    }
    return {
      status: 404,
      error: new Error(`Project not found: ${slug}`),
    };
  }
</script>

<script>
  export let entry = {
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

<h1>{entry.title}</h1>
{#each entry.contents as item}
  {#if item.type === 'image'}
    <img src={item.url} alt={item.alt} />
  {:else if item.type === 'subheading'}
    <h2>{item.text}</h2>
  {:else if item.type === 'paragraph'}
    <p>{item.text}</p>
  {/if}
{/each}