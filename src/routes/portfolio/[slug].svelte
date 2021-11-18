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
    title: '',
    contents: [],
  };
</script>

<style>
  .wrapper {
    font-family: 'Lato', sans-serif;
    width: 90%;
    max-width: 72em;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 300;
    text-align: center;
  }

  h2 {
    font-size: 2.6em;
    font-weight: 300;
    text-align: center;
  }

  p, li {
    font-weight: 300;
    font-size: 1.25em;
    line-height: 1.5em;
  }

  img {
    max-width: 80%;
    margin: 1em;
    border-radius: 3px;
  }

  .videowrapper {
    position: relative;
    width: 1280px;
    max-width: 80%;
    padding-bottom: 46.25%;
    margin: 1em;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  a {
    display: block;
    margin: 1em;
    text-decoration: none;
    font-size: 1.3em;
    color: #df9a8b;
    border-bottom: 0.1em solid #ffffff00;
    transition: 0.2s;
  }

  a:hover {
    color: #f0ba8f;
    border-bottom: 0.1em solid #f0ba8f;
  }
</style>

<div class='wrapper'>
<h1>{entry.title}</h1>
  {#each entry.contents as item}
    {#if item.type === 'image'}
      <img src={item.url} alt={item.alt} />
    {:else if item.type === 'subheading'}
      <h2>{item.text}</h2>
    {:else if item.type === 'paragraph'}
      <p>{item.text}</p>
    {:else if item.type === 'link'}
      <a href={item.url}>{item.text}</a>
    {:else if item.type === 'list'}
      <ul>
        {#each item.entries as li}
          <li>{li}</li>
        {/each}
      </ul>
    {:else if item.type === 'video'}
      <div class='videowrapper'>
        <iframe src={item.url} title='Video Player' frameborder='0' allow='accelerometer; encrypt-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
      </div>
    {/if}
  {/each}
</div>