"use client";
import Link from "next/link";
import { useState } from "react";

export default function Offcanvas() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBehindBrandOpen, setIsBehindBrandOpen] = useState(false);

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleBehindBrand = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBehindBrandOpen(!isBehindBrandOpen);
  };

  const closeOffcanvas = () => {
    // Select the offcanvas elements and remove the open classes
    const info = document.querySelector(".offcanvas__info");
    const overlay = document.querySelector(".offcanvas__overlay");

    if (info) info.classList.remove("info-open");
    if (overlay) overlay.classList.remove("overlay-open");
  };

  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info style-2">
          <div className="offcanvas__wrapper">
            <div className="effect-style" />
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="mycustom-marque style-3">
                  <div className="scrolling-wrap">
                    {[1, 2, 3].map((comm) => (
                      <div className="comm" key={comm}>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                        <div className="text-center">
                          Branding Today Brand Tomorrow
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="offcanvas__close">
                  <button className="close-btn" onClick={closeOffcanvas}>close</button>
                </div>
              </div>
              <div className="mobile-menus mt-4">
                <nav className="offcanvas-menu">
                  <ul className="list-unstyled" style={{ paddingLeft: '50px' }}>
                    <li className="mb-3">
                      <Link href="/" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Home
                      </Link>
                    </li>
                    <li className="mb-3">
                      <a href="#" onClick={toggleBehindBrand} className="text-decoration-none fw-bold text-uppercase d-flex justify-content-between align-items-center" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Behind the brand
                        <i className={`fas fa-chevron-${isBehindBrandOpen ? 'up' : 'down'}`} style={{ fontSize: '14px', opacity: 0.6 }} />
                      </a>
                      {isBehindBrandOpen && (
                        <ul className="list-unstyled mt-3" style={{ paddingLeft: '15px', borderLeft: '2px solid rgba(59, 40, 109, 0.1)' }}>
                          <li className="mb-2">
                            <Link href="/behind-the-brand" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>
                              About Company
                            </Link>
                          </li>
                          <li className="mb-2">
                            <Link href="/team" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>
                              Team
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="mb-3">
                      <a href="#" onClick={toggleServices} className="text-decoration-none fw-bold text-uppercase d-flex justify-content-between align-items-center" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Services
                        <i className={`fas fa-chevron-${isServicesOpen ? 'up' : 'down'}`} style={{ fontSize: '14px', opacity: 0.6 }} />
                      </a>
                      {isServicesOpen && (
                        <ul className="list-unstyled mt-3" style={{ paddingLeft: '15px', borderLeft: '2px solid rgba(59, 40, 109, 0.1)' }}>
                          <li className="mb-2"><Link href="/services/web-development" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Website Development</Link></li>
                          <li className="mb-2"><Link href="/services/seo" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Search Engine Optimization</Link></li>
                          <li className="mb-2"><Link href="/services/google-ads" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Google Ads</Link></li>
                          <li className="mb-2"><Link href="/services/meta-ads" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Meta Ads</Link></li>
                          <li className="mb-2"><Link href="/services/social-media-marketing" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Social Media Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/branding-kit" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Branding Kit</Link></li>
                          <li className="mb-2"><Link href="/services/website-design" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Website Design</Link></li>
                          <li className="mb-2"><Link href="/services/ugc-marketing" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>UGC Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/influancer-marketing" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Influencer Marketing</Link></li>
                          <li className="mb-2"><Link href="/services/video-creation" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Video Creation</Link></li>
                          <li className="mb-2"><Link href="/services/product-photography" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-medium" style={{ fontSize: '15px', color: '#555' }}>Product Photography</Link></li>
                        </ul>
                      )}
                    </li>
                    <li className="mb-3 mt-3">
                      <Link href="/industry-specific-service" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Industrial Specific
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/case-study" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Case Study
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/pricing" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Packages
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/blog/grid/" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Blog
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/contact" onClick={closeOffcanvas} prefetch={false} className="text-decoration-none fw-bold text-uppercase" style={{ fontSize: '18px', color: '#3b286d', letterSpacing: '1px' }}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul className="social-icon pt-4 border-top d-flex align-items-center gap-3" style={{ paddingLeft: '50px', listStyle: 'none' }}>
                <li>
                  <a href="https://www.facebook.com/people/Brandbanalo/61562210047804/?rdid=msjDXVSboNXfXzhi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AKKpkvwa4%2F" target="_blank" rel="noopener noreferrer" style={{ color: '#3b286d', fontSize: '22px' }}>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/brandbanalo?igsh=eDRuN2gxNWQyYzZs" target="_blank" rel="noopener noreferrer" style={{ color: '#3b286d', fontSize: '22px' }}>
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/brandbanalo/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ color: '#3b286d', fontSize: '22px' }}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918395825607" target="_blank" rel="noopener noreferrer" style={{ color: '#3b286d', fontSize: '22px' }}>
                    <i className="fab fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCVmLm0F7mTzO-MDUvrEMmMg" target="_blank" rel="noopener noreferrer" style={{ color: '#3b286d', fontSize: '22px' }}>
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" onClick={closeOffcanvas} />
    </>
  );
}
