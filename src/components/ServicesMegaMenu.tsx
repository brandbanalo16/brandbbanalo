import Link from "next/link";

const servicesColumn1 = [
  {
    title: "Search Engine Optimization",
    description: "Boost Your Online Visibility With Our SEO",
    href: "/industrial-specific/details",
    icon: "fa-desktop",
  },
  {
    title: "Email Marketing",
    description: "Nurture Your Leads With Targeted Campaigns",
    href: "/industrial-specific/details",
    icon: "fa-envelope",
  },
  {
    title: "Software Development",
    description: "Custom Solutions For Your Business Needs",
    href: "/industrial-specific/details",
    icon: "fa-gears",
  },
  {
    title: "Google Workspace Solutions",
    description: "Transform Your Business With Our Collaboration",
    href: "/industrial-specific/details",
    icon: "fa-google",
  },
];

const servicesColumn2 = [
  {
    title: "Pay-Per-Click (PPC) Marketing",
    description: "Drive Targeted Traffic & Conversions",
    href: "/industrial-specific/details",
    icon: "fa-dollar-sign",
  },
  {
    title: "Content Marketing",
    description: "Create Engaging Content That Resonates With Your Audience",
    href: "/industrial-specific/details",
    icon: "fa-file-lines",
  },
  {
    title: "Graphics Designing",
    description: "Design That Captivates And Communicates",
    href: "/industrial-specific/details",
    icon: "fa-palette",
  },
];

const servicesColumn3 = [
  {
    title: "Social Media Optimization",
    description: "Build Your Brand On SMO",
    href: "/industrial-specific/details",
    icon: "fa-th-large",
  },
  {
    title: "Web Development",
    description: "Web Development Services To Enhance Your Online Presence",
    href: "/industrial-specific/details",
    icon: "fa-display",
  },
  {
    title: "Branding Solutions",
    description: "Brand Identity That Stands Out",
    href: "/industrial-specific/details",
    icon: "fa-trademark",
  },
];

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="service-mega-card">
      <div className="service-mega-card-icon">
        <img src="/assets/img/icon/m_01.svg" alt={title} />
      </div>
      <div className="service-mega-card-content">
        <h4 className="service-mega-card-title">{title}</h4>
        <p className="service-mega-card-desc">{description}</p>
      </div>
    </Link>
  );
}

export default function ServicesMegaMenu() {
  return (
    <div className="submenu has-servicemenu">
      <div className="service-mega-inner">
        <div className="row g-3">
          <div className="col-xl-4 col-lg-4">
            <div className="service-mega-column">
              {servicesColumn1.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="service-mega-column">
              {servicesColumn2.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="service-mega-column">
              {servicesColumn3.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
        <div className="service-mega-footer">
          <Link href="/contact" className="theme-btn service-mega-cta">
            <span className="icon-1">
              <img src="/assets/img/icon/10.svg" alt="" />
            </span>
            Get Free Consultation
            <span className="icon-2">
              <img src="/assets/img/icon/11.svg" alt="" />
            </span>
          </Link>
          <div className="service-mega-reviews">
            <div className="service-mega-review-item">
              <span className="service-mega-review-name">Clutch</span>
              <span className="service-mega-review-stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <span className="service-mega-review-text">From 100+ reviews</span>
            </div>
            <div className="service-mega-review-item">
              <span className="service-mega-review-name">Gartner</span>
              <span className="service-mega-review-stars">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </span>
              <span className="service-mega-review-text">From 100+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


