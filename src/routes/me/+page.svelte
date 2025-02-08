<script>
  import aboutme from '$data/aboutme.json';
</script>

<style>
  .container {
    width: 90%;
    max-width: 65rem;
    min-height: calc(100vh - 10rem);
    box-sizing: border-box;
    margin: 8rem auto 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    color: light-dark(var(--base-80), var(--base-20));
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: light-dark(var(--base-100), var(--base-10));
    font-weight: 300;
    margin: 0;
  }

  @media (width < 500px) {
    .container {
      margin-block-start: 12rem;
    }
  }
</style>

<div class="container">
  <h1>{aboutme.title}</h1>

  {#each aboutme.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
</div>
