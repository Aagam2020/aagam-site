<script lang="ts">
  import profile from '$lib/content/profile';
  import experience from '$lib/content/experience';
  import testimonials from '$lib/content/testimonials';
  import projects from '$lib/content/projects';
</script>

<section id="intro">
  <h1>hi, i’m {profile.name.toLowerCase()}.</h1>
  <p class="muted">{profile.tagline}</p>
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
      <div class="card"><strong>{item.org}</strong><br/>{item.summary}</div>
    {/each}
  </div>
</section>
{/if}

{#if testimonials.length}
<section id="testimonials">
  <h2>what folks say</h2>
  <div class="cards">
    {#each testimonials as t}
      <figure class="card">
        <!-- No local images required; placeholder avatar -->
        <img class="avatar" src={t.avatar} alt={t.name} />
        <figcaption>“{t.quote}” — {t.name}{#if t.title}, {t.title}{/if}</figcaption>
      </figure>
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
        {:else}
          {p.title}
        {/if}
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
  <p>
    <a href={"mailto:" + profile.email}>{profile.email}</a>
    {#if profile.x} · <a href={profile.x} target="_blank" rel="noreferrer">x</a>{/if}
    {#if profile.linkedin} · <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>{/if}
    {#if profile.github} · <a href={profile.github} target="_blank" rel="noreferrer">github</a>{/if}
  </p>
  <footer>— {profile.name.split(' ')[0].toLowerCase()} (hand coded with love & svelte)</footer>
</section>
