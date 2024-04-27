<script>
  import Nav from '$components/Nav.svelte';
  import { inject } from '@vercel/analytics';
  
  inject({ mode: 'production' });
</script>

<Nav />

<slot></slot>
