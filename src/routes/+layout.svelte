<script>
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import Nav from '$lib/Nav.svelte';

  inject({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights();
</script>

<style>
  :root {
    --base-0: #fbfaf9;
    --base-10: #f2f0ed;
    --base-20: #e2dfd9;
    --base-30: #d1ccc7;
    --base-40: #bdb7b2;
    --base-50: #a19897;
    --base-60: #857a7b;
    --base-70: #6a585d;
    --base-80: #4e363e;
    --base-90: #39222c;
    --base-100: #301822;

    --red-0: #f5edea;
    --red-10: #eeddd8;
    --red-20: #e7ccc5;
    --red-30: #e4b5aa;
    --red-40: #dd9383;
    --red-50: #d87d69;
    --red-60: #d56a53;
    --red-70: #d5593f;
    --red-80: #d14629;
    --red-90: #bf3d22;
    --red-100: #b1351b;

    --orange-0: #f7e3d4;
    --orange-10: #f5dbc6;
    --orange-20: #f2d0b5;
    --orange-30: #f1c5a2;
    --orange-40: #eeb181;
    --orange-50: #ea9e61;
    --orange-60: #e78a40;
    --orange-70: #e67c28;
    --orange-80: #e27118;
    --orange-90: #de6c12;
    --orange-100: #d7670f;

    --yellow-0: #f0e9c7;
    --yellow-10: #ece3b6;
    --yellow-20: #e9dea5;
    --yellow-30: #e8dc9b;
    --yellow-40: #e6d789;
    --yellow-50: #e2cf6e;
    --yellow-60: #e1cb60;
    --yellow-70: #e0c74d;
    --yellow-80: #e0c438;
    --yellow-90: #e4c321;
    --yellow-100: #e0be15;

    --green-0: #d7e0d7;
    --green-10: #cad8ca;
    --green-20: #bcd2bc;
    --green-30: #aecdad;
    --green-40: #9fc79e;
    --green-50: #90c18f;
    --green-60: #82bc80;
    --green-70: #73b672;
    --green-80: #62af60;
    --green-90: #55a752;
    --green-100: #4e9a4c;

    --blue-0: #ccd5db;
    --blue-10: #beccd5;
    --blue-20: #acc0cd;
    --blue-30: #99b4c7;
    --blue-40: #8aacc3;
    --blue-50: #7aa2bd;
    --blue-60: #6b99b8;
    --blue-70: #598db1;
    --blue-80: #4d80a3;
    --blue-90: #457392;
    --blue-100: #3c6580;
  }

  :global(html) {
    margin: 0;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: var(--base-10);
    color: var(--base-100);
    font-family: 'Poppins', sans-serif;
  }
</style>

<svelte:head>
  <title>Peter Rosenthal</title>
</svelte:head>

<Nav />

<slot></slot>
