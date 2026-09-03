import Link from "next/link";

const navItems = [
  ["Security Work", "/#work"],
  ["Expertise", "/#expertise"],
  ["The Cloud Forge", "/#forge"],
  ["Writing", "/#writing"],
  ["Credentials", "/#credentials"],
] as const;

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Kafayat Faniran home">
            <span className="brand-mark">KF</span>
            <span className="brand-copy"><strong>Kafayat Faniran</strong><small>Cloud Security Engineer</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>
          <a className="button button-small button-ghost header-contact" href="mailto:kaffy@cloudbeginners.info">Contact</a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">Menu</summary>
            <nav aria-label="Mobile navigation">
              {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
              <a href="mailto:kaffy@cloudbeginners.info">Contact</a>
            </nav>
          </details>
        </div>
      </header>
      <span id="main-content" className="skip-target" aria-hidden="true" />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">CLOUD SECURITY • PRODUCT • EDUCATION</p>
          <h2>Build secure systems. Make security understandable.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/KaffyDevelops" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kafayatfaniran" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kaffy@cloudbeginners.info">Email</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Kafayat Faniran</span>
        <span>kaffy.thecloudforge.app</span>
      </div>
    </footer>
  );
}

export function CaseStudyShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
