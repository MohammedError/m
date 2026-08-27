const slides = [
{
  title:"Title",
  kicker:"Master Thesis • EMIX • July 2026",
  notes:`Open by naming the research problem and the central question. Emphasize that the study compares two versions of the same game environment and changes the interface behavior, not the core game logic. Transition to why early churn matters.`,
  html:`
    <div class="slide-card">
      <div class="title-layout">
        <div>
          <div class="eyebrow">Web-Based Academic Research Defense</div>
          <div class="small-gap"></div>
          <h1>The Impact of Adaptive User Interfaces on Player Retention in Mobile Games</h1>
          <div class="small-gap"></div>
          <p class="subhead">A rule-based adaptive interface is evaluated against a traditional static interface inside a controlled web-based mobile game prototype.</p>
          <div class="title-meta">
            <div class="panel"><div class="label">Researcher</div><strong>Mohammed Ali ALOUFI</strong></div>
            <div class="panel"><div class="label">Supervisor</div><strong>Mr. Mohammed Al-Nazli</strong></div>
            <div class="panel"><div class="label">Program</div><strong>Master of Executive UI/UX Design and Game Technologies (EMIX)</strong></div>
            <div class="panel"><div class="label">Institution</div><strong>Anas Academy</strong></div>
          </div>
        </div>
        <div class="panel soft stack center">
          <div class="phone" aria-label="Illustrative mobile-game interface">
            <div class="status"><span>5G 100%</span><span>09:41</span></div>
            <div class="screen-top"><span>Adaptive test</span><span>00:50</span></div>
            <div class="arena"><div class="player"></div><div class="target"></div></div>
            <div class="tip">Target fits: brief contextual hint</div>
            <div class="controls-row"><div class="control">↗<br/>Move</div><div class="control highlight">↑<br/>Jump</div></div>
          </div>
          <div class="source-note">Illustrative visual representation of the prototype described in the thesis.</div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: thesis title page & abstract</span><span class="section-number">01</span></div>
    </div>`
},
{
  title:"Research Question",
  kicker:"The question that organizes the study",
  notes:`State the exact research question. Do not broaden it. The thesis asks about the effect of adaptive user interfaces on player retention in mobile games. The practical evaluation uses retention intention alongside usability and performance indicators because the experiment is a single session.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">01 • Framing</div><h2>One question drives the defense</h2></div><span class="pill">Research Question</span></div>
      <div class="callout"><p class="quote">“What is the effect of using Adaptive User Interfaces (AUIs) on player retention in mobile games?”</p></div>
      <div class="grid-3">
        <div class="panel"><div class="label">Independent variable</div><h3>User interface type</h3><p class="muted">Traditional static vs. rule-based adaptive.</p></div>
        <div class="panel"><div class="label">Performance signals</div><h3>Interaction evidence</h3><p class="muted">Task time, errors, incorrect clicks, adaptation activations, and final performance.</p></div>
        <div class="panel good"><div class="label">Retention proxy</div><h3>Intention to continue</h3><p class="muted">Used because the study evaluates a single experimental session.</p></div>
      </div>
      <div class="slide-footer"><span>Source: pp. 3–4, 10, 14–15</span><span class="section-number">02</span></div>
    </div>`
},
{
  title:"The Problem",
  kicker:"Why a static interface can become a barrier",
  notes:`Explain the asymmetry: novice players may struggle with a fixed interface because they must process more information than they need, while experienced players may find the same interface insufficiently flexible or challenging. The thesis frames early churn as the practical problem.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">02 • The Problem</div><h2>A one-size-fits-all interface meets non-identical players</h2></div><span class="pill">Early churn</span></div>
      <div class="grid-2">
        <div class="stack">
          <div class="panel warn"><div class="label">Novice player</div><h3>Too much to process</h3><p class="muted">Static controls and information can raise extraneous cognitive load, making interaction harder and increasing the risk of errors or early disengagement.</p></div>
          <div class="panel"><div class="label">Experienced player</div><h3>Too little flexibility</h3><p class="muted">A fixed interface may not adapt to the player's performance level, potentially reducing engagement and motivation.</p></div>
        </div>
        <div class="center">
          <div class="stack" style="width:min(520px,100%)">
            <div class="panel soft"><div class="rule-line"><span class="rule-dot"></span><strong>Same UI</strong></div><p class="muted">Same control size • same placement • no adaptive guidance</p></div>
            <div class="center muted">↓</div>
            <div class="panel"><div class="rule-line"><span class="rule-dot"></span><strong>Different player states</strong></div><p class="muted">Different experience • skill • speed of learning • interaction patterns</p></div>
            <div class="center muted">↓</div>
            <div class="panel warn"><div class="rule-line"><span class="rule-dot"></span><strong>Possible early churn</strong></div><p class="muted">The thesis investigates whether adaptive UI can reduce these interaction barriers.</p></div>
          </div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: pp. 2–3</span><span class="section-number">03</span></div>
    </div>`
},
{
  title:"Study Logic",
  kicker:"Problem → theory → intervention → evaluation",
  notes:`Use this slide to orient the committee. The thesis connects interface design to cognitive load and flow, then operationalizes the idea through a rule-based adaptive engine. The evaluation compares the adaptive and static versions under the same gameplay conditions.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">03 • Research Logic</div>
      <h2>The argument is intentionally testable</h2>
      <div class="flow">
        <div class="flow-box"><b>Problem</b><div class="muted">Early churn + fixed UI</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box"><b>Theory</b><div class="muted">Cognitive Load + Flow</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box"><b>Intervention</b><div class="muted">Rule-based adaptive UI</div></div>
      </div>
      <div class="flow">
        <div class="flow-box"><b>Measure</b><div class="muted">Task time + errors + adaptation + retention intention</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box"><b>Compare</b><div class="muted">Static vs. adaptive</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box soft"><b>Conclusion</b><div class="muted">Adaptive interface showed stronger reported usability outcomes</div></div>
      </div>
      <div class="callout"><p class="muted">The thesis keeps gameplay constant so the difference can be attributed to the interface and its response to player performance.</p></div>
      <div class="slide-footer"><span>Source: pp. 8–10, 14–15</span><span class="section-number">04</span></div>
    </div>`
},
{
  title:"Theoretical Foundation",
  kicker:"Two theories explain why adaptation should help",
  notes:`Explain Cognitive Load Theory first: working memory is limited, and unnecessary interface complexity can create extraneous load. Then Flow Theory: engagement is supported when challenge and skill are balanced. The adaptive UI is positioned as a way to adjust interface support without changing the game itself.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">04 • Theory</div><h2>Two lenses: reduce friction, protect flow</h2></div><span class="pill">CLT + Flow</span></div>
      <div class="grid-2">
        <div class="panel soft">
          <div class="label">Cognitive Load Theory</div>
          <h3>Reduce extraneous load</h3>
          <p class="muted" style="margin-top:8px">A crowded or overly complex UI can consume working-memory capacity without helping the player understand the task.</p>
          <div class="tag-row" style="margin-top:15px"><span class="tag">Simplify</span><span class="tag">Prioritize</span><span class="tag">Guide when needed</span></div>
        </div>
        <div class="panel">
          <div class="label">Flow Theory</div>
          <h3>Support challenge–skill balance</h3>
          <p class="muted" style="margin-top:8px">If challenge exceeds skill, frustration can rise; if challenge is too low, boredom can rise. Adaptive support is framed as a way to maintain engagement.</p>
          <div class="tag-row" style="margin-top:15px"><span class="tag">Responsive support</span><span class="tag">Contextual help</span><span class="tag">Progressive reduction</span></div>
        </div>
      </div>
      <div class="panel"><div class="label">Design implication</div><h3>Adapt the interface, not the rules of the game</h3><p class="muted">The prototype changes interface elements according to observed performance while keeping the underlying gameplay stable.</p></div>
      <div class="slide-footer"><span>Source: pp. 8–10</span><span class="section-number">05</span></div>
    </div>`
},
{
  title:"Previous Studies",
  kicker:"What the literature already established",
  notes:`Summarize the cited studies without overstating them. Putkonen focused on early player behavior and retention prediction; Tondello on personalization; Padte on adaptive textual feedback; Makris on runtime technical challenges; Chen and colleagues on churn prediction using performance data. Then move to the missing link.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">05 • Related Work</div><h2>The literature supports adaptation — but from different angles</h2></div><span class="pill">5 highlighted studies</span></div>
      <div class="grid-3">
        <div class="panel"><h3>Putkonen (2022)</h3><p class="muted">Early player behavior as a predictor of retention in free-to-play mobile games.</p></div>
        <div class="panel"><h3>Tondello (2019)</h3><p class="muted">Dynamic personalization of interactive systems according to player types.</p></div>
        <div class="panel"><h3>Padte (2019)</h3><p class="muted">Adaptive textual feedback and player engagement in endless runners.</p></div>
        <div class="panel"><h3>Makris (2016)</h3><p class="muted">Runtime implementation challenges for adaptive user interfaces.</p></div>
        <div class="panel"><h3>Chen et al. (2021)</h3><p class="muted">Performance data used to predict churn and support customization.</p></div>
        <div class="panel soft"><div class="label">Pattern</div><h3>Adaptation is promising</h3><p class="muted">The thesis builds a direct, simple, rule-based interface intervention inside a mobile-game prototype.</p></div>
      </div>
      <div class="slide-footer"><span>Source: p. 11 + References</span><span class="section-number">06</span></div>
    </div>`
},
{
  title:"Research Gap",
  kicker:"The contribution begins where the literature narrows",
  notes:`Stress the precise gap from the thesis: prior studies often analyzed player behavior, predicted retention, or personalized the broader gameplay experience. The current study focuses directly on adaptive UI elements in a mobile game using simple, implementable interactive rules and expert evaluation.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">06 • Gap</div>
      <h2>The missing link is the interface itself</h2>
      <div class="grid-2">
        <div class="panel">
          <div class="label">Prior focus</div>
          <div class="bullet-list" style="margin-top:12px">
            <div class="bullet">Player behavior analysis</div>
            <div class="bullet">Retention prediction</div>
            <div class="bullet">General personalization</div>
          </div>
        </div>
        <div class="panel good">
          <div class="label">This study</div>
          <div class="bullet-list" style="margin-top:12px">
            <div class="bullet">Directly adapts UI elements</div>
            <div class="bullet">Uses explicit if–then rules</div>
            <div class="bullet">Compares adaptive vs. static versions</div>
            <div class="bullet">Evaluates usability and performance indicators</div>
          </div>
        </div>
      </div>
      <div class="callout"><p class="quote">Contribution claim: a practical, explainable rule-based adaptation approach for mobile-game interfaces.</p></div>
      <div class="slide-footer"><span>Source: pp. 11–12</span><span class="section-number">07</span></div>
    </div>`
},
{
  title:"Methodology",
  kicker:"A quasi-experimental comparison inside one prototype",
  notes:`Define the independent variable clearly: the type of user interface. The dependent indicators include task completion time, errors, adaptation activations, usability evaluation, and intention to continue. Explain that the two versions share the same gameplay and tasks.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">07 • Methodology</div><h2>Quasi-experimental design</h2></div><span class="pill">Controlled comparison</span></div>
      <div class="grid-2">
        <div class="stack">
          <div class="panel soft"><div class="label">Independent variable</div><h3>UI type</h3><p class="muted">Traditional static interface vs. rule-based adaptive interface.</p></div>
          <div class="panel"><div class="label">Dependent indicators</div><h3>Performance + usability + retention intention</h3><p class="muted">Task time, errors, adaptation activations, usability assessment, and intention to continue.</p></div>
        </div>
        <div class="panel center">
          <div class="choice" style="width:100%">
            <div class="side static"><h3>Version A</h3><p class="muted">Traditional static UI</p><div class="tag-row" style="margin-top:14px"><span class="tag">Fixed size</span><span class="tag">Fixed position</span><span class="tag">No adaptive hints</span></div></div>
            <div class="side adaptive"><h3>Version B</h3><p class="muted">Rule-based adaptive UI</p><div class="tag-row" style="margin-top:14px"><span class="tag">Performance-aware</span><span class="tag">Contextual help</span><span class="tag">UI changes</span></div></div>
          </div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: pp. 14–15</span><span class="section-number">08</span></div>
    </div>`
},
{
  title:"Participants",
  kicker:"Purposive expert sample",
  notes:`The abstract identifies eight UI/UX and game-development experts from the Emerging Technologies and Virtual Worlds Bootcamp at Tuwaiq Academy in Saudi Arabia. The method section describes purposive sampling and a unified procedure where all participants used both versions.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">08 • Participants</div>
      <div class="grid-2">
        <div class="panel soft center" style="min-height:270px">
          <div><div class="big-num">8</div><div class="label" style="margin-top:9px">Participants</div><p class="muted" style="margin-top:9px">UI/UX + game-development experts</p></div>
        </div>
        <div class="stack">
          <div class="panel"><div class="label">Sampling</div><h3>Purposive</h3><p class="muted">Selected for relevant expertise to evaluate prototype quality and adaptive behavior.</p></div>
          <div class="panel"><div class="label">Context</div><h3>Tuwaiq Academy</h3><p class="muted">Emerging Technologies and Virtual Worlds Bootcamp, Saudi Arabia.</p></div>
          <div class="panel"><div class="label">Comparison procedure</div><h3>Both versions used</h3><p class="muted">Participants experienced the traditional and adaptive versions under standardized procedures.</p></div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: pp. 2, 15</span><span class="section-number">09</span></div>
    </div>`
},
{
  title:"Prototype",
  kicker:"Same game, two interface behaviors",
  notes:`Describe the prototype screens documented in the thesis: start screen, version selection, gameplay, final performance report, and adaptive guidance messages. The visual examples here are deliberately recreated as simplified presentation graphics rather than pretending to be the original screenshots.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">09 • Prototype</div><h2>The experimental environment</h2></div><span class="pill">HTML • CSS • JavaScript</span></div>
      <div class="grid-3">
        <div class="panel center stack"><div class="phone"><div class="status"><span>5G</span><span>09:41</span></div><div class="screen-top"><span>A/B Testing</span><span>01</span></div><div class="panel" style="padding:8px;background:#121830"><div class="control" style="margin-bottom:7px">Version A — Static</div><div class="control highlight">Version B — Adaptive</div></div></div><div class="source-note">Version-selection screen — simplified reconstruction of Fig. 3-1.</div></div>
        <div class="panel center stack"><div class="phone"><div class="status"><span>5G</span><span>09:41</span></div><div class="screen-top"><span>Static UI</span><span>00:40</span></div><div class="arena"><div class="player"></div><div class="target"></div></div><div class="controls-row"><div class="control">⚡<br/>Boost</div><div class="control">↑<br/>Jump</div></div></div><div class="source-note">Traditional version — simplified reconstruction of Fig. 3-2.</div></div>
        <div class="panel center stack"><div class="phone"><div class="status"><span>5G</span><span>09:41</span></div><div class="screen-top"><span>Adaptive UI</span><span>00:50</span></div><div class="arena"><div class="player"></div><div class="target"></div></div><div class="tip">Target fits: hint</div><div class="controls-row"><div class="control">⚡<br/>Boost</div><div class="control highlight">↑<br/>Jump</div></div></div><div class="source-note">Adaptive version — simplified reconstruction of Fig. 3-3.</div></div>
      </div>
      <div class="slide-footer"><span>Visual source: thesis pp. 16–18</span><span class="section-number">10</span></div>
    </div>`
},
{
  title:"Static vs Adaptive",
  kicker:"The experimental contrast",
  notes:`Make the fairness of the comparison explicit. The traditional interface keeps control size and position constant and provides no adaptive guidance. The adaptive interface monitors performance and changes selected UI elements. Gameplay goals and core game logic remain unchanged.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">10 • Intervention</div>
      <h2>Only the interface behavior changes</h2>
      <table class="matrix">
        <thead><tr><th>Dimension</th><th>Traditional UI</th><th>Adaptive UI</th></tr></thead>
        <tbody>
          <tr><td>Control size / position</td><td>Fixed</td><td>Can change according to rules</td></tr>
          <tr><td>Guidance</td><td>No adaptive hints</td><td>Contextual short guidance</td></tr>
          <tr><td>Visual density</td><td>Static</td><td>Can reduce unnecessary elements</td></tr>
          <tr><td>Response to errors</td><td>None</td><td>Important controls can be emphasized</td></tr>
          <tr><td>Core gameplay</td><td colspan="2"><strong>Kept stable across both versions</strong></td></tr>
        </tbody>
      </table>
      <div class="callout"><p class="muted">This isolates the UI effect from differences in game content or core gameplay mechanics.</p></div>
      <div class="slide-footer"><span>Source: pp. 17–18, 25–26</span><span class="section-number">11</span></div>
    </div>`
},
{
  title:"Rule-Based Adaptive Engine",
  kicker:"No AI / no machine learning",
  notes:`This distinction is critical in the defense. The thesis explicitly says the engine does not use AI or machine learning. It uses predetermined if–then logical rules. Examples: enlarge a jump button after repeated errors; show short hints when performance declines; reduce unnecessary visual elements; gradually restore the normal interface when performance improves.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">11 • Adaptive Mechanism</div><h2>Observable performance → explicit rules → UI response</h2></div><span class="pill">Rule-Based Adaptive Engine</span></div>
      <div class="flow">
        <div class="flow-box"><b>Observe</b><div class="muted">Errors • interaction time • incorrect clicks</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box"><b>Evaluate</b><div class="muted">Compare indicators with predefined conditions</div></div>
        <div class="flow-arrow">→</div>
        <div class="flow-box"><b>Adapt</b><div class="muted">Change selected UI elements</div></div>
      </div>
      <div class="grid-4">
        <div class="panel soft"><div class="label">Rule 01</div><h3>Repeated errors</h3><p class="muted">Enlarge an important control.</p></div>
        <div class="panel"><div class="label">Rule 02</div><h3>Lower performance</h3><p class="muted">Show a brief contextual hint.</p></div>
        <div class="panel"><div class="label">Rule 03</div><h3>Excess visual load</h3><p class="muted">Reduce unnecessary visual elements.</p></div>
        <div class="panel good"><div class="label">Rule 04</div><h3>Improved performance</h3><p class="muted">Gradually return the interface toward normal.</p></div>
      </div>
      <div class="callout"><p class="quote">Important: the decision mechanism is explainable and repeatable because it is built from predefined if–then rules.</p></div>
      <div class="slide-footer"><span>Source: p. 19</span><span class="section-number">12</span></div>
    </div>`
},
{
  title:"Evaluation Metrics",
  kicker:"What the prototype records during play",
  notes:`Walk through the five indicators in the thesis: errors, misclicks, task completion time, number of adaptive-rule activations, and overall performance index shown in the final report. Also note the broader evaluation layer: heuristic evaluation and intention to continue.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">12 • Evaluation</div>
      <h2>Performance is recorded automatically</h2>
      <div class="metric-grid">
        <div class="metric"><strong>Errors</strong><span>How often the player commits an error during play.</span></div>
        <div class="metric"><strong>Misclicks</strong><span>Incorrect clicks recorded by the prototype.</span></div>
        <div class="metric"><strong>Task time</strong><span>Time required to complete the task.</span></div>
        <div class="metric"><strong>Adaptations</strong><span>How many times adaptive rules are activated.</span></div>
        <div class="metric"><strong>Overall performance</strong><span>Final performance indicator presented after the trial.</span></div>
      </div>
      <div class="grid-3">
        <div class="panel"><div class="label">Usability</div><h3>Usability testing</h3><p class="muted">Performance-based interaction indicators.</p></div>
        <div class="panel"><div class="label">Expert review</div><h3>Heuristic evaluation</h3><p class="muted">Specialist assessment of strengths and weaknesses.</p></div>
        <div class="panel soft"><div class="label">Retention proxy</div><h3>Intention to continue</h3><p class="muted">Used as an indicator of retention in the single-session study.</p></div>
      </div>
      <div class="slide-footer"><span>Source: pp. 10, 20, 23, 26</span><span class="section-number">13</span></div>
    </div>`
},
{
  title:"System Architecture",
  kicker:"A closed adaptive loop",
  notes:`Follow the flow from left to right: player interaction produces events; performance monitoring analyzes behavior; the rule engine checks predefined conditions; the adaptive UI manager applies the interface change. The loop continues throughout play.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">13 • Architecture</div><h2>Adaptive UI is a continuous control loop</h2></div><span class="pill">System Architecture</span></div>
      <div class="arch">
        <div class="arch-col">
          <div class="arch-box"><strong>Player interaction</strong><span class="muted">Game UI events</span></div>
          <div class="connector">↓</div>
          <div class="arch-box"><strong>Performance monitor</strong><span class="muted">Collect + analyze behavior</span></div>
        </div>
        <div class="arch-col">
          <div class="arch-box soft"><strong>Rule Engine</strong><span class="muted">Compare indicators with predefined conditions</span></div>
          <div class="connector">↓</div>
          <div class="arch-box good"><strong>Adaptive UI Manager</strong><span class="muted">Apply approved interface changes</span></div>
        </div>
        <div class="arch-col">
          <div class="arch-box"><strong>UI response</strong><span class="muted">Resize controls • hints • reduce visual elements</span></div>
          <div class="connector">↺</div>
          <div class="arch-box"><strong>Continue play</strong><span class="muted">Observe the next interaction state</span></div>
        </div>
      </div>
      <div class="callout"><p class="muted">The engine modifies the interface independently of the core gameplay logic, allowing gameplay to remain stable while the UI responds.</p></div>
      <div class="slide-footer"><span>Visual source: thesis p. 21 (Fig. 3-6)</span><span class="section-number">14</span></div>
    </div>`
},
{
  title:"Procedure",
  kicker:"From literature review to analysis",
  notes:`Summarize the eight implementation steps, then explain the experimental flow: standardized environment, version selection, task execution, automatic metric logging, adaptive rule execution, and final performance report.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">14 • Procedure</div>
      <h2>Implementation and experiment follow a repeatable sequence</h2>
      <div class="timeline">
        <div class="step"><b>01</b>Review literature</div>
        <div class="step"><b>02</b>Build prototype</div>
        <div class="step"><b>03</b>Create two versions</div>
        <div class="step"><b>04</b>Define rules</div>
        <div class="step"><b>05</b>Test functions</div>
        <div class="step"><b>06</b>Run standardized trial</div>
        <div class="step"><b>07</b>Record metrics</div>
        <div class="step"><b>08</b>Compare + conclude</div>
      </div>
      <div class="grid-2">
        <div class="panel"><div class="label">Experimental control</div><h3>Stable gameplay environment</h3><p class="muted">Participants used the same or comparable devices; tasks and core gameplay stayed constant.</p></div>
        <div class="panel soft"><div class="label">Adaptive cycle</div><h3>Measure → rule → change → measure again</h3><p class="muted">In the adaptive version, the UI can change when predefined conditions are met.</p></div>
      </div>
      <div class="slide-footer"><span>Source: pp. 22–23</span><span class="section-number">15</span></div>
    </div>`
},
{
  title:"Results",
  kicker:"What the functional evaluation reported",
  notes:`Be precise: the thesis reports successful operation of the prototype and better user-experience outcomes for the adaptive interface. It reports lower error rates and task-completion times in the abstract, but the body of the thesis does not provide numeric values. Do not invent percentages or bars.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">15 • Results</div><h2>The adaptive version was reported as stronger on key usability signals</h2></div><span class="pill">No invented numbers</span></div>
      <div class="result-lane">
        <div class="result-card static">
          <div class="result-head"><h3>Traditional static UI</h3><span class="status-badge bad">Reference condition</span></div>
          <div class="result-point">Controls remain fixed throughout the trial.</div>
          <div class="result-point">No adaptive hints or interface response to performance.</div>
          <div class="result-point">Serves as the baseline for comparison.</div>
        </div>
        <div class="result-card adaptive">
          <div class="result-head"><h3>Rule-based adaptive UI</h3><span class="status-badge good">Reported improvement</span></div>
          <div class="result-point">Lower reported error rates.</div>
          <div class="result-point">Lower reported task completion times.</div>
          <div class="result-point">Dynamic changes supported a more flexible interaction experience.</div>
        </div>
      </div>
      <div class="panel soft"><div class="label">Functional finding</div><h3>The prototype successfully executed the adaptive rules while preserving the core game mechanism.</h3><p class="muted" style="margin-top:7px">This matters because the UI can be evaluated as the primary changing factor.</p></div>
      <div class="slide-footer"><span>Source: pp. 2, 25–27</span><span class="section-number">16</span></div>
    </div>`
},
{
  title:"Discussion",
  kicker:"Why the result is theoretically coherent",
  notes:`Connect the observed behavior to the framework. Adaptive controls becoming clearer and guidance appearing at the right time are consistent with reducing unnecessary cognitive effort. The discussion also aligns with prior literature on adapting experiences to user needs.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">16 • Discussion</div>
      <h2>The observed improvement follows the logic of the framework</h2>
      <div class="grid-3">
        <div class="panel soft"><div class="label">Cognitive Load</div><h3>Less unnecessary friction</h3><p class="muted">Simplified presentation and targeted guidance can reduce the effort required to navigate the interface.</p></div>
        <div class="panel"><div class="label">Flow</div><h3>More responsive support</h3><p class="muted">The interface can support the player when performance falls, while reducing help as performance improves.</p></div>
        <div class="panel good"><div class="label">Prior work</div><h3>Consistent direction</h3><p class="muted">The thesis reports that the findings are compatible with literature emphasizing personalization and behavior-responsive interaction.</p></div>
      </div>
      <div class="callout"><p class="quote">The contribution is not “AI adaptation.” It is a simple, explainable interface adaptation loop that can be implemented with explicit rules.</p></div>
      <div class="slide-footer"><span>Source: pp. 26–27</span><span class="section-number">17</span></div>
    </div>`
},
{
  title:"Contribution",
  kicker:"What the study actually demonstrates",
  notes:`Separate the demonstrated contribution from future possibilities. Demonstrated: a working rule-based adaptive interface, stable gameplay, and a comparison showing stronger usability-related outcomes in the adaptive version. The thesis also presents practical guidance for developers.`,
  html:`
    <div class="slide-card">
      <div class="section-head"><div><div class="eyebrow">17 • Contribution</div><h2>From research question to practical design pattern</h2></div><span class="pill">What was achieved</span></div>
      <div class="grid-3">
        <div class="panel"><div class="big-num">01</div><div class="label" style="margin-top:8px">Prototype</div><p class="muted">A browser-based mobile-game prototype with two interface conditions.</p></div>
        <div class="panel soft"><div class="big-num">02</div><div class="label" style="margin-top:8px">Adaptive engine</div><p class="muted">Explicit if–then rules that translate player performance into UI changes.</p></div>
        <div class="panel good"><div class="big-num">03</div><div class="label" style="margin-top:8px">Evidence</div><p class="muted">Functional operation plus stronger reported usability-related outcomes for the adaptive version.</p></div>
      </div>
      <div class="panel"><div class="label">Design takeaway</div><h3>Adapt the interface before changing the game.</h3><p class="muted">The thesis positions behavior-responsive UI as a practical direction for improving usability and sustaining player engagement.</p></div>
      <div class="slide-footer"><span>Source: pp. 28, 30–31</span><span class="section-number">18</span></div>
    </div>`
},
{
  title:"Limitations",
  kicker:"What the thesis does not claim",
  notes:`Keep this slide disciplined. The study uses a purposive sample of eight experts, a single-session experimental setup, and a web-based prototype in a Saudi local context. Retention is represented through intention to continue rather than long-term behavioral retention. Do not imply population-level generalization.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">18 • Limits</div>
      <h2>The strongest claims are bounded by the design</h2>
      <div class="grid-2">
        <div class="stack">
          <div class="panel warn"><div class="label">Sample</div><h3>Small, purposive expert group</h3><p class="muted">Eight specialists were selected for relevant expertise; this is not a broad player sample.</p></div>
          <div class="panel"><div class="label">Session design</div><h3>Single experimental session</h3><p class="muted">Retention is assessed through intention to continue rather than long-term observed retention behavior.</p></div>
        </div>
        <div class="stack">
          <div class="panel"><div class="label">Context</div><h3>Web-based prototype + local field setting</h3><p class="muted">Evaluation was conducted in a Saudi technical environment with participants associated with Tuwaiq Academy.</p></div>
          <div class="panel soft"><div class="label">Interpretation</div><h3>Promising practical evidence, not universal proof</h3><p class="muted">The findings support the viability of rule-based adaptive UI in this study context; broader effects require further study.</p></div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: pp. 10, 15, 23, 31</span><span class="section-number">19</span></div>
    </div>`
},
{
  title:"Conclusion",
  kicker:"The thesis answer in one view",
  notes:`Close the research argument: the prototype demonstrates that a rule-based adaptive interface can respond to performance while preserving gameplay, and the reported evaluation indicates improved usability-related outcomes versus the static version. Frame this as evidence for a promising direction.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">19 • Conclusion</div>
      <h2>Adaptive UI can turn a static interface into a responsive layer</h2>
      <div class="grid-2">
        <div class="panel soft"><div class="label">Answer</div><p class="quote">The study found that a rule-based adaptive interface provides a more flexible, responsive user experience than a static interface inside the prototype environment.</p></div>
        <div class="stack">
          <div class="panel"><strong>Mechanism</strong><p class="muted">Monitor performance → apply predefined rules → adapt selected interface elements.</p></div>
          <div class="panel"><strong>Outcome</strong><p class="muted">The thesis reports lower error rates and task times, alongside stronger retention intentions in the adaptive condition.</p></div>
          <div class="panel good"><strong>Direction</strong><p class="muted">Behavior-responsive UI is presented as a promising strategy for mobile games.</p></div>
        </div>
      </div>
      <div class="slide-footer"><span>Source: pp. 2, 28, 30–31</span><span class="section-number">20</span></div>
    </div>`
},
{
  title:"Recommendations",
  kicker:"What follows from the findings",
  notes:`Present recommendations separately from future technical research. The thesis recommends wider use of adaptive concepts, more adaptive elements, use of interaction data to improve rules, measurement of other indicators such as satisfaction and engagement, and stronger collaboration between researchers and developers.`,
  html:`
    <div class="slide-card">
      <div class="eyebrow">20 • Recommendations</div>
      <h2>Move from a single prototype to a broader design practice</h2>
      <div class="grid-3">
        <div class="panel"><div class="label">For developers</div><h3>Adopt adaptive UI concepts</h3><p class="muted">Use behavior-responsive interfaces as part of mobile-game design.</p></div>
        <div class="panel soft"><div class="label">For systems</div><h3>Expand the adaptive surface</h3><p class="muted">Apply adaptation to additional in-game elements where appropriate.</p></div>
        <div class="panel"><div class="label">For evaluation</div><h3>Measure more than speed and errors</h3><p class="muted">Include satisfaction, interaction, and continued-use indicators.</p></div>
      </div>
      <div class="grid-2">
        <div class="panel"><div class="label">Data</div><h3>Use interaction evidence to refine rules</h3><p class="muted">The thesis recommends leveraging player interaction data to create more precise and effective adaptation mechanisms.</p></div>
        <div class="panel good"><div class="label">Collaboration</div><h3>Connect researchers and game developers</h3><p class="muted">Translate research findings into practical interface solutions.</p></div>
      </div>
      <div class="slide-footer"><span>Source: p. 31</span><span class="section-number">21</span></div>
    </div>`
},
{
  title:"Future Work & References",
  kicker:"Where the research can go next",
  notes:`End with the thesis's own future directions: larger player samples, AI/ML-based adaptation in future studies, different mobile-game genres, and comparison of adaptive strategies. Then briefly show the eight references listed in the thesis.`,
  html:`
    <div class="slide-card">
      <div class="grid-2">
        <div>
          <div class="eyebrow">21 • Future Work</div>
          <h2>From explicit rules to broader adaptive research</h2>
          <div class="bullet-list" style="margin-top:18px">
            <div class="bullet">Test larger samples of players in different usage environments.</div>
            <div class="bullet">Explore AI and machine-learning adaptation in future work.</div>
            <div class="bullet">Study different game types, including educational, strategy, and multiplayer games.</div>
            <div class="bullet">Compare adaptation methods by usability, satisfaction, and retention indicators.</div>
          </div>
        </div>
        <div>
          <div class="eyebrow">References</div>
          <div class="refs">
            <div><b>Chen, Y., Li, X., & Wang, H. (2021).</b> Predicting Player Churn and Customizing Game Experiences Using Performance Data.</div>
            <div><b>Csikszentmihalyi, M. (1990).</b> Flow: The Psychology of Optimal Experience.</div>
            <div><b>Makris, D. (2016).</b> Technical Challenges in Implementing Adaptive User Interfaces at Runtime.</div>
            <div><b>Nielsen, J. (1994).</b> Enhancing the explanatory power of usability heuristics.</div>
            <div><b>Padte, R. (2019).</b> The Effect of Adaptive Textual Feedback on Player Engagement in Endless Runner Games.</div>
            <div><b>Putkonen, A. (2022).</b> Early Player Behavior as a Predictor of Retention in Free-to-Play Mobile Games.</div>
            <div><b>Sweller, J. (1988).</b> Cognitive load during problem solving: Effects on learning.</div>
            <div><b>Tondello, G. F. (2019).</b> Dynamic Personalization of Interactive Systems.</div>
          </div>
        </div>
      </div>
      <div class="callout"><p class="quote">Thank you — discussion.</p></div>
      <div class="slide-footer"><span>Source: pp. 31–32</span><span class="section-number">22</span></div>
    </div>`
}
];

