"use client";

import { useState, type FormEvent } from "react";
import { submitToMailHandler } from "@/lib/mailHandler";

export default function ContactFormSection() {
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
      form_type: "Contact Form",
      website: String(fd.get("website") ?? ""), // honeypot
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: service,
      message: String(fd.get("message") ?? ""),
      company_name: String(fd.get("company_name") ?? ""),
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
    <section className="contact-section fix section-padding pt-0">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp">
              <div className="map-items">
                <div className="googpemap">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0025529820077!2d77.07707001115861!3d28.62968558410826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf7f6ae361%3A0x88c15da012435142!2sWestend%20Mall%20Janakpuri%20West%20Delhi!5e0!3m2!1sen!2sus!4v1773488843541!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0, borderRadius: "20px" }} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <h3 className="wow fadeInUp">Ready to Get Started?</h3>
                <form
                  id="contact-form"
                  className="contact-form-items"
                  onSubmit={onSubmit}
                >
                  {/* Honeypot (must stay empty) */}
                  <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                    <label>
                      Website
                      <input name="website" autoComplete="off" tabIndex={-1} />
                    </label>
                  </div>

                  <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="form-clt">
                        <span>Full Name*</span>
                        <input
                          type="text"
                          name="name"
                          id="contact-first-name"
                          placeholder="Enter Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="form-clt">
                        <span>Phone Number*</span>
                        <input
                          type="tel"
                          name="phone"
                          id="contact-phone"
                          placeholder="Enter Your Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="form-clt">
                        <span>Email address*</span>
                        <input
                          type="email"
                          name="email"
                          id="contact-email"
                          placeholder="Enter Your Email address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="form-clt">
                        <span>Select Service*</span>
                        <select
                          name="service"
                          id="contact-service"
                          required
                        >
                          <option value="">Select Service</option>
                          <option value="Web Designing & Development">Web Designing & Development</option>
                          <option value="Search Engine Optimization">Search Engine Optimization</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Leads & Ads Generation">Leads & Ads Generation</option>
                          <option value="Branding Designing">Branding Designing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".6s">
                      <div className="form-clt">
                        <span>Company Name (optional)</span>
                        <input
                          type="text"
                          name="company_name"
                          id="contact-company"
                          placeholder="Enter Your Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                      <div className="form-clt">
                        <span>Message*</span>
                        <textarea
                          name="message"
                          id="contact-message"
                          placeholder="Write your message......"
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="theme-btn" disabled={submitting} aria-disabled={submitting}>
                        <span className="icon-1">
                          <img src="/assets/img/icon/10.svg" alt="Submit" />
                        </span>
                        {submitting ? "Submitting..." : "Submit request"}
                        <span className="icon-2">
                          <img src="/assets/img/icon/11.svg" alt="Submit" />
                        </span>
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <div
                        aria-live="polite"
                        style={{
                          marginTop: 10,
                          fontWeight: 700,
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
          </div>
        </div>
      </div>
    </section>
  );
}

