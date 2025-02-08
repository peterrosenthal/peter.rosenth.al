<script>
  import portfolio from '$data/portfolio.json';
</script>

<style>
  .container {
    width: 90vw;
    max-width: 1040px;
    min-height: calc(100vh - 160px);
    box-sizing: border-box;
    margin: 128px auto 32px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    gap: 32px;
  }

  .project {
    box-sizing: border-box;
    width: 200px;
    border-radius: 32px;
    transition: all ease-in-out 200ms;
    text-decoration: none;
    color: light-dark(var(--base-90), var(--base-10));
    background-color: light-dark(var(--base-0), var(--base-100));
    padding: 16px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    gap: 4px;
    box-shadow: 0 0 32px light-dark(#0000000b, #ccd5db03);
  }
  .project:hover {
    box-shadow: 0 0 32px light-dark(#0000001d, #ccd5db0d);
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
    border-radius: 24px;
  }

  @media (width < 500px) {
    .container {
      margin-block-start: 192px;
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
