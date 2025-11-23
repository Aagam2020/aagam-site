<svelte:head>
  <title>Spotify — Improving Playlist Discovery | aagam shah</title>
  <meta
    name="description"
    content="A product teardown and proposal on how Spotify could improve playlist discovery, help users find better music faster, and boost engagement."
  />
</svelte:head>

<main class="case-study">
  <a href="/#case-studies" class="back-link">← back to case studies</a>

  <!-- HERO -->
  <section class="hero-card">
    <h1>spotify — improving playlist discovery</h1>
    <p class="case-study-tagline">
      a teardown and product proposal on helping users find the right playlists faster — and stick around longer.
    </p>
  </section>

  <!-- CONTEXT -->
  <section>
    <h2>1. context</h2>
    <p>
      spotify is excellent at <strong>playing what you already like</strong> — liked songs, on-repeat tracks, artist mixes.
      but when it comes to <strong>discovering new playlists</strong>, the experience is good, not great.
    </p>
    <p>
      the product is full of powerful surfaces — search, made for you, browse by mood &amp; genre, editorial playlists,
      blended playlists, radio, daily mixes — but for a lot of people, discovery feels like a scavenger hunt.
      there are a million doors; most users only ever open three.
    </p>
    <p>
      this case study looks at <strong>playlist discovery for casual listeners</strong> (not power users, not DJs) and proposes a
      focused improvement: a more <strong>intentional, guided discovery surface</strong> that reduces choice overload and gets users
      to “this is my new favorite playlist” faster.
    </p>
  </section>

  <!-- USERS & JOBS -->
  <section>
    <h2>2. users & jobs to be done</h2>
    <p>
      this teardown focuses on three simple, realistic user types. they’re not exhaustive, but they capture a lot of real behavior:
    </p>

    <div class="persona-grid">
      <article class="persona">
        <img
          src="/case-studies/SCROLLER.png"
          alt="avatar for the scroller persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the scroller”</h3>
        <p class="persona-role">casual listener • endless feed behavior</p>
        <ul>
          <li>opens spotify when bored; scrolls more than they listen.</li>
          <li>taps whatever looks familiar or is at the top of home.</li>
          <li>rarely searches; almost never builds their own playlists.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/MOOD.png"
          alt="avatar for the mood listener persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the mood listener”</h3>
        <p class="persona-role">vibes-first • “i want something that feels like…”</p>
        <ul>
          <li>searches for moods or contexts (“gym”, “focus”, “rainy”, “late night”).</li>
          <li>quickly bounces if the first playlist doesn’t feel right.</li>
          <li>wants spotify to understand the moment, not just the artist.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/LOYALIST.png"
          alt="avatar for the loyalist persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the loyalist”</h3>
        <p class="persona-role">habitual • lives in liked songs &amp; 2–3 playlists</p>
        <ul>
          <li>has a tight rotation of trusted playlists.</li>
          <li>likes the idea of new music but hates “skipping forever”.</li>
          <li>would try new playlists if it felt low-risk and curated.</li>
        </ul>
      </article>
    </div>

    <p>their core jobs to be done look like:</p>
    <ul>
      <li>
        <strong>jtbd #1:</strong> “when i open spotify, i want it to quickly suggest a playlist that matches my current activity or
        mood, so i don’t have to think about what to play.”
      </li>
      <li>
        <strong>jtbd #2:</strong> “when i’m in the mood for something slightly different, i want a safe way to explore new
        playlists, without committing to 40 minutes of skipping.”
      </li>
      <li>
        <strong>jtbd #3:</strong> “when i find something i like, i want spotify to remember and show me more like that in the
        future.”
      </li>
    </ul>
  </section>

  <!-- CURRENT DISCOVERY FLOW (NO IMAGES) -->
  <section>
    <h2>3. current discovery experience</h2>
    <p>
      today, a casual user typically discovers playlists through a mix of <strong>home modules</strong>, <strong>search</strong>,
      and the <strong>made for you</strong> carousel. it works, but it’s scattered.
    </p>

    <div class="flow-diagram" aria-label="simplified playlist discovery flow">
      <div class="flow-step">
        <span class="flow-badge">1</span>
        <p>open app → see a busy home screen of mixed modules</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">2</span>
        <p>scroll a bit → tap a familiar row or daily mix</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">3</span>
        <p>if nothing fits → go to search → mood / genre tiles</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">4</span>
        <p>open a playlist → skim → hit play → skip or abandon</p>
      </div>
    </div>

    <p>three issues show up repeatedly for casual users:</p>
    <ul>
      <li><strong>fragmented entry points:</strong> there’s no single “this is where i discover playlists” surface.</li>
      <li>
        <strong>high commitment per playlist:</strong> you often commit to a full playlist before knowing if it’s a good fit.
      </li>
      <li>
        <strong>weak feedback loop:</strong> skipping or abandoning a playlist doesn’t feel like clear feedback to spotify (“don’t
        show me this again”).
      </li>
    </ul>
  </section>

  <!-- RESEARCH & INSIGHTS -->
  <section>
    <h2>4. research & insights (lightweight)</h2>
    <p>
      to ground the teardown, i combined a few lightweight research inputs that mimic what i’d do on an actual product team:
    </p>
    <ul>
      <li>watched my own usage over a week: when i stayed in known playlists vs when i explored.</li>
      <li>asked 6 friends how they find new music on spotify and what frustrates them.</li>
      <li>skimmed app store reviews + reddit threads about “discover weekly”, “daily mix”, and “spotify playlists”.</li>
    </ul>

    <p>a few recurring patterns emerged:</p>
    <ul>
      <li>
        <strong>“i know spotify is good at discovery, but i don’t know where to go.”</strong><br />
        users trust spotify’s recommendations, but the product doesn’t have <em>one obvious discovery home</em>.
      </li>
      <li>
        <strong>“discover weekly is hit or miss — when it misses, i go back to liked songs.”</strong><br />
        one bad experience can push users back into safe, known content for weeks.
      </li>
      <li>
        <strong>“i don’t want to build playlists, i want them built for me.”</strong><br />
        playlist building is a hobby; most users want “editor”, “algorithm”, or “friend-curated” playlists.
      </li>
    </ul>
  </section>

  <!-- OPPORTUNITY FRAMING (CSS MATRIX) -->
  <section>
    <h2>5. opportunity framing</h2>
    <p>from the research, the most promising opportunities cluster around:</p>

    <ul>
      <li><strong>reduce cognitive load</strong> when choosing what to play.</li>
      <li><strong>lower the risk</strong> of trying a new playlist (quick previews, softer commitment).</li>
      <li><strong>tighten the feedback loop</strong> so spotify learns what “good playlist fit” means for each user.</li>
    </ul>

    <div class="matrix" aria-label="2x2 opportunity matrix">
      <div class="matrix-axes">
        <span>high user value</span>
        <span>low user value</span>
      </div>
      <div class="matrix-grid">
        <div class="matrix-cell">
          <h3>high value · low effort</h3>
          <ul>
            <li>single, focused discovery surface</li>
            <li>clear “not for me” signal</li>
            <li>quick playlist previews</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>high value · higher effort</h3>
          <ul>
            <li>major home screen redesigns</li>
            <li>deep social graph powered discovery</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · low effort</h3>
          <ul>
            <li>more carousels on home</li>
            <li>extra playlist badges</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · higher effort</h3>
          <ul>
            <li>new playlist formats with unclear demand</li>
          </ul>
        </div>
      </div>
    </div>

    <p>
      out of multiple ideas (revamping search, new editorial formats, social follow graphs, collaborative playlist revamps), one
      theme stood out:
    </p>

    <p class="callout">
      give users <strong>one dedicated place</strong> to comfortably <strong>sample playlists</strong> before committing, and teach
      the algorithm from every micro-decision.
    </p>
  </section>

  <!-- OPTIONS -->
  <section>
    <h2>6. options considered</h2>
    <p>i explored three directions and evaluated them as i would in a roadmap discussion:</p>

    <ol>
      <li>
        <strong>playlist preview on existing grids</strong><br />
        tap-and-hold on any playlist card to hear a short stitched preview.
        <em>pro:</em> low ui change, fits existing surfaces. <em>con:</em> doesn’t solve fragmentation; discovery still scattered.
      </li>
      <li>
        <strong>smarter “made for you” shelves on home</strong><br />
        tune home modules to be more playlist-focused and context-aware. <em>pro:</em> leverages a familiar surface.
        <em>con:</em> home is already crowded; hard to make this the “go-to” discovery place.
      </li>
      <li>
        <strong>a dedicated “discovery feed” for playlists</strong><br />
        a separate surface that behaves like a feed of short playlist previews, optimized for sampling and saving.
        <em>pro:</em> clear mental model: “this is where i go to discover playlists”. <em>con:</em> new surface to design and tune.
      </li>
    </ol>

    <p>
      given the goals (reduce cognitive load, lower risk, learn faster), the <strong>dedicated discovery feed</strong> direction
      felt most promising.
    </p>
  </section>

  <!-- PROPOSED SOLUTION (CSS WIREFRAME) -->
  <section>
    <h2>7. proposed solution — a dedicated playlist discovery feed</h2>
    <p>
      the core idea: a <strong>playlist discovery feed</strong> that sits one tap away from home and behaves like a sequence of
      <em>“micro decisions”</em> instead of big commitments.
    </p>

    <div class="wireframe">
      <div class="wireframe-header">discover playlists</div>
      <div class="wireframe-card">
        <div class="wireframe-art"></div>
        <div class="wireframe-body">
          <div class="wireframe-pill-row">
            <span class="pill">chill focus</span>
            <span class="pill">low vocals</span>
            <span class="pill">new jazz</span>
          </div>
          <div class="wireframe-lines">
            <div class="line short"></div>
            <div class="line medium"></div>
            <div class="line long"></div>
          </div>
          <div class="wireframe-cta-row">
            <span class="cta primary">preview</span>
            <span class="cta">play</span>
            <span class="cta subtle">not for me</span>
          </div>
        </div>
      </div>
      <div class="wireframe-card subtle-card">
        <div class="wireframe-art small"></div>
        <div class="wireframe-body">
          <div class="line medium"></div>
          <div class="line short"></div>
        </div>
      </div>
    </div>

    <h3>7.1 where it lives</h3>
    <ul>
      <li>a new row on home: <strong>“discover playlists”</strong>, leading to a full-screen feed.</li>
      <li>secondary entry in the “search” tab for users already in exploration mode.</li>
      <li>optional: a nudge when users abandon multiple playlists quickly (“want to try our discovery feed instead?”).</li>
    </ul>

    <h3>7.2 what a card looks like</h3>
    <p>each playlist card in the feed contains:</p>
    <ul>
      <li>cover art + subtle badge (editorial / algorithmic / friend / brand).</li>
      <li>2–3 short descriptors: mood, activity, or micro-genre (“chill focus • low vocals • modern jazz”).</li>
      <li>top 2 artists or tracks as a quick anchor.</li>
      <li>primary ctas: <strong>preview</strong>, <strong>play now</strong>, and a lightweight <strong>“not for me”</strong>.</li>
    </ul>

    <h3>7.3 interaction model</h3>
    <ul>
      <li><strong>swipe vertically</strong> to move through playlists.</li>
      <li><strong>tap preview</strong> for a 15–20 second highlight reel.</li>
      <li><strong>tap play</strong> to start the full playlist immediately.</li>
      <li>
        <strong>tap “not for me”</strong> to send a clear negative signal (down-weight similar playlists, surfaces, or contexts).
      </li>
      <li>
        <strong>long-press</strong> brings up more details: tracklist, length, curator, similar playlists.
      </li>
    </ul>

    <h3>7.4 personalization & feedback loops</h3>
    <p>the feed is personalized using:</p>
    <ul>
      <li>historical listening: artists, moods, tempo, time-of-day patterns.</li>
      <li>context signals: device type, location category (e.g., gym), time of day.</li>
      <li>in-feed behavior: previews played, playlists skipped, time until first skip.</li>
    </ul>

    <p>the key is to treat every micro interaction as signal:</p>
    <ul>
      <li><strong>preview + play</strong> → strong positive signal.</li>
      <li><strong>preview + skip</strong> → weak positive, then correction.</li>
      <li><strong>immediate skip / “not for me”</strong> → strong negative signal.</li>
      <li><strong>save playlist</strong> → long-term signal; feed shows similar formats over time.</li>
    </ul>
  </section>

  <!-- METRICS & EXPERIMENTS -->
  <section>
    <h2>8. success metrics & experiment design</h2>
    <p>if this shipped, i would measure success across three layers:</p>

    <h3>8.1 core product metrics</h3>
    <ul>
      <li>
        <strong>playlist discovery success rate</strong><br />
        % of discovery-feed sessions where the user plays a new playlist for &gt; 30 seconds.
      </li>
      <li>
        <strong>new playlist adoption</strong><br />
        % of users who add at least one new playlist to their rotation in a week (play it on 2+ different days).
      </li>
      <li>
        <strong>time-to-first-good-match</strong><br />
        median time from opening spotify to playing a playlist they stick with for &gt; 5 minutes.
      </li>
    </ul>

    <h3>8.2 engagement & retention</h3>
    <ul>
      <li><strong>session starts</strong> originating from the discovery feed.</li>
      <li><strong>day 7 / day 30 retention</strong> for users who use the feed vs control.</li>
      <li><strong>breadth of listening</strong> (unique playlists per user per month).</li>
    </ul>

    <h3>8.3 learning velocity</h3>
    <ul>
      <li>number of meaningful signals per user per week (preview, skip, save, not-for-me).</li>
      <li>time to personalization: how many interactions until the feed feels “good enough” for the user.</li>
    </ul>

    <p>the initial launch would be an <strong>a/b test</strong>:</p>
    <ul>
      <li>control: current experience only.</li>
      <li>variant: users with access to the discovery feed.</li>
      <li>target population: new users + “loyalists” who mostly live in liked songs.</li>
      <li>duration: 2–4 weeks depending on traffic and seasonality.</li>
    </ul>
  </section>

  <!-- RISKS -->
  <section>
    <h2>9. risks & tradeoffs</h2>
    <ul>
      <li>
        <strong>risk: overwhelming the home screen.</strong><br />
        adding another module to home risks clutter. mitigation: start with a small, clearly labeled row and watch engagement before
        promoting it further.
      </li>
      <li>
        <strong>risk: cannibalizing existing discovery features.</strong><br />
        discover weekly, daily mixes, and radio already serve discovery. mitigation: measure incremental listening vs shifted
        behavior from other surfaces.
      </li>
      <li>
        <strong>risk: preview fatigue.</strong><br />
        users could burn through previews without committing to full listens. mitigation: tune preview length, add gentle friction,
        and reward committing to full playlists (for example, “you found 3 new favorites this week” moments).
      </li>
      <li>
        <strong>risk: early algorithm mistrust.</strong><br />
        if early recommendations are off, users may not return to the feed. mitigation: bias initial recommendations closer to known
        tastes, then gradually expand the exploration radius.
      </li>
    </ul>
  </section>

  <!-- WHAT I'D DO NEXT -->
  <section>
    <h2>10. what i’d do next</h2>
    <p>if this were a real spotify initiative, my next steps would be:</p>
    <ul>
      <li>
        <strong>deeper qualitative research</strong> with both casual and heavy users to understand where discovery feels magical vs
        frustrating.
      </li>
      <li>
        <strong>prototype usability studies</strong> on the feed interaction: does the “preview → play → skip” loop feel intuitive
        and fun?
      </li>
      <li>
        <strong>dogfooding internally</strong> with employees and power users to gather feedback on edge cases (niche genres, very
        long sessions, background listening).
      </li>
      <li>
        <strong>explore complementary surfaces</strong> like a lightweight “discovery summary” (“here are the 5 playlists you
        discovered this month”).
      </li>
    </ul>

    <p>
      the broader principle behind this case study is one i keep coming back to as a pm:
      <strong>make the next good decision easier than the last one.</strong>
      in spotify’s world, that means fewer taps between “open app” and “this playlist is exactly what i wanted.”
    </p>
  </section>
