"use client";

import { useEffect, useState } from "react";

export function WorkInProgressNotice() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        padding: "1rem",
        background: "rgba(6, 12, 20, 0.82)",
        backdropFilter: "blur(7px)",
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-progress-title"
        aria-describedby="work-progress-description"
        style={{
          position: "relative",
          width: "min(700px, 100%)",
          padding: "clamp(2rem, 6vw, 4rem)",
          overflow: "hidden",
          border: "1px solid rgba(245, 183, 66, 0.42)",
          borderRadius: "24px",
          background:
            "radial-gradient(circle at 85% 10%, rgba(245, 183, 66, 0.16), transparent 32%), linear-gradient(145deg, #172333 0%, #0b121d 100%)",
          color: "#ffffff",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.52)",
          textAlign: "center",
        }}
      >
        <button
          type="button"
          aria-label="Close work-in-progress notice"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            display: "grid",
            width: "2.65rem",
            height: "2.65rem",
            placeItems: "center",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "1.45rem",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            marginBottom: "1.2rem",
            color: "#f5b742",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "0.65rem",
              height: "0.65rem",
              borderRadius: "50%",
              background: "#f5b742",
              boxShadow: "0 0 0 5px rgba(245, 183, 66, 0.13)",
            }}
          />
          Portfolio Update
        </div>

        <h2
          id="work-progress-title"
          style={{
            margin: "0 0 1rem",
            fontSize: "clamp(2.35rem, 8vw, 4.8rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
          }}
        >
          Work in Progress
        </h2>

        <p
          id="work-progress-description"
          style={{
            maxWidth: "520px",
            margin: "0 auto 2rem",
            color: "rgba(255, 255, 255, 0.76)",
            fontSize: "clamp(1rem, 2.6vw, 1.18rem)",
            lineHeight: 1.65,
          }}
        >
          This section is still being completed. More project details and engineering case studies will be added soon.
        </p>

        <button
          type="button"
          autoFocus
          onClick={() => setIsOpen(false)}
          style={{
            minWidth: "220px",
            padding: "0.95rem 1.5rem",
            border: "1px solid #f5b742",
            borderRadius: "999px",
            background: "#f5b742",
            color: "#101722",
            cursor: "pointer",
            fontSize: "0.92rem",
            fontWeight: 800,
            letterSpacing: "0.04em",
          }}
        >
          View Current Work
        </button>
      </section>
    </div>
  );
}
