"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BlogEntry, isVisibleNow } from "@/lib/blogUtils";

interface BlogGridSectionProps {
  allBlogs: BlogEntry[];
}

export default function BlogGridSection({ allBlogs }: BlogGridSectionProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Filter at runtime in the browser — ensures scheduled posts appear automatically
  const publishedBlogs = allBlogs.filter(isVisibleNow);
  const visibleBlogs = publishedBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < publishedBlogs.length;

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {visibleBlogs.map((post, index) => (
            <div
              key={`${post.slug}-${index}`}
              className="col-xl-4 col-lg-6 col-md-6"
            >
              <div className="news-box-items mt-0">
                <div className="thumb">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="content">
                  <ul className="cat-list">
                    <li>
                      <Link href={`/blog/details?slug=${post.slug}`}>{post.category}</Link>
                    </li>
                    <li>
                      <span>{post.date}</span>
                    </li>
                  </ul>
                  <h4>
                    <Link href={`/blog/details?slug=${post.slug}`}>{post.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div ref={loadMoreRef} className="page-nav-wrap pt-5 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading more...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

