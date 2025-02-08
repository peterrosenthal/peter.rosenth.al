<script>
  import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
  import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
</script>

<style>
  .main {
    width: 90%;
    max-width: 1040px;
    min-height: calc(100vh - 28px);
    box-sizing: border-box;
    margin: 0 auto;
    padding-block-start: 128px;
    padding-block-end: 32px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .internals {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
    column-gap: 64px;
    margin-block-start: 32px;
  }

  .internals a {
    text-decoration: none;
    color: light-dark(var(--base-90), var(--base-10));
    padding-inline: 16px;
    padding-block: 8px;
    border-style: solid;
    border-width: 4px;
    border-radius: 32px;
    transition: all ease-in-out 200ms;
  }

  .portfolio-link {
    border-color: light-dark(var(--green-60), var(--green-50));
  }

  .portfolio-link:hover,
  .portfolio-link:focus-visible {
    background-color: light-dark(var(--green-0), var(--green-90));
  }

  .me-link {
    border-color: light-dark(var(--blue-60), var(--blue-50));
  }

  .me-link:hover,
  .me-link:focus-visible {
    background-color: light-dark(var(--blue-0), var(--blue-90));
  }

  .externals {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    row-gap: 8px;
    column-gap: 8px;
    font-size: 12px;
    padding-block-end: 8px;
    padding-inline-end: 8px;
    box-sizing: border-box;
    height: 1.75rem;
  }

  .externals a {
    width: 20px;
    height: 20px;
    box-sizing: border-box;

    color: light-dark(var(--base-80), var(--base-20));
  }
</style>

<div class="main">
  <h1>Hello! 👋</h1>

  <h2>I'm Peter Rosenthal, a creative software developer and designer.</h2>

  <div class="internals">
    <a href="/portfolio" class="portfolio-link">View my portfolio</a>
    <a href="/me" class="me-link">Find out more about me</a>
  </div>
</div>

<div class="externals">
  psst... you can also find me on:
  <a href="https://github.com/peterrosenthal" target="_blank"><GitHubIcon /></a>
  <a
    href="https://www.linkedin.com/in/peter-rosenthal-0362b51bb/"
    target="_blank"><LinkedInIcon /></a
  >
</div>
