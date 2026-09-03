import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";

const expertise = [
  { number: "01", title: "Identity & Access", copy: "IAM, least privilege, RBAC, MFA, Conditional Access, privileged access, access reviews and Zero Trust identity." },
  { number: "02", title: "Detection & Response", copy: "Microsoft Sentinel, Wazuh, KQL, centralised logging, threat detection, incident triage and investigation." },
  { number: "03", title: "Cloud Security Engineering", copy: "AWS, Microsoft Azure and Google Cloud hardening, segmentation, encryption, secure architecture and attack surface reduction." },
  { number: "04", title: "Governance & Assurance", copy: "NIST CSF, CIS Benchmarks, ISO 27001, SOC 2, PCI DSS, risk assessment, audit readiness and evidence collection." },
];

const credentials = [
  ["Diploma in Cybersecurity", "AltSchool Africa", "12-month programme"],
  ["Cybersecurity Programme", "ALX", "Completed"],
  ["Google Cloud Cybersecurity Professional Certificate", "Google Skills Boost", "Professional certificate"],
  ["Google Cybersecurity Professional Certificate", "Google", "Professional certificate"],
  ["AWS Certified Cloud Practitioner", "Amazon Web Services", "Cloud certification"],
  ["Microsoft Certified: Azure Fundamentals", "Microsoft", "AZ-900"],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-dark">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> CLOUD SECURITY ENGINEER • FOUNDER • EDUCATOR</p>
              <h1>Securing cloud systems.<br /><span>Building practical security products.</span></h1>
              <p className="hero-lede">I’m Kafayat “Kaffy” Faniran, a cloud security professional working across IAM, security monitoring, threat detection, incident response, Zero Trust and cloud governance across AWS, Microsoft Azure and Google Cloud.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my security work <span>↗</span></a>
                <a className="button button-ghost" href="https://github.com/KaffyDevelops" target="_blank" rel="noreferrer">View GitHub</a>
              </div>
              <p className="availability"><span /> Open to cloud security opportunities, technical collaborations and speaking.</p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="signal-card signal-top"><small>FOCUS</small><strong>Cloud Security</strong><span>AWS • Azure • GCP</span></div>
              <div className="visual-core"><span className="core-ring ring-one" /><span className="core-ring ring-two" /><div className="monogram">KF</div><div className="scan-line" /></div>
              <div className="signal-card signal-bottom"><small>BUILDING</small><strong>The Cloud Forge</strong><span>AI • Security • EdTech</span></div>
              <div className="grid-dots" />
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            <div><strong>10,500+</strong><span>LinkedIn followers</span></div>
            <div><strong>2,500+</strong><span>Newsletter subscribers</span></div>
            <div><strong>3</strong><span>Cloud ecosystems</span></div>
            <div><strong>Founder</strong><span>The Cloud Forge</span></div>
          </div>
        </section>

        <section id="work" className="section section-light">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow dark">SELECTED SECURITY WORK</p><h2>Evidence before claims.</h2></div>
              <p>Deep technical case studies showing the problem, risk, architecture, implementation, validation and lessons behind the work.</p>
            </div>
            <div className="work-grid">
              <Link href="/work/azure-soc-lab" className="project-card project-featured">
                <div className="project-meta"><span>01</span><span>INDEPENDENT SECURITY LAB</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>SecurityAlert<br/>| where Severity in ("High", "Medium")<br/>| summarize count() by AlertName</code><div className="alert-chip">SENTINEL • KQL</div></div>
                <div className="project-copy"><h3>Microsoft Sentinel SOC & Threat Detection</h3><p>Log ingestion, custom KQL detection, incident simulation and investigation using Microsoft Sentinel.</p><div className="tag-row"><span>Microsoft Sentinel</span><span>Entra ID</span><span>KQL</span><span>Incident Response</span></div><strong className="text-link">Read technical case study ↗</strong></div>
              </Link>
              <Link href="/work/enterprise-iam-transformation" className="project-card">
                <div className="project-meta"><span>02</span><span>FICTIONAL ENTERPRISE SCENARIO</span></div>
                <div className="project-art iam-art"><div className="iam-node root">IDENTITY</div><div className="iam-node n1">RBAC</div><div className="iam-node n2">MFA</div><div className="iam-node n3">PIM</div><div className="iam-node n4">REVIEWS</div></div>
                <div className="project-copy"><h3>Enterprise Azure IAM Transformation</h3><p>Current-state assessment and target IAM design addressing excessive privilege, stale access, weak authentication and governance gaps.</p><div className="tag-row"><span>Entra ID</span><span>RBAC</span><span>Conditional Access</span><span>PIM</span></div><strong className="text-link">Explore the IAM case study ↗</strong></div>
              </Link>
              <Link href="/work/cloud-forge-security" className="project-card">
                <div className="project-meta"><span>03</span><span>PRODUCT DEVELOPMENT</span></div>
                <div className="project-art forge-art"><div className="forge-stack"><span>AI COACH</span><span>ASSESSMENT</span><span>EVIDENCE</span><span>RLS + SECURITY</span></div><div className="forge-orbit">CF</div></div>
                <div className="project-copy"><h3>Building & Securing The Cloud Forge</h3><p>Security architecture for an AI-powered cloud security learning platform, from Row Level Security and secrets to evidence handling and secure product workflows.</p><div className="tag-row"><span>Next.js</span><span>Supabase</span><span>PostgreSQL</span><span>AI Security</span></div><strong className="text-link">View founder case study ↗</strong></div>
              </Link>
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-dark expertise-section">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">TECHNICAL CAPABILITY</p><h2>Security organised around the problems that matter.</h2></div>
            <div className="expertise-grid">{expertise.map((item) => <article className="expertise-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
          </div>
        </section>

        <section id="forge" className="section forge-section">
          <div className="container forge-grid">
            <div className="forge-copy"><p className="eyebrow dark">FOUNDER CASE STUDY</p><h2>Closing the gap between learning security and proving you can do the work.</h2><p>The Cloud Forge is an AI-powered, project-first learning platform designed to help aspiring cloud security professionals practise realistic work, receive contextual guidance, validate their skills and produce evidence employers can assess.</p><div className="formula"><span>LEARN</span><b>→</b><span>BUILD</span><b>→</b><span>DOCUMENT</span><b>→</b><span>DEMONSTRATE</span></div><Link href="/work/cloud-forge-security" className="button button-dark">Explore the product & security architecture ↗</Link></div>
            <div className="forge-panel"><div className="panel-label">THE CLOUD FORGE / SECURITY LAYERS</div><div className="layer"><span>01</span><strong>Identity & Access</strong><small>Authentication, authorisation, RLS</small></div><div className="layer"><span>02</span><strong>Evidence Security</strong><small>Uploads, ownership, storage boundaries</small></div><div className="layer"><span>03</span><strong>Application Security</strong><small>Secrets, validation, server-side controls</small></div><div className="layer"><span>04</span><strong>Operational Security</strong><small>Logging, monitoring, backup, CI/CD</small></div></div>
          </div>
        </section>

        <section id="credentials" className="section section-light credentials-section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow dark">CREDENTIALS</p><h2>Structured learning. Applied through projects.</h2></div><p>Credentials support the technical story, but the portfolio prioritises demonstrable security work and evidence.</p></div>
            <div className="credential-grid">{credentials.map(([name, issuer, detail], index) => <article className="credential-card" key={name}><span className="credential-index">0{index + 1}</span><div><h3>{name}</h3><p>{issuer}</p><small>{detail}</small></div></article>)}</div>
          </div>
        </section>

        <section id="writing" className="section writing-section">
          <div className="container writing-grid">
            <div><p className="eyebrow dark">WRITING & PUBLIC EDUCATION</p><h2>Technical enough for engineers. Clear enough for decision-makers.</h2></div>
            <div className="publication-list"><article><span>01</span><div><small>NEWSLETTER</small><h3>CEO Cloud Security Memo</h3><p>Cloud security, resilience, IAM and cyber risk translated into practical guidance for business leaders.</p><strong>2,500+ subscribers</strong></div></article><article><span>02</span><div><small>TECHNICAL EDUCATION</small><h3>Cloud Beginners</h3><p>Practical cloud and cybersecurity education focused on clarity, employability and real-world application.</p></div></article><article><span>03</span><div><small>IN PRODUCTION</small><h3>The A–Z of Identity and Access Management</h3><p>Cloud-specific practical editions for Microsoft Azure, AWS and Google Cloud.</p></div></article></div>
          </div>
        </section>

        <section className="section cta-section section-dark">
          <div className="container cta-grid"><div><p className="eyebrow">WORK WITH ME</p><h2>Looking for someone who can connect cloud security, product thinking and clear communication?</h2></div><div><p>I’m open to cloud security engineering opportunities, technical collaborations, cybersecurity education, speaking and product partnerships.</p><a className="button button-primary" href="mailto:kaffy@cloudbeginners.info">Start a conversation ↗</a></div></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
