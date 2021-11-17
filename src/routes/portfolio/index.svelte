<script>
  import portfolio from '$data/portfolio.json';

  export let projects = portfolio;
</script>

<ul>
  {#each projects as project}
    <li>{project.entry.title}<img src={project.entry.thumbnail.url} alt={project.entry.thumbnail.alt} /></li>
  {/each}
</ul>
