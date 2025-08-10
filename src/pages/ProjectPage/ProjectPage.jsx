// src/pages/ProjectPage/ProjectPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectPage({ slug: slugProp }) {
  const params = useParams?.() || {};
  const slug = slugProp ?? params.slug; // prefer prop, fallback to route param

  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/projects/${slug}.md`, { cache: "no-store" });
        if (!res.ok) throw new Error("not-found");
        const text = await res.text();
        if (alive) { setContent(text); setError(""); }
      } catch {
        if (alive) { setError("not-found"); setContent(""); }
      }
    })();
    return () => { alive = false; };
  }, [slug]);

  if (error === "not-found") {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  if (!content) return <div>Loading…</div>;

  return (
    <article className="project-article">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
