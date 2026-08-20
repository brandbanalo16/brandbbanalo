import Link from "next/link";
import "@/styles/css/service-banner.css";

interface ModernServiceBannerProps {
  breadcrumbParent: string;
  breadcrumbParentLink: string;
  breadcrumbChild: string;
  subtitle: string;
  title: string;
  imagePath?: string;
}

export default function ModernServiceBanner({
  breadcrumbParent,
  breadcrumbParentLink,
  breadcrumbChild,
  subtitle,
  title,
  imagePath,
}: ModernServiceBannerProps) {
  return (
    <section className="modern-service-banner-section">
      <div className="modern-banner-container">
        {/* Breadcrumb row */}
        <div className="modern-breadcrumb wow fadeInDown" data-wow-delay=".2s">
          <Link href="/">Home</Link>
          <span className="separator">&gt;</span>
          <Link href={breadcrumbParentLink}>{breadcrumbParent}</Link>
          <span className="separator">&gt;</span>
          <span>{breadcrumbChild}</span>
        </div>

        {/* Text Content */}
        <div className="modern-banner-content">
          <h4 className="modern-subtitle wow fadeInUp" data-wow-delay=".3s">
            {subtitle}
          </h4>
          {/* We use dangerouslySetInnerHTML safely here if title contains <br/> tags, or just pass it as standard text */}
          <h1 
            className="modern-title wow fadeInUp" 
            data-wow-delay=".5s"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Floating Decorative Elements */}
        <div className="modern-floating-elements">
          <div className="scroll-down wow fadeInLeft" data-wow-delay=".6s">
            <div className="arrow-circle">
              <i className="fa-solid fa-arrow-down" />
            </div>
            <span>Scroll Down To<br />Explore More</span>
          </div>

          <div className="graffiti-text wow fadeInRight" data-wow-delay=".7s">
            <span>#BUILDING<br />FOR THE<br />FUTURE</span>
          </div>
        </div>

        {/* Center Graphic */}
        <div className="modern-center-image wow fadeInUp" data-wow-delay=".4s">
          <img 
            src={imagePath || "/assets/img/hero/laptop-placeholder.webp"} 
            alt="Service Mockup" 
          />
        </div>
      </div>
    </section>
  );
}
