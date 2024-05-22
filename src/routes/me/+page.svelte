<script>
  import Nav from '$lib/Nav.svelte';
  import aboutme from '$data/aboutme.json';
</script>

<style>
  .container {
    width: 90%;
    max-width: 65rem;
    min-height: calc(100vh - 8rem);
    box-sizing: border-box;
    margin: 8rem auto 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    color: var(--base-80);
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: var(--base-100);
  }
</style>

<Nav page='me' />

<div class='container'>
  <h1>{aboutme.title}</h1>

  {#each aboutme.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
</div>
