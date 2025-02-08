<script>
  import BackIcon from '$lib/icons/BackIcon.svelte';

  let { data } = $props();
</script>

<style>
  .container {
    width: 90%;
    max-width: 1040px;
    min-height: calc(100vh - 128px);
    box-sizing: border-box;
    margin: 128px auto 32px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    gap: 32px;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    color: light-dark(var(--base-80), var(--base-20));
  }

  h2 {
    font-size: 2.25rem;
    margin: 0;
    padding: 0;
    margin-block-end: -24px;
    color: light-dark(var(--base-80), var(--base-20));
  }

  p,
  li {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: light-dark(var(--base-100), var(--base-10));
    font-weight: 300;
    margin: 0;
  }

  ul {
    margin: 0;
  }

  .image {
    box-sizing: border-box;
    align-self: center;
    max-width: 80%;
    max-height: 80vh;
    border-radius: 16px;
  }

  .videowrapper {
    align-self: center;
    position: relative;
    width: 1280px;
    max-width: 80%;
    padding-block-end: 46.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .link {
    display: block;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: light-dark(var(--blue-100), var(--blue-50));
    border-bottom: 0.25rem solid #00000000;
    transition: all ease-in-out 200ms;
  }

  .link:hover,
  .link:focus-visible {
    color: light-dark(var(--blue-90), var(--blue-40));
    border-bottom-color: light-dark(var(--blue-90), var(--blue-40));
  }

  .back {
    align-self: flex-start;
    font-size: 0.75rem;
    color: light-dark(var(--base-80), var(--base-20));
    display: flex;
    flex-flow: row nowrap;
    gap: 4px;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid #00000000;
    margin-block-end: -24px;
  }

  .back:hover,
  .back:focus-visible {
    color: light-dark(var(--base-70), var(--base-30));
    border-bottom-color: light-dark(var(--base-40), var(--base-50));
  }

  @media (width < 500px) {
    .container {
      margin-block-start: 192px;
    }

    .image,
    .videowrapper {
      max-width: 98%;
    }
  }
</style>

<div class="container">
  <a class="back" href="/portfolio">
    <BackIcon />
    View all projects
  </a>
  <h1>{data.title}</h1>
  {#each data.contents as item}
    {#if item.type === 'image'}
      <img class="image" src={item.url} alt={item.alt} />
    {:else if item.type === 'subheading'}
      <h2>{item.text}</h2>
    {:else if item.type === 'paragraph'}
      <p>{item.text}</p>
    {:else if item.type === 'link'}
      <a class="link" href={item.url}>{item.text}</a>
    {:else if item.type === 'list' && item.entries !== undefined}
      <ul>
        {#each item.entries as li}
          <li>{li}</li>
        {/each}
      </ul>
    {:else if item.type === 'video'}
      <div class="videowrapper">
        <iframe
          src={item.url}
          title="Video Player"
          frameborder="0"
          allow="accelerometer; encrypt-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    {/if}
  {/each}
</div>
