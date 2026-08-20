import Script from "next/script";

export default function VendorScripts() {
  return (
    <>
      {/* ── Core dependency: jQuery must be available before ALL jQuery plugins ── */}
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

      {/* ── jQuery plugins (depend on jQuery above) ── */}
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/viewport.jquery.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.waypoints.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />

      {/* ── GSAP suite ── */}
      <Script src="/assets/js/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap-scroll-trigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap-scroll-to-plugin.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap-scroll-smoother.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap-split-text.js" strategy="afterInteractive" />

      {/* ── Other UI libs ── */}
      <Script src="/assets/js/parallax.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/animation.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />

      {/* ── Phosphor icons (external CDN, non-blocking) ── */}
      <Script src="https://unpkg.com/@phosphor-icons/web" strategy="lazyOnload" />

      {/* ── Matter.js: lib MUST be loaded before custom script ── */}
      <Script src="/assets/js/matter.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/matter-custom.js" strategy="lazyOnload" />

      {/* ── Custom animations & main init (last — depends on everything above) ── */}
      <Script src="/assets/js/customer-gsap-animation.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}



