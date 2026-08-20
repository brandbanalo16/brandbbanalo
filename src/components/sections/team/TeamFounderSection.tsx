"use client";
import React from "react";

const founders = [
  {
    id: "founder",
    name: "Surya Prakash",
    role: "Founder",
    company: "BrandBanalo",
    image: "/assets/img/about/founder-surya.webp",
    bio1:
      "Surya Prakash is the founder of BrandBanalo, driven by a mission to elevate how B2B businesses build visibility, credibility, and trust in the digital space. With 7+ years of experience across Just Dial and Industrial sectors, and an MBA in Sales & Marketing, he brings deep market insight and strategy-led thinking to every brand.",
    bio2:
      "BrandBanalo was born from a simple belief — B2B and D2Cbrands deserve more power, precision, and presence. Today, Surya leads the agency in building strong, market-ready brands that create real business impact.",
    quote:
      "Branding is the oxygen of modern business — especially in B2B, where trust speaks louder than ads.",
    credentials: ["7+ Years Experience", "MBA Sales & Marketing", "B2B Expert"],
    // content left, image right
    imageRight: true,
    linkedin: "https://www.linkedin.com/in/surya-prakash-07a354153",
  },
  {
    id: "cofounder",
    name: "Alisha Sharma",
    role: "Co-Founder",
    company: "BrandBanalo",
    image: "/assets/img/about/founder-section2.webp",
    bio1:
      "Behind every growing brand, successful campaign, and powerful digital presence… there’s a woman turning ideas into impact. As the Co-Founder of brandbanalo, she isn’t just managing social media — she’s helping businesses build complete digital identities. From branding, influencer marketing, and UGC campaigns to creative strategy, content planning, and digital growth, she leads every detail with vision, creativity, and purpose.",
    bio2:
      "Her belief is simple — every brand deserves to be seen, trusted, and remembered. That vision is the reason our clients continue to grow online and build stronger connections with their audience. She doesn’t just lead campaigns or manage a team; she leads the strategy, creativity, and digital vision behind every success story at brandbanalo.",
    quote:
      "Great brands are built when vision and execution move together.",
    credentials: ["Operations Leader", "Brand Strategist", "Growth Expert"],
    // image left, content right
    imageRight: false,
    linkedin: "https://www.linkedin.com/in/alisha-sharma-71283a193",
  },
];

