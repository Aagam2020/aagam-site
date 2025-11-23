<svelte:head>
  <title>Google Maps — Redesigning Saved Places | aagam shah</title>
  <meta
    name="description"
    content="A UX-focused case study on redesigning Google Maps' Saved Places to improve organization, discoverability, and sharing."
  />
</svelte:head>

<main class="case-study">
  <a href="/#case-studies" class="back-link">← back to case studies</a>

  <!-- HERO -->
  <section class="hero-card maps">
    <h1>google maps — redesigning saved places</h1>
    <p class="case-study-tagline">
      a ux audit and redesign of the “saved places” experience to make it easier to organize, rediscover, and share the places that matter.
    </p>
  </section>

  <!-- 1. CONTEXT -->
  <section>
    <h2>1. context</h2>
    <p>
      google maps is incredible at <strong>“where is this?”</strong> and <strong>“how do i get there?”</strong>. but for many users,
      <strong>“what do i want to remember?”</strong> and <strong>“where should i go next?”</strong> are just as important.
    </p>
    <p>
      the <strong>saved places</strong> feature (starred places, lists like “favorites”, “want to go”, custom lists) is meant to be
      that memory layer. in practice, it often ends up as:
    </p>
    <ul>
      <li>a long, unstructured list of pins,</li>
      <li>lists created for trips and then forgotten,</li>
      <li>links that are hard to re-find or share in context.</li>
    </ul>
    <p>
      this case study looks at <strong>saved places as a product surface</strong> and proposes a redesign to make it more:
      <strong>organized, discoverable, and shareable</strong> — without losing the simplicity that makes maps so dependable.
    </p>
  </section>

  <!-- 2. USERS & JTBD -->
  <section>
    <h2>2. users & jobs to be done</h2>
    <p>
      reusing the same three persona avatars, here’s how they map into google maps’ saved places:
    </p>

    <div class="persona-grid">
      <article class="persona">
        <img
          src="/case-studies/SCROLLER.png"
          alt="avatar for the casual saver persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the casual saver”</h3>
        <p class="persona-role">light user • star-first, organize-later</p>
        <ul>
          <li>stars places occasionally: a nice café, a bar a friend mentioned, a random viewpoint.</li>
          <li>rarely creates custom lists.</li>
          <li>often forgets what they saved or why.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/MOOD.png"
          alt="avatar for the planner persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the planner”</h3>
        <p class="persona-role">trip curator • research-heavy</p>
        <ul>
          <li>creates detailed lists for trips (“berlin coffee”, “tokyo ramen”, “weekend hikes”).</li>
          <li>cross-checks blogs, tiktoks, and recommendations before saving.</li>
          <li>wants clean lists, offline access, and easy navigation during the trip.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/LOYALIST.png"
          alt="avatar for the sharer persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the sharer”</h3>
        <p class="persona-role">local guide • social connector</p>
        <ul>
          <li>shares maps lists with friends visiting their city (“my nyc food map”).</li>
          <li>wants their lists to be easy to scan and trust.</li>
          <li>occasionally maintains “living lists” that they update over time.</li>
        </ul>
      </article>
    </div>

    <p>their core jobs to be done around saved places:</p>
    <ul>
      <li>
        <strong>jtbd #1:</strong> “when i save a place, i want to be able to easily find it later, so that saving actually feels worth it.”
      </li>
      <li>
        <strong>jtbd #2:</strong> “when i’m planning something, i want my saved places to act like a lightweight, living guidebook.”
      </li>
      <li>
        <strong>jtbd #3:</strong> “when i share a list, i want people to instantly understand what’s where, and feel confident using it.”
      </li>
    </ul>
  </section>

  <!-- 3. CURRENT SAVED PLACES EXPERIENCE -->
  <section>
    <h2>3. current saved places experience (simplified)</h2>
    <p>
      the current experience varies slightly by platform, but for many users it roughly feels like:
    </p>

    <div class="flow-diagram">
      <div class="flow-step">
        <span class="flow-badge">1</span>
        <p>see a place on maps → tap “save” → pick a list (or default)</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">2</span>
        <p>weeks later → open “saved” tab → scroll through many lists &amp; pins</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">3</span>
        <p>search within lists is limited → rely on memory or map view</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">4</span>
        <p>share via a link → recipients see dense pins, mixed intent</p>
      </div>
    </div>

    <p>the frictions:</p>
    <ul>
      <li><strong>organization is passive:</strong> users must remember to create/maintain lists.</li>
      <li><strong>discoverability is weak:</strong> saved places don’t proactively show up in relevant contexts.</li>
      <li><strong>sharing is flat:</strong> shared lists often look like “wall of pins” rather than a usable guide.</li>
    </ul>
  </section>

  <!-- 4. RESEARCH INSIGHTS (LIGHTWEIGHT) -->
  <section>
    <h2>4. research insights (lightweight)</h2>
    <p>based on common usage patterns, public feedback, and imagined interviews, several themes emerge:</p>
    <ul>
      <li>
        <strong>“i save way more than i use.”</strong><br />
        people treat saved places like browser bookmarks — aspirational and often forgotten.
      </li>
      <li>
        <strong>“lists get messy fast.”</strong><br />
        trip lists mix closed places, one-off pins, and recommendations users no longer care about.
      </li>
      <li>
        <strong>“i can’t remember which list something is in.”</strong><br />
        users have fuzzy memory of categories; they remember vibes or people, not list names.
      </li>
      <li>
        <strong>“sharing is powerful but underutilized.”</strong><br />
        shared lists are useful but not optimized for scanning, filtering, or collaborating.
      </li>
    </ul>
  </section>

  <!-- 5. OPPORTUNITY FRAMING -->
  <section>
    <h2>5. opportunity framing</h2>
    <p>we can think of opportunities along two axes: user value and implementation complexity.</p>

    <div class="matrix" aria-label="2x2 opportunity matrix">
      <div class="matrix-axes">
        <span>high user value</span>
        <span>low user value</span>
      </div>
      <div class="matrix-grid">
        <div class="matrix-cell">
          <h3>high value · low/medium effort</h3>
          <ul>
            <li>smarter sorting &amp; grouping within lists (e.g., by recency, category, distance).</li>
            <li>better entry points to saved places in home/search/navigation flows.</li>
            <li>lightweight “list health” indicators (duplicates, closed places, never visited).</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>high value · higher effort</h3>
          <ul>
            <li>semantic search and tagging within saved places (“coffee near hotel”, “date spots”).</li>
            <li>collaborative lists with roles, reactions, and change history.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · low effort</h3>
          <ul>
            <li>additional static list types that don’t change behavior much.</li>
            <li>more generic badges / icons without added function.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · higher effort</h3>
          <ul>
            <li>heavy customization features with niche appeal.</li>
          </ul>
        </div>
      </div>
    </div>

    <p class="callout">
      the sweet spot: <strong>make saved places act like a lightweight, self-maintaining knowledge base of your world</strong> —
      easy to add to, easy to query, and easy to share with context.
    </p>
  </section>

  <!-- 6. HYPOTHESIS -->
  <section>
    <h2>6. hypothesis</h2>
    <p>
      <strong>if</strong> google maps improves how saved places are organized, surfaced, and shared — without adding heavy complexity —
      <strong>then</strong> users will:
    </p>
    <ul>
      <li>return to their saved places more frequently,</li>
      <li>use them during real-world decisions (where to go next),</li>
      <li>share lists more often, increasing indirect engagement and trust.</li>
    </ul>
    <p>
      more concretely, we’d expect increases in <strong>saved list opens</strong>, <strong>places visited from saved</strong>,
      and <strong>shared list usage</strong>.
    </p>
  </section>

  <!-- 7. PROPOSED REDESIGN -->
  <section>
    <h2>7. proposed redesign — “saved, but smarter”</h2>
    <p>the redesign focuses on three layers:</p>
    <ul>
      <li><strong>organization:</strong> auto-grouping, better sorting, and list health.</li>
      <li><strong>discoverability:</strong> contextual surfacing when it matters.</li>
      <li><strong>sharing:</strong> clearer, more scannable collaborative lists.</li>
    </ul>

    <div class="wireframe maps">
      <div class="wireframe-header">saved · overview</div>
      <div class="wireframe-card">
        <div class="wireframe-art maps"></div>
        <div class="wireframe-body">
          <div class="wireframe-pill-row">
            <span class="pill maps">nearby</span>
            <span class="pill maps">recent</span>
            <span class="pill maps">trips</span>
          </div>
          <div class="wireframe-lines">
            <div class="line short"></div>
            <div class="line medium"></div>
            <div class="line long"></div>
          </div>
          <div class="wireframe-cta-row">
            <span class="cta primary maps">open list</span>
            <span class="cta maps">view on map</span>
          </div>
        </div>
      </div>
      <div class="wireframe-card subtle-card">
        <div class="wireframe-art small maps"></div>
        <div class="wireframe-body">
          <div class="line medium"></div>
          <div class="line short"></div>
        </div>
      </div>
    </div>

    <h3>7.1 organizing saved places</h3>
    <p>key changes:</p>
    <ul>
      <li>
        <strong>smart list overview:</strong> the “saved” tab opens to a high-level view:
        “nearby saved”, “recently added”, “trips”, and “collections you share”.
      </li>
      <li>
        <strong>auto-grouping by context:</strong> trip-like clusters are suggested based on geography + time (“paris, march 2025?”).
      </li>
      <li>
        <strong>list health indicators:</strong> subtle badges: “3 places closed”, “5 never visited”, “2 duplicates”.
      </li>
    </ul>

    <h3>7.2 improving discoverability</h3>
    <ul>
      <li>
        when searching in an area, highlight <strong>“saved here”</strong> places above generic results (“you saved 4 spots nearby”).
      </li>
      <li>
        when navigating, offer suggestions from saved places in that category (“want to add your saved coffee spot nearby?”).
      </li>
      <li>
        on the home screen, occasionally surface a <strong>“rediscover your saved places”</strong> card for underused lists.
      </li>
    </ul>

    <h3>7.3 making sharing feel like a guide, not a dump</h3>
    <ul>
      <li>
        a shared list opens with a <strong>simple summary</strong>: “aagam’s favorite coffee in philadelphia · 8 places · 3 neighborhoods”.
      </li>
      <li>
        recipients can quickly filter: by distance, price, open now, or neighborhood.
      </li>
      <li>
        collaborative mode: friends can add reactions (“⭐ must visit”, “💤 skip”), lightly improving ranking over time.
      </li>
    </ul>
  </section>

  <!-- 8. EXPERIMENT DESIGN & METRICS -->
  <section>
    <h2>8. experiment design & metrics</h2>
    <p>to validate the redesign, we’d ship incrementally and measure:</p>
    <ul>
      <li><strong>control:</strong> current saved tab, lists, and sharing behavior.</li>
      <li><strong>variant:</strong> new overview, smart grouping, list health, and improved shared views.</li>
      <li><strong>population:</strong> frequent savers (≥10 saved places), trip planners, and heavy sharers.</li>
    </ul>

    <h3>8.1 primary metrics</h3>
    <ul>
      <li>
        <strong>saved list open rate:</strong> % of users who open “saved” at least once per week.
      </li>
      <li>
        <strong>place visits from saved:</strong> number of navigations started from a saved place per user per month.
      </li>
      <li>
        <strong>shared list engagement:</strong> open + clickthrough rates for shared links.
      </li>
    </ul>

    <h3>8.2 secondary metrics</h3>
    <ul>
      <li>number of lists created per user (without overwhelming them).</li>
      <li>usage of filters / “view on map” in saved.</li>
      <li>cleanup actions (removing closed / unwanted places).</li>
    </ul>

    <h3>8.3 guardrail metrics</h3>
    <ul>
      <li>no regression in overall search → navigation funnels.</li>
      <li>latency: saved tab should remain fast even with large datasets.</li>
      <li>no major increase in user confusion (tracked via feedback prompts).</li>
    </ul>
  </section>

  <!-- 9. RISKS & TRADEOFFS -->
  <section>
    <h2>9. risks & tradeoffs</h2>
    <ul>
      <li>
        <strong>risk: added complexity.</strong><br />
        more features in “saved” could overwhelm casual users.
        <em>mitigation:</em> progressive disclosure — keep the default simple, advanced actions tucked under familiar affordances.
      </li>
      <li>
        <strong>risk: algorithmic grouping mistakes.</strong><br />
        auto-clustered trips might be wrong, eroding trust.
        <em>mitigation:</em> always allow easy manual rename/merge/split, and label clusters as “suggested”.
      </li>
      <li>
        <strong>risk: privacy concerns.</strong><br />
        surfacing saved places more often could feel invasive.
        <em>mitigation:</em> clear controls for which lists are private, shared, or hidden from suggestions.
      </li>
    </ul>
  </section>

  <!-- 10. WHAT I’D DO NEXT -->
  <section>
    <h2>10. what i’d do next</h2>
    <p>to move from case study to product work, next steps would be:</p>
    <ul>
      <li>
        <strong>run usability tests</strong> on prototypes of the new saved overview, list health, and shared list layout.
      </li>
      <li>
        <strong>partner with search &amp; navigation teams</strong> to integrate saved-based recommendations in a non-intrusive way.
      </li>
      <li>
        <strong>design for edge cases</strong> — power users with hundreds of saved places, offline behavior, and multi-device workflows.
      </li>
      <li>
        <strong>define a longer-term roadmap</strong> for saved places as a first-class product area (not just a supporting feature).
      </li>
    </ul>

    <p>
      the underlying principle is simple:
      <strong>if a place was important enough to save, it should be easy enough to find, use, and share.</strong>
      a better saved places experience gets google maps closer to being not just a map of the world, but a map of <em>your</em> world.
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

  .hero-card.maps {
    background: linear-gradient(135deg, #dbeafe, #bfdbfe);
    border-color: #bfdbfe;
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
    border-left: 4px solid #1d4ed8;
    background: #eff6ff;
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
    background: #1d4ed8;
    color: #eff6ff;
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

  .wireframe.maps {
    border-color: #bfdbfe;
    background: #eff6ff;
  }

  .wireframe-header {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #1d4ed8;
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

  .wireframe-art.maps {
    background: linear-gradient(135deg, #1d4ed8, #0f766e);
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

  .pill.maps {
    background: #dbeafe;
    color: #1d4ed8;
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

  .cta.primary.maps {
    background: #1d4ed8;
    border-color: #1d4ed8;
    color: #eff6ff;
  }

  .cta.maps {
    border-color: #bfdbfe;
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
