"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitToMailHandler } from "@/lib/mailHandler";
import "@/styles/css/pricing-page.css";

const TRUST_POINTS = [
  {
    icon: "fa-solid fa-trophy",
    tone: "orange",
    title: "5+ years of experience",
    description:
      "Strategy-first digital marketing across web, SEO, paid media, and branding.",
  },
  {
    icon: "fa-solid fa-thumbs-up",
    tone: "purple",
    title: "100+ projects delivered",
    description:
      "From startups to established brands — we build systems that convert.",
  },
  {
    icon: "fa-solid fa-users",
    tone: "lavender",
    title: "2Cr+ in managed ad spend",
    description:
      "Performance-led Google & Meta campaigns focused on qualified leads.",
  },
] as const;

export default function PricingCustomPackageSection() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; msg: string }>({
    type: "idle",
    msg: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ type: "idle", msg: "" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const plan = String(fd.get("plan") ?? "");
    if (!plan) {
      setStatus({ type: "err", msg: "Please select a package or option." });
      setSubmitting(false);
      return;
    }

    const payload: Record<string, string> = {
      form_type: "Pricing Quote Request",
      website: String(fd.get("website") ?? ""),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: `Pricing — ${plan}`,
      message: String(fd.get("message") ?? ""),
    };

    const res = await submitToMailHandler(payload);
    if (!res.ok) {
      setStatus({ type: "err", msg: res.error || "Unable to submit right now." });
      setSubmitting(false);
      return;
    }

    setStatus({ type: "ok", msg: res.message || "Thank you — we'll reach out shortly." });
    form.reset();
    setSubmitting(false);
  }

  return (
    <section className="bb-pricing-custom section-padding fix">
      <div className="bb-pricing-custom__bg" aria-hidden />
      <div className="bb-pricing-custom__bg-grid" aria-hidden />
      <div className="container">
        <div className="bb-pricing-custom__layout">
          <aside className="bb-pricing-custom__aside">
            <div className="bb-pricing-custom__rating" aria-label="Trusted by clients">
              <span className="bb-pricing-custom__stars" aria-hidden>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="fa-solid fa-star" />
                ))}
              </span>
              <span className="bb-pricing-custom__rating-text">
                Trusted by growing brands
              </span>
            </div>

            <h2 className="bb-pricing-custom__title">
              Get a <span className="bb-pricing-custom__hl-orange">Custom Package</span>{" "}
              Designed for <span className="bb-pricing-custom__hl-purple">Your Needs</span>
            </h2>

            <ul className="bb-pricing-custom__trust-list">
              {TRUST_POINTS.map((item) => (
                <li key={item.title} className="bb-pricing-custom__trust-item">
                  <span
                    className={`bb-pricing-custom__trust-icon bb-pricing-custom__trust-icon--${item.tone}`}
                    aria-hidden
                  >
                    <i className={item.icon} />
                  </span>
                  <span className="bb-pricing-custom__trust-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="bb-pricing-custom__form-card">
            <h3 className="bb-pricing-custom__form-title">Contact Us</h3>

            <form className="bb-pricing-form" onSubmit={handleSubmit} noValidate>
              <div className="bb-pricing-form__honeypot" aria-hidden="true">
                <label>
                  Website
                  <input name="website" autoComplete="off" tabIndex={-1} />
                </label>
              </div>

              <div className="bb-pricing-form__grid bb-pricing-form__grid--2">
                <div className="bb-pricing-form__field">
                  <label htmlFor="custom-name">Full Name*</label>
                  <input
                    id="custom-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Full Name*"
                  />
                </div>
                <div className="bb-pricing-form__field">
                  <label htmlFor="custom-email">Business Email Address*</label>
                  <input
                    id="custom-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Business Email Address*"
                  />
                </div>
              </div>

              <div className="bb-pricing-form__grid bb-pricing-form__grid--2">
                <div className="bb-pricing-form__field">
                  <label htmlFor="custom-phone">Phone Number*</label>
                  <div className="bb-pricing-form__phone">
                    <span className="bb-pricing-form__phone-prefix" aria-hidden>
                      +91
                    </span>
                    <input
                      id="custom-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="Phone Number*"
                    />
                  </div>
                </div>
                <div className="bb-pricing-form__field">
                  <label htmlFor="custom-plan">Interested in*</label>
                  <select id="custom-plan" name="plan" required defaultValue="">
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option value="Silver">Silver</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Gold">Gold</option>
                    <option value="Fully custom scope">Fully custom scope</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="bb-pricing-form__field">
                <label htmlFor="custom-message">Message*</label>
                <textarea
                  id="custom-message"
                  name="message"
                  required
                  placeholder="Goals, services, budget range, timeline…"
                />
              </div>

              <p className="bb-pricing-form__consent">
                Note: I consent that my personal data will be processed according to{" "}
                <Link href="/privacy-policy">Brandbanalo&apos;s privacy policy</Link>.
              </p>

              <button
                type="submit"
                className="bb-pricing-form__submit"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Submit"}
              </button>

              {status.type === "ok" ? (
                <p className="bb-pricing-form__success" role="status">
                  {status.msg}
                </p>
              ) : null}
              {status.type === "err" ? (
                <p className="bb-pricing-form__error" role="alert">
                  {status.msg}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
