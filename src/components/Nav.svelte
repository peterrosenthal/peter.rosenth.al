<script>
  export let home = true;
</script>

<style>
  nav {
    width: 90%;
    max-width: 64em;
    margin: 1em auto;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    font-family: 'Lato', sans-serif;
  }

  a {
    margin: 0.5em 1em;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    font-weight: 500;
  }

  #home {
    margin-right: auto;
    width: 7em;
  }

  img {
    width: 100%;
  }

  #portfolio {
    color: #78a583;
    border-bottom: 0.1em solid #ffffff00;
    transition: 0.2s;
  }

  #portfolio:hover {
    color: #9fc79e;
    border-bottom: 0.1em solid #9fc79e;
  }

  #me {
    color: #666da3;
    border-bottom: 0.1em solid #ffffff00;
    transition: 0.2s;
  }

  #me:hover {
    color: #8aacc3;
    border-bottom: 0.1em solid #8aacc3;
  }
</style>

<nav>
  {#if home}
    <a id='home' href='/'><img src='/logo.svg' alt='Home'></a>
  {/if}
  <a id='portfolio' href='/portfolio'>Projects</a>
  <a id='me' href='/me'>About me</a>
</nav>