import Link from "next/link";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand" aria-label="Tejas Natekar, home">
          <span className="brand-mark">TN</span>
          <span className="brand-copy">
            <strong>Tejas Natekar</strong>
            <small>Mechanical Engineering</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <a href="/Tejas-Natekar-CV.docx" download>Résumé</a>
          <a className="nav-cta" href="mailto:tejasnatekar10@gmail.com">Contact <span>↗</span></a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <a href="/Tejas-Natekar-CV.docx" download>Résumé ↓</a>
            <a href="mailto:tejasnatekar10@gmail.com">Contact ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
