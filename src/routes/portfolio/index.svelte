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
    width: 85%;
    max-width: 92em;
    margin: auto;
  }

  li {
    font-weight: 300;
    display: block;
    max-width: 30em;
  }

  a {
    text-align: center;
    font-size: 1.6em;
    text-decoration: none;
    color: black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1em solid #ffffff00;
    transition: 0.2s;
  }

  a:hover {
    border-bottom: 0.1em solid #dad372;
  }

  a span {
    flex: 1 2 5em;
  }

  a img {
    width: 9em;
    border-radius: 3px;
    margin: 1em;
  }
</style>

<ul>
  {#each projects as project}
    <li><a href={`/portfolio/${project.slug}/`}><span>{project.entry.title}</span><img src={project.entry.thumbnail.url} alt={project.entry.thumbnail.alt} /></a></li>
  {/each}
</ul>
