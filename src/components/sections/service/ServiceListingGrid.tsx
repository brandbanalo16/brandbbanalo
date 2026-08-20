"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/Industry.json";

export default function ServiceListingGrid() {
  const services = servicesData.services;

  return (
    <section className="service-listing-grid-section section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Header / Intro */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6
              style={{
                color: "#3b286d",
                fontWeight: "700",
                marginBottom: "20px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "14px",
                display: "inline-block",
                position: "relative"
              }}
            >
              <span style={{ width: "30px", height: "1.5px", backgroundColor: "#3b286d", display: "inline-block", verticalAlign: "middle", marginRight: "10px" }}></span>
              OUR EXPERTISE
              <span style={{ width: "30px", height: "1.5px", backgroundColor: "#3b286d", display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}></span>
            </h6>
            <h2 style={{ fontSize: "48px", fontWeight: "800", color: "#2d205a", lineHeight: "1.2", marginBottom: "25px" }}>
              Comprehensive Solutions for Your Digital Growth
            </h2>
            <p style={{ color: "#666", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
              We combine strategy, creativity, and technical excellence to help your business reach the right audience and achieve measurable success.
            </p>
          </div>
        </div>

        {/* CSS for hover effects */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .service-card-modern {
            background: #ffffff;
            border-radius: 30px;
            padding: 45px 35px;
            height: 100%;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            border: 1px solid #f0f0f0;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .service-card-modern:hover {
            transform: translateY(-12px);
            box-shadow: 0 25px 50px rgba(45, 32, 90, 0.08);
            border-color: #e5e0f5;
          }
          .service-card-modern::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: linear-gradient(180deg, rgba(59, 40, 109, 0.02) 0%, rgba(59, 40, 109, 0.05) 100%);
            transition: height 0.4s ease;
            z-index: -1;
          }
          .service-card-modern:hover::before {
            height: 100%;
          }
          
          .service-card-icon {
            width: 70px;
            height: 70px;
            background: #f8f7ff;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            transition: all 0.4s ease;
          }
          .service-card-modern:hover .service-card-icon {
            background: #3b286d;
            transform: rotateY(360deg);
          }
          .service-card-icon img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            transition: filter 0.4s ease;
          }
          .service-card-modern:hover .service-card-icon img {
            filter: brightness(0) invert(1);
          }

          .read-more-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            color: #3b286d;
            text-decoration: none;
            margin-top: auto;
            font-size: 15px;
            transition: all 0.3s ease;
          }
          .read-more-btn i {
            font-size: 12px;
            transition: transform 0.3s ease;
          }
          .service-card-modern:hover .read-more-btn i {
            transform: translateX(5px);
          }
        `}} />

        <div className="row g-4 mt-2">
          {services.map((service) => {
            // Map icon images from /assets/img/icon/ folder
            const iconMap: Record<string, string> = {
              "web-development":        "/assets/img/icon/webdevelopment.webp",
              "seo":                    "/assets/img/icon/seo.webp",
              "website-design":         "/assets/img/icon/Webdesign.webp",
              "google-ads":             "/assets/img/icon/Googleads.webp",
              "meta-ads":               "/assets/img/icon/meta.webp",
              "social-media-marketing": "/assets/img/icon/SMO.webp",
              "ugc-marketing":          "/assets/img/icon/UGC.webp",
              "influancer-marketing":   "/assets/img/icon/Influencer.webp",
              "video-creation":         "/assets/img/icon/Video.webp",
              "product-photography":    "/assets/img/icon/photogrpahy.webp",
              "branding-kit":           "/assets/img/icon/branding.webp",
            };

            const iconSrc = iconMap[service.key] ?? "/assets/img/icon/webdevelopment.webp";

            return (
              <div className="col-xl-4 col-lg-6 col-md-6" key={service.id}>
                <div className="service-card-modern">
                  <div className="service-card-icon">
                    <Image
                      src={iconSrc}
                      alt={service.name}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#2d205a", marginBottom: "20px" }}>
                    {service.name}
                  </h3>

                  <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.7", marginBottom: "30px", flexGrow: 1 }}>
                    {service.heroDescription}
                  </p>

                  <Link href={`/services/${service.key}/`} className="read-more-btn">
                    READ MORE <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>

                  {/* Decorative Number */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-15px",
                      right: "15px",
                      fontSize: "100px",
                      fontWeight: "900",
                      color: "rgba(59, 40, 109, 0.03)",
                      zIndex: -1,
                      userSelect: "none"
                    }}
                  >
                    {service.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
