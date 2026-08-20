export default function BrandStripSection() {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as const;
  const logoStyle: React.CSSProperties = {
    height: "100px",
    width: "auto",
    maxWidth: "150px",
    objectFit: "contain",
  };

  return (
    <div className="brand-section fix section-padding pt-10">
      <div className="brand-wrapper-2 fix">
        <p className="brand-text wow fadeInUp pt-0" style={{ fontSize: '24px', fontWeight: 600 }}>
          Trusted by 100+ Clients
        </p>
        <div className="gt-brand-wrapper">
          <div className="swiper brand-slider-2">
            <div className="swiper-wrapper gt-slide-transtion">
              {logos.slice(0, 10).map((idx, i) => (
                <div
                  className="swiper-slide gt-brand-slide-element"
                  key={`top-${i}-${idx}`}
                >
                  <div className="gt-brand-img">
                    <img src={`/assets/img/brand/${idx}.webp`} alt="Brand" style={logoStyle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gt-brand-wrapper mt-30">
          <div dir="rtl" className="swiper brand-slider-3">
            <div className="swiper-wrapper gt-slide-transtion">
              {logos.slice(-10).map((idx, i) => (
                <div
                  className="swiper-slide gt-brand-slide-element"
                  key={`bottom-${i}-${idx}`}
                >
                  <div className="gt-brand-img">
                    <img src={`/assets/img/brand/${idx}.webp`} alt="Brand" style={logoStyle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

