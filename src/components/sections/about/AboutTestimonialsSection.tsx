export default function AboutTestimonialsSection() {
  const slides = [1, 2, 3];

  return (
    <section className="testimonial-section-4 fix section-padding pt-0">
      <div className="container">
        <div className="testimonial-wrapper-4">
          <div className="row g-4 justify-content-end">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  What our <span>clients are saying</span>
                </h2>
                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                  <button className="array-prev" type="button">
                    <i className="fa-solid fa-chevron-left" />
                  </button>
                  <button className="array-next" type="button">
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="swiper testimonial-slider-2">
                <div className="swiper-wrapper">
                  {slides.map((idx) => (
                    <div className="swiper-slide" key={idx}>
                      <div className="testimonial-content">
                        <div className="icon">
                          <img
                            src="/assets/img/testimonial/testimonial-shape.webp"
                            alt="Quote icon"
                          />
                        </div>
                        <h4>
                          exolax&quot; has been a trustworthy part of the team
                          for a few years now. I will always rehire them for
                          future work when needed and I highly recommend that
                          you work with them if you&apos;re looking for a studio
                          that cares about the craft.
                        </h4>
                        <div className="client-img">
                          <img
                            src="/assets/img/testimonial/01.webp"
                            alt="Client 1"
                          />
                          <img
                            src="/assets/img/testimonial/02.webp"
                            alt="Client 2"
                          />
                          <img
                            src="/assets/img/testimonial/03.webp"
                            alt="Client 3"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