export default function TeamFounderSection() {
  return (
    <>
      <style>{`
        .founder-pro-section {
          padding: 60px 0 40px;
          background: #f9f9f9;
        }
        .founder-pro-section .section-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff3e6;
          border: 1px solid #f7941d;
          color: #f7941d;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 13px;
          border-radius: 100px;
          margin-bottom: 10px;
        }
        .founder-pro-section .section-heading {
          font-size: clamp(22px, 3vw, 32px) !important;
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin-bottom: 0;
        }
        .founder-pro-section .section-heading span {
          color: #f7941d;
        }
        .founder-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 3px 20px rgba(0,0,0,0.07);
          margin-bottom: 28px;
          transition: box-shadow 0.3s ease;
        }
        .founder-card:hover {
          box-shadow: 0 8px 36px rgba(0,0,0,0.11);
        }
        /* Content left, image right */
        .founder-card-inner {
          display: grid;
          grid-template-columns: 1fr 340px;
          min-height: 320px;
        }
        /* Image left, content right */
        .founder-card-inner.img-left {
          grid-template-columns: 340px 1fr;
        }
        .founder-image-col {
          position: relative;
          background: #111;
          overflow: hidden;
        }
        .founder-image-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.5s ease;
        }
        .founder-card:hover .founder-image-col img {
          transform: scale(1.04);
        }
        .founder-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 45%,
            rgba(0,0,0,0.5) 100%
          );
          z-index: 1;
        }
        .founder-role-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          z-index: 2;
          background: #f7941d;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
        }
        .founder-content-col {
          padding: 28px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .founder-content-col .role-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #f7941d;
          margin-bottom: 6px;
        }
        .founder-content-col h2 {
          font-size: clamp(20px, 2.5vw, 28px) !important;
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin-bottom: 4px;
        }
        .founder-divider {
          width: 38px;
          height: 3px;
          background: linear-gradient(90deg, #f7941d 0%, #ffb347 100%);
          border-radius: 2px;
          margin: 12px 0 14px;
        }
        .founder-content-col .bio-text {
          font-size: 13.5px;
          line-height: 1.75;
          color: #555;
          margin-bottom: 10px;
        }
        .founder-credentials {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .founder-credential-chip {
          background: #f5f5f5;
          border: 1px solid #e0e0e0;
          color: #444;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 100px;
          letter-spacing: 0.4px;
        }
        .founder-quote-block {
          position: relative;
          background: linear-gradient(135deg, #fff8f0 0%, #fff3e6 100%);
          border-left: 3px solid #f7941d;
          border-radius: 0 10px 10px 0;
          padding: 14px 16px 14px 20px;
          margin-top: 4px;
        }
        .founder-quote-mark {
          font-size: 44px;
          line-height: 1;
          color: #f7941d;
          opacity: 0.22;
          font-family: Georgia, serif;
          position: absolute;
          top: 4px;
          left: 10px;
          pointer-events: none;
        }
        .founder-quote-block p {
          font-size: 13px;
          font-style: italic;
          color: #555;
          line-height: 1.7;
          margin: 0;
          padding-left: 22px;
        }
        .founder-linkedin {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #0077b5;
          text-decoration: none;
          transition: gap 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        .founder-linkedin:hover {
          gap: 10px;
          opacity: 1;
          color: #0077b5;
        }
        .founder-linkedin svg {
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .founder-card-inner,
          .founder-card-inner.img-left {
            grid-template-columns: 1fr;
          }
          .founder-image-col {
            min-height: 240px;
          }
          /* On mobile, image always goes on top */
          .founder-card-inner .founder-content-col {
            order: 2;
          }
          .founder-card-inner .founder-image-col {
            order: 1;
          }
          .founder-content-col {
            padding: 28px 22px;
          }
          .founder-pro-section {
            padding: 48px 0 30px;
          }
        }

        @media (max-width: 575px) {
          .founder-content-col {
            padding: 22px 16px;
          }
          .founder-image-col {
            min-height: 200px;
          }
        }
      `}</style>

      <section className="founder-pro-section">
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* Section Header */}
          <div className="text-center mb-4">
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Leadership
            </span>
            <h2 className="section-heading">
              The Minds Behind <span>BrandBanalo</span>
            </h2>
          </div>

          {/* Founder Cards */}
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card">
              {/*
                imageRight = true  → content left, image right  (grid: 1fr 400px, image is 2nd child)
                imageRight = false → image left, content right  (grid: 400px 1fr, image is 1st child)
              */}
              <div className={`founder-card-inner${founder.imageRight ? "" : " img-left"}`}>
                {founder.imageRight ? (
                  <>
                    {/* Content first (left) */}
                    <div className="founder-content-col">
                      <span className="role-tag">{founder.role} · {founder.company}</span>
                      <h2>{founder.name}</h2>
                      <div className="founder-divider" />
                      <p className="bio-text">{founder.bio1}</p>
                      <p className="bio-text">{founder.bio2}</p>
                      <div className="founder-credentials">
                        {founder.credentials.map((cred) => (
                          <span key={cred} className="founder-credential-chip">{cred}</span>
                        ))}
                      </div>
                      <div className="founder-quote-block">
                        <span className="founder-quote-mark">"</span>
                        <p>{founder.quote}</p>
                      </div>
                      <a href={founder.linkedin} className="founder-linkedin" aria-label={`${founder.name} on LinkedIn`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                        Connect on LinkedIn
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                        </svg>
                      </a>
                    </div>
                    {/* Image second (right) */}
                    <div className="founder-image-col">
                      <img src={founder.image} alt={founder.name} />
                      <div className="founder-image-overlay" />
                      <div className="founder-role-badge">{founder.role}</div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image first (left) */}
                    <div className="founder-image-col">
                      <img src={founder.image} alt={founder.name} />
                      <div className="founder-image-overlay" />
                      <div className="founder-role-badge">{founder.role}</div>
                    </div>
                    {/* Content second (right) */}
                    <div className="founder-content-col">
                      <span className="role-tag">{founder.role} · {founder.company}</span>
                      <h2>{founder.name}</h2>
                      <div className="founder-divider" />
                      <p className="bio-text">{founder.bio1}</p>
                      <p className="bio-text">{founder.bio2}</p>
                      <div className="founder-credentials">
                        {founder.credentials.map((cred) => (
                          <span key={cred} className="founder-credential-chip">{cred}</span>
                        ))}
                      </div>
                      <div className="founder-quote-block">
                        <span className="founder-quote-mark">"</span>
                        <p>{founder.quote}</p>
                      </div>
                      <a href={founder.linkedin} className="founder-linkedin" aria-label={`${founder.name} on LinkedIn`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                        Connect on LinkedIn
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                        </svg>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
