"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Small delay to ensure the DOM is fully rendered by Next.js before running jQuery logic
    setTimeout(() => {
      const win = window as any;
      // Re-initialize main template scripts (Swiper, popup, nice-select, etc)
      if (typeof win.initTemplateScripts === "function") {
          win.initTemplateScripts();
      }
      // Re-initialize custom GSAP animations
      if (typeof win.initCustomerGsap === "function") {
          win.initCustomerGsap();
      }
      // Re-initialize other animations
      if (typeof win.initAnimations === "function") {
          win.initAnimations();
      }
      
      // Some external libs like ScrollTrigger need a manual refresh on route change
      if (win.ScrollTrigger) {
          win.ScrollTrigger.refresh();
      }
      // Re-fire WOW.js animations for newly attached elements
      if (win.WOW) {
          try {
              new win.WOW().init();
          } catch (e) {
              // ignore if already init
          }
      }
    }, 150);
    
    // Auto-scroll to top on route change to mimic normal navigation
    window.scrollTo({ top: 0, behavior: "instant" });

  }, [pathname]);

  return null;
}
