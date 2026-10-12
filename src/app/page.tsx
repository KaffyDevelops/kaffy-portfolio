import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { MotionReveal } from "@/components/MotionReveal";
import { kaffyPortrait } from "@/lib/portrait";

const expertise = [
  {
    number: "01",
    title: "IAM Engineering",
    copy: "Microsoft Entra ID, Azure RBAC, PIM, Conditional Access, access reviews, guest governance, workload identities and Microsoft Graph PowerShell automation.",
  },
  {
    number: "02",
    title: "Detection & Response",
    copy: "Microsoft Sentinel, KQL, centralised logging, threat detection, incident triage, investigation and evidence-led response.",
  },
  {
    number: "03",
    title: "Cloud Security Engineering",
    copy: "AWS, Microsoft Azure and Google Cloud hardening, segmentation, encryption, Terraform, secure architecture and attack-surface reduction.",
  },
  {
    number: "04",
    title: "Governance & Assurance",
    copy: "NIST CSF, CIS Benchmarks, ISO 27001, SOC 2, PCI DSS, risk assessment, audit readiness and defensible evidence collection.",
  },
];

const iamCapabilities = [
  ["IDENTITY INVENTORY", "Build a trustworthy view of users, guests, privileged roles and workload identities."],
  ["PRIVILEGED ACCESS", "Design around least privilege, PIM, eligibility, activation controls and auditable administrative access."],
  ["CONDITIONAL ACCESS", "Translate identity risk into enforceable access conditions, rollout logic and validation evidence."],
  ["ACCESS REVIEWS", "Turn access governance into repeatable decisions with ownership, evidence and remediation."],
  ["AZURE RBAC", "Identify direct assignments, review scope and reduce unnecessary standing access."],
  ["GRAPH AUTOMATION", "Use Microsoft Graph PowerShell to collect identity evidence and surface governance risks at scale."],
];

const credentials = [
  ["Cybersecurity Architecture Specialist", "IBM", "Professional Certificate"],
  ["Diploma in Cybersecurity", "AltSchool Africa", "12-month programme"],
  ["Cybersecurity Programme", "ALX", "Completed"],
  ["Google Cloud Cybersecurity Professional Certificate", "Google Skills Boost", "Professional Certificate"],
  ["Google Cybersecurity Professional Certificate", "Google", "Professional Certificate"],
  ["AWS Certified Cloud Practitioner", "Amazon Web Services", "Cloud certification"],
  ["Microsoft Certified: Azure Fundamentals", "Microsoft", "AZ-900"],
  ["Cybersecurity Bootcamp", "Zero To Mastery", "Completed"],
];

