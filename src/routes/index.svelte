<script>
  import Nav from '$components/Nav.svelte';
</script>

<style>
  main {
    width: 100%;
    height: 85vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
  }

  h1 {
    margin: 1em 0;
    text-align: center;
    width: 85%;
    max-width: 28em;
    font-family: 'Lato', sans-serif;
  }

  img {
    width: 100%;
  }

  #prelude {
    box-sizing: border-box;
    padding: 0 .75em;
    font-weight: 300;
    text-align: left;
  }

  #postlude {
    box-sizing: border-box;
    padding: 0 0.75em;
    font-weight: 300;
    text-align: right;
  }
</style>

<svelte:head>
  <title>Peter Rosenthal</title>
</svelte:head>

<main>
  <h1>
    <div id='prelude'>Hello, I'm</div>
    <img src='/logo.svg' alt='Peter Rosenthal'>
    <div id='postlude'>a creative everything developer!</div>
  </h1>
  <Nav home={false} />
</main>
