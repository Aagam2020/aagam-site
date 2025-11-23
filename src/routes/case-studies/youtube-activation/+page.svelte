<svelte:head>
  <title>YouTube — Activation Funnel Experiment | aagam shah</title>
  <meta
    name="description"
    content="A growth-focused case study on improving YouTube's day-1 activation by refining onboarding and the first home feed experience."
  />
</svelte:head>

<main class="case-study">
  <a href="/#case-studies" class="back-link">← back to case studies</a>

  <!-- HERO -->
  <section class="hero-card youtube">
    <h1>youtube — activation funnel experiment</h1>
    <p class="case-study-tagline">
      a growth case study on improving first-day activation with a better onboarding + home feed recommendation flow.
    </p>
  </section>

  <!-- 1. CONTEXT -->
  <section>
    <h2>1. context</h2>
    <p>
      youtube is unbeatable on depth and variety — but for a brand-new user, the first session can still feel like
      <strong>“infinite content, unclear starting point.”</strong>
    </p>
    <p>
      a typical new user today: signs in, lands on a generic home feed, scrolls through a lot of noise, picks something
      that is “fine, not great,” and leaves after a short session. the recommendation system eventually learns, but the
      <strong>first few sessions are expensive</strong> in terms of both user patience and activation.
    </p>
    <p>
      this case study focuses on <strong>day-1 activation</strong>: the first 24 hours after signup. the hypothesis:
      if we deliberately shape the <strong>first 5 minutes</strong>, we can meaningfully improve activation, retention,
      and downstream watch time.
    </p>
  </section>

  <!-- 2. PERSONAS -->
  <section>
    <h2>2. users & jobs to be done</h2>
    <p>
      we’ll look at three simple user types. they’re not exhaustive, but they map well to real behaviors seen on youtube:
    </p>

    <div class="persona-grid">
      <article class="persona">
        <img
          src="/case-studies/SCROLLER.png"
          alt="avatar for the browser persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the browser”</h3>
        <p class="persona-role">casual viewer • scroll-first behavior</p>
        <ul>
          <li>opens youtube when bored; scrolls the home feed more than they search.</li>
          <li>clicks whatever looks familiar or has a strong thumbnail.</li>
          <li>wants “something good fast” with minimal effort.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/MOOD.png"
          alt="avatar for the mood watcher persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the mood watcher”</h3>
        <p class="persona-role">vibe-driven • episodic viewer</p>
        <ul>
          <li>comes in with a loose intent: “funny”, “deep dive”, “cozy background”.</li>
          <li>is happy to watch longer videos if the vibe is right.</li>
          <li>gets overwhelmed when the home feed mixes too many tones at once.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/LOYALIST.png"
          alt="avatar for the aspiring creator persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the aspiring creator”</h3>
        <p class="persona-role">creator-curious • niche specific</p>
        <ul>
          <li>uses youtube to learn skills (editing, storytelling, niche domains).</li>
          <li>wants smart recommendations around their craft, not random viral clips.</li>
          <li>is very valuable long-term if activated well on day one.</li>
        </ul>
      </article>
    </div>

    <p>their core jobs to be done can be summarized as:</p>
    <ul>
      <li>
        <strong>jtbd #1:</strong> “when i open youtube for the first time, i want it to quickly show me videos that feel
        ‘exactly my kind of thing’, so i don’t have to search or think too much.”
      </li>
      <li>
        <strong>jtbd #2:</strong> “when i’m exploring, i want to safely say ‘more like this’ or ‘less like this’ without
        filling out a survey.”
      </li>
      <li>
        <strong>jtbd #3:</strong> “if i show some interest on day one, i want youtube to remember and get sharper every
        time i come back.”
      </li>
    </ul>
  </section>

  <!-- 3. CURRENT ACTIVATION FUNNEL -->
  <section>
    <h2>3. current activation funnel (simplified)</h2>
    <p>
      today, a new user often goes through a thin, linear funnel that looks roughly like this:
    </p>

    <div class="flow-diagram">
      <div class="flow-step">
        <span class="flow-badge">1</span>
        <p>signup / sign-in</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">2</span>
        <p>generic home feed appears, tuned mostly by language + region</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">3</span>
        <p>user scrolls, clicks 1–2 videos based on thumbnail / title</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">4</span>
        <p>short watch, some skips → algorithm slowly starts to calibrate</p>
      </div>
    </div>

    <p>the main cracks in this funnel:</p>
    <ul>
      <li><strong>no guided “first impression”:</strong> the home feed is powerful, but too noisy for cold-start users.</li>
      <li>
        <strong>weak early signals:</strong> first clicks are often driven by clickbait or sheer curiosity, not long-term
        preference.
      </li>
      <li>
        <strong>slow learning loop:</strong> youtube’s models are strong with data, but the first session often yields only
        1–3 meaningful signals.
      </li>
    </ul>
  </section>

  <!-- 4. RESEARCH INSIGHTS -->
  <section>
    <h2>4. research insights (lightweight)</h2>
    <p>
      combining informal user interviews, observed usage, and patterns from public feedback, a few themes stand out:
    </p>
    <ul>
      <li>
        <strong>too many choices feel like “no choice”.</strong> users equate a busy home feed with “i’ll just click
        something random.”
      </li>
      <li>
        <strong>people know what they don’t want faster than what they do want.</strong> dislike / not interested
        actions, skips, and quick bounces are clearer signals than likes.
      </li>
      <li>
        <strong>first clicks anchor future recommendations.</strong> a couple of slightly off-genre videos can distort the
        next few sessions.
      </li>
      <li>
        <strong>users tolerate light onboarding if it feels helpful, not like a form.</strong> “help us tune your feed”
        works better than “pick your interests from this giant list.”
      </li>
    </ul>
  </section>

  <!-- 5. OPPORTUNITY FRAMING -->
  <section>
    <h2>5. opportunity framing</h2>
    <p>there’s a clear growth opportunity around day-1 activation:</p>

    <div class="matrix" aria-label="2x2 opportunity matrix">
      <div class="matrix-axes">
        <span>high user value</span>
        <span>low user value</span>
      </div>
      <div class="matrix-grid">
        <div class="matrix-cell">
          <h3>high value · low/medium effort</h3>
          <ul>
            <li>a guided “starter feed” experience on first open.</li>
            <li>collecting negative signals early (“not this kind of video”).</li>
            <li>turning short previews into preference signals.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>high value · higher effort</h3>
          <ul>
            <li>richer cross-surface identity (shorts, home, search, subscriptions).</li>
            <li>creator-centric onboarding flows.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · low effort</h3>
          <ul>
            <li>more generic playlists on the home feed.</li>
            <li>extra “trending” rows with little personalization.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · higher effort</h3>
          <ul>
            <li>large visual redesigns that don’t change the underlying funnel.</li>
          </ul>
        </div>
      </div>
    </div>

    <p class="callout">
      instead of redesigning youtube, we can <strong>wrap the first session</strong> with a lightweight,
      <strong>activation-first “starter feed”</strong> that collects better signals before dropping the user into the full
      firehose.
    </p>
  </section>

  <!-- 6. HYPOTHESIS -->
  <section>
    <h2>6. hypothesis</h2>
    <p>
      <strong>if</strong> new users go through a short, interactive “starter feed” that tunes recommendations using
      micro-actions,
      <strong>then</strong> first-day activation will improve because:
    </p>
    <ul>
      <li>users see content that feels closer to their taste on the very first session.</li>
      <li>the model receives several high-quality positive and negative signals immediately.</li>
      <li>early frustration from irrelevant content is reduced.</li>
    </ul>

    <p>
      more formally:
      <strong>we expect a 10–20% uplift in day-1 activation</strong> (defined below) and a measurable improvement in day-7
      retention for exposed users.
    </p>
  </section>

  <!-- 7. PROPOSED SOLUTION -->
  <section>
    <h2>7. proposed solution — “starter feed” for new users</h2>
    <p>
      introduce a <strong>three-step starter experience</strong> that appears only on the first session for new or
      long-inactive accounts. instead of a survey, it looks and feels like youtube, but with guardrails.
    </p>

    <div class="wireframe youtube">
      <div class="wireframe-header">starter feed · first session</div>
      <div class="wireframe-card">
        <div class="wireframe-art youtube"></div>
        <div class="wireframe-body">
          <div class="wireframe-pill-row">
            <span class="pill youtube">funny</span>
            <span class="pill youtube">deep dive</span>
            <span class="pill youtube">chill</span>
          </div>
          <div class="wireframe-lines">
            <div class="line short"></div>
            <div class="line medium"></div>
            <div class="line long"></div>
          </div>
          <div class="wireframe-cta-row">
            <span class="cta primary youtube">preview</span>
            <span class="cta youtube">watch</span>
            <span class="cta subtle">not my vibe</span>
          </div>
        </div>
      </div>
      <div class="wireframe-card subtle-card">
        <div class="wireframe-art small youtube"></div>
        <div class="wireframe-body">
          <div class="line medium"></div>
          <div class="line short"></div>
        </div>
      </div>
    </div>

    <h3>7.1 step 1 — pick a vibe (10–15 seconds)</h3>
    <p>
      instead of a static interest form, show 6–8 <strong>mood tiles</strong> with short looping previews:
      “funny”, “deep dive”, “background chill”, “gaming”, “learning”, “news recap”, etc. the user taps 1–3 that look
      appealing; each tap is a strong positive signal.
    </p>

    <h3>7.2 step 2 — micro-preferences via cards (20–30 seconds)</h3>
    <p>
      next, show a <strong>swipeable stack</strong> of cards representing topics, creators, and formats:
    </p>
    <ul>
      <li>swipe right / tap = “more like this”.</li>
      <li>swipe left / “not interested” = “less like this”.</li>
      <li>long press = preview a short clip.</li>
    </ul>
    <p>
      the key: every interaction is a learning event, but the user feels like they’re already browsing, not filling out
      onboarding.
    </p>

    <h3>7.3 step 3 — reveal the tuned home feed</h3>
    <p>
      finally, transition into the real home feed — but seeded with the signals we just collected:
    </p>
    <ul>
      <li>boost videos aligned with selected vibes and positive swipes.</li>
      <li>down-rank themes that received clear negative signals.</li>
      <li>feature at least one “anchor” video (high predicted fit) above the fold.</li>
    </ul>
    <p>
      from the user’s point of view, they “just started using youtube”; under the hood, we shortened the cold-start
      period dramatically.
    </p>
  </section>

  <!-- 8. ACTIVATION METRICS & EXPERIMENT -->
  <section>
    <h2>8. experiment design & metrics</h2>
    <p>to validate the impact, we’d run an a/b experiment with:</p>
    <ul>
      <li><strong>control:</strong> current experience (directly to generic home feed).</li>
      <li>
        <strong>variant:</strong> users who see the starter feed flow on first session, then the tuned home feed.
      </li>
      <li>
        <strong>population:</strong> new accounts + dormant accounts (no meaningful activity in 6+ months), split by
        geography.
      </li>
    </ul>

    <h3>8.1 primary metric — day-1 activation</h3>
    <p>
      define <strong>activated user</strong> as someone who, within 24 hours of signup:
    </p>
    <ul>
      <li>watches at least <strong>10 minutes</strong> of content in total, and</li>
      <li>watches at least <strong>2 distinct videos for &gt; 60 seconds</strong> each.</li>
    </ul>

    <h3>8.2 secondary metrics</h3>
    <ul>
      <li><strong>avg. first-session duration</strong> (minutes watched on first visit).</li>
      <li><strong>time-to-first “good” match</strong> (first video watched &gt; 3 minutes).</li>
      <li><strong>early “not interested” actions</strong> (are we collecting more negative feedback usefully?).</li>
      <li><strong>day-7 retention</strong> among first-day activated users.</li>
    </ul>

    <h3>8.3 guardrail metrics</h3>
    <ul>
      <li>onboarding completion rate — ensure the starter flow doesn’t cause drop-off.</li>
      <li>first-session ad impressions — avoid harming monetization disproportionately.</li>
      <li>user-reported satisfaction (simple in-product thumbs up/down on the new experience).</li>
    </ul>
  </section>

  <!-- 9. RISKS & TRADEOFFS -->
  <section>
    <h2>9. risks & tradeoffs</h2>
    <ul>
      <li>
        <strong>risk: onboarding fatigue.</strong><br />
        if the starter feed feels like extra friction, users may bail early.
        <em>mitigation:</em> keep it short (&lt; 45 seconds), skippable, and visually youtube-native.
      </li>
      <li>
        <strong>risk: over-fitting too early.</strong><br />
        early swipes might lock users into a narrow bubble.
        <em>mitigation:</em> maintain exploration budget in the tuned feed; keep some diversity above the fold.
      </li>
      <li>
        <strong>risk: complexity in experimentation.</strong><br />
        many surfaces (shorts, subscriptions, search) touch activation.
        <em>mitigation:</em> start with home-only treatment; measure cross-surface effects separately.
      </li>
    </ul>
  </section>

  <!-- 10. WHAT I'D DO NEXT -->
  <section>
    <h2>10. what i’d do next</h2>
    <p>if this moved beyond a case study into a real project, the next steps would be:</p>
    <ul>
      <li>
        <strong>qualitative testing</strong> with prototypes — watch users go through the starter feed and home feed,
        refine copy, pacing, and perceived value.
      </li>
      <li>
        <strong>segment-specific experiments</strong> — e.g., separate flows for “lean back” tv users vs mobile-first
        viewers.
      </li>
      <li>
        <strong>integrate shorts carefully</strong> — consider a shorts-first variant of the starter feed to see if short
        clips produce even stronger early signals.
      </li>
      <li>
        <strong>build an activation dashboard</strong> — track day-1, day-7, and day-30 activation and retention for
        cohorts exposed to new onboarding variants.
      </li>
    </ul>

    <p>
      the broader principle behind this experiment is simple:
      <strong>optimize the first few minutes, and the rest of the funnel gets cheaper.</strong>
      for youtube, that means turning an overwhelming home feed into a <em>deliberate on-ramp</em> for discovery.
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
    border-radius: 16px;
    padding: 1.5rem 1.25rem 1.75rem;
    margin-bottom: 1.75rem;
    border: 1px solid transparent;
  }

  .hero-card.youtube {
    background: linear-gradient(135deg, #fecaca, #fee2e2);
    border-color: #fecaca;
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
    border-left: 4px solid #ef4444;
    background: #fef2f2;
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
    width: 85px;
    height: auto;
    object-fit: contain;
    margin: 0.25rem auto 1rem;
    display: block;
    padding-top: 0.25rem;
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
    background: #ef4444;
    color: #fef2f2;
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

  .wireframe.youtube {
    border-color: #fecaca;
    background: #fef2f2;
  }

  .wireframe-header {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #b91c1c;
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
    background: #e5e7eb;
  }

  .wireframe-art.youtube {
    background: linear-gradient(135deg, #ef4444, #b91c1c);
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

  .pill.youtube {
    background: #fee2e2;
    color: #b91c1c;
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

  .cta.primary.youtube {
    background: #ef4444;
    border-color: #b91c1c;
    color: #fef2f2;
  }

  .cta.youtube {
    border-color: #fecaca;
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
