import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
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
          <a className="nav-cta" href="mailto:tejasnatekar10@gmail.com">Let’s talk <span>↗</span></a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
            <a href="mailto:tejasnatekar10@gmail.com">Let’s talk ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
