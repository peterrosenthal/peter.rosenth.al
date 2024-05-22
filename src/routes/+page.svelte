<style>
  .main {
    width: 90%;
    max-width: 65rem;
    min-height: calc(100vh - 1.75rem);
    box-sizing: border-box;
    margin: 0 auto;
    padding-block-start: 8rem;
    padding-block-end: 2rem;
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
    row-gap: 0.5rem;
    column-gap: 4rem;
    margin-block-start: 2rem;
  }

  .internals a {
    text-decoration: none;
    color: var(--base-90);
    padding-inline: 1rem;
    padding-block: 0.5rem;
    border-style: solid;
    border-width: 0.25rem;
    border-radius: 2rem;
    transition: all ease-in-out 200ms;
  }

  .portfolio-link {
    border-color: var(--green-60);
  }

  .portfolio-link:hover,
  .portfolio-link:focus-visible {
    background-color: var(--green-0);
  }

  .me-link {
    border-color: var(--blue-60);
  }

  .me-link:hover,
  .me-link:focus-visible {
    background-color: var(--blue-0);
  }

  .externals {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    font-size: 0.75rem;
    padding-block-end: 0.5rem;
    padding-inline-end: 0.5rem;
    box-sizing: border-box;
    height: 1.75rem;
  }

  .externals a {
    width: 1.25rem;
    height: 1.25rem;
    box-sizing: border-box;

    color: var(--base-80);
  }

  .externals img {
    width: 100%;
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
  <a href="https://github.com/peterrosenthal" target="_blank"
    ><img src="/github.svg" alt="GitHub" /></a
  >
  <a
    href="https://www.linkedin.com/in/peter-rosenthal-0362b51bb/"
    target="_blank"><img src="/linkedin.svg" alt="LinkedIn" /></a
  >
</div>
