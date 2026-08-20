import testimonials from "@/data/testimonials.json";

export default function TestimonialSection() {
  const firstRow = testimonials.slice(0, 10);
  const secondRow = testimonials.slice(10, 20);

  return (
    <section className="testimonial-section-4 testi-bg fix section-padding">
      <div className="container">
        <div className="section-title style-4 text-center title-anim">
          <h2 className="text-white">
            WHAT OUR
            CLIENTS <span className="text-white">SAYS</span>
          </h2>
        </div>
      </div>
      <div className="swiper testimonial-slider-4">
        <div className="swiper-wrapper">
          {firstRow.map((item) => (
            <div className="swiper-slide" key={`testi-top-${item.id}`}>
              <div className="testimonial-box-items-4">
                <div
                  className="testi-card-items"
                  style={{
                    backgroundImage:
                      "url('/assets/img/home-4/testimonial/bg-shape.webp')",
                  }}
                >
                  <div className="client-info">
                    <div className="thumb">
                      <img
                        src={item.image}
                        alt="Client"
                      />
                    </div>
                    <div className="content">
                      <h5>{item.name}</h5>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="swiper testimonial-slider-5">
        <div className="swiper-wrapper">
          {secondRow.map((item) => (
            <div className="swiper-slide" key={`testi-bottom-${item.id}`}>
              <div className="testimonial-box-items-4">
                <div
                  className="testi-card-items"
                  style={{
                    backgroundImage:
                      "url('/assets/img/home-4/testimonial/bg-shape.webp')",
                  }}
                >
                  <div className="client-info">
                    <div className="thumb">
                      <img
                        src={item.image}
                        alt="Client"
                      />
                    </div>
                    <div className="content">
                      <h5>{item.name}</h5>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

