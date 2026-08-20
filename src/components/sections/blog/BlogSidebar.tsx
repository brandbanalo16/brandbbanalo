"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { submitToMailHandler } from "@/lib/mailHandler";
import { getAllBlogs, isVisibleNow } from "@/lib/blogUtils";


export default function BlogSidebar() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; msg: string }>({
    type: "idle",
    msg: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ type: "idle", msg: "" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const service = String(fd.get("service") ?? "");
    if (!service) {
      setStatus({ type: "err", msg: "Please select a service." });
      setSubmitting(false);
      return;
    }

    const payload: Record<string, string> = {
      form_type: "Sidebar Contact Form",
      website: String(fd.get("website") ?? ""), // honeypot
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: service,
      message: String(fd.get("message") ?? ""),
      company_name: "", // optional, omit if not needed
    };

    const res = await submitToMailHandler(payload);
    if (!res.ok) {
      setStatus({ type: "err", msg: res.error || "Unable to submit right now." });
      setSubmitting(false);
      return;
    }

    setStatus({ type: "ok", msg: res.message || "Thanks! We received your request." });
    form.reset();
    setSubmitting(false);
  };

  return (
    <div className="main-sidebar sticky-style">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Get in Touch</h4>
        </div>
        <div className="mt-4">
          <form id="sidebar-contact-form" onSubmit={onSubmit}>
            {/* Honeypot (must stay empty) */}
            <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
              <label>
                Website
                <input name="website" autoComplete="off" tabIndex={-1} />
              </label>
            </div>

            <div className="row g-3">
              <div className="col-lg-12">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    required
                    style={{ width: "100%", padding: "12px 20px", border: "1px solid #e2e8f0", borderRadius: "8px", outline: "none", marginBottom: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    required
                    style={{ width: "100%", padding: "12px 20px", border: "1px solid #e2e8f0", borderRadius: "8px", outline: "none", marginBottom: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    required
                    style={{ width: "100%", padding: "12px 20px", border: "1px solid #e2e8f0", borderRadius: "8px", outline: "none", marginBottom: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <select
                    name="service"
                    required
                    style={{ width: "100%", padding: "12px 20px", border: "1px solid #e2e8f0", borderRadius: "8px", outline: "none", marginBottom: "10px", appearance: "none", background: "#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\") no-repeat right 15px center/16px" }}
                  >
                    <option value="">Select Service*</option>
                    <option value="Website Development">Website Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Brand Kit">Brand Kit</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Website Design">Website Design</option>
                    <option value="UGC Marketing">UGC Marketing</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Video Creation">Video Creation</option>
                    <option value="Product Photography">Product Photography</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt">
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={3}
                    required
                    style={{ width: "100%", padding: "12px 20px", border: "1px solid #e2e8f0", borderRadius: "8px", outline: "none", marginBottom: "15px", resize: "none" }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="theme-btn w-100" style={{ width: "100%", justifyContent: "center" }} disabled={submitting} aria-disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit request"}
                </button>
              </div>
              <div className="col-lg-12">
                <div
                  aria-live="polite"
                  style={{
                    marginTop: 10,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: status.type === "err" ? "#b91c1c" : status.type === "ok" ? "#15803d" : "#111827",
                    display: status.msg ? "block" : "none",
                  }}
                >
                  {status.msg}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3>Recent Post</h3>
        </div>
        <div className="recent-post-area">
          {getAllBlogs().filter(isVisibleNow).map((blog) => (

            <div className="recent-items" key={blog.id}>
              <div className="recent-thumb">
                <img src={blog.image} alt={blog.title} style={{ width: "100px" }} />
              </div>
              <div className="recent-content">
                <h6>
                  <Link href={`/blog/details?slug=${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h6>
                <ul>
                  <li>{blog.date}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h4>Our Services</h4>
        </div>
        <div className="news-widget-categories">
          <div className="tagcloud">
            <Link href="/services/web-development">Website Development</Link>
            <Link href="/services/seo">SEO</Link>
            <Link href="/services/google-ads">Google Ads</Link>
            <Link href="/services/meta-ads">Meta Ads</Link>
            <Link href="/services/branding-kit">Brand Kit</Link>
            <Link href="/services/social-media-marketing">Social Media Marketing</Link>
            <Link href="/services/website-design">Website Design</Link>
            <Link href="/services/ugc-marketing">UGC Marketing</Link>
            <Link href="/services/influancer-marketing">Influencer Marketing</Link>
            <Link href="/services/video-creation">Video Creation</Link>
            <Link href="/services/product-photography">Product photography </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

