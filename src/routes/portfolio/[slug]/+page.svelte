<script>
  let { data } = $props();
</script>

<style>
  .container {
    width: 90%;
    max-width: 65rem;
    min-height: calc(100vh - 8rem);
    box-sizing: border-box;
    margin: 8rem auto 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: start;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    color: var(--base-80);
  }

  h2 {
    font-size: 2.25rem;
    margin: 0;
    padding: 0;
    margin-block-end: -1.5rem;
    color: var(--base-80);
  }

  p,
  li {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: var(--base-100);
    font-weight: 300;
    margin: 0;
  }

  ul {
    margin: 0;
  }

  .image {
    align-self: center;
    max-width: 80%;
    max-height: 80vh;
    border-radius: 2rem;
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
    border-radius: 2rem;
  }

  .link {
    display: block;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--blue-100);
    border-bottom: 0.25rem solid #00000000;
    transition: all ease-in-out 200ms;
  }

  .link:hover,
  .link:focus-visible {
    color: var(--blue-90);
    border-bottom-color: var(--blue-90);
  }

  .back {
    align-self: flex-start;
    font-size: 0.75rem;
    color: var(--base-80);
    display: flex;
    flex-flow: row nowrap;
    gap: 0.25rem;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid #00000000;
    margin-block-end: -1.5rem;
  }

  .back:hover,
  .back:focus-visible {
    color: var(--base-70);
    border-bottom-color: var(--base-40);
  }

  .back img {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (width < 500px) {
    .container {
      margin-block-start: 12rem;
    }

    .image,
    .videowrapper {
      max-width: 98%;
    }
  }
</style>

<div class="container">
  <a class="back" href="/portfolio">
    <img src="/back.svg" alt="" />
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
