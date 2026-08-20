import React from "react";
import "@/styles/css/whychoose.css";

import img1 from "@/styles/img/banner.webp";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-section">

      <div className="why-top">

        <div className="why-heading">
          <h2>
            Why Choose Us <br />
            As Your Website <br />
            Design Agency?
          </h2>
        </div>

        <div className="why-text">
          <p>
            With over a decade of experience, we deliver future-proof digital
            solutions that blend creative excellence with technical precision.
          </p>
        </div>

      </div>

      <div className="why-grid">

        {/* Row 1 */}
        <div className="card gradient-purple lg-col-4" style={{color:"white"}}>
          <span className="number" style={{color:"white"}}>01</span>
          <h3 style={{color:"white"}}>12+ Years Of Expertise</h3>
          <p style={{color:"white"}}>
            Mastering Design, Development, And Technology Integration.
          </p>
        </div>

        <div className="card gradient-light lg-col-8">
          <span className="number">02</span>

          <div className="card-flex">
            <div>
              <h3>Full-Funnel Strategy</h3>
              <p>
                From Acquisition To Retention, We Cover Every Touchpoint.
              </p>
            </div>

            <img
              src={typeof img1 === "string" ? img1 : img1.src}
              alt="illustration"
              width={160}
              height={160}
              style={{ display: "block" }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="card gradient-light lg-col-8">
          <span className="number">03</span>

          <div className="card-flex">
            <div>
              <h3>Tailored Solutions</h3>
              <p>
                Custom Solutions For Shopify Ecommerce, B2B Platforms And More.
              </p>
            </div>

            <img
              src={typeof img1 === "string" ? img1 : img1.src}
              alt="illustration"
              width={150}
              height={150}
              style={{ display: "block" }}
            />
          </div>
        </div>

        <div className="card gradient-purple lg-col-4">
          <span className="number" style={{color:"white"}}>04</span>
          <h3 style={{color:"white"}}>Innovation-Driven</h3>
          <p style={{color:"white"}}>
            Constantly Evolving To Leverage Latest Frameworks.
          </p>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
