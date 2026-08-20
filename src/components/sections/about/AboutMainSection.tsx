import Link from "next/link";

export default function AboutMainSection() {
  return (
    <section className="about-section-2 fix section-padding">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="tp_reveal_anim">
                  Accelerate Your Brand with Smart Digital Marketing.
                </h2>
                <br />
                <h6 className="wow fadeInUp">Behind the brand</h6>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  We take a holistic approach to digital growth by combining creativity with performance-driven execution. From building high-converting websites to running targeted marketing campaigns, every solution we deliver is designed to maximize your reach, engagement, and revenue. Our team focuses on understanding your audience, analyzing competitors, and implementing strategies that give your brand a competitive edge in the digital landscape.
                </p>
                <br />
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  At Brandbanalo, we believe in long-term partnerships, not just short-term results. We continuously optimize and refine our strategies based on real-time data and performance insights to ensure sustainable growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-2">
                <img src="/assets/img/about/about-2.webp" alt="About" style={{ borderRadius: "20px", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

