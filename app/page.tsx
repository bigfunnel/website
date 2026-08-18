const stages=[
  ["01","Campaigns","Create approved WhatsApp campaigns, segment the right audience and send from one workspace."],
  ["02","Conversations","See every reply in context. Your team knows who responded, what they received and what to do next."],
  ["03","CRM tracking","Move every lead through a clear stage—from new enquiry to follow-up, qualified and won."],
  ["04","Management","Assign owners, add notes, schedule follow-ups and see the status of every opportunity."],
];
const roadmap=[
  ["Instagram","DMs and campaign responses"],
  ["Facebook","Comments, messages and enquiries"],
  ["Meta Lead Ads","Leads captured directly into CRM"],
  ["More connectors","Forms, calls, email and commerce"],
];
function Mark(){return <span className="mark" aria-hidden="true"><i/><i/><i/></span>}
function Logo(){return <a className="logo" href="#top"><Mark/><span><b>BIG FUNNEL</b><small>BY ARTHATECH SOFTWARES LLP</small></span></a>}
export default function Home(){return <main id="top">
  <header><Logo/><nav><a href="#product">Product</a><a href="#workflow">How it works</a><a href="#roadmap">Coming next</a></nav><a className="top-cta" href="mailto:hello@bigfunnel.co?subject=Big%20Funnel%20WhatsApp%20demo">Book a demo <span>↗</span></a></header>

  <section className="hero">
    <div className="hero-copy"><span className="eyebrow"><i/> WHATSAPP CAMPAIGNS + CRM</span><h1>Turn WhatsApp<br/>conversations into<br/><em>managed revenue.</em></h1><p>Run WhatsApp campaigns, track every response and manage every lead from first message to final outcome—all in one focused workspace.</p><div className="hero-actions"><a href="mailto:hello@bigfunnel.co?subject=See%20Big%20Funnel">See Big Funnel <b>↗</b></a><small>Built for teams that sell on WhatsApp</small></div></div>
    <div className="product-scene" aria-label="Big Funnel WhatsApp campaign and CRM interface">
      <div className="phone"><div className="phone-head"><span className="avatar">BF</span><span><b>Big Funnel</b><small>WhatsApp Business</small></span><i>•••</i></div><div className="chat"><small>CAMPAIGN · AUGUST LAUNCH</small><p>Hi Priya, the new collection is live. Would you like the catalogue?</p><span>Delivered · 10:42</span><div className="reply">Yes, please share it.</div></div></div>
      <div className="crm-card"><div className="crm-top"><span>LEAD PROFILE</span><i>QUALIFIED</i></div><h3>Priya Shah</h3><p>WhatsApp campaign · replied 2m ago</p><div className="crm-row"><small>OWNER</small><b>Aarav Mehta</b></div><div className="crm-row"><small>STAGE</small><b>Qualified lead</b></div><div className="crm-row"><small>NEXT ACTION</small><b>Call today · 4:30 PM</b></div><div className="progress"><i/></div></div>
      <div className="float-metric"><small>RESPONSE RATE</small><b>38.4%</b><span>↑ 8.2%</span></div>
    </div>
  </section>

  <section className="strip"><span>CAMPAIGNS</span><i/> <span>REPLIES</span><i/> <span>LEADS</span><i/> <span>FOLLOW-UPS</span><i/> <span>OUTCOMES</span></section>

  <section id="product" className="problem"><span className="section-label">01 / THE PROBLEM</span><h2>Your customers reply on WhatsApp.<br/><em>Your sales process should not disappear there.</em></h2><div className="problem-grid"><p>Campaigns create conversations. But without ownership, stages and follow-ups, interested customers become forgotten chats. Big Funnel connects WhatsApp marketing with the discipline of a CRM.</p><div>{[["Scattered replies","No clear sales owner"],["Missed follow-ups","Intent goes cold"],["No pipeline view","Results stay invisible"]].map((x,i)=><article key={x[0]}><span>0{i+1}</span><b>{x[0]}</b><small>{x[1]}</small></article>)}</div></div></section>

  <section id="workflow" className="workflow"><div className="workflow-head"><span className="section-label">02 / ONE CONNECTED WORKFLOW</span><h2>From campaign<br/>to customer.</h2><p>Everything your team needs to market on WhatsApp and manage the leads that respond—without moving between disconnected tools.</p></div><div className="stage-list">{stages.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></article>)}</div></section>

  <section className="control"><div className="control-copy"><span className="section-label">03 / CRM-LEVEL CONTROL</span><h2>Every lead has a<br/>next move.</h2><p>Big Funnel gives your team a structured operating layer around WhatsApp—not just another inbox.</p><div className="feature-grid">{[["Pipeline stages","Know exactly where every lead stands."],["Lead ownership","Assign every opportunity to the right person."],["Follow-up tasks","Never rely on memory to close a conversation."],["Campaign tracking","Connect replies and outcomes back to campaigns."]].map(x=><article key={x[0]}><i>✓</i><div><b>{x[0]}</b><p>{x[1]}</p></div></article>)}</div></div><div className="pipeline"><div className="pipeline-head"><b>WHATSAPP PIPELINE</b><span><i/> LIVE</span></div>{[["NEW","24","Rohan Mehta","Catalogue request"],["CONTACTED","18","Ananya Rao","Pricing shared"],["QUALIFIED","11","Kabir Jain","Demo booked"],["WON","7","Neha Iyer","Payment received"]].map((r,i)=><div className="pipeline-row" key={r[0]}><span>{r[0]} <b>{r[1]}</b></span><div><i>{r[2].split(" ").map(v=>v[0]).join("")}</i><p><b>{r[2]}</b><small>{r[3]} · WhatsApp</small></p></div><strong>{["2m","18m","1h","Today"][i]}</strong></div>)}</div></section>

  <section className="results"><span className="section-label">04 / WHAT YOU CAN CONTROL</span><div className="result-title"><h2>See the work.<br/>Improve the outcome.</h2><p>Give marketing and sales one shared view of campaign performance, conversations and pipeline movement.</p></div><div className="result-grid"><article><small>CAMPAIGN REPLIES</small><strong>1,284</strong><span>Across active WhatsApp campaigns</span></article><article><small>LEADS ASSIGNED</small><strong>96%</strong><span>With a clear owner</span></article><article><small>FOLLOW-UPS DUE</small><strong>18</strong><span>Visible before they are missed</span></article></div></section>

  <section id="roadmap" className="roadmap"><div className="roadmap-head"><span className="section-label">05 / COMING NEXT</span><h2>WhatsApp first.<br/><em>More channels next.</em></h2><p>Big Funnel is focused on doing one job well today. Upcoming releases will bring more customer channels into the same lead management system.</p></div><div className="roadmap-list">{roadmap.map((r,i)=><article key={r[0]}><span>0{i+1}</span><h3>{r[0]}</h3><p>{r[1]}</p><small>UPCOMING</small></article>)}</div></section>

  <section className="offer"><div><span className="section-label">06 / BIG FUNNEL FOR WHATSAPP</span><h2>One product.<br/>One clear sales system.</h2><p>We configure Big Funnel around your WhatsApp campaigns, lead stages, team ownership and follow-up process.</p><a href="mailto:hello@bigfunnel.co?subject=Big%20Funnel%20WhatsApp%20demo">Book a product walkthrough <b>↗</b></a></div><aside><small>INCLUDED</small><h3>WhatsApp Campaigns<br/>+ CRM</h3><ul><li>Campaign creation and audience segments</li><li>Reply and conversation tracking</li><li>Lead profiles and pipeline stages</li><li>Team assignment and internal notes</li><li>Follow-up tasks and reminders</li><li>Campaign-to-outcome reporting</li></ul><p>Pricing is based on your team size, campaign volume and WhatsApp usage.</p></aside></section>

  <section className="closing"><Logo/><span>BIG FUNNEL FOR WHATSAPP</span><h2>Stop losing leads<br/>inside the chat.</h2><p>Run the campaign. Capture the reply. Manage the opportunity.</p><a href="mailto:hello@bigfunnel.co?subject=Start%20with%20Big%20Funnel">Start with Big Funnel ↗</a></section>
  <footer><Logo/><p>WHATSAPP CAMPAIGNS · CRM TRACKING<br/>LEAD MANAGEMENT · FOLLOW-UPS</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@bigfunnel.co">Contact</a></div><small>© 2026 ARTHATECH SOFTWARES LLP</small></footer>
</main>}
