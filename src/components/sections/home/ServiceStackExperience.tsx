"use client";

import Link from "next/link";
import { useRef, useEffect, useCallback, useState } from "react";
import "@/styles/css/ServiceStackSection.css";

/* ── Service data ────────────────────────────────────────────── */
const services = [
  {
    id: 1,
    name: "Website Development",
    desktopImg: "/assets/img/service/website-home-page-service.webp",
    mobileImg: "/assets/img/service/website-home-page-service-mobile.webp",
    link: "/services/web-development",
  },
  {
    id: 2,
    name: "SEO",
    desktopImg: "/assets/img/service/seo--home-page-service.webp",
    mobileImg: "/assets/img/service/seo-home-page-service-mobile.webp",
    link: "/services/seo",
  },
  {
    id: 3,
    name: "Google Ads",
    desktopImg: "/assets/img/service/google-home-page-service.webp",
    mobileImg: "/assets/img/service/google-home-page-service-mobile.webp",
    link: "/services/google-ads",
  },
  {
    id: 4,
    name: "Meta Ads",
    desktopImg: "/assets/img/service/meta-home-page-service.webp",
    mobileImg: "/assets/img/service/meta-home-page-service-mobile.webp",
    link: "/services/meta-ads",
  },
  {
    id: 5,
    name: "SMO",
    desktopImg: "/assets/img/service/smo-home-page-service.webp",
    mobileImg: "/assets/img/service/smo-home-page-service-mobile.webp",
    link: "/services/social-media-marketing",
  },
];

const N = services.length; // 5

/* ────────────────────────────────────────────────────────────────
   DesktopStack
   WHY manual JS pin instead of CSS sticky:
   overflow-x:hidden on <html> (globals.css) creates a new scroll
   container which silently breaks position:sticky on all descendants.
   Solution: position:absolute panel + JS translates it down to
   simulate sticking — uses only GPU transform, zero layout triggers.

   Architecture:
   • scroll-root  = position:relative,  height = N × 100vh
   • panel        = position:absolute,  top:0, height:100vh
                    JS translates it down by Math.min(scrolled,(N-1)×vh)
                    → appears pinned to viewport top throughout section
   • deck-cards   = position:absolute inside panel, stacked by z-index
                    JS slides each card in from translateY(100vh) → 0
   ──────────────────────────────────────────────────────────────── */
