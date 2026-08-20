import "@/styles/css/Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section fix hero-2">
      <div className="hero-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-background-video desktop-video"
        >
          <source src="/assets/Brandbanalo-banner.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-background-video mobile-video"
        >
          <source src="/assets/Brandbanalo-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}


