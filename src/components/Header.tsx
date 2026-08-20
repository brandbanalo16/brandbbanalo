"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "@/styles/css/header.css";
import industryData from "@/data/Industry.json";
import { getIndustryMegaMenuIconClass } from "@/data/industry-mega-menu-icons";

type MegaServiceCard = {
  industryKey: string;
  title: string;
  description?: string;
  link?: string;
};

type MegaService = {
  id: string;
  label: string;
  link?: string;
  cards: MegaServiceCard[];
};

const INDUSTRY_MENU_SERVICES: { key: string; label: string }[] = [
  { key: "web-development", label: "Website Development" },
  { key: "social-media-marketing", label: "Social Media Management" },
  { key: "meta-ads", label: "Meta Ads management" },
  { key: "google-ads", label: "Google Ads Management" },
  { key: "branding-kit", label: "Brand Kit" },
  { key: "seo", label: "Search Engine Optimization" },
];

const megaServiceData: MegaService[] = INDUSTRY_MENU_SERVICES.map((service) => {
  const serviceNode = industryData.services.find((item) => item.key === service.key);
  const cards = industryData.industries.map((industry) => ({
    industryKey: industry.key,
    title: `${industry.name} ${service.label}`,
    link: `/industrial-specific/${service.key}/${industry.key}`,
  }));
  const firstIndustryKey = industryData.industries[0]?.key;

  return {
    id: service.key,
    label: service.label,
    link:
      serviceNode && firstIndustryKey
        ? `/industrial-specific/${serviceNode.key}/${firstIndustryKey}`
        : undefined,
    cards,
  };
});

export default function Header() {
  const [activeServiceId, setActiveServiceId] = useState<string>(megaServiceData[0]?.id ?? "website-design");
  const activeService = megaServiceData.find((service) => service.id === activeServiceId) ?? megaServiceData[0];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setIsMenuVisible(false);
    setTimeout(() => {
      setIsMenuVisible(true);
    }, 300); // 300ms to allow navigation and reset hover
  };

  return (
    <header
      id="header-sticky"
      className={`header-1 header-4${scrolled ? "" : " white-text-white"}`}
      style={{
        background: scrolled ? "#ffffff" : "#000000",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container-fluid" style={{ padding: "0 0" }}>
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <Link href="/" className="header-logo">
                <img
                  src={scrolled ? "/assets/img/logo/logo-black.webp" : "/assets/img/logo/logo-export-file-01.webp"}
                  alt="Brand Banalo logo"
                  className="logo-img"
                  style={{ transition: "opacity 0.3s ease" }}
                />
              </Link>
            </div>
            <div className="mean__menu-wrapper">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <ul>
                    <li className="cl">
                      <Link href="/" prefetch={false}>
                        Home
                      </Link>
                    </li>
                    <li className="has-dropdown behind-brand-nav">
                      <span className="nav-dropdown-label" aria-haspopup="menu">
                        Behind the brand
                      </span>
                      <ul className={`submenu submenu-compact ${isMenuVisible ? "" : "force-hidden"}`}>
                        <li>
                          <Link href="/behind-the-brand/" onClick={closeMenus} prefetch={false}>
                            About Company
                          </Link>
                        </li>
                        <li>
                          <Link href="/team/" onClick={closeMenus} prefetch={false}>
                            Team
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/services/" prefetch={false}>Services</Link>
                      <ul className={`submenu ${isMenuVisible ? "" : "force-hidden"}`}>
                        <li><Link href="/services/web-development" onClick={closeMenus} prefetch={false}>Website Development</Link></li>
                        <li><Link href="/services/seo" onClick={closeMenus} prefetch={false}>Search Engine Optimization</Link></li>
                        <li><Link href="/services/google-ads" onClick={closeMenus} prefetch={false}>Google Ads</Link></li>
                        <li><Link href="/services/meta-ads" onClick={closeMenus} prefetch={false}>Meta Ads</Link></li>
                        <li><Link href="/services/social-media-marketing" onClick={closeMenus} prefetch={false}>Social Media Marketing</Link></li>
                        <li><Link href="/services/branding-kit" onClick={closeMenus} prefetch={false}>Branding Kit</Link></li>
                        <li><Link href="/services/website-design" onClick={closeMenus} prefetch={false}>Website Design</Link></li>
                        <li><Link href="/services/ugc-marketing" onClick={closeMenus} prefetch={false}>UGC Marketing</Link></li>
                        <li><Link href="/services/influancer-marketing" onClick={closeMenus} prefetch={false}>Influencer Marketing</Link></li>
                        <li><Link href="/services/video-creation" onClick={closeMenus} prefetch={false}>Video Creation</Link></li>
                        <li><Link href="/services/product-photography" onClick={closeMenus} prefetch={false}>Product Photography</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href={megaServiceData[0]?.link || "#"} prefetch={false}>
                        Industrial Specific
                      </Link>

                      <div className={`mega-menu ${isMenuVisible ? "" : "force-hidden"}`}>
                        {/* Left Static Section */}
                        <div className="mega-left">
                          <h3>Our Services</h3>
                          <p>Explore our digital solutions</p>

                          <ul>
                            {megaServiceData.map((service) => (
                              <li
                                key={service.id}
                                className={service.id === activeServiceId ? "active" : ""}
                              >
                                <Link
                                  href={service.link || "#"}
                                  prefetch={false}
                                  onMouseEnter={() => setActiveServiceId(service.id)}
                                  onClick={(event) => {
                                    if (!service.link) {
                                      event.preventDefault();
                                    } else {
                                      closeMenus();
                                    }
                                    setActiveServiceId(service.id);
                                  }}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Dynamic Section */}
                        <div className="mega-right">
                          {activeService.cards.map((card) => (
                            <Link
                              href={card.link || "#"}
                              className="mega-industry-card"
                              key={`${activeService.id}-${card.industryKey}`}
                              onClick={closeMenus}
                              prefetch={false}
                            >
                              <span className="mega-industry-card__icon-wrap" aria-hidden>
                                <i className={getIndustryMegaMenuIconClass(card.industryKey)} />
                              </span>
                              <span className="mega-industry-card__body">
                                <span className="mega-industry-card__title">{card.title}</span>
                                {card.description ? (
                                  <span className="mega-industry-card__desc">{card.description}</span>
                                ) : null}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link href="/case-study/" prefetch={false}>
                        Case Study
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing/" prefetch={false}>
                        Packages
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/blog/grid/" prefetch={false}>
                        Blog
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="header-button">
                <Link href="/contact/" className="theme-btn" prefetch={false}>
                  <span className="icon-1">
                    <img src="/assets/img/icon/14.svg" alt="Get in touch icon" />
                  </span>
                  get in touch
                  <span className="icon-2">
                    <img src="/assets/img/icon/15.svg" alt="Get in touch icon" />
                  </span>
                </Link>
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle">
                  <div className="header-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
