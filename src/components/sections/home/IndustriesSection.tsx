"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import type { SwiperInstance } from "@/lib/swiper-window";
import { getWindowSwiper } from "@/lib/swiper-window";

const industries = [
  { name: "Pharma Industries", image: "/assets/img/industries/1.webp", desc: "Precision digital marketing for pharmaceutical excellence.", link: "/industrial-specific/web-development/pcd-pharma" },
  { name: "Car Parts Importers", image: "/assets/img/industries/2.webp", desc: "Driving growth for automotive supply chains.", link: "/industrial-specific/web-development/car-parts" },
  { name: "Road Safety Products", image: "/assets/img/industries/3.webp", desc: "Visibility and reach for safety manufacturers.", link: "/industrial-specific/web-development/road-safety" },
  { name: "Wooden Paint Mfg", image: "/assets/img/industries/4.webp", desc: "Coating the market with innovative digital strategies.", link: "/services" },
  { name: "Electronics Devices", image: "/assets/img/industries/5.webp", desc: "Powering electronics brands in a competitive space.", link: "/industrial-specific/web-development/electronics" },
  { name: "Industrial Automation", image: "/assets/img/industries/6.webp", desc: "Automating your digital presence and lead generation.", link: "/industrial-specific/web-development/industrial-automation" },
  { name: "SMC & GRP Tanks", image: "/assets/img/industries/7.webp", desc: "Tapping into the global market for industrial storage.", link: "/industrial-specific/web-development/smc-grp-tanks" },
  { name: "Offline Brand Advertisement", image: "/assets/img/industries/8.webp", desc: "Advertising your brand offline to the right audience.", link: "/industrial-specific/web-development/offline-brand-ads" },
  { name: "Bag Manufacturer", image: "/assets/img/industries/9.webp", desc: "Manufacturing bags for the right audience.", link: "/industrial-specific/web-development/bag-manufacturer" },
  { name: "Paper Bag Mfg", image: "/assets/img/industries/10.webp", desc: "Eco-friendly branding for sustainable packaging.", link: "/industrial-specific/web-development/bag-manufacturer" },
  { name: "Industrial Automation", image: "/assets/img/industries/11.webp", desc: "Automating your digital presence and lead generation.", link: "/industrial-specific/web-development/industrial-automation" },
  { name: "Ball Bearing Importer & Supplier", image: "/assets/img/industries/12.webp", desc: "Importing and supplying ball bearings to the right audience.", link: "/industrial-specific/web-development/ball-bearing" },
  { name: "Pool Table Manufacturer", image: "/assets/img/industries/13.webp", desc: "Manufacturing pool tables for the right audience.", link: "/industrial-specific/web-development/pool-table" },
  { name: "Electronics Device Supplier", image: "/assets/img/industries/14.webp", desc: "Supplying electronics devices to the right audience.", link: "/industrial-specific/web-development/electronics" },
  { name: "Fire Safety Doors", image: "/assets/img/industries/15.webp", desc: "Securing leads for safety equipment leaders.", link: "/industrial-specific/web-development/fire-safety-doors" },
  { name: "Machinery Mfg", image: "/assets/img/industries/16.webp", desc: "Showcasing heavy-duty excellence to the right buyers.", link: "/industrial-specific/web-development/machinery-manufacturer" },
];

