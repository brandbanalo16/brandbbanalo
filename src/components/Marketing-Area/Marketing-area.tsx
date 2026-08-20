"use client";
import React from "react";
import Link from "next/link";
import "@/styles/css/Hero.css";
import industriesData from "@/data/Industry.json";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import ServiceListingGrid from "@/components/sections/service/ServiceListingGrid";
import Counter from "@/components/Counter";
import BrandStripSection from "@/components/sections/about/BrandStripSection";

interface FAQ {
    q: string;
    a: string;
}

interface Meta {
    title: string;
    description: string;
    keywords: string[];
}

interface LocationData {
    name: string;
    slug: string;
    type: "state" | "city";
    intro: string;
    meta: Meta;
    keywords: string[];
    areas?: string[];
    faqs: FAQ[];
}

interface MarketingAreaProps {
    locationData: LocationData;
    serviceData?: { name: string; slug: string; shortName: string };
}

export default function MarketingArea({ locationData, serviceData }: MarketingAreaProps) {
    const services = industriesData.services;

    const getIntro = () => {
        if (!serviceData) return locationData.intro;
        return locationData.intro.replace(/digital marketing services|digital marketing/gi, `${serviceData.shortName} services`);
    };

    return (
        <>
            {/* 1. Breadcrumb Banner */}
            <div
                className="breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
            >
                <div className="container">
                    <div className="page-heading">
                        <div className="breadcrumb-sub-title">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ textTransform: "uppercase" }}>
                                {serviceData?.name || "Best Digital Marketing Agency"} in {locationData.name}
                            </h1>
                        </div>
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/">
                                    <i className="fa-regular fa-house" /> Home
                                </Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-slash-forward" />
                            </li>
                            <li>
                                <Link href="/marketing-area/">
                                    Marketing Area
                                </Link>
                            </li>
                            <li>
                                <i className="fa-solid fa-slash-forward" />
                            </li>
                            <li>{locationData.name}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2. About Section */}
            <section className="about-section-2 fix section-padding">
                <div className="container">
                    <div className="about-wrapper-2">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h2 className="tp_reveal_anim">
                                        Elevate Your Brand in {locationData.name} with Smart {serviceData?.shortName || "Digital"} Solutions.
                                    </h2>
                                    <br />
                                    <h6 className="wow fadeInUp">Behind the brand</h6>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        {getIntro()}
                                        <br /><br />
                                        At Brandbanalo, we specialize in driving growth and visibility for businesses in <strong>{locationData.name}</strong>. Our mission is simple - help local brands scale faster, generate high-quality leads, and establish a dominant {serviceData?.shortName || "digital"} presence.
                                    </p>
                                    <ul className="about-list wow fadeInUp" data-wow-delay=".5s">
                                        <li><i className="fa-regular fa-arrow-up-right" /> Scale your {locationData.name} business team</li>
                                        <li><i className="fa-regular fa-arrow-up-right" /> Improve local product sale ratio</li>
                                        <li><i className="fa-regular fa-arrow-up-right" /> Targeted traffic from {locationData.name}</li>
                                    </ul>
                                    <Link href="/behind-the-brand/" className="theme-btn theme-color-2 wow fadeInUp" data-wow-delay=".3s">
                                        <span className="icon-1"><img src="/assets/img/icon/10.svg" alt="Know more" /></span>
                                        know more
                                        <span className="icon-2"><img src="/assets/img/icon/11.svg" alt="Know more" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content-2">
                                    <img src="/assets/img/about/about.webp" alt={`${serviceData?.shortName || "Digital Marketing"} ${locationData.name}`} style={{ borderRadius: "20px" }} />
                                    <div className="counter-items">
                                        <div className="content wow fadeInUp" data-wow-delay=".3s">
                                            <h2><Counter end={2} suffix="Cr" /> +</h2>
                                            <p>Ads Spend</p>
                                        </div>
                                        <div className="content wow fadeInUp" data-wow-delay=".5s">
                                            <h2><Counter end={100} /> +</h2>
                                            <p>Projects Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Section */}
            <section className="choose-us-section section-padding bg-cover" style={{ backgroundImage: "url('/assets/img/choous-us-bg.webp')" }}>
                <div className="choose-us-image">
                    <img src="/assets/img/choose-us-img.webp" alt={`Why Choose Us in ${locationData.name}`} className="wow img-custom-anim-left" />
                </div>
                <div className="container">
                    <div className="section-title theme-color-3 mb-0">
                        <h6 className="wow fadeInUp">why choose us</h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Discover why we're your top <br /> choice for {serviceData?.shortName || "Digital Marketing"} <br /> in {locationData.name}.
                        </h2>
                        <p className="text-white max-600 mt-4 wow fadeInUp" data-wow-delay=".5s">
                            We combine deep data insights with creative excellence to deliver results that matter. From SEO to High-Conversion Paid Ads, we cover everything your brand needs in <strong>{locationData.name}</strong>.
                        </p>
                    </div>
                    <div className="counter-wrapper-3">
                        <div className="row g-4">
                            {[
                                { count: 5, suffix: "+", label: "Years of Experience", delay: ".3s" },
                                { count: 100, suffix: "+", label: "Projects Completed", delay: ".5s" },
                                { count: 2, suffix: "Cr", label: "Ads Spend", delay: ".7s" },
                            ].map((item) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay} key={item.label}>
                                    <div className="counter-box-items">
                                        <h2><Counter end={item.count} suffix={item.suffix} /></h2>
                                        <p>{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Services Section */}
            <ServiceListingGrid />  

            {/* 5. Clients Section */}
            <BrandStripSection />

            {/* 6. FAQ Section */}
            {locationData.faqs && locationData.faqs.length > 0 && (
                <section className="faq-section section-padding">
                    <div className="container">
                        <div className="section-title text-center">
                            <h6 className="wow fadeInUp">FAQ Questions</h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Frequently Asked Questions <br /> in {locationData.name}</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="faq-content-area">
                                    <div className="faq-accordion-items">
                                        <div className="accordion" id="faqAccordion">
                                            {locationData.faqs.map((faq, idx) => (
                                                <div className="accordion-item wow fadeInUp" data-wow-delay={`.${idx + 1}s`} key={idx}>
                                                    <h2 className="accordion-header" id={`heading${idx}`}>
                                                        <button className={`accordion-button ${idx === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx === 0 ? "true" : "false"}>
                                                            {faq.q}
                                                        </button>
                                                    </h2>
                                                    <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`} data-bs-parent="#faqAccordion">
                                                        <div className="accordion-body">{faq.a}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 7. Testimonial Section */}
            <TestimonialSection />
        </>
    );
}
