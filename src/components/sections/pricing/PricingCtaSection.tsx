import Link from "next/link";

export default function PricingCtaSection() {
  return (
    <section className="cta-section fix section-padding pt-0 dark-bg-style black-bg">
      <div className="container">
        <div
          className="cta-wrapper bg-cover"
          style={{ backgroundImage: "url('/assets/img/cta/cta-bg.webp')" }}
        >
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Have an idea in your mind? Let&apos;s&nbsp;make&nbsp;something
            great together
          </h2>
          <Link
            href="/contact"
            className="theme-btn border-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span className="icon-1">
              <img src="/assets/img/icon/10.svg" alt="Get in touch" />
            </span>
            get in touch
            <span className="icon-2">
              <img src="/assets/img/icon/11.svg" alt="Get in touch" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