function DesktopStack() {
  const rootRef  = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ticking  = useRef(false);

  const update = useCallback(() => {
    const root  = rootRef.current;
    const panel = panelRef.current;
    if (!root || !panel) return;

    const rootTop = root.getBoundingClientRect().top;
    const vh      = window.innerHeight;

    // How far the user has scrolled INTO this section (px, ≥ 0)
    const scrolled = Math.max(0, -rootTop);

    // ── 1. Pin the panel to the viewport top ─────────────────────
    // panel is position:absolute inside scroll-root (top:0).
    // To keep it at viewport top while inside the section, we push it
    // down by scrolled px. We cap at (N-1)×vh so it naturally scrolls
    // away once the last card's viewport of scroll is consumed.
    const pinY = Math.min(scrolled, (N - 1) * vh);
    panel.style.transform = `translate3d(0, ${pinY}px, 0)`;

    // ── 2. Animate each card inside the pinned panel ──────────────
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      if (i === 0) {
        // Card 0 always starts visible; gently scales back as card 1 covers it
        const p = Math.max(0, Math.min(1, scrolled / vh));
        card.style.transform = p === 0
          ? "translate3d(0,0,0)"
          : `scale(${1 - p * 0.05}) translate3d(0,0,0)`;
        card.style.opacity = `${Math.max(0, 1 - p * 0.5)}`;
        return;
      }

      // Card i slides in during [(i-1)×vh … i×vh]
      // Card i scales back during [i×vh … (i+1)×vh]  (last card: no scale-back)
      const slideProgress = Math.max(0, Math.min(1, (scrolled - (i - 1) * vh) / vh));
      const isLast        = i === N - 1;
      const scaleProgress = isLast
        ? 0
        : Math.max(0, Math.min(1, (scrolled - i * vh) / vh));

      // Slide from 100vh below → 0  (vh units so it's always truly off-screen)
      const translateVH = (1 - slideProgress) * 100;
      const scale       = 1 - scaleProgress * 0.05;
      const opacity     = slideProgress === 0
        ? 0
        : Math.max(0, 1 - scaleProgress * 0.5);

      card.style.transform = `scale(${scale}) translate3d(0, ${translateVH}vh, 0)`;
      card.style.opacity   = `${opacity}`;
    });
  }, []);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      update();
      ticking.current = false;
    });
  }, [update]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial paint
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll, update]);

  return (
    /*
      scroll-root: tall enough that the sticky panel stays pinned for all N cards.
      Height = N × 100vh so each card gets one full viewport of scroll budget.
    */
    <div
      ref={rootRef}
      className="service-stack__scroll-root"
      style={{ height: `${N * 100}vh` }}
    >
      {/*
        panel: position:absolute, JS manually pins it via translateY.
        All deck-cards are absolutely positioned inside → truly stack.
      */}
      <div className="service-stack__sticky-panel" ref={panelRef}>
        {services.map((service, i) => (
          <div
            key={service.id}
            className="service-stack__deck-card"
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{ zIndex: i + 1 }}
          >
            <Link
              href={service.link}
              style={{ display: "block", width: "100%", textDecoration: "none" }}
            >
              <img
                src={service.desktopImg}
                alt={service.name}
                draggable={false}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   MobileCarousel — horizontal snap-scroll
   ──────────────────────────────────────────────────────────────── */
function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slides.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: trackRef.current, threshold: 0.55 }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className="service-stack__mobile-wrap">
      <div ref={trackRef} className="service-stack__mobile-carousel">
        {services.map((service, i) => (
          <div
            key={service.id}
            className="service-stack__mobile-slide"
            ref={(el) => { slideRefs.current[i] = el; }}
          >
            <Link href={service.link} style={{ display: "block", textDecoration: "none" }}>
              <img src={service.mobileImg} alt={service.name} draggable={false} />
            </Link>
          </div>
        ))}
      </div>

      <div className="service-stack__dots" role="tablist" aria-label="Service cards">
        {services.map((_, i) => (
          <button
            key={i}
            className={`service-stack__dot${i === activeIndex ? " is-active" : ""}`}
            onClick={() => scrollTo(i)}
            role="tab"
            aria-label={`Go to card ${i + 1}`}
            aria-selected={i === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Root export
   ──────────────────────────────────────────────────────────────── */
export default function ServiceStackExperience() {
  return (
    <section className="service-stack fix pt-0">
      <div className="service-stack__intro-wrap" style={{ paddingTop: '20px', paddingBottom: '0px' }}>
        <p className="service-stack__eyebrow">What we deliver</p>
        <h2 className="service-stack__title">
          Our{" "}
          <span className="service-stack__title-highlight">Services</span>
        </h2>
        <p className="service-stack__subtitle" style={{ maxWidth: '100%' }}>
          Empowering your brand with{" "}
          <span className="service-stack__subtitle-em">
            cutting-edge digital solutions
          </span>
          . From strategic SEO to high-impact ad campaigns, we deliver{" "}
          <span className="service-stack__subtitle-em">
            results that matter
          </span>
          .
        </p>
      </div>

      {/* Desktop stacked scroll */}
      <DesktopStack />

      {/* Mobile snap carousel */}
      <MobileCarousel />

      {/* Below-fold strip */}
      <div className="p-relative about-video full-img-wrap3 mt-5">
        <div
          className="full-img3"
          data-speed="auto"
          style={{
            backgroundImage: "url(/assets/img/about/about-meme.webp)",
            backgroundSize: "cover",
            minHeight: "400px",
          }}
        />
      </div>
    </section>
  );
}