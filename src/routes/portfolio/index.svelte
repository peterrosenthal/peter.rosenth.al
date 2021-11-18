<script>
  import portfolio from '$data/portfolio.json';

  export let projects = portfolio;
</script>

<style>
  ul {
    list-style: none;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 90%;
    max-width: 92em;
    margin: auto;
  }

  li {
    font-size: 2em;
    font-weight: 300;
    display: block;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-flow: row-wrap;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1em solid #ffffff00;
    transition: 0.2s;
  }

  a:hover {
    border-bottom: 0.1em solid #dad372;
  }

  img {
    width: 50%;
    max-width: 9em;
    border-radius: 3px;
    margin: 1em;
  }
</style>

<ul>
  {#each projects as project}
    <li><a href={`/portfolio/${project.slug}/`}>{project.entry.title}<img src={project.entry.thumbnail.url} alt={project.entry.thumbnail.alt} /></a></li>
  {/each}
</ul>
