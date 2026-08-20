import Link from "next/link";
import CheckIcon from "./CheckIcon";
import { pricingPlanCards } from "@/data/pricing-plans";
import "@/styles/css/pricing-page.css";

export default function PricingPackageDetailsSection() {
  return (
    <section className="bb-pricing-detail section-padding fix">
      <div className="container">
        <header className="bb-pricing-detail__head">
          <span className="bb-pricing-detail__eyebrow">Package details</span>
          <h2 className="bb-pricing-detail__title">
            What <span>each plan</span> includes
          </h2>
          <p className="bb-pricing-detail__lead">
            Below is a clear picture of what Silver, Diamond, and Gold are meant
            for — and the deliverables you can expect inside each package.
          </p>
        </header>

        <div className="row g-4">
          {pricingPlanCards.map((plan) => {
            const isFeatured = plan.variant === "featured";
            const blockClass = isFeatured
              ? "bb-pricing-detail__block bb-pricing-detail__block--featured"
              : "bb-pricing-detail__block bb-pricing-detail__block--standard";
            return (
              <div
                className="col-xl-4 col-lg-4 col-md-6 d-flex"
                key={plan.name}
              >
                <article className={blockClass}>
                  <div className="bb-pricing-detail__block-top">
                    <div className="bb-pricing-detail__block-top-main">
                      <h3 className="bb-pricing-detail__name">{plan.name}</h3>
                      <p className="bb-pricing-detail__price-line">
                        <span className="bb-pricing-detail__price">
                          {plan.price}
                        </span>
                        <span className="bb-pricing-detail__period">
                          {plan.period}
                        </span>
                      </p>
                    </div>
                    {plan.badge ? (
                      <span className="bb-pricing-detail__badge">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="bb-pricing-detail__what">{plan.whatItIs}</p>
                  {/* <h4 className="bb-pricing-detail__includes-heading">
                    What&apos;s in this package
                  </h4>
                  <ul className="bb-pricing-detail__list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="bb-pricing-detail__check" aria-hidden>
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul> */}
                  <div className="bb-pricing-detail__cta">
                    <Link href="/contact" className="bb-pricing-detail__link">
                      Discuss {plan.name}
                      <span aria-hidden> →</span>
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
