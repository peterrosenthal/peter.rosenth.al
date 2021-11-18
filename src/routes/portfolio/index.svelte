<script>
  import portfolio from '$data/portfolio.json';

  const colors = ['red', 'green', 'blue', 'yellow'];
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
    padding: 1em;
    margin-bottom: 1em;
    border: 0.19em solid #ffffff00;
    border-bottom: 0.19em solid #333333;
    transition: 0.2s;
  }

  li:hover {
    border-color: #666666;
    border-radius: 3px;
  }

  li.red {
    border-bottom: 0.19em solid #df9a8b;
  }

  li.red:hover {
    border-color: #f0ba8f;
  }

  li.green {
    border-bottom: 0.19em solid #78a583;
  }

  li.green:hover {
    border-color: #9fc79e;
  }

  li.blue {
    border-bottom: 0.19em solid #666da3;
  }

  li.blue:hover {
    border-color: #8aacc3;
  }

  li.yellow {
    border-bottom: 0.19em solid #dad372;
  }

  li.yellow:hover {
    border-color: #e7d88d;
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
  {#each portfolio as project, index}
    <li class={colors[index % colors.length]}><a href={`/portfolio/${project.slug}/`}><span>{project.entry.title}</span><img src={project.entry.thumbnail.url} alt={project.entry.thumbnail.alt} /></a></li>
  {/each}
</ul>
