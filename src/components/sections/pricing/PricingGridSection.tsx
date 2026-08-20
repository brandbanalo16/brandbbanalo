import Link from "next/link";
import CheckIcon from "./CheckIcon";
import { pricingPlanCards } from "@/data/pricing-plans";
import "@/styles/css/pricing-page.css";

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  variant,
  badge,
}: (typeof pricingPlanCards)[number]) {
  const isFeatured = variant === "featured";
  const cardClass = isFeatured
    ? "bb-pricing-card bb-pricing-card--featured"
    : "bb-pricing-card bb-pricing-card--dark";

  return (
    <div className={cardClass}>
      <div className="bb-pricing-card__top">
        <div className="bb-pricing-card__top-main">
          <h3 className="bb-pricing-card__name">{name}</h3>
          <div className="bb-pricing-card__price-row">
            <span className="bb-pricing-card__price">{price}</span>
            <span className="bb-pricing-card__period">{period}</span>
          </div>
        </div>
        {badge ? <span className="bb-pricing-card__badge">{badge}</span> : null}
      </div>
      <p className="bb-pricing-card__desc">{description}</p>
      <div className="bb-pricing-card__list-wrap">
        <ul className="bb-pricing-card__list">
          {features.map((feature) => (
            <li key={feature}>
              <span className="bb-pricing-card__icon" aria-hidden>
                <CheckIcon />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bb-pricing-card__cta">
        <Link href="/contact" className="bb-pricing-card__btn">
          Choose This Plan
          <span className="bb-pricing-card__btn-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function PricingGridSection() {
  return (
    <section className="bb-pricing-grid section-padding fix">
      <div className="container">
        <header className="bb-pricing-grid__head">
          <p className="bb-pricing-grid__eyebrow">Transparent pricing</p>
          <h2 className="bb-pricing-grid__title">
            Plans built for <span>real growth</span>
          </h2>
          <p className="bb-pricing-grid__lead">
            Pick a package that matches your stage — or tell us what you need
            and we&apos;ll tailor a custom scope.
          </p>
        </header>
        <div className="row g-4 justify-content-center align-items-stretch">
          {pricingPlanCards.map((plan) => (
            <div
              className="col-xl-4 col-lg-4 col-md-6 d-flex"
              key={plan.name}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
