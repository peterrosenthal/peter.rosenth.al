<script>
  import classNames from 'classnames';
  import { page } from '$app/stores';

  let active = $derived.by(() => {
    if ($page.url.pathname.includes('portfolio')) {
      return 'portfolio';
    }
    if ($page.url.pathname.includes('me')) {
      return 'me';
    }
    return 'home';
  });
</script>

<style>
  nav {
    width: 100%;
    height: 6rem;
    padding-inline: 2rem;
    box-sizing: border-box;

    background-color: var(--base-10);
    box-shadow: 0 0.5rem 4rem #00000010;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  img {
    align-self: start;
    width: 10rem;
  }

  .group {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
  }

  .group a {
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
  .portfolio-link:focus-visible,
  .portfolio-link.selected {
    background-color: var(--green-0);
  }

  .portfolio-link.selected:hover,
  .portfolio-link.selected:focus-visible {
    background-color: var(--green-10);
  }

  .me-link {
    border-color: var(--blue-60);
  }

  .me-link:hover,
  .me-link:focus-visible,
  .me-link.selected {
    background-color: var(--blue-0);
  }

  .me-link.selected:hover,
  .me-link.selected:focus-visible {
    background-color: var(--blue-10);
  }

  @media (width < 500px) {
    nav:not(:has(> *:only-child)) {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: start;
      height: 10rem;
    }

    .group {
      justify-content: space-evenly;
      width: 100%;
      max-width: 400px;
    }
  }

  @media (width < 300px) {
    .group a {
      font-size: 0.75rem;
      padding-inline: 0.5rem;
      padding-block: 0.25rem;
    }
  }
</style>

<nav>
  {#if active === 'home'}
    <img src="/logo.svg" alt="Peter Rosenthal" />
  {:else}
    <a href="/">
      <img src="/logo.svg" alt="Peter Rosenthal - Home" />
    </a>

    <div class="group">
      <a
        href="/portfolio"
        class={classNames('portfolio-link', {
          selected: active === 'portfolio',
        })}
      >
        Portfolio
      </a>

      <a
        href="/me"
        class={classNames('me-link', { selected: active === 'me' })}
      >
        About me
      </a>
    </div>
  {/if}
</nav>
