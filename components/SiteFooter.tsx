import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="section-kicker light">Seeking Opportunities to Apply and Grow</span>
          <h2>Ready to contribute my skills in design, simulation and computational engineering.</h2>
        </div>
        <div className="footer-actions">
          <a href="mailto:tejasnatekar10@gmail.com">Email me <span>↗</span></a>
          <a href="https://www.linkedin.com/in/tejasnatekar" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <Link href="/resume">View Résumé <span>↗</span></Link>
        </div>
      </div>
      <div className="shell footer-base">
        <Link href="/" className="brand footer-brand"><span className="brand-mark">TN</span><strong>Tejas Natekar</strong></Link>
        <p>Hyderabad, India · B.Tech Mechanical Engineering, 2027</p>
      </div>
    </footer>
  );
}
