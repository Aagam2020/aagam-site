<script lang="ts">
  import profile from '$lib/content/profile';
  import experience from '$lib/content/experience';
  import testimonials from '$lib/content/testimonials';
  import projects from '$lib/content/projects';
  import caseStudies from '$lib/content/caseStudies';

  // inline SVG icons
  const Icon = {
    github: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.5-1.6-1.9-1.6-1.9-1.3-.9.1-.9.1-.9 1.5.1 2.2 1.6 2.2 1.6 1.3 2.2 3.5 1.6 4.4 1.2.1-1 .5-1.6.9-2-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.5 1.3-3.5-.1-.3-.6-1.7.1-3.5 0 0 1.1-.4 3.6 1.3a12.3 12.3 0 0 1 6.6 0c2.5-1.7 3.6-1.3 3.6-1.3.7 1.8.2 3.2.1 3.5.8 1 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.5.4 1 1.3 1 2.6v3.8c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V8.9h3.4v1.6h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.4v6.5zM5.3 7.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM3.5 20.4h3.7V8.9H3.5v11.5z"/></svg>`,
    substack: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4 3h16v2H4V3Zm0 5h16v2H4V8Zm0 5h16v8l-8-3-8 3v-8Z"/></svg>`
  };
</script>

<!-- INTRO -->
<section id="intro" class="intro">
  <div class="avatar-box">
    <img src="/AvatarMaker.png" alt={profile.name} class="avatar" />
  </div>
  <h1>hi there! i’m {profile.name.toLowerCase()}.</h1>
  <p class="tagline">{profile.tagline}</p>

  <div class="socials">
    {#if profile.github}
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" class="icon">{@html Icon.github}</a>
    {/if}
    {#if profile.linkedin}
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" class="icon">{@html Icon.linkedin}</a>
    {/if}
    {#if profile.substack}
      <a href={profile.substack} target="_blank" rel="noreferrer" aria-label="Substack" class="icon">{@html Icon.substack}</a>
    {/if}
  </div>
</section>

<!-- ABOUT / STORY -->
<section id="about" class="about">
  <h2>about me</h2>

  <p class="lead">
    hi there — i’m <strong>aagam</strong>. i’ve always been curious about how things work and why people use them.
    what started as tinkering and scribbling ideas turned into building products that ship, learn, and grow.
  </p>

  <p>
    i like the messy middle — turning fuzzy problems into shippable <em>systems</em> with simple, soulful user experiences.
    i enjoy sitting at the intersection of <strong>strategy</strong>, <strong>design</strong>, and <strong>engineering</strong>:
    listening closely, prototyping quickly, and measuring what matters.
  </p>

  <p>
    i care about clarity, momentum, and taste.
    if it helps people do meaningful work (or smile a little), it’s worth building.
  </p>
</section>

<!-- QUOTES / PHILOSOPHY -->
<section id="notes" class="notes">
  <h3 class="kicker">a few notes i keep coming back to</h3>

  <blockquote>
    “stay close to the problem, and the solution will reveal itself.”
  </blockquote>
  <blockquote>
    “we become what we repeatedly do — so build with intention.”
  </blockquote>
</section>

<!-- OUTSIDE OF WORK -->
<section id="life" class="life">
  <h2>outside of work</h2>
  <ul class="emoji-list">
    <li>⚽ football</li>
    <li>🏋️‍♂️ lifting</li>
    <li>🃏 poker</li>
    <li>✈️ travel</li>
    <li>📚 reading & learning new stacks</li>
    <li>🧪 tinkering with small, scrappy ideas</li>
  </ul>

  <p class="closer">
    that’s me in a nutshell. if you’re building something interesting, i’d love to hear about it.
  </p>
</section>

<!-- EXISTING EXPERIENCE/PROJECTS -->
{#if experience.length}
<section id="teams">
  <h2>teams & products</h2>
  <div class="cards">
    {#each experience as item}
      <div class="card">
        {#if item.logo}
          <img class="avatar small" src={item.logo} alt={item.org} />
        {/if}
        <strong>{item.org}</strong><br />
        {item.summary}
      </div>
    {/each}
  </div>
</section>
{/if}

{#if caseStudies.length}
<section id="case-studies">
  <h2>case studies</h2>
  <p class="lead">
    deeper dives into product strategy, ux, and growth.
  </p>

  <ul class="list">
    {#each caseStudies as cs}
      <li>
        <a href={cs.url}>{cs.title}</a>
        {#if cs.blurb} — {cs.blurb}{/if}
      </li>
    {/each}
  </ul>
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
        {:else}
          {p.title}
        {/if}
        {#if p.blurb} — {p.blurb}{/if}
      </li>
    {/each}
  </ul>
</section>
{/if}

<section id="contact">
  <h2>say hello</h2>
  <p>
    <a href={"mailto:" + profile.email}>{profile.email}</a>
  </p>
  <footer>
    — {profile.name.split(' ')[0].toLowerCase()} (hand coded with love & svelte)
  </footer>
</section>

<style>
  /* base text */
  .lead {
    font-size: clamp(1.05rem, 2.1vw, 1.25rem);
    color: #334155;
    margin-bottom: .75rem;
  }

  .kicker {
    font-size: .95rem;
    text-transform: uppercase;
    letter-spacing: .12em;
    color: #64748b;
    margin: 2.25rem 0 .75rem;
  }

  .notes blockquote {
    margin: .75rem 0;
    padding: .9rem 1rem;
    border-left: 4px solid #f59e0b;
    background: rgba(255, 255, 255, .7);
    border-radius: 10px;
    font-style: italic;
    color: #334155;
  }

  .emoji-list {
    list-style: none;
    padding: 0;
    margin: .25rem 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: .35rem .9rem;
  }

  .emoji-list li {
    padding: .4rem .55rem;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    color: #334155;
  }

  .closer {
    margin-top: .9rem;
    color: #475569;
    font-weight: 500;
  }

  /* socials */
  .socials {
    display: flex;
    gap: .85rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .icon {
    display: inline-flex;
    padding: .5rem;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #e2e8f0;
    transition: background .2s ease, transform .2s ease;
  }

  .icon:hover {
    background: #fef9c3; /* pale yellow hover */
    transform: translateY(-2px);
  }

  .avatar.small { width:48px; height:48px; border-radius:10px; margin-bottom:.5rem; }
</style>