export default function IndustriesSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const initSwiper = () => {
      const Swiper = getWindowSwiper();
      if (typeof window !== "undefined" && Swiper) {
        // Destroy existing instance if any
        if (swiperRef.current) {
          try {
            swiperRef.current.destroy(true, true);
          } catch {
            /* noop */
          }
        }

        const swiper = new Swiper(".industries-swiper", {
          centeredSlides: true,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          grabCursor: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: ".industries-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".industries-next",
            prevEl: ".industries-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 2.5, spaceBetween: 60 },
            1400: { slidesPerView: 3, spaceBetween: 80 }
          }
        });
        swiperRef.current = swiper;

        // Ensure autoplay starts
        setTimeout(() => {
          if (swiper.autoplay && !swiper.autoplay.running) {
            swiper.autoplay.start();
          }
        }, 100);
      }
    };

    // Use a small timeout to ensure DOM and scripts are fully ready
    const timeoutId = setTimeout(() => {
      if (getWindowSwiper()) {
        initSwiper();
      } else {
        // Fallback: wait for window load or check again
        const intervalId = setInterval(() => {
          if (getWindowSwiper()) {
            initSwiper();
            clearInterval(intervalId);
          }
        }, 500);
        return () => clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (swiperRef.current) {
        try {
          swiperRef.current.destroy(true, true);
        } catch {
          /* noop */
        }
      }
    };
  }, []);

  return (
    <section className="industries-slider-section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .industries-slider-section { padding: 100px 0; background-color: #f8fbff; overflow: hidden; }
        .industries-slider-container { max-width: 1400px; margin: 0 auto; padding: 0 15px; position: relative; }
        
        .industries-swiper { padding: 50px 0 !important; overflow: visible !important; }
        .ind-card { position: relative; border-radius: 40px; overflow: hidden; aspect-ratio: 1/1.2; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 20px rgba(0,0,0,0.05); cursor: pointer; background: #fff; transform: scale(0.9); }
        .swiper-slide-active .ind-card { transform: scale(1.1); box-shadow: 0 30px 60px rgba(14,165,233,0.2); z-index: 10; }
        .ind-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }

        .ind-card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(14,165,233,0.2) 0%, rgba(14,165,233,0.9) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: #ffffff; opacity: 0; transition: opacity 0.4s ease; }
        .swiper-slide-active .ind-card-overlay { opacity: 1; }

        .plus-icon { width: 48px; height: 48px; background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; backdrop-filter: blur(4px); }
        .ind-card-overlay h3 { font-size: 28px; font-weight: 700; margin-bottom: 15px; }
        .ind-read-more { background-color: #0f172a; color: #ffffff; padding: 12px 30px; border-radius: 12px; font-size: 16px; font-weight: 700; text-decoration: none !important; width: fit-content; display: inline-block; transition: all 0.3s ease; }
        .ind-read-more:hover { background-color: #1e293b; transform: translateY(-2px); }

        .ind-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 60px; height: 60px; background: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #1a1a1a; font-size: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index: 100; cursor: pointer; transition: all 0.3s ease; }
        .ind-nav-btn:hover { background: #0ea5e9; color: #fff; }
        .ind-prev { left: -30px; }
        .ind-next { right: -30px; }

        .industries-pagination { bottom: -40px !important; }
        .industries-pagination .swiper-pagination-bullet { width: 10px; height: 10px; background: #cbd5e1; opacity: 1; }
        .industries-pagination .swiper-pagination-bullet-active { background: #0ea5e9; width: 24px; border-radius: 5px; }

        @media (max-width: 1024px) { .industries-header h2 { font-size: 42px; } .header-desc { font-size: 16px; } .ind-prev { left: 0; } .ind-next { right: 0; } }
        @media (max-width: 768px) { 
          .industries-header { flex-direction: column; align-items: flex-start; } 
          .industries-header h2 { font-size: clamp(28px, 8vw, 36px); } 
          .header-desc { max-width: 100%; } 
          .ind-card { transform: scale(1); border-radius: 20px; } 
          .swiper-slide-active .ind-card { transform: scale(1.02); } 
          .ind-nav-btn { width: 40px; height: 40px; font-size: 14px; }
          .ind-card-overlay { padding: 20px; }
          .ind-card-overlay h3 { font-size: 20px; }
          .plus-icon { width: 32px; height: 32px; font-size: 16px; margin-bottom: 10px; }
        }
      ` }} />

      <div className="industries-slider-container">
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            backgroundColor: "#e7f0fd", color: "#0d6efd", fontWeight: 600, fontSize: "14px",
            padding: "8px 18px", borderRadius: "30px", border: "1px solid #ddecfe",
            display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Industries we work
          </div>
          <h2 style={{ color: "#0f172a", fontWeight: 800, fontSize: "clamp(32px, 5vw, 42px)", margin: 0 }}>
            Serving diverse industries
          </h2>
        </div>

        <div className="swiper industries-swiper">
          <div className="swiper-wrapper">
            {industries.map((industry, index) => (
              <div className="swiper-slide" key={index}>
                <div className="ind-card">
                  <img src={industry.image} alt={industry.name} className="ind-card-img" loading="lazy" />
                  <div className="ind-card-overlay">
                    <div className="plus-icon"><i className="fa-solid fa-plus"></i></div>
                    <h3>{industry.name}</h3>
                    <Link href={industry.link || "/services"} className="ind-read-more">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="ind-nav-btn ind-prev industries-prev"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="ind-nav-btn ind-next industries-next"><i className="fa-solid fa-chevron-right"></i></div>
          <div className="swiper-pagination industries-pagination"></div>
        </div>
      </div>
    </section>
  );
}

