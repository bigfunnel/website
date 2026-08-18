const sources = [
  ["∞", "Meta lead ad", "New inquiry · no owner yet", "blue"],
  ["◉", "WhatsApp reply", "Asked for pricing", "green"],
  ["☎", "Inbound call", "Callback risk", "teal"],
  ["G", "Google form", "High intent search", "blue"],
  ["◎", "Instagram DM", "Brochure request", "pink"],
  ["M", "Email inquiry", "Product questions", "red"],
  ["T", "Website form", "Demo requested", "violet"],
  ["f", "Facebook comment", "Asked for details", "blue"],
  ["S", "Checkout lead", "Abandoned purchase", "green"],
  ["in", "LinkedIn lead", "Asked for a demo", "blue"],
  ["SMS", "SMS response", "Replied after offer", "violet"],
  ["↗", "Old CRM lead", "Untouched for 3 days", "orange"],
];

const audiences = [
  ["01", "For CMOs", "See which channels create pipeline, where CPL is drifting, and which campaigns deserve more budget."],
  ["02", "For Sales Heads", "Track ownership, response SLAs, rep load, and every lead that is waiting for action."],
  ["03", "For Founders", "Replace scattered updates with one clean view of demand, action, and revenue movement."],
  ["04", "For Ops", "Automate routing rules, dedupe messy sources, and keep every workflow accountable."],
];

const plans = [
  {name:"Starter", price:"₹4,999", note:"/ month", items:["Unified lead inbox", "Basic source tagging", "Daily pipeline summary"], cta:"Start"},
  {name:"Command", price:"₹15,000", note:"setup", featured:true, items:["Done-for-you Meta, WhatsApp, form, and call setup", "Lead scoring, routing rules, and SLA alerts", "Campaign ROI dashboard and sales leaderboard", "Monthly plan from ₹9,999 after deployment"], cta:"Deploy Command"},
  {name:"Scale", price:"Custom", note:"", items:["Multi-location routing", "Advanced attribution views", "Custom automations and reviews"], cta:"Talk to us"},
];

function Logo({inverse=false}:{inverse?:boolean}) {
  return <a href="#top" className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="Big Funnel home"><span className="brand-mark"><i></i><b>BF</b></span><span><strong>Big Funnel</strong><small>by Arthatech Softwares LLP</small></span></a>;
}

