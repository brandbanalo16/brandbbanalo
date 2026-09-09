"use client";

import Link from "next/link";
import "@/styles/css/footer.css";
import { useState, type FormEvent } from "react";
import { submitToMailHandler } from "@/lib/mailHandler";

export default function Footer({ marquee }: { marquee?: React.ReactNode }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<{ type: "idle" | "ok" | "err"; msg: string }>({
    type: "idle",
    msg: "",
  });
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const onNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newsletterSubmitting) return;
    setNewsletterSubmitting(true);
    setNewsletterStatus({ type: "idle", msg: "" });

    const res = await submitToMailHandler({
      form_type: "Newsletter Signup",
      website: "",
      email: newsletterEmail,
      name: "",
      phone: "",
      message: "Newsletter signup",
      service: "",
      company_name: "",
    });

    if (!res.ok) {
      setNewsletterStatus({ type: "err", msg: res.error || "Unable to subscribe right now." });
      setNewsletterSubmitting(false);
      return;
    }

    setNewsletterStatus({ type: "ok", msg: res.message || "Subscribed successfully." });
    setNewsletterEmail("");
    setNewsletterSubmitting(false);
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-column footer-brand">
            <Link href="/" className="footer-logo">
              <img src="/assets/img/logo/logo-black.webp" alt="Brandbanalo Logo" />
            </Link>
            <p>
              Brandbanalo is a full-service digital marketing agency based in Delhi, India. We help businesses grow, scale, and build a strong online presence. We are a team of passionate digital marketers who are dedicated to helping businesses succeed in the digital space.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/brandbanalo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.instagram.com/brandbanalo?igsh=eDRuN2gxNWQyYzZs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/brandbanalo/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=918395825607" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="https://www.youtube.com/channel/UCVmLm0F7mTzO-MDUvrEMmMg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-menu">
              <li><Link href="/" prefetch={false}>Home</Link></li>
              <li><Link href="/behind-the-brand" prefetch={false}>About Us</Link></li>
              <li><Link href="/services" prefetch={false}>Services</Link></li>
              <li><Link href="/case-study" prefetch={false}>Case Study</Link></li>
              <li><Link href="/team" prefetch={false}>Our Team</Link></li>
              <li><Link href="/contact" prefetch={false}>Contact Us</Link></li>
              <li><Link href="/blog/grid/" prefetch={false}>Blog</Link></li>
              <li><Link href="/marketing-area" prefetch={false}>Market Area</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-menu">
              <li><Link href="/services/web-development" prefetch={false}>Web Development</Link></li>
              <li><Link href="/services/seo" prefetch={false}>SEO Optimization</Link></li>
              <li><Link href="/services/lead-generation" prefetch={false}>Meta Ads Management</Link></li>
              <li><Link href="/services/ads-management" prefetch={false}>Google Ads Management</Link></li>
              <li><Link href="/services/social-media-management" prefetch={false}>Social Media</Link></li>
              <li><Link href="/services/branding-designing" prefetch={false}>Brand Kit</Link></li>
              <li><Link href="/industry-specific-service" prefetch={false}>Industry Specific Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p className="newsletter-desc">Subscribe to get the latest digital trends and agency updates.</p>
            <form className="newsletter-form" onSubmit={onNewsletterSubmit}>
              {/* Honeypot (hidden) */}
              <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                <label>
                  Website
                  <input name="website" autoComplete="off" tabIndex={-1} />
                </label>
              </div>

              <input
                type="email"
                name="email"
                suppressHydrationWarning
                placeholder="Your Email Address"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe" disabled={newsletterSubmitting} aria-disabled={newsletterSubmitting} suppressHydrationWarning>
                <i className="fas fa-paper-plane" />
              </button>
            </form>
            <div
              aria-live="polite"
              style={{
                marginTop: 10,
                fontWeight: 700,
                fontSize: 12,
                color: newsletterStatus.type === "err" ? "#b91c1c" : newsletterStatus.type === "ok" ? "#15803d" : "#111827",
                display: newsletterStatus.msg ? "block" : "none",
              }}
            >
              {newsletterStatus.msg}
            </div>
          </div>
          <div className="footer-contact-row">
            <div className="contact-horizontal-grid">
              <div className="contact-col">
                <h4 className="contact-col-title">Company Email</h4>
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <a href="mailto:info@brandbanalo.com">info@brandbanalo.com</a>
                  </li>
                </ul>
              </div>
              <div className="contact-col">
                <h4 className="contact-col-title">Company Phone</h4>
                <ul>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:+918395825607">+91 83958 25607</a>
                  </li>
                </ul>
              </div>
              <div className="contact-col">
                <h4 className="contact-col-title">Company Location</h4>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <span>8th floor, 710 Westend mall, Janakpuri, West Delhi - 110058</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {marquee && marquee}

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright" suppressHydrationWarning>
            © {new Date().getFullYear()} Brandbanalo Pvt. Ltd. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy/" prefetch={false}>Privacy Policy</Link>
            <Link href="/terms/" prefetch={false}>Terms & Conditions</Link>
          </div>
          <div className="copyright" suppressHydrationWarning>
            Managed by <Link href="/" style={{ color: '#ff6b35', textDecoration: 'none' }} suppressHydrationWarning>Brandbanalo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

