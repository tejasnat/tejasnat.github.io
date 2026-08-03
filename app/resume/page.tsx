import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé | Tejas Natekar",
  description: "View the résumé of Tejas Natekar, Mechanical Engineering student.",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="shell resume-shell">
        <div className="resume-heading">
          <div>
            <span className="section-kicker">Résumé</span>
            <h1>Mechanical Engineering Résumé</h1>
            <p>
              Education, engineering projects, technical experience and skills.
            </p>
          </div>
          <Link className="button button-outline resume-home-button" href="/">
            Home <span>↗</span>
          </Link>
        </div>

        <div className="resume-viewer" aria-label="Embedded résumé viewer">
          <object
            className="resume-pdf"
            data="/Tejas-Natekar-CV.pdf#view=FitH"
            type="application/pdf"
            aria-label="Tejas Natekar résumé PDF"
          >
            <div className="resume-fallback">
              <p>Your browser cannot display the embedded résumé.</p>
              <a href="/Tejas-Natekar-CV.pdf">Open the PDF</a>
            </div>
          </object>
        </div>
      </section>
    </main>
  );
}
