<script>
  import portfolio from '$data/portfolio.json';
</script>

<style>
  .container {
    width: 90vw;
    max-width: 65rem;
    min-height: calc(100vh - 10rem);
    box-sizing: border-box;
    margin: 8rem auto 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 2rem;
  }

  .project {
    box-sizing: border-box;
    width: 13rem;
    border-radius: 2rem;
    transition: all ease-in-out 200ms;
    text-decoration: none;
    color: var(--base-90);
    background-color: var(--base-0);
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    gap: 0.25rem;
    box-shadow: 0 0 2rem #0000000b;
  }
  .project:hover {
    box-shadow: 0 0 2rem #0000001d;
  }

  .project-title {
    flex-grow: 2;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .thumbnail {
    aspect-ratio: 1 / 1;
    max-width: 100%;
    border-radius: 1.75rem;
  }

  @media (width < 500px) {
    .container {
      margin-block-start: 12rem;
    }
  }
</style>

<div class="container">
  {#each portfolio as project}
    <a href={`/portfolio/${project.slug}`} class="project">
      <span class="project-title">{project.entry.title}</span>
      <img
        src={project.entry.thumbnail.url}
        alt={project.entry.thumbnail.alt}
        class="thumbnail"
      />
    </a>
  {/each}
</div>
