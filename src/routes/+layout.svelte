<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content="Aagam Shah — personal site" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content="Aagam Shah — personal site" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="container">
  <slot />
</main>

<style>
  :root { --max: 900px; }

  html, body { margin: 0; padding: 0; }

  /* 🔶 Light yellow background */
  body {
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    line-height: 1.7;
    color: #1e293b;
    background: #fff9c4; /* light pastel yellow */
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  .container {
    max-width: var(--max);
    margin: 0 auto;
    padding: 2.5rem 1.2rem 6rem;
  }

  section { margin: 3.5rem 0; }

  h1 {
    font-size: clamp(2rem, 4vw, 2.6rem);
    line-height: 1.2;
    margin: 0 0 0.75rem;
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    margin: 0 0 0.75rem;
    font-weight: 700;
  }

  p { margin: 0.5rem 0 1rem; color: #475569; }
  a { color: #2563eb; text-decoration: none; border-bottom: 1px solid transparent; transition: .2s; }
  a:hover { color: #3b82f6; border-bottom-color: #3b82f6; }

  /* Intro helpers used by your +page.svelte */
  .intro { display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 2rem; }
  .avatar-box { display: inline-flex; padding: 8px; border: 3px solid #ff6b35; border-radius: 16px; margin-bottom: 1.25rem; background: #fff; }
  .avatar { width: 96px; height: 96px; border-radius: 12px; object-fit: cover; display: block; }
  .tagline { font-size: clamp(1.05rem, 2.2vw, 1.25rem); max-width: 660px; margin-top: 0.5rem; color: #334155; }

  .cards { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); }
  .card { border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; background: #fff; }
  .list { padding-left: 1.25rem; }
  footer { margin-top: 3rem; font-size: 0.9rem; color: #64748b; text-align: center; }
</style>
