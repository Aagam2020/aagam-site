<script>export let data;</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content="Aagam Shah — product manager, direct sourcing & CRM." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content="Aagam Shah — product manager, direct sourcing & CRM." />
</svelte:head>

<main class="container"><slot /></main>

<style>
  :root { --max: 820px; }
  html,body{margin:0;padding:0}
  body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.6; color:#111; }
  .container { max-width: var(--max); margin: 0 auto; padding: 2rem 1.2rem 6rem; }
  section { margin: 4rem 0; }
  h1 { font-size: clamp(2rem,4vw,3rem); line-height:1.15; margin:0 0 0.75rem; }
  h2 { font-size: clamp(1.25rem,2.5vw,1.6rem); margin:0 0 0.75rem; }
  p { margin: 0.35rem 0 0.75rem; color:#222; }
  a { color: inherit; text-decoration: underline; }
  .muted { color:#555; }
  .cards { display:grid; gap:1rem; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); }
  .card { border:1px solid #eee; border-radius:12px; padding:1rem; }
  .list { padding-left: 1.25rem; }
  img.avatar { width:72px; height:72px; border-radius:50%; object-fit:cover; }
  footer { margin-top: 3rem; font-size:0.9rem; color:#666; }
</style>

