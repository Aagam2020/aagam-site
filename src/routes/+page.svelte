<script lang="ts">
  import profile from '$lib/content/profile';
  import experience from '$lib/content/experience';
  import testimonials from '$lib/content/testimonials';
  import projects from '$lib/content/projects';

  // inline SVG icons (no extra deps)
  const Icon = {
    x: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M18.9 3H22l-7 8.1L23.5 21H16l-5-6.5L5 21H2l7.5-8.7L1 3h7l4.6 6L18.9 3Z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.5-1.6-1.9-1.6-1.9-1.3-.9.1-.9.1-.9 1.5.1 2.2 1.6 2.2 1.6 1.3 2.2 3.5 1.6 4.4 1.2.1-1 .5-1.6.9-2-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.5 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.6 1.3a12.3 12.3 0 0 1 6.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.8 1 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4 1 1.3 1 2.6v3.8c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V8.9h3.4v1.6h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.4v6.5zM5.3 7.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3.5 20.4h3.7V8.9H3.5v11.5z"/></svg>`
  };
</script>

<section id="intro" class="intro">
  <div class="avatar-box">
    <img src="/AvatarMaker.png" alt={profile.name} class="avatar" />
  </div>
  <h1>hi, i’m {profile.name.toLowerCase()}.</h1>
  <p class="tagline">{profile.tagline}</p>

  <!-- socials -->
  <div class="socials">
    <a class="icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
      {@html Icon.github}
    </a>
    <a class="icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
      {@html Icon.linkedin}
    </a>
    <a class="icon" href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
      {@html Icon.x}
    </a>
  </div>
</section>

{#if profile.story}
<section id="story">
  <h2>a quick story</h2>
  <p>{profile.story}</p>
</section>
{/if}

{#if experience.length}
<section id="teams">
  <h2>teams & products</h2>
  <div class="cards">
    {#each experience as item}
      <div class="card exp">
        {#if item.logo}<img class="logo" src={item.logo} alt={`${item.org} logo`} />{/if}
        <div class="exp-text">
          <strong>{item.org}</strong> · {item.role}
          {#if item.period}<div class="period">{item.period}</div>{/if}
          <div class="summary">{item.summary}</div>
        </div>
      </div>
    {/each}
  </div>
</section>
{/if}

{#if projects.length}
<section id="projects">
  <h2>side projects</h2>
  <ul class="list">
    {#each projects as p}
      <li>
        {#if p.url}
          <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
        {:else}{p.title}{/if}
        {#if p.blurb} — {p.blurb}{/if}
      </li>
    {/each}
  </ul>
</section>
{/if}

{#if profile.extras}
<section id="extras">
  <h2>outside of work</h2>
  <p>{profile.extras}</p>
</section>
{/if}

<section id="contact">
  <h2>say hello</h2>
  <p><a href={"mailto:" + profile.email}>{profile.email}</a></p>
  <footer>— {profile.name.split(' ')[0].toLowerCase()} (hand coded with love & svelte)</footer>
</section>

<style>
  .socials { display:flex; gap:.6rem; margin-top:.9rem; }
  .icon {
    display:inline-flex; align-items:center; justify-content:center;
    width:34px; height:34px; border-radius:8px; background:#fff;
    color:#111; border:1px solid #e2e8f0; transition:.15s;
  }
  .icon:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,.08); }
  .icon svg { width:18px; height:18px; display:block; }

  .card.exp { display:flex; align-items:flex-start; gap:.9rem; }
  .card.exp .logo { width:32px; height:32px; border-radius:6px; object-fit:contain; background:#fafafa; border:1px solid #eee; }
  .card.exp .exp-text { font-size:.98rem; }
  .card.exp .period { color:#64748b; font-size:.9rem; margin:.2rem 0 .2rem; }
  .card.exp .summary { color:#334155; margin-top:.2rem; line-height:1.45; }
</style>