</main>

<style>
  .case-study {
    max-width: 760px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
  }

  .back-link {
    font-size: 0.85rem;
    text-decoration: none;
    color: #64748b;
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  .hero-card {
    background: linear-gradient(135deg, #bbf7d0, #dcfce7);
    border-radius: 16px;
    padding: 1.5rem 1.25rem 1.75rem;
    border: 1px solid #a7f3d0;
    margin-bottom: 1.75rem;
  }

  .hero-card h1 {
    margin-bottom: 0.4rem;
    font-size: clamp(1.9rem, 3.1vw, 2.4rem);
    text-transform: lowercase;
  }

  .case-study-tagline {
    color: #64748b;
    margin-bottom: 0;
    font-size: 0.98rem;
  }

  section {
    margin-bottom: 2.25rem;
  }

  h2 {
    font-size: 1.15rem;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.6rem;
    color: #0f172a;
  }

  h3 {
    font-size: 1rem;
    margin: 1.1rem 0 0.35rem;
    color: #1e293b;
  }

  p {
    color: #334155;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  ul,
  ol {
    margin: 0.35rem 0 0.9rem 1.25rem;
    color: #334155;
  }

  li {
    margin-bottom: 0.3rem;
  }

  .callout {
    padding: 0.9rem 1rem;
    border-left: 4px solid #22c55e;
    background: #f0fdf4;
    border-radius: 10px;
    font-size: 0.97rem;
  }

  /* personas */
  .persona-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin: 0.9rem 0 1.2rem;
  }

  .persona {
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    padding: 0.9rem 0.95rem 1rem;
    position: relative;
    overflow: hidden;
  }

  .persona-avatar {
    width: 80px;
    height: auto;
    border-radius: 16px;
    object-fit: contain;
    margin-bottom: 0.45rem;
    display: block;
  }

  .persona img {
    padding-top: 0.5rem;
  }

  .persona-tag {
    position: absolute;
    top: 0.6rem;
    right: 0.7rem;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
    background: #f9fafb;
    border-radius: 999px;
    padding: 0.15rem 0.45rem;
    border: 1px solid #e5e7eb;
  }

  .persona h3 {
    margin: 0.2rem 0 0.1rem;
    font-size: 1rem;
    text-transform: lowercase;
  }

  .persona-role {
    font-size: 0.85rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .persona ul {
    margin-left: 1rem;
    font-size: 0.9rem;
  }

  /* flow diagram */
  .flow-diagram {
    margin: 1rem 0 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    align-items: center;
  }

  .flow-step {
    flex: 1 1 150px;
    min-width: 0;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    padding: 0.55rem 0.6rem 0.6rem;
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;
  }

  .flow-step p {
    margin: 0;
    font-size: 0.86rem;
  }

  .flow-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 999px;
    background: #22c55e;
    color: #022c22;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .flow-arrow {
    font-size: 1rem;
    color: #94a3b8;
    padding-inline: 0.1rem;
  }

  /* matrix */
  .matrix {
    margin: 1rem 0 1.4rem;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    padding: 0.75rem 0.85rem 0.9rem;
    background: #ffffff;
  }

  .matrix-axes {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #94a3b8;
    margin-bottom: 0.45rem;
  }

  .matrix-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0.65rem;
  }

  .matrix-cell {
    border-radius: 10px;
    border: 1px dashed #e2e8f0;
    padding: 0.55rem 0.6rem;
    background: #f9fafb;
  }

  .matrix-cell h3 {
    margin: 0 0 0.3rem;
    font-size: 0.86rem;
    text-transform: none;
  }

  .matrix-cell ul {
    margin-left: 1rem;
    font-size: 0.84rem;
  }

  /* wireframe */
  .wireframe {
    margin: 1rem 0 1.4rem;
    border-radius: 14px;
    border: 1px solid #e2e8f0;
    padding: 0.85rem 0.9rem 0.95rem;
    background: #ffffff;
  }

  .wireframe-header {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .wireframe-card {
    display: flex;
    gap: 0.7rem;
    align-items: stretch;
    margin-bottom: 0.7rem;
  }

  .wireframe-art {
    width: 70px;
    border-radius: 10px;
    background: linear-gradient(135deg, #22c55e, #16a34a);
  }

  .wireframe-art.small {
    width: 48px;
  }

  .wireframe-body {
    flex: 1;
  }

  .wireframe-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.45rem;
  }

  .pill {
    font-size: 0.7rem;
    padding: 0.15rem 0.45rem;
    border-radius: 999px;
    background: #f1f5f9;
    color: #0f172a;
  }

  .wireframe-lines {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin-bottom: 0.4rem;
  }

  .line {
    height: 6px;
    border-radius: 999px;
    background: #e2e8f0;
  }

  .line.short {
    width: 40%;
  }

  .line.medium {
    width: 65%;
  }

  .line.long {
    width: 90%;
  }

  .wireframe-cta-row {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  .cta {
    font-size: 0.72rem;
    padding: 0.16rem 0.6rem;
    border-radius: 999px;
    border: 1px solid #e2e8f0;
    background: #f9fafb;
    color: #0f172a;
  }

  .cta.primary {
    background: #22c55e;
    border-color: #16a34a;
    color: #022c22;
  }

  .cta.subtle {
    color: #64748b;
    background: #f8fafc;
  }

  .subtle-card {
    opacity: 0.65;
  }

  @media (max-width: 600px) {
    .case-study {
      padding-inline: 1rem;
    }

    .flow-diagram {
      flex-direction: column;
    }

    .flow-arrow {
      display: none;
    }
  }
</style>
