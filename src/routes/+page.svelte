<script>
  import aboutme from '$data/aboutme.json';

  console.log(aboutme);
</script>

<style>
  .main {
    width: 90%;
    max-width: 65rem;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
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

  img {
    align-self: start;
    width: 25rem;
    margin-bottom: -15rem;
  }

  @media (height < 600px) {
    img {
      width: 12rem;
    }
  }
</style>

<div class='main'>
  <img src='/logo.svg' alt='Peter Rosenthal' />

  <div class='container'>
    <h1>Hello! 👋</h1>

    <h2>I'm Peter Rosenthal, a creative software developer and designer.</h2>

    <div class='nav'>
      <a href='/portfolio'>View my portfolio</a>
      <a href='/me'>Find out more about me</a>
    </div>
  </div>

  <div class='externals'>
    <a href='https://github.com/peterrosenthal' target='_blank'>GitHub</a>
    <a href='https://www.linkedin.com/in/peter-rosenthal-0362b51bb/' target='_blank'>LinkedIn</a>
  </div>
</div>
