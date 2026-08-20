"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getAllBlogs, isVisibleNow } from "@/lib/blogUtils";
import BlogSidebar from "./BlogSidebar";

const PAGE_SIZE = 3;

export default function BlogStandardSection() {
  // Filter at runtime in the browser — scheduled posts appear automatically at publish time
  const sortedBlogs = getAllBlogs().filter(isVisibleNow);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sortedBlogs.length));
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const visiblePosts = sortedBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < sortedBlogs.length;

  return (
    <section className="news-standard-section section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            {visiblePosts.map((post, index) => {
              const isLast = index === visiblePosts.length - 1 && !hasMore;
              return (
                <div
                  key={post.id}
                  className={`news-standard-items${isLast ? " mb-0" : ""}`}
                >
                  <div className="thumb">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="content">
                    <ul className="cat-list">
                      <li>
                        <Link href={`/blog/details?slug=${post.slug}`}>
                          {post.category}
                        </Link>
                      </li>
                      <li>
                        <span>{post.date}</span>
                      </li>
                    </ul>
                    <h3>
                      <Link href={`/blog/details?slug=${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <Link
                      href={`/blog/details?slug=${post.slug}`}
                      className="theme-btn"
                    >
                      <span className="icon-1">
                        <img src="/assets/img/icon/10.svg" alt="Read more" />
                      </span>
                      Read more
                      <span className="icon-2">
                        <img src="/assets/img/icon/11.svg" alt="Read more" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Infinite scroll sentinel — hidden once all posts are loaded */}
            {hasMore && (
              <div
                ref={sentinelRef}
                style={{
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                <span style={{ color: "#aaa", fontSize: 14 }}>Loading more…</span>
              </div>
            )}
          </div>

          <div className="col-12 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
