"use client";

import React from "react";
import Link from "next/link";
import seoData from "@/data/seo-locations.json";
import "@/styles/css/Hero.css";

import marketingConfig from "@/data/marketing-services.json";

export default function MainArea() {
    const allowedSlugs = new Set(marketingConfig.targetLocationSlugs);

    // Filter states and cities to only include allowed ones from marketing-services.json
    const filteredStates = seoData.states.map(state => {
        return {
            ...state,
            cities: state.cities.filter(city => allowedSlugs.has(city.slug))
        };
    }).filter(state => allowedSlugs.has(state.slug) || state.cities.length > 0);

    const states = filteredStates;

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
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                AREAS WE SERVE
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
                            <li>Marketing Area</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 2. Locations Listing Section */}
            <section className="locations-listing-section section-padding" style={{ backgroundColor: "#f9f9ff" }}>
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <h6 className="wow fadeInUp" style={{ color: "#3b286d", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>OUR REACH</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "38px", fontWeight: "800", color: "#2d205a" }}>
                            Dominate Your Local Market <br /> with Brandbanalo
                        </h2>
                    </div>

                    <div className="locations-wrapper">
                        {states.map((state, stateIdx) => (
                            <div className="state-block mb-5 wow fadeInUp" data-wow-delay={`.${stateIdx % 5}s`} key={state.slug}>
                                <div className="state-header d-flex align-items-center mb-4" style={{ borderBottom: "2px solid #e5e0f5", paddingBottom: "10px" }}>
                                    <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#3b286d", margin: 0 }}>
                                        <a href={`/best-digital-marketing-agency-in-${state.slug}/`} style={{ color: "inherit", textDecoration: "none" }}>
                                            {state.name}
                                        </a>
                                    </h3>
                                    <div style={{ flex: 1, height: "1px", backgroundColor: "#3b286d", opacity: 0.1, marginLeft: "20px" }}></div>
                                </div>

                                <div className="row g-3">
                                    {state.cities.map((city) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6" key={`${state.slug}-${city.slug}`}>
                                            <a
                                                href={`/best-digital-marketing-agency-in-${city.slug}/`}
                                                className="city-link-card"
                                            >
                                                <div className="city-card-inner">
                                                    <span className="city-name">{city.name}</span>
                                                    <span className="city-keyword">
                                                        {city.meta.keywords ? city.meta.keywords[0] : "Digital Marketing"}
                                                    </span>
                                                    <i className="fa-solid fa-arrow-right-long"></i>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .city-link-card {
                        display: block;
                        background: #ffffff;
                        padding: 20px 25px;
                        border-radius: 15px;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        border: 1px solid #eee;
                        height: 100%;
                        position: relative;
                        overflow: hidden;
                    }
                    .city-link-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 25px rgba(59, 40, 109, 0.1);
                        border-color: #3b286d;
                        background: #3b286d;
                    }
                    .city-card-inner {
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }
                    .city-name {
                        font-weight: 700;
                        color: #2d205a;
                        font-size: 16px;
                        transition: all 0.3s ease;
                    }
                    .city-link-card:hover .city-name {
                        color: #ffffff;
                    }
                    .city-keyword {
                        font-size: 12px;
                        color: #666;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        transition: all 0.3s ease;
                    }
                    .city-link-card:hover .city-keyword {
                        color: rgba(255,255,255,0.7);
                    }
                    .city-link-card i {
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        transform: translateY(-50%) translateX(20px);
                        color: #ffffff;
                        opacity: 0;
                        transition: all 0.3s ease;
                    }
                    .city-link-card:hover i {
                        opacity: 1;
                        transform: translateY(-50%) translateX(0);
                    }
                `}} />
            </section>
        </>
    );
}
