"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prevOverflow;
    }, 3000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Don't render on server — avoids hydration mismatch
  if (!mounted || !visible) return null;

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading">
          {"BRANDBANALO".split("").map((letter, idx) => (
            <span
              key={`${letter}-${idx}`}
              data-text-preloader={letter}
              className="letters-loading"
            >
              {letter}
            </span>
          ))}
        </div>
        <p className="text-center">Branding Today Brand Tomorrow</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}


