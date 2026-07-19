import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="section-kicker light">Open to engineering opportunities</span>
          <h2>Let’s build something that has to work in the real world.</h2>
        </div>
        <div className="footer-actions">
          <a href="mailto:tejasnatekar10@gmail.com">Email me <span>↗</span></a>
          <a href="https://www.linkedin.com/in/tejasnatekar" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="/Tejas-Natekar-CV.docx" download>Download CV <span>↓</span></a>
        </div>
      </div>
      <div className="shell footer-base">
        <Link href="/" className="brand footer-brand"><span className="brand-mark">TN</span><strong>Tejas Natekar</strong></Link>
        <p>Hyderabad, India · B.Tech Mechanical Engineering, 2027</p>
      </div>
    </footer>
  );
}
