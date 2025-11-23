<svelte:head>
  <title>Duolingo — Smarter Lesson Personalization | aagam shah</title>
  <meta
    name="description"
    content="A product case study on how Duolingo could improve lesson personalization, difficulty tuning, and sequencing to boost learning outcomes and retention."
  />
</svelte:head>

<main class="case-study">
  <a href="/#case-studies" class="back-link">← back to case studies</a>

  <!-- HERO -->
  <section class="hero-card duolingo">
    <h1>duolingo — smarter lesson personalization</h1>
    <p class="case-study-tagline">
      a product case study on making lessons feel “just right” — not too easy, not too hard — by tightening duolingo’s adaptive learning loop.
    </p>
  </section>

  <!-- 1. CONTEXT -->
  <section>
    <h2>1. context</h2>
    <p>
      duolingo has nailed <strong>habit and gamification</strong>: streaks, leagues, xp, chests, animations. it’s fun to open the app. but fun
      doesn’t always equal <strong>effective learning</strong>.
    </p>
    <p>
      one recurring user experience: lessons oscillate between “way too easy” and “randomly hard,” especially for:
    </p>
    <ul>
      <li>users returning after a long break,</li>
      <li>learners with prior knowledge in a language,</li>
      <li>motivated users who progress faster than the default pace.</li>
    </ul>
    <p>
      this case study focuses on <strong>lesson personalization</strong>: how duolingo can better tune <em>difficulty</em> and
      <em>content sequencing</em> so that each session feels like “this is exactly where i should be.”
    </p>
  </section>

  <!-- 2. PERSONAS & JTBD -->
  <section>
    <h2>2. learners & jobs to be done</h2>
    <p>
      using the same three avatars from my other case studies, here’s how they map to duolingo’s world:
    </p>

    <div class="persona-grid">
      <article class="persona">
        <img
          src="/case-studies/SCROLLER.png"
          alt="avatar for the dabbler persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the dabbler”</h3>
        <p class="persona-role">lightweight learner • streak-sensitive</p>
        <ul>
          <li>opens duolingo a few times a week, mostly to keep the streak alive.</li>
          <li>doesn’t want to think too hard after a long day.</li>
          <li>drops off quickly if lessons feel either boring or punishing.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/MOOD.png"
          alt="avatar for the motivated climber persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the motivated climber”</h3>
        <p class="persona-role">goal-oriented • progress tracked</p>
        <ul>
          <li>has a concrete goal (trip, exam, moving abroad).</li>
          <li>wants visible improvement in comprehension &amp; speaking.</li>
          <li>gets frustrated when stuck repeating trivial content.</li>
        </ul>
      </article>

      <article class="persona">
        <img
          src="/case-studies/LOYALIST.png"
          alt="avatar for the returning learner persona"
          class="persona-avatar"
        />
        <div class="persona-tag">persona</div>
        <h3>“the returning learner”</h3>
        <p class="persona-role">on-and-off • prior knowledge</p>
        <ul>
          <li>has taken classes before or used duolingo in the past.</li>
          <li>returns after long gaps and finds the level “off”.</li>
          <li>wants a quick recalibration instead of starting from scratch.</li>
        </ul>
      </article>
    </div>

    <p>their core jobs to be done around personalization look like:</p>
    <ul>
      <li>
        <strong>jtbd #1:</strong> “when i open duolingo, i want lessons to match my current level, so i feel challenged but not lost.”
      </li>
      <li>
        <strong>jtbd #2:</strong> “when my life or skills change, i want duolingo to quickly adapt, without me manually reconfiguring everything.”
      </li>
      <li>
        <strong>jtbd #3:</strong> “when i put in effort, i want to see progress that feels real, not just xp going up.”
      </li>
    </ul>
  </section>

  <!-- 3. CURRENT PERSONALIZATION EXPERIENCE -->
  <section>
    <h2>3. current personalization experience (simplified)</h2>
    <p>
      at a high level, duolingo already personalizes through placement tests, skill trees / paths, spaced repetition, and
      “practice” sessions. but for many learners, the experience still feels like this:
    </p>

    <div class="flow-diagram">
      <div class="flow-step">
        <span class="flow-badge">1</span>
        <p>start or resume a course → follow the default path</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">2</span>
        <p>lessons alternate between too-easy review and random difficulty spikes</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">3</span>
        <p>user taps “practice” or continues anyway → xp &amp; streak progress, unclear skill progress</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <span class="flow-badge">4</span>
        <p>motivation decays if the challenge/satisfaction balance stays off</p>
      </div>
    </div>

    <p>three consistent friction points:</p>
    <ul>
      <li><strong>blunt placement:</strong> initial tests are helpful but quickly become stale as life &amp; skills change.</li>
      <li><strong>patchy adaptivity:</strong> mistakes adjust difficulty in pockets, but the overall path feels linear.</li>
      <li><strong>weak feedback loop:</strong> the app celebrates xp and streaks more than “you’re genuinely getting better at x.”</li>
    </ul>
  </section>

  <!-- 4. RESEARCH INSIGHTS -->
  <section>
    <h2>4. research insights (lightweight)</h2>
    <p>
      imagine a mixed-method research pass: app reviews, forum posts, and user interviews. themes that emerge around personalization:
    </p>
    <ul>
      <li>
        <strong>“some days it feels like a kid’s app, some days like an exam.”</strong><br />
        inconsistency in difficulty erodes trust in the system’s judgment.
      </li>
      <li>
        <strong>“i want to skip what i clearly know without breaking the system.”</strong><br />
        users with prior experience feel slowed down or forced into busywork.
      </li>
      <li>
        <strong>“practice feels generic.”</strong><br />
        “practice” sessions don’t always clearly target recent weaknesses.
      </li>
      <li>
        <strong>“i don’t know what i’m actually improving.”</strong><br />
        feedback is xp- and streak-centric, not skill- and concept-centric.
      </li>
    </ul>
  </section>

  <!-- 5. OPPORTUNITY FRAMING -->
  <section>
    <h2>5. opportunity framing</h2>
    <p>we can frame personalization opportunities across two axes: user value and implementation effort.</p>

    <div class="matrix" aria-label="2x2 opportunity matrix">
      <div class="matrix-axes">
        <span>high learner value</span>
        <span>low learner value</span>
      </div>
      <div class="matrix-grid">
        <div class="matrix-cell">
          <h3>high value · low/medium effort</h3>
          <ul>
            <li>smarter “practice” targeting recent mistakes &amp; near-misses.</li>
            <li>lightweight level-checks after breaks (“quick check-in?”).</li>
            <li>surfacing “you’re improving at…” micro-insights in the ui.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>high value · higher effort</h3>
          <ul>
            <li>a unified adaptive model across reading, listening, speaking.</li>
            <li>dynamic path reshaping based on concept mastery, not just xp.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · low effort</h3>
          <ul>
            <li>more badges purely tied to time spent, not learning quality.</li>
            <li>extra streak mechanics without better lesson quality.</li>
          </ul>
        </div>
        <div class="matrix-cell">
          <h3>lower value · higher effort</h3>
          <ul>
            <li>major visual redesigns without improving adaptivity logic.</li>
          </ul>
        </div>
      </div>
    </div>

    <p class="callout">
      the sweet spot: <strong>improve how duolingo chooses “what’s next”</strong> using the signals it already collects
      (mistakes, speed, retries, session gaps), and reflect that back to the learner in a way that feels encouraging.
    </p>
  </section>

  <!-- 6. HYPOTHESIS -->
  <section>
    <h2>6. hypothesis</h2>
    <p>
      <strong>if</strong> duolingo introduces a more adaptive “personalization layer” that tunes both difficulty and sequencing based on recent behavior,
      <strong>then</strong> learners will:
    </p>
    <ul>
      <li>feel more consistently in the “just right” zone,</li>
      <li>stick with sessions longer and more often,</li>
      <li>display better measurable progress on specific skills.</li>
    </ul>
    <p>
      more concretely:
      <strong>we expect an uplift in 7-day retention, lesson completion rates, and within-lesson accuracy for exposed users.</strong>
    </p>
  </section>

  <!-- 7. PROPOSED SOLUTION -->
  <section>
    <h2>7. proposed solution — an adaptive “smart lane” on the path</h2>
    <p>
      instead of overhauling the entire path metaphor, we can introduce a <strong>“smart lane”</strong>: a subtle, adaptive layer that influences what lesson appears next and
      how it’s constructed, without forcing users to think about algorithms.
    </p>

    <div class="wireframe duolingo">
      <div class="wireframe-header">smart lane · lesson suggestions</div>
      <div class="wireframe-card">
        <div class="wireframe-art duolingo"></div>
        <div class="wireframe-body">
          <div class="wireframe-pill-row">
            <span class="pill duolingo">review weak verbs</span>
            <span class="pill duolingo">new listening</span>
          </div>
          <div class="wireframe-lines">
            <div class="line short"></div>
            <div class="line medium"></div>
            <div class="line long"></div>
          </div>
          <div class="wireframe-cta-row">
            <span class="cta primary duolingo">smart practice</span>
            <span class="cta duolingo">continue path</span>
          </div>
        </div>
      </div>
      <div class="wireframe-card subtle-card">
        <div class="wireframe-art small duolingo"></div>
        <div class="wireframe-body">
          <div class="line medium"></div>
          <div class="line short"></div>
        </div>
      </div>
    </div>

    <h3>7.1 how the smart lane works (logic)</h3>
    <p>the smart lane uses signals duolingo already has:</p>
    <ul>
      <li>mistake types (grammar vs vocabulary vs listening),</li>
      <li>time per exercise and per lesson,</li>
      <li>number of hints used,</li>
      <li>recent session gaps and streak breaks,</li>
      <li>skipped / repeated lessons.</li>
    </ul>
    <p>
      it then classifies the learner into one of a few simple personalization profiles, which can be updated session-by-session:
    </p>
    <ul>
      <li><strong>over-prepared:</strong> consistently high accuracy and fast pace → unlock advanced content earlier.</li>
      <li><strong>challenged but engaged:</strong> mid-accuracy, occasional retries → maintain difficulty, more targeted review.</li>
      <li><strong>struggling:</strong> low accuracy and slow pace → more scaffolded exercises, fewer new concepts per session.</li>
      <li><strong>rusty returner:</strong> historical progress + current performance mismatch → quick recalibration checks.</li>
    </ul>

    <h3>7.2 what changes in the ui</h3>
    <p>a few lightweight, duolingo-style surfaces:</p>
    <ul>
      <li>
        on the path: an optional <strong>“smart practice” node</strong> that appears when the model detects you’re off-balance
        (too easy or too hard).
      </li>
      <li>
        inside a lesson: slightly adjusted exercise mix — e.g., more listening if that’s where mistakes cluster.
      </li>
      <li>
        post-lesson: a small <strong>“you’re getting better at…”</strong> banner tying performance to a concrete skill
        (“past tense verbs”, “listening to fast speech”, etc.).
      </li>
    </ul>

    <h3>7.3 keeping it playful</h3>
    <p>the design stays consistent with duolingo’s tone:</p>
    <ul>
      <li>warm green highlights, rounded cards, micro-animations.</li>
      <li>owl reactions that celebrate <em>learning quality</em>, not just xp.</li>
      <li>simple, encouraging copy: “we’ve adjusted today’s lesson to focus on the verbs you almost nailed yesterday.”</li>
    </ul>
  </section>

  <!-- 8. EXPERIMENT DESIGN & METRICS -->
  <section>
    <h2>8. experiment design & metrics</h2>
    <p>
      to validate the impact of the smart lane, we’d run an experiment on a subset of language courses (e.g., english → spanish, english → french).
    </p>
    <ul>
      <li><strong>control:</strong> current lesson sequencing and practice logic.</li>
      <li><strong>variant:</strong> smart lane active — adaptive lesson suggestions and adjusted exercise mix.</li>
      <li><strong>population:</strong> new learners + returning learners who’ve been inactive for &gt; 30 days.</li>
    </ul>

    <h3>8.1 primary metrics</h3>
    <ul>
      <li>
        <strong>7-day retention:</strong> % of users who complete at least one lesson on day 7 after starting (or returning).
      </li>
      <li>
        <strong>lesson completion rate:</strong> % of started lessons that are completed without abandoning mid-way.
      </li>
      <li>
        <strong>within-lesson accuracy:</strong> average correct answers per lesson, adjusted for difficulty.
      </li>
    </ul>

    <h3>8.2 secondary metrics</h3>
    <ul>
      <li>
        <strong>practice engagement:</strong> usage of “smart practice” vs generic practice options.
      </li>
      <li>
        <strong>streak preservation:</strong> how often smart lane users avoid streak breaks relative to control.
      </li>
      <li>
        <strong>perceived difficulty:</strong> optional in-app poll: “today’s lesson felt: too easy / just right / too hard.”
      </li>
    </ul>

    <h3>8.3 guardrail metrics</h3>
    <ul>
      <li>session length — ensure adaptivity doesn’t inflate sessions unsustainably.</li>
      <li>xp earned — avoid penalizing motivated users chasing leagues.</li>
      <li>abuse / edge cases — make sure power users aren’t gaming smart practice for easy xp.</li>
    </ul>
  </section>

  <!-- 9. RISKS & TRADEOFFS -->
  <section>
    <h2>9. risks & tradeoffs</h2>
    <ul>
      <li>
        <strong>risk: perceived loss of control.</strong><br />
        learners might feel the app is “moving the goalposts” if lessons change too much.
        <em>mitigation:</em> keep the path familiar; smart lane is additive, not replacing core structure.
      </li>
      <li>
        <strong>risk: model complexity vs clarity.</strong><br />
        a complex adaptive model is hard to explain and debug.
        <em>mitigation:</em> start with a small, interpretable rules + model hybrid; log clear reasons for smart suggestions.
      </li>
      <li>
        <strong>risk: overfitting to short-term accuracy.</strong><br />
        optimizing for immediate correctness might not equal long-term retention of concepts.
        <em>mitigation:</em> include spaced repetition &amp; concept-level mastery in the objective, not just next-lesson success.
      </li>
    </ul>
  </section>

  <!-- 10. WHAT I’D DO NEXT -->
  <section>
    <h2>10. what i’d do next</h2>
    <p>to take this from a case study into a real feature, my next steps would be:</p>
    <ul>
      <li>
        <strong>run qualitative sessions</strong> with interactive prototypes of the smart lane, watching how different personas react
        to suggestions and difficulty shifts.
      </li>
      <li>
        <strong>partner with learning science</strong> to ensure the adaptive logic respects evidence-based pedagogy, not just engagement.
      </li>
      <li>
        <strong>iterate on copy &amp; visuals</strong> so explanations are friendly, short, and match duolingo’s playful tone.
      </li>
      <li>
        <strong>build an internal personalization dashboard</strong> tracking key metrics by persona type (dabbler vs climber vs returner).
      </li>
    </ul>

    <p>
      underneath the duolingo owl and xp fireworks, there’s a serious learning problem: <strong>how do we keep lessons in the “just right” zone?</strong>
      smarter personalization is one of the most leveraged ways to answer that — for both learners and the business.
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

  .hero-card.duolingo {
    background: linear-gradient(135deg, #d9f99d, #bbf7d0);
    border-color: #bef264;
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
    background: #22c55e;
    color: #ecfdf5;
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

  .wireframe.duolingo {
    border-color: #bbf7d0;
    background: #f0fdf4;
  }

  .wireframe-header {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #15803d;
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

  .wireframe-art.duolingo {
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

  .pill.duolingo {
    background: #dcfce7;
    color: #166534;
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

  .cta.primary.duolingo {
    background: #22c55e;
    border-color: #16a34a;
    color: #ecfdf5;
  }

  .cta.duolingo {
    border-color: #bbf7d0;
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