const launches = [
  {
    index: "01",
    label: "LIVE FOUNDER STARTUP",
    title: "My hands-on founder startup, The Cloud Forge.",
    copy: "I built The Cloud Forge to help cloud security learners move from theory to realistic projects, AI-guided practice, assessment and evidence they can actually show.",
    href: "https://www.thecloudforge.app",
    cta: "Explore The Cloud Forge",
    meta: "LIVE • CLOUD SECURITY LEARNING",
  },
  {
    index: "02",
    label: "NEW • AUTHOR",
    title: "I just published my first cybersecurity book.",
    copy: "Think Like a Cloud Security Engineer turns cloud security thinking into a practical guide you can use to approach real security problems with stronger judgement and structure.",
    href: "https://guide.thecloudforge.app",
    cta: "Get the book",
    meta: "THINK LIKE A CLOUD SECURITY ENGINEER",
  },
  {
    index: "03",
    label: "NEW • CYBERSECURITY AWARENESS",
    title: "I just launched HUMAN FIREWALL.",
    copy: "A scenario-based employee cybersecurity awareness simulation game that lets you practise decisions around phishing, impersonation, urgency, trust and everyday human risk.",
    href: "https://play.thekaffycyberconsulting.com",
    cta: "Play HUMAN FIREWALL",
    meta: "SCENARIO-BASED SECURITY SIMULATION",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-dark premium-hero">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy premium-hero-copy">
              <p className="eyebrow hero-kicker"><span className="status-dot" /> CLOUD SECURITY • IAM ENGINEERING • FOUNDER • AUTHOR</p>
              <h1>
                I secure cloud identities.
                <br />
                <span>I build what I believe security needs.</span>
              </h1>
              <p className="hero-lede">
                I’m Kafayat “Kaffy” Faniran. I work across cloud security and IAM engineering, build practical security products, publish what I learn, and turn technical security into evidence people can understand and trust.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">See what I’ve built <span>↗</span></a>
                <a className="button button-ghost" href="https://guide.thecloudforge.app" target="_blank" rel="noreferrer">Read my book</a>
              </div>
              <div className="hero-proof-row" aria-label="Current professional focus">
                <span>Entra ID & IAM</span>
                <span>The Cloud Forge • Live</span>
                <span>Author</span>
                <span>HUMAN FIREWALL • Live</span>
              </div>
            </div>

            <div className="hero-visual premium-profile">
              <div className="profile-frame">
                <div className="profile-grid-lines" aria-hidden="true" />
                <div className="profile-orbit orbit-one" aria-hidden="true" />
                <div className="profile-orbit orbit-two" aria-hidden="true" />
                <div className="portrait-shell">
                  <Image
                    src={kaffyPortrait}
                    alt="Professional portrait of Kafayat Kaffy Faniran"
                    width={560}
                    height={620}
                    unoptimized
                    priority
                    className="premium-portrait"
                  />
                </div>
                <div className="profile-signal signal-iam">
                  <small>IAM ENGINEERING</small>
                  <strong>Entra ID • PIM • Graph</strong>
                  <span>Identity governance in practice</span>
                </div>
                <div className="profile-signal signal-founder">
                  <small>FOUNDER</small>
                  <strong>The Cloud Forge</strong>
                  <span>Live hands-on security platform</span>
                </div>
                <div className="profile-signal signal-author">
                  <small>AUTHOR</small>
                  <strong>Think Like a Cloud Security Engineer</strong>
                  <span>Published</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="capability-marquee" aria-hidden="true">
          <div>
            <span>IDENTITY GOVERNANCE</span><i>•</i><span>CLOUD SECURITY</span><i>•</i><span>MICROSOFT ENTRA ID</span><i>•</i><span>FOUNDER</span><i>•</i><span>AUTHOR</span><i>•</i><span>DETECTION ENGINEERING</span><i>•</i><span>ZERO TRUST</span><i>•</i><span>SECURITY EDUCATION</span><i>•</i>
            <span>IDENTITY GOVERNANCE</span><i>•</i><span>CLOUD SECURITY</span><i>•</i><span>MICROSOFT ENTRA ID</span><i>•</i><span>FOUNDER</span><i>•</i><span>AUTHOR</span><i>•</i><span>DETECTION ENGINEERING</span><i>•</i><span>ZERO TRUST</span><i>•</i><span>SECURITY EDUCATION</span><i>•</i>
          </div>
        </div>

        <section className="proof-strip premium-proof-strip">
          <div className="container proof-grid proof-grid-five">
            <div><strong>10,500+</strong><span>LinkedIn followers</span></div>
            <div><strong>2,500+</strong><span>Newsletter subscribers</span></div>
            <div><strong>7</strong><span>Flagship security projects</span></div>
            <div><strong>Founder</strong><span>The Cloud Forge</span></div>
            <div><strong>Author</strong><span>Cybersecurity book</span></div>
          </div>
        </section>

        <section id="now" className="section momentum-section">
          <div className="container">
            <div className="section-heading split-heading premium-section-heading">
              <div>
                <p className="eyebrow dark">WHAT I’M DOING NOW</p>
                <h2>My work is moving from ideas to things you can use.</h2>
              </div>
              <p>I’m building in public through products, technical projects, education and writing. These are three of the clearest examples of what I’ve shipped recently.</p>
            </div>
            <div className="momentum-grid">
              {launches.map((item, index) => (
                <MotionReveal key={item.title} delay={index * 90}>
                  <a className="momentum-card" href={item.href} target="_blank" rel="noreferrer">
                    <div className="momentum-top"><span>{item.index}</span><small>{item.label}</small></div>
                    <div className="momentum-symbol" aria-hidden="true">{index === 0 ? "CF" : index === 1 ? "BK" : "HF"}</div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <div className="momentum-meta">{item.meta}</div>
                    <strong>{item.cta} ↗</strong>
                  </a>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="iam" className="section iam-signature-section section-dark">
          <div className="container">
            <div className="iam-signature-grid">
              <MotionReveal>
                <div>
                  <p className="eyebrow">IAM ENGINEERING</p>
                  <h2>Identity is where I go deep.</h2>
                  <p className="iam-lede">
                    I approach IAM as an engineering problem, not a checklist. Who has access? Why? For how long? Through which path? What happens when access changes? And what evidence proves the decision was enforced?
                  </p>
                  <div className="case-cta">
                    <Link className="button button-primary" href="/work/enterprise-iam-transformation">Explore my IAM case study ↗</Link>
                    <a className="button button-ghost" href="https://github.com/KaffyDevelops/azure-iam-governance-lab" target="_blank" rel="noreferrer">View the IAM repository</a>
                  </div>
                </div>
              </MotionReveal>
              <div className="iam-console" aria-label="IAM engineering evidence">
                <div className="console-header"><span /><span /><span /><strong>identity-governance / evidence</strong></div>
                <code>
                  <span>$ scope: Microsoft Entra ID</span>
                  <span>✓ identity inventory</span>
                  <span>✓ stale-user analysis</span>
                  <span>✓ guest governance</span>
                  <span>✓ privileged-role review</span>
                  <span>✓ direct Azure RBAC analysis</span>
                  <span>✓ workload identity inventory</span>
                  <span>→ Conditional Access • PIM • Access Reviews</span>
                </code>
              </div>
            </div>
            <div className="iam-capability-grid">
              {iamCapabilities.map(([title, copy], index) => (
                <MotionReveal key={title} delay={(index % 3) * 70}>
                  <article className="iam-capability-card">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section section-light flagship-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div><p className="eyebrow dark">FLAGSHIP SECURITY ENGINEERING</p><h2>Evidence before claims.</h2></div>
              <p>Seven technical projects spanning IAM governance, detection engineering, infrastructure as code, secure product architecture and multi-cloud security. Each case study separates what I built from what I have validated.</p>
            </div>
            <div className="work-grid">
              <Link href="/work/enterprise-iam-transformation" className="project-card project-featured project-iam-featured">
                <div className="project-meta"><span>01</span><span>IAM ENGINEERING • FICTIONAL ENTERPRISE SCENARIO</span></div>
                <div className="project-art iam-art"><div className="iam-node root">IDENTITY</div><div className="iam-node n1">RBAC</div><div className="iam-node n2">CA</div><div className="iam-node n3">PIM</div><div className="iam-node n4">REVIEWS</div></div>
                <div className="project-copy"><h3>Azure IAM Governance Lab</h3><p>Enterprise identity governance with Microsoft Graph PowerShell evidence collectors, stale access analysis, guest governance, Azure RBAC, Conditional Access, PIM, access reviews and workload identities.</p><div className="tag-row"><span>Entra ID</span><span>Graph PowerShell</span><span>RBAC</span><span>PIM</span><span>Access Reviews</span></div><strong className="text-link">Explore my IAM engineering case study ↗</strong></div>
              </Link>

              <Link href="/work/azure-soc-lab" className="project-card">
                <div className="project-meta"><span>02</span><span>INDEPENDENT SECURITY LAB</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>SigninLogs<br/>| where ResultType == "50126"<br/>| summarize FailedAttempts=count()</code><div className="alert-chip">SENTINEL • KQL</div></div>
                <div className="project-copy"><h3>Microsoft Sentinel SOC & Threat Detection</h3><p>Detection engineering, evidence standards and incident investigation built around Microsoft Sentinel and Entra ID telemetry.</p><div className="tag-row"><span>Microsoft Sentinel</span><span>Entra ID</span><span>KQL</span><span>Incident Response</span></div><strong className="text-link">Read technical case study ↗</strong></div>
              </Link>

              <Link href="/work/aws-cloud-security-engineering" className="project-card">
                <div className="project-meta"><span>03</span><span>TERRAFORM SECURITY ENGINEERING</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>terraform validate<br/>cloudtrail = enabled<br/>flow_logs = enabled<br/>access_analyzer = enabled</code><div className="alert-chip">AWS • TERRAFORM</div></div>
                <div className="project-copy"><h3>AWS Cloud Security Engineering</h3><p>Cost-conscious AWS reference architecture with segmented networking, audit logging, KMS protection, IAM assurance and a control-validation programme.</p><div className="tag-row"><span>AWS</span><span>Terraform</span><span>CloudTrail</span><span>KMS</span></div><strong className="text-link">View AWS case study ↗</strong></div>
              </Link>

              <Link href="/work/gcp-cloud-security-engineering" className="project-card">
                <div className="project-meta"><span>04</span><span>GOOGLE CLOUD • TERRAFORM</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>terraform validate<br/>vpc_flow_logs = enabled<br/>service_account_keys = none<br/>audit_archive = KMS protected</code><div className="alert-chip">GCP • KEYLESS IAM</div></div>
                <div className="project-copy"><h3>Google Cloud Security Engineering</h3><p>Google Cloud reference environment combining keyless IAM, segmented networking, Cloud Audit Logs, VPC Flow Logs and KMS-protected evidence storage.</p><div className="tag-row"><span>Google Cloud</span><span>Terraform</span><span>Cloud Logging</span><span>Workload Identity</span></div><strong className="text-link">View Google Cloud case study ↗</strong></div>
              </Link>

              <Link href="/work/detection-as-code" className="project-card">
                <div className="project-meta"><span>05</span><span>OPEN-SOURCE MULTI-CLOUD</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>detections/azure/AZ-001<br/>detections/aws/AWS-001<br/>detections/gcp/GCP-001<br/>status: implemented</code><div className="alert-chip">MITRE • SIGMA</div></div>
                <div className="project-copy"><h3>Cloud Security Detection as Code</h3><p>Reusable Azure, AWS and Google Cloud detections with a common metadata contract, ATT&CK mapping, CI quality gates and explicit validation states.</p><div className="tag-row"><span>Azure</span><span>AWS</span><span>GCP</span><span>MITRE ATT&CK</span></div><strong className="text-link">Explore Detection as Code ↗</strong></div>
              </Link>

              <Link href="/work/cloud-forge-security" className="project-card">
                <div className="project-meta"><span>06</span><span>LIVE FOUNDER PRODUCT • SECURITY ARCHITECTURE</span></div>
                <div className="project-art forge-art"><div className="forge-stack"><span>AI BOUNDARY</span><span>PAYMENTS</span><span>EVIDENCE</span><span>RLS + SECURITY</span></div><div className="forge-orbit">CF</div></div>
                <div className="project-copy"><h3>Cloud Forge Security Architecture</h3><p>Public, sanitised SaaS security architecture for my live product, covering RLS, evidence ownership, AI boundaries, secrets, payments, logging, CI/CD and recovery.</p><div className="tag-row"><span>Next.js</span><span>Supabase</span><span>PostgreSQL</span><span>AI Security</span></div><strong className="text-link">View founder security case study ↗</strong></div>
              </Link>

              <Link href="/work/secure-portfolio" className="project-card">
                <div className="project-meta"><span>07</span><span>SECURE WEB ENGINEERING</span></div>
                <div className="project-art terminal-art"><div className="terminal-bar"><i/><i/><i/></div><code>Content-Security-Policy<br/>Strict-Transport-Security<br/>X-Frame-Options: DENY<br/>Permissions-Policy</code><div className="alert-chip">NEXT.JS • VERCEL</div></div>
                <div className="project-copy"><h3>Secure Portfolio Engineering</h3><p>The engineering behind this live portfolio, including CSP, HSTS, browser-security headers, privacy-conscious evidence presentation and automated deployment.</p><div className="tag-row"><span>Next.js</span><span>TypeScript</span><span>CSP</span><span>Vercel</span></div><strong className="text-link">Inspect the portfolio case study ↗</strong></div>
              </Link>
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-dark expertise-section">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">HOW I WORK</p><h2>I connect identity, cloud controls, detection and evidence.</h2></div>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <MotionReveal key={item.number}>
                  <article className="expertise-card">
                    <span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" className="section forge-section live-founder-section">
          <div className="container founder-intro-grid">
            <MotionReveal>
              <div className="forge-copy">
                <p className="eyebrow dark">MY HANDS-ON FOUNDER STARTUP</p>
                <h2>The Cloud Forge is live.</h2>
                <p>I built The Cloud Forge around a problem I care about deeply: cloud security learners need more than content. They need realistic work, guided practice, assessment, evidence and a clearer route from learning to demonstrating capability.</p>
                <div className="formula"><span>LEARN</span><b>→</b><span>BUILD</span><b>→</b><span>DOCUMENT</span><b>→</b><span>DEMONSTRATE</span></div>
                <div className="case-cta">
                  <a href="https://www.thecloudforge.app" target="_blank" rel="noreferrer" className="button button-dark">Visit The Cloud Forge ↗</a>
                  <Link href="/work/cloud-forge-security" className="button button-outline-dark">See how I secured it</Link>
                </div>
              </div>
            </MotionReveal>
            <div className="founder-product-panel">
              <div className="founder-live-badge"><span /> LIVE PRODUCT</div>
              <div className="founder-product-mark">THE<br/>CLOUD<br/>FORGE</div>
              <div className="founder-product-details">
                <span>AI-guided missions</span>
                <span>Assessment engine</span>
                <span>Portfolio evidence</span>
                <span>IAM & cloud security learning</span>
              </div>
            </div>
          </div>

          <div className="container human-firewall-band">
            <div>
              <p className="eyebrow dark">ANOTHER PRODUCT I JUST LAUNCHED</p>
              <h3>HUMAN FIREWALL</h3>
              <p>A scenario-based Employee Cybersecurity Awareness Simulation Game designed to make people practise the judgement attackers try to exploit.</p>
            </div>
            <div className="hf-signal">
              <span>URGENCY</span><span>AUTHORITY</span><span>TRUST</span><span>IMPERSONATION</span><span>CURIOSITY</span>
            </div>
            <a className="button button-dark" href="https://play.thekaffycyberconsulting.com" target="_blank" rel="noreferrer">Play the game ↗</a>
          </div>
        </section>

        <section id="author" className="section author-section">
          <div className="container author-grid">
            <MotionReveal>
              <div className="book-stage" aria-label="Think Like a Cloud Security Engineer book">
                <div className="book-shadow" />
                <div className="book-cover">
                  <small>KAFAYAT “KAFFY” FANIRAN</small>
                  <div className="book-grid-art" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
                  <h3>THINK LIKE A<br/>CLOUD SECURITY<br/>ENGINEER</h3>
                  <p>A practical guide to approaching cloud security problems with stronger judgement.</p>
                </div>
              </div>
            </MotionReveal>
            <div className="author-copy">
              <p className="eyebrow">AUTHOR</p>
              <h2>I just published my first cybersecurity book.</h2>
              <p><strong>Think Like a Cloud Security Engineer</strong> is part of how I teach: not by asking you to memorise tools, but by helping you reason through identity, architecture, risk, evidence and security decisions the way the work actually demands.</p>
              <p>If you are building your cloud security career, I want the guide to help you move from “I know the concept” to “I know how to think about the problem.”</p>
              <a className="button button-primary" href="https://guide.thecloudforge.app" target="_blank" rel="noreferrer">Get Think Like a Cloud Security Engineer ↗</a>
            </div>
          </div>
        </section>

        <section id="credentials" className="section section-light credentials-section">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="eyebrow dark">PROFESSIONAL CREDENTIALS</p><h2>Structured learning, applied through real projects.</h2></div><p>Credentials strengthen my foundation. My portfolio shows how I turn that learning into IAM engineering, cloud controls, detections, products and evidence.</p></div>
            <div className="credential-grid">
              {credentials.map(([name, issuer, detail], index) => (
                <MotionReveal key={name} delay={(index % 2) * 60}>
                  <article className="credential-card"><span className="credential-index">{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{issuer}</p><small>{detail}</small></div></article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="section writing-section">
          <div className="container writing-grid">
            <div>
              <p className="eyebrow dark">WRITING & PUBLIC EDUCATION</p>
              <h2>I build, write and teach around the work I want to move forward.</h2>
              <p className="writing-lede">My public work lets me turn technical practice into useful resources for engineers, learners, founders and business leaders.</p>
            </div>
            <div className="publication-list">
              <article><span>01</span><div><small>BOOK • PUBLISHED</small><h3>Think Like a Cloud Security Engineer</h3><p>My first cybersecurity book, focused on practical cloud security judgement and problem-solving.</p><strong><a href="https://guide.thecloudforge.app" target="_blank" rel="noreferrer">Get the book ↗</a></strong></div></article>
              <article><span>02</span><div><small>NEWSLETTER</small><h3>CEO Cloud Security Memo</h3><p>Cloud security, resilience, IAM and cyber risk translated into practical guidance for business leaders.</p><strong>2,500+ subscribers</strong></div></article>
              <article><span>03</span><div><small>TECHNICAL EDUCATION</small><h3>Cloud Beginners</h3><p>Practical cloud and cybersecurity education focused on clarity, employability and real-world application.</p><strong><a href="https://www.cloudbeginners.info" target="_blank" rel="noreferrer">www.cloudbeginners.info ↗</a></strong></div></article>
              <article><span>04</span><div><small>CYBERSECURITY AWARENESS COMPANY</small><h3>The Kaffy Cyber Consulting</h3><p>My cybersecurity awareness company, focused on practical employee security behaviour, phishing defence, privacy and secure-work habits.</p><strong><a href="https://thekaffycyberconsulting.com" target="_blank" rel="noreferrer">thekaffycyberconsulting.com ↗</a></strong></div></article>
              <article><span>05</span><div><small>SIMULATION GAME</small><h3>HUMAN FIREWALL</h3><p>A scenario-based Employee Cybersecurity Awareness Simulation Game built to turn awareness into active decision-making practice.</p><strong><a href="https://play.thekaffycyberconsulting.com" target="_blank" rel="noreferrer">Play HUMAN FIREWALL ↗</a></strong></div></article>
            </div>
          </div>
        </section>

        <section className="section cta-section section-dark premium-cta">
          <div className="container cta-grid">
            <div><p className="eyebrow">WORK WITH ME</p><h2>If you need cloud security depth, IAM thinking and someone who actually builds, I’d like to talk.</h2></div>
            <div><p>I’m open to cloud security and IAM engineering opportunities, technical collaborations, speaking, cybersecurity education and product partnerships.</p><a className="button button-primary" href="mailto:kaffy@cloudbeginners.info">Start a conversation ↗</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
