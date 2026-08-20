export default function ChooseUsSection() {
  const counters = [
    { count: "5", suffix: "+", label: "Years of Experience", delay: ".3s" },
    { count: "100", suffix: "+", label: "Projects Completed", delay: ".5s" },
    { count: "2", suffix: "Cr", label: "Ads Spend", delay: ".7s" },
  ];

  return (
    <section
      className="choose-us-section section-padding bg-cover"
      style={{ backgroundImage: "url('/assets/img/choous-us-bg.webp')" }}
    >
      <div className="choose-us-image">
        <img
          src="/assets/img/choose-us-img.webp"
          alt="Why choose us"
          className="wow img-custom-anim-left"
        />
      </div>
      <div className="container">
        <div className="section-title theme-color-3 mb-0">
          <h6 className="wow fadeInUp">why choose us</h6>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            You can discover why <br /> we&apos;re your top choice for <br />{" "}
            Digital Marketing <br /> services.
          </h2>
          <p
            className="text-white max-600 mt-4 wow fadeInUp"
            data-wow-delay=".5s"
          >
            Available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don&apos;t look even
            slightly believable.
          </p>
        </div>
        <div className="counter-wrapper-3">
          <div className="row g-4">
            {counters.map((item) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.label}
              >
                <div className="counter-box-items">
                  <h2>
                    <span className="count">{item.count}</span>
                    {item.suffix}
                  </h2>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

