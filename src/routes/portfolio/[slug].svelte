<script context="module">
  import * as archieml from 'archieml';

  export async function load({ page, fetch, session, stuff }) {
    const slug = page.params.slug;
    const url = 'https://docs.google.com/document/d/1ClXruC-rmLh2iCEpRHa1kG_6X4FSh935Zo6nCDPuWCI/export?format=txt';
    const response = await fetch(url);

    if (response.ok) {
      const text = await response.text();
      const aml = archieml.load(text);
      if (aml[slug] !== undefined) {
        return { props: { text: aml.slug } };
      }
    }
    return { 
      status: response.status,
      error: new Error(`Could not load ${url}`),
    };
  }
</script>

<script>
  export let text = 'default';
</script>

<p>{text}</p>