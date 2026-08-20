import blogsData from "@/data/blogs.json";

export type BlogEntry = (typeof blogsData)[number];

function isPublished(blog: BlogEntry): boolean {
  const status = (blog as { status?: string }).status;
  if (!status || status !== "scheduled") return true;

  const publishDate = (blog as { publishDate?: string }).publishDate;
  if (!publishDate) return false;

  const publishTime = (blog as { publishTime?: string }).publishTime ?? "00:00";
  const publishAt = new Date(`${publishDate}T${publishTime}:00+05:30`);

  // Always use real current time — works correctly with force-dynamic
  return new Date() >= publishAt;
}

function compareBlogs(a: BlogEntry, b: BlogEntry): number {
  const dateA = (a as { publishDate?: string }).publishDate ?? "";
  const dateB = (b as { publishDate?: string }).publishDate ?? "";
  if (dateA && dateB) {
    const byDate = dateB.localeCompare(dateA);
    if (byDate !== 0) return byDate;
  } else if (dateA) return -1;
  else if (dateB) return 1;
  return b.id - a.id;
}

/**
 * Returns all blogs (including scheduled), sorted newest-first.
 * Use this in server components / build-time code when the site
 * uses `output: "export"` (static export). Filter visibility on
 * the client with isVisibleNow().
 */
export function getAllBlogs(): BlogEntry[] {
  return [...blogsData].sort(compareBlogs);
}

/**
 * Client-side visibility check — safe to call in "use client" components.
 * Returns true if the blog should be publicly visible right now (IST-aware).
 */
export function isVisibleNow(blog: BlogEntry): boolean {
  return isPublished(blog);
}

/**
 * Returns all blogs that are currently live (past their scheduled publish time),
 * sorted newest-first. Only call this from server-rendered routes (not static export).
 */
export function getVisibleBlogs(): BlogEntry[] {
  return blogsData.filter(isPublished).sort(compareBlogs);
}