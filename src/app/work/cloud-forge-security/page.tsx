import type { Metadata } from "next";
import { CaseStudyShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Cloud Forge Security Architecture",
  description: "Founder case study covering the live Cloud Forge product, public sanitised security architecture, Row Level Security, evidence ownership, AI boundaries, secrets, payments, logging and secure SaaS design.",
};

export default function CloudForgeCaseStudy() {
  return (
    <CaseStudyShell>
      <main>
        <section className="case-hero section-dark">
          <div className="container case-hero-grid">
            <div>
              <p className="eyebrow">CASE STUDY 06 • LIVE FOUNDER PRODUCT • SECURE PRODUCT ARCHITECTURE</p>
              <h1>Cloud Forge Security Architecture</h1>
              <p>How I designed and continue to harden a live AI-powered, project-first cloud security learning platform with explicit trust boundaries across identity, data, learner evidence, AI, payments, application logic and operations.</p>
              <div className="case-cta">
                <a className="button button-primary" href="https://github.com/KaffyDevelops/cloud-forge-security-architecture" target="_blank" rel="noreferrer">View public security architecture ↗</a>
                <a className="button button-ghost" href="https://www.thecloudforge.app" target="_blank" rel="noreferrer">Visit the live product ↗</a>
              </div>
            </div>
            <aside className="case-facts">
              <div><small>ROLE</small><strong>Founder & Product Builder</strong></div>
              <div><small>STATUS</small><strong>Live product</strong></div>
              <div><small>STACK</small><strong>Next.js • TypeScript • PostgreSQL • Supabase</strong></div>
              <div><small>SECURITY</small><strong>RLS • AI Boundaries • Secrets • Evidence</strong></div>
              <div><small>PUBLIC EVIDENCE</small><strong>Sanitised architecture • production source private</strong></div>
            </aside>
          </div>
        </section>

        <section className="case-body">
          <div className="container case-layout">
            <nav className="case-nav">
              <a href="#problem">Problem</a>
              <a href="#architecture">Architecture</a>
              <a href="#decisions">Security ADRs</a>
              <a href="#validation">Validation</a>
              <a href="#ai">AI boundaries</a>
              <a href="#evidence">Evidence</a>
            </nav>

            <article className="case-content">
              <section id="problem" className="case-section">
                <p className="eyebrow dark">PROBLEM</p>
                <h2>Learning security is not the same as proving you can do security work.</h2>
                <p>The product is built around a recurring career gap: learners may understand cloud security concepts and earn certificates, but still struggle to practise realistic work, receive contextual feedback and produce credible evidence of what they can do.</p>
              </section>

              <section id="architecture" className="case-section">
                <p className="eyebrow dark">SECURITY ARCHITECTURE</p>
                <h2>Publish the reasoning without publishing the attack surface.</h2>
                <p>The public repository documents a sanitised logical architecture while the production application source remains private. Browser, application server, database, evidence storage, AI provider, payment provider and operational monitoring are treated as distinct trust zones.</p>
                <div className="case-matrix">
                  <div><small>IDENTITY</small><strong>Resource authorisation</strong><p>Authentication is not treated as sufficient authorisation for learner-owned data.</p></div>
                  <div><small>DATA</small><strong>Row Level Security</strong><p>PostgreSQL RLS is part of the defence-in-depth authorisation model.</p></div>
                  <div><small>EVIDENCE</small><strong>Ownership boundaries</strong><p>Learner artefacts require explicit ownership and protected access paths.</p></div>
                  <div><small>OPERATIONS</small><strong>Logging & recovery</strong><p>Security events, deployment controls, backup and restore are included in the architecture.</p></div>
                </div>
              </section>

              <section id="decisions" className="case-section">
                <p className="eyebrow dark">SECURITY DECISION RECORDS</p>
                <h2>Document why a control exists, not just that it exists.</h2>
                <p>The public architecture includes formal ADRs for PostgreSQL RLS, learner evidence ownership, server-side privileged secrets, non-authoritative AI output and payment-provider verified entitlement.</p>
                <p>Each ADR records context, decision, benefits, trade-offs, rejected alternatives and the validation required before the decision is treated as effective.</p>
              </section>

              <section id="validation" className="case-section">
                <p className="eyebrow dark">IMPLEMENTATION-BACKED VALIDATION</p>
                <h2>The product is live. Validation now follows the controls that matter most.</h2>
                <p>An early implementation-backed review confirmed a real server-side provider-secret boundary: privileged provider credentials were consumed on the trusted server path, browser code called the application API rather than the provider directly, provider errors were sanitised before logging, and test fixtures used non-secret values.</p>
                <p>Now that The Cloud Forge is live, the validation programme moves deeper into the product itself: learner-to-learner RLS isolation, evidence ownership, AI authority boundaries, payment entitlement, privileged administration and security logging. The public architecture deliberately separates controls that are implemented from controls that have been runtime-validated.</p>
              </section>

              <section id="ai" className="case-section">
                <p className="eyebrow dark">AI SECURITY BOUNDARIES</p>
                <h2>The coach can guide the learner without becoming an unrestricted authority.</h2>
                <p>AI output is treated as non-authoritative application output. Security-critical entitlement, ownership and privileged operations remain outside unrestricted model control, and sensitive actions require trusted product logic to validate the request.</p>
              </section>

              <section id="evidence" className="case-section">
                <p className="eyebrow dark">EVIDENCE DISCIPLINE</p>
                <h2>Public security evidence should be useful without exposing proprietary implementation.</h2>
                <p>The repository separates documented architecture, implemented patterns and validated controls. Sanitised SQL, logging and server-boundary examples demonstrate security principles without revealing private schemas, credentials, learner data or exploitable production detail.</p>
                <div className="case-note">The public repository is a security architecture dossier for a live product, not a mirror of the production application. Proprietary source code, live secrets and sensitive deployment details remain private.</div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </CaseStudyShell>
  );
}
