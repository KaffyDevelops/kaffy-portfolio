import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Kafayat Faniran home">
          <span className="brand-mark">KF</span>
          <span className="brand-copy"><strong>Kafayat Faniran</strong><small>Cloud Security Engineer</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#work">Security Work</Link>
          <Link href="/#expertise">Expertise</Link>
          <Link href="/#forge">The Cloud Forge</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/#credentials">Credentials</Link>
        </nav>
        <a className="button button-small button-ghost" href="mailto:kaffy@cloudbeginners.info">Contact</a>
      </div>
    </header>
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
