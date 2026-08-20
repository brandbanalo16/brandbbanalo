"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import "@/styles/css/industry-slider.css";
import type { SwiperInstance } from "@/lib/swiper-window";
import { getWindowSwiper } from "@/lib/swiper-window";

const industries = [
    { 
        name: "Modern Surgical Facilities", 
        image: "/assets/img/industries/1.webp",
        desc: "Advanced medical branding and digital outreach.",
        link: "/industrial-specific/web-development/healthcare"
    },
    { 
        name: "Pharma Excellence", 
        image: "/assets/img/industries/8.webp",
        desc: "Precision digital marketing for pharmaceutical leaders.",
        link: "/industrial-specific/web-development/pcd-pharma"
    },
    { 
        name: "Automotive Solutions", 
        image: "/assets/img/industries/2.webp",
        desc: "Driving growth for the automotive supply chain.",
        link: "/industrial-specific/web-development/car-parts"
    },
    { 
        name: "Industrial Automation", 
        image: "/assets/img/industries/6.webp",
        desc: "Showcasing heavy-duty excellence to global buyers.",
        link: "/industrial-specific/web-development/industrial-automation"
    },
    { 
        name: "Eco-Friendly Packaging", 
        image: "/assets/img/industries/12.webp",
        desc: "Branding for a sustainable and green future.",
        link: "/industrial-specific/web-development/bag-manufacturer"
    },
    { 
        name: "Fire Safety Systems", 
        image: "/assets/img/industries/17.webp",
        desc: "Securing leads for critical safety equipment.",
        link: "/industrial-specific/web-development/fire-safety-doors"
    }
];

export default function IndustrySliderSection() {
    const swiperRef = useRef<SwiperInstance | null>(null);

    useEffect(() => {
        const initSwiper = () => {
            const Swiper = getWindowSwiper();
            if (typeof window !== "undefined" && Swiper) {
                const swiper = new Swiper(".industry-swiper", {
                    centeredSlides: true,
                    loop: true,
                    speed: 1200,
                    autoplay: {
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    grabCursor: true,
                    pagination: {
                        el: ".industry-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".industry-next",
                        prevEl: ".industry-prev",
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 60,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 80,
                        }
                    }
                });
                swiperRef.current = swiper;
            }
        };

        if (getWindowSwiper()) {
            initSwiper();
        } else {
            const handleLoad = () => initSwiper();
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    return (
        <section className="industry-slider-section">
            <div className="industry-slider-container">
                {/* Refined Header */}
                <div className="industry-slider-header">
                    <div className="header-left">
                        <div className="portfolio-pill">Our Portfolio</div>
                        <h2>Guided by Heart and Science</h2>
                    </div>
                    <div className="header-right">
                        <p className="header-desc">
                            We combine modern medical knowledge with genuine human connection, 
                            ensuring each decision we make serves both your physical and 
                            emotional well-being.
                        </p>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="swiper industry-swiper">
                    <div className="swiper-wrapper">
                        {industries.map((industry, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="industry-card">
                                    <img 
                                        src={industry.image} 
                                        alt={industry.name} 
                                        className="industry-card-img" 
                                        loading="lazy"
                                    />
                                    {/* Active card info */}
                                    <div className="industry-card-overlay">
                                        <div className="plus-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                        <h3>{industry.name}</h3>
                                        <Link href={industry.link || "/services"} className="industry-read-more">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="industry-nav-btn industry-prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className="industry-nav-btn industry-next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>

                    {/* Pagination */}
                    <div className="swiper-pagination industry-pagination"></div>
                </div>
            </div>
        </section>
    );
}
