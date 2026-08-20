import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterLocationMarquee from "@/components/FooterLocationMarquee";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/layout/BackToTop";
import MouseCursor from "@/components/layout/MouseCursor";
import Offcanvas from "@/components/layout/Offcanvas";
import SmoothWrapper from "@/components/layout/SmoothWrapper";
import VendorScripts from "@/components/layout/VendorScripts";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Preloader />
      <BackToTop />
      <MouseCursor />
      <Offcanvas />

      <div className="page-shell">
        <Header />
        <SmoothWrapper>
          {children}
          <Footer marquee={<FooterLocationMarquee />} />
        </SmoothWrapper>
      </div>

      <VendorScripts />
    </>
  );
}