const stage = document.getElementById("stage");
const counter = document.getElementById("counter");
const slideTitle = document.getElementById("slideTitle");
const progressBar = document.getElementById("progressBar");
const notesPanel = document.getElementById("notesPanel");
const notesBody = document.getElementById("notesBody");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const notesToggle = document.getElementById("notesToggle");
const notesClose = document.getElementById("notesClose");
const fullscreenBtn = document.getElementById("fullscreenBtn");

let index = 0;

slides.forEach((slide, i) => {
  const el = document.createElement("section");
  el.className = `slide ${i === 0 ? "active" : ""}`;
  el.setAttribute("role", "group");
  el.setAttribute("aria-roledescription", "slide");
  el.setAttribute("aria-label", `${i + 1} of ${slides.length}: ${slide.title}`);
  el.innerHTML = slide.html;
  stage.appendChild(el);
});

const slideEls = [...document.querySelectorAll(".slide")];

function updateNotes() {
  const s = slides[index];
  notesBody.innerHTML = `
    <div class="note-block">
      <div class="note-label">What to say</div>
      <div>${escapeHtml(s.notes).replace(/\n/g,"<br>")}</div>
    </div>
    <div class="note-block">
      <div class="note-label">Transition</div>
      <div>${escapeHtml(index < slides.length - 1 ? `Transition to “${slides[index + 1].title}” by following the next question in the research logic.` : "Close the defense and invite discussion.")}</div>
    </div>`;
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function render() {
  slideEls.forEach((el, i) => {
    el.classList.toggle("active", i === index);
    el.setAttribute("aria-hidden", i === index ? "false" : "true");
  });
  const n = index + 1;
  counter.textContent = `${String(n).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
  slideTitle.textContent = slides[index].title;
  progressBar.style.width = `${(n / slides.length) * 100}%`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
  updateNotes();
}

function go(delta){
  index = Math.max(0, Math.min(slides.length - 1, index + delta));
  render();
}

function goTo(target){
  index = Math.max(0, Math.min(slides.length - 1, target));
  render();
}

function toggleNotes(force){
  const shouldOpen = typeof force === "boolean" ? force : !notesPanel.classList.contains("open");
  notesPanel.classList.toggle("open", shouldOpen);
  notesPanel.setAttribute("aria-hidden", String(!shouldOpen));
}

async function toggleFullscreen(){
  try{
    if(!document.fullscreenElement){
      await document.documentElement.requestFullscreen();
    }else{
      await document.exitFullscreen();
    }
  }catch(e){}
}

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));
notesToggle.addEventListener("click", () => toggleNotes());
notesClose.addEventListener("click", () => toggleNotes(false));
fullscreenBtn.addEventListener("click", toggleFullscreen);

document.addEventListener("keydown", e => {
  const key = e.key;
  if(["ArrowRight","ArrowDown"," ","PageDown"].includes(key)){ e.preventDefault(); go(1); }
  if(["ArrowLeft","ArrowUp","PageUp"].includes(key)){ e.preventDefault(); go(-1); }
  if(key === "Home"){ e.preventDefault(); goTo(0); }
  if(key === "End"){ e.preventDefault(); goTo(slides.length - 1); }
  if(key.toLowerCase() === "f"){ e.preventDefault(); toggleFullscreen(); }
  if(key.toLowerCase() === "n"){ e.preventDefault(); toggleNotes(); }
  if(key === "Escape" && notesPanel.classList.contains("open")) toggleNotes(false);
});

let touchX = null;
stage.addEventListener("touchstart", e => { touchX = e.changedTouches[0].clientX; }, {passive:true});
stage.addEventListener("touchend", e => {
  if(touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if(Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
  touchX = null;
});

render();
