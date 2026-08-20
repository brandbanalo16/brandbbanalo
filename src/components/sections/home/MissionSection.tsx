export default function MissionSection() {
  return (
    <section className="mission-section theme-bg-2 fix section-padding pb-10">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="text-white wow fadeInUp">our mission &amp; vision</h6>
          <h2 className="text-white tp_reveal_anim">
            Tailored Solutions, Proven Results, <br /> and Exceptional Service
          </h2>
        </div>
        <div className="mission-wrapper">
          <div className="row">
            <div className="col-xl-8 wow fadeInUp" data-wow-delay=".3s">
              <div className="mission-image-items">
                <div className="p-relative mission-image full-img-wrap3">
                  <div
                    className="full-img3"
                    data-speed="auto"
                    data-background="/assets/img/about/mission-2.webp"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mission-content">
                <div className="header-title wow fadeInUp" data-wow-delay=".3s">
                  <h5>our mission &amp; vision</h5>
                  <h3>Empowering skills to help you!</h3>
                </div>
                <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <div className="content">
                      <h4>01</h4>
                      <h3>Potential Goals</h3>
                      <p>
                        Enhance your online visibility &amp; drive organic traffic with
                        our advanced SEO techniques. We optimize your website to rank
                        higher.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>02</h4>
                      <h3>Strategic Branding</h3>
                      <p>
                        Strategy-first branding for businesses that want to lead the market.
                        We design with purpose, not just aesthetics.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>03</h4>
                      <h3>On Strategy Market</h3>
                      <p>
                        We craft strategic brands that create strong market presence and lasting impact.
                        Designed for growth. Built for credibility.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="overflow-hidden">
          <div className="tags-container relative" />
        </div> */}
      </div>
    </section>
  );
}


