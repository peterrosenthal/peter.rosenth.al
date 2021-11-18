<script>
  import aboutme from '$data/aboutme.json'
</script>

<style>
  .wrapper {
    font-family: 'Lato', sans-serif;
    width: 90%;
    max-width: 72em;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 300;
    text-align: center;
  }

  p {
    font-weight: 300;
    font-size: 1.25em;
    line-height: 1.5em;
  }
</style>

<div class='wrapper'>
  <h1>{aboutme.title}</h1>

  {#each aboutme.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
</div>
