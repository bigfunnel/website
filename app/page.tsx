const channelNames = ["META", "WHATSAPP", "CALLS", "FORMS", "EMAIL", "INSTAGRAM", "CHECKOUT", "SMS"];
const capabilities = [
  ["01", "Capture", "Every lead enters one system, enriched with its source, context and intent."],
  ["02", "Decide", "Scoring and routing logic identifies who matters and who should act next."],
  ["03", "Move", "Automations turn intent into immediate, owned follow-up across every channel."],
  ["04", "Measure", "Revenue attribution closes the loop from first touch to won business."],
];
const teams = [
  ["Marketing", "See which spend creates pipeline—not just clicks."],
  ["Sales", "Work one prioritized queue with context already attached."],
  ["Operations", "Design the rules once. Know they run every time."],
  ["Leadership", "Read demand, execution and revenue in one view."],
];

function Mark(){return <span className="bf-mark" aria-hidden="true"><i></i><i></i><i></i></span>}
function Brand(){return <a className="bf-brand" href="#top" aria-label="Big Funnel home"><Mark/><span><b>BIG FUNNEL</b><small>BY ARTHATECH SOFTWARES LLP</small></span></a>}

export default function Home(){return <main id="top" className="site">
  <header className="nav-shell"><Brand/><nav aria-label="Main navigation"><a href="#system">Platform</a><a href="#outcomes">Outcomes</a><a href="#pricing">Pricing</a></nav><a className="nav-action" href="mailto:hello@bigfunnel.co?subject=Big%20Funnel%20deployment">Request access <span>↗</span></a></header>

  <section className="hero-v2">
    <div className="ambient ambient-a"></div><div className="ambient ambient-b"></div>
    <div className="hero-kicker"><span>Revenue infrastructure</span><span className="availability"><i></i>Accepting deployments</span></div>
    <h1>More signal.<br/><em>Less chase.</em></h1>
    <div className="hero-bottom"><p>Big Funnel turns fragmented demand into one intelligent revenue system—built around how your team actually sells.</p><a className="primary-link" href="mailto:hello@bigfunnel.co?subject=Build%20our%20revenue%20system">Build your system <b>↗</b></a></div>
    <div className="signal-stage" aria-label="Many lead signals converging into one revenue system"><div className="signal-orbit">{channelNames.map((c,i)=><span key={c} style={{"--i":i} as React.CSSProperties}>{c}</span>)}</div><div className="signal-core"><Mark/><small>ONE SYSTEM</small></div><div className="signal-ray ray-one"></div><div className="signal-ray ray-two"></div></div>
    <div className="scroll-cue"><i></i><span>SCROLL TO ENTER</span></div>
  </section>

  <section className="channel-rail"><p>ONE OPERATING LAYER ACROSS</p><div>{channelNames.map(c=><span key={c}>{c}</span>)}</div></section>

  <section className="manifesto">
    <span className="section-no">01 / THE PROBLEM</span>
    <h2>Demand is not the problem.<br/><em>Disconnection is.</em></h2>
    <div className="manifesto-grid"><p>Leads arrive with intent, then disappear into tabs, inboxes, sheets and handoffs. By the time someone owns the next move, the moment has passed.</p><div className="loss-list"><span><i>01</i>Scattered sources<b>NO SHARED CONTEXT</b></span><span><i>02</i>Manual ownership<b>SLOW FIRST ACTION</b></span><span><i>03</i>Broken attribution<b>INVISIBLE REVENUE</b></span></div></div>
  </section>

  <section id="system" className="system-section">
    <div className="system-intro"><span className="section-no">02 / THE SYSTEM</span><h2>One engine.<br/>Every signal.</h2><p>Big Funnel is configured around your acquisition, sales and communication stack—not forced on top of it.</p></div>
    <div className="system-visual">
      <div className="visual-top"><span>LIVE REVENUE GRAPH</span><span><i></i>ALL SYSTEMS OPERATIONAL</span></div>
      <div className="flow-map"><div className="flow-sources">{["Meta / 248","WhatsApp / 181","Website / 96","Calls / 72"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}<i></i></span>)}</div><div className="flow-lines"><i></i><i></i><i></i><i></i></div><div className="flow-hub"><Mark/><b>BIG FUNNEL</b><small>ROUTING ENGINE</small></div><div className="flow-output"><span><small>QUALIFIED TODAY</small><b>147</b></span><span><small>MEDIAN FIRST ACTION</small><b>42s</b></span><span><small>ATTRIBUTED PIPELINE</small><b>₹48.2L</b></span></div></div>
      <div className="visual-bottom"><span>CAPTURE</span><i></i><span>ENRICH</span><i></i><span>SCORE</span><i></i><span>ROUTE</span><i></i><span>ATTRIBUTE</span></div>
    </div>
  </section>

  <section className="capabilities"><span className="section-no">03 / THE OPERATING MODEL</span><div className="cap-head"><h2>From arrival<br/>to revenue.</h2><p>A closed operating loop that gives every lead context, every next step an owner, and every outcome a source.</p></div><div className="cap-list">{capabilities.map(c=><article key={c[0]}><span>{c[0]}</span><h3>{c[1]}</h3><p>{c[2]}</p><b>↗</b></article>)}</div></section>

  <section id="outcomes" className="outcomes">
    <span className="section-no">04 / THE CONTROL ROOM</span><div className="outcome-title"><h2>Know what<br/>moves revenue.</h2><p>Every number earns its place. No vanity dashboards. No weekly archaeology.</p></div>
    <div className="metric-stage"><div className="metric-main"><small>ATTRIBUTED PIPELINE</small><strong>₹48.2L</strong><span><i></i>+18.4% THIS MONTH</span><div className="wave">{[28,40,34,49,45,62,57,73,69,88,82,96].map((h,i)=><i key={i} style={{height:`${h}%`}}></i>)}</div></div><div className="metric-side"><article><small>LEADS ASSIGNED</small><strong>97.4%</strong><div className="meter"><i></i></div></article><article><small>MEDIAN FIRST ACTION</small><strong>00:42</strong><span>↓ 61% FASTER</span></article></div></div>
  </section>

  <section className="team-section"><span className="section-no">05 / BUILT FOR ALIGNMENT</span><div className="team-head"><h2>Four teams.<br/>One truth.</h2></div><div className="team-grid">{teams.map((t,i)=><article key={t[0]}><span>0{i+1}</span><h3>{t[0]}</h3><p>{t[1]}</p><b>↗</b></article>)}</div></section>

  <section id="pricing" className="engagement">
    <span className="section-no">06 / ENGAGEMENT</span><div className="engage-copy"><h2>Built with you.<br/>Not handed to you.</h2><p>Every Big Funnel deployment starts with your revenue motion—sources, teams, SLAs, stages and attribution. We design the system, connect it and make it operational.</p><a className="primary-link light-button" href="mailto:hello@bigfunnel.co?subject=Scope%20our%20Big%20Funnel%20deployment">Scope a deployment <b>↗</b></a></div><div className="engage-card"><span>COMMAND DEPLOYMENT</span><strong>₹15,000</strong><small>ONE-TIME SYSTEM BUILD</small><ul><li>Revenue architecture workshop</li><li>Source and communication integrations</li><li>Lead scoring and routing logic</li><li>Automation and SLA design</li><li>Attribution and reporting layer</li></ul><p>Ongoing platform plans from ₹9,999 / month</p></div>
  </section>

  <section className="closing"><Mark/><span>BIG FUNNEL BY ARTHATECH SOFTWARES LLP</span><h2>Turn every signal<br/>into the next move.</h2><a href="mailto:hello@bigfunnel.co?subject=Deploy%20Big%20Funnel">Start the conversation <b>↗</b></a></section>
  <footer><Brand/><p>CRM · MARKETING · SALES · AUTOMATION<br/>COMMUNICATIONS · ANALYTICS</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@bigfunnel.co">Contact</a></div><small>© 2026 ARTHATECH SOFTWARES LLP</small></footer>
</main>}
