import Link from "next/link";

export default function MarqueeSectionBottom() {
  return (
    <div className="marque-section fix">
      <div className="marque-wrapper-3 fix">
        <div className="marque-text-items" style={{ backgroundColor: '#ff751f' }}>
          <div className="swiper marquee-text-slider">
            <div className="swiper-wrapper gt-slide-transtion">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div className="swiper-slide gt-brand-slide-element" key={idx}>
                  <span className="text">
                    <Link href="mailto:info@brandbanalo.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@brandbanalo.com</Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="marque-text-items style-2 fix">
          <div dir="rtl" className="swiper marquee-text-slider-2">
            <div className="swiper-wrapper gt-slide-transtion">
              {[1, 2, 3, 4, 5].map((idx) => (
                <div className="swiper-slide gt-brand-slide-element" key={idx}>
                  <span className="text" dir="ltr">
                    <Link href="tel:+918395825607" style={{ color: 'inherit', textDecoration: 'none' }}>+91 83958 25607</Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