export default function Home() {
  return <main id="top">
    <header className="topbar"><Logo/><nav aria-label="Main navigation"><a href="#platform">Platform</a><a href="#teams">Teams</a><a href="#pricing">Pricing</a><a className="nav-cta" href="mailto:hello@bigfunnel.co?subject=Deploy%20Big%20Funnel">Book a deployment</a></nav></header>
    <aside className="progress" aria-label="Page progress"><a href="#chaos"><span>01</span>Scattered leads</a><a href="#platform"><span>02</span>Organized pipeline</a><a href="#teams"><span>03</span>Measured operations</a><a href="#pricing"><span>04</span>Revenue control</a></aside>

    <section id="chaos" className="hero grid-bg">
      <div className="hero-card reveal"><div className="eyebrow">Before Big Funnel</div><h1>Your leads are<br/>everywhere.</h1><p>Meta, WhatsApp, calls, forms, Instagram, email, and checkout signals are all real demand. The problem is that they arrive scattered, unowned, and easy to lose.</p><div className="pills"><span>Different channels</span><span>No single owner</span><span>Slow follow-up</span></div></div>
      <div className="source-field" aria-label="Scattered lead sources">{sources.map((s,i)=><article className={`source source-${i+1}`} key={s[1]}><span className={`source-icon ${s[3]}`}>{s[0]}</span><span><strong>{s[1]}</strong><small>{s[2]}</small></span></article>)}</div>
    </section>

    <section id="platform" className="organize dark-grid">
      <div className="section-copy light"><div className="eyebrow">Big Funnel organizes</div><h2>Scattered signals become one ordered queue.</h2><p>Big Funnel captures each source, labels it, scores it, and routes it into a clean operating lane so sales can act immediately.</p><div className="steps"><span>Capture</span><i></i><span>Deduplicate</span><i></i><span>Score</span><i></i><span>Route</span></div></div>
      <div className="engine"><div className="engine-head"><Logo inverse/><span className="live">● LIVE</span></div><div className="engine-body"><div className="inbox"><h3>Unified pipeline <small>12 active leads</small></h3>{[["PS","Priya Shah","Meta · 92% fit","Assigned"],["RM","Rohan Mehta","WhatsApp · pricing","Reply sent"],["AR","Aditi Rao","Google · callback","Booked"],["KJ","Kabir Jain","Instagram · sequence","Day 1"]].map((l,i)=><div className="lead" key={l[1]}><b>{l[0]}</b><span><strong>{l[1]}</strong><small>{l[2]}</small></span><em>{l[3]}</em></div>)}</div><div className="score"><span>LEAD SCORE</span><strong>92</strong><div></div><p>High intent<br/><b>Route to senior sales</b></p></div></div><div className="engine-foot"><span>42s<small>median first action</small></span><span>97%<small>leads assigned</small></span><span>3.2x<small>best campaign ROI</small></span></div></div>
    </section>

    <section className="measure grid-bg"><div className="section-copy"><div className="eyebrow">Sales motion</div><h2>The pipeline becomes measurable.</h2><p>Every rep, source, campaign, SLA, and outcome is visible in one place. Marketing sees what converts. Sales sees what to do next.</p></div><div className="analytics"><div className="analytics-top"><span><small>PIPELINE VALUE</small><strong>₹48.2L</strong><em>+18.4%</em></span><span><small>LEAD TO MEETING</small><strong>31%</strong><em>+6.2%</em></span><span><small>RESPONSE SLA</small><strong>94%</strong><em>On track</em></span></div><div className="chart"><div className="bars">{[42,58,51,72,63,88,81,96].map((h,i)=><i key={i} style={{height:`${h}%`}}></i>)}</div><div className="chart-copy"><small>ATTRIBUTED REVENUE</small><strong>₹12.6L</strong><span>Meta 46% · Google 31% · Other 23%</span></div></div></div></section>

    <section className="control"><div className="section-copy centered"><div className="eyebrow">Business result</div><h2>Control replaces chasing.</h2><p>The CMO gets attribution. The sales head gets ownership. The team gets a clean daily queue instead of a dozen disconnected inboxes.</p></div><div className="results"><article><span>CMO VIEW</span><strong>3.2x</strong><p>best-performing campaign</p><i className="spark">⌁⌁⌁⌁</i></article><article><span>SALES VIEW</span><strong>42 sec</strong><p>median first action</p><i className="ring">94%</i></article><article><span>OPS VIEW</span><strong>97%</strong><p>leads automatically assigned</p><i className="ticks">✓ ✓ ✓ ✓</i></article></div></section>

    <section className="trusted"><p>Trusted by teams who cannot lose leads.</p><div><span>ASTER HOMES</span><span>NORTHLINE</span><span>URBANNEST</span><span>SCALEFIT</span><span>VEDA AUTO</span><span>CLOUDNINE</span></div></section>

    <section id="teams" className="teams"><div className="section-copy"><div className="eyebrow">Built for the revenue team</div><h2>One operating layer for the whole revenue team.</h2><p>Big Funnel is designed around the people who feel lead chaos every day: marketing, sales, founders, and operations.</p></div><div className="audience-grid">{audiences.map(a=><article key={a[1]}><span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p><b>↗</b></article>)}</div></section>

    <section id="pricing" className="pricing dark-grid"><div className="section-copy light centered"><div className="eyebrow">Deployment-first pricing</div><h2>Pricing that starts with deployment.</h2><p>Big Funnel is not sold as a login and a tutorial. The system is configured around your lead sources, team, and follow-up motion.</p></div><div className="plans">{plans.map(p=><article className={p.featured?"featured":""} key={p.name}>{p.featured&&<span className="popular">MOST POPULAR</span>}<h3>{p.name}</h3><div className="price">{p.price}<small>{p.note}</small></div><ul>{p.items.map(x=><li key={x}>✓ <span>{x}</span></li>)}</ul><a href={`mailto:hello@bigfunnel.co?subject=${encodeURIComponent(`${p.cta} — Big Funnel`)}`}>{p.cta}<span>↗</span></a></article>)}</div></section>

    <section className="final"><div className="eyebrow">What Big Funnel sells</div><h2>A revenue operating layer<br/>for lead-heavy teams.</h2><p>Not another inbox. Not another dashboard for someone to ignore. Big Funnel turns fragmented demand into routed action and measurable revenue.</p><a className="button" href="mailto:hello@bigfunnel.co?subject=Deploy%20Big%20Funnel">Deploy Big Funnel <span>↗</span></a></section>
    <footer><div><Logo/><p>CRM · Marketing · Sales · Automation<br/>Communications · Analytics</p></div><div><h4>LEGAL</h4><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></div><div><h4>CONTACT</h4><a href="mailto:hello@bigfunnel.co">hello@bigfunnel.co</a><p>© 2026 Arthatech Softwares LLP</p></div></footer>
  </main>;
}
