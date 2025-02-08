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
    height: 96px;
    padding-inline: 32px;
    box-sizing: border-box;

    background-color: light-dark(var(--base-10), var(--base-90));
    box-shadow: 0 0.5rem 64px light-dark(#00000010, #ccd5db10);

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
    width: 160px;
  }

  .group {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  .group a {
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
  .portfolio-link:focus-visible,
  .portfolio-link.selected {
    background-color: light-dark(var(--green-0), var(--green-90));
  }

  .portfolio-link.selected:hover,
  .portfolio-link.selected:focus-visible {
    background-color: light-dark(var(--green-10), var(--green-100));
  }

  .me-link {
    border-color: light-dark(var(--blue-60), var(--blue-50));
  }

  .me-link:hover,
  .me-link:focus-visible,
  .me-link.selected {
    background-color: light-dark(var(--blue-0), var(--blue-90));
  }

  .me-link.selected:hover,
  .me-link.selected:focus-visible {
    background-color: light-dark(var(--blue-10), var(--blue-100));
  }

  @media (width < 500px) {
    nav:not(:has(> *:only-child)) {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: start;
      height: 160px;
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
      padding-inline: 8px;
      padding-block: 4px;
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
