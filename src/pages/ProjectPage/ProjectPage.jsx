// src/pages/ProjectPage/ProjectPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        // PUBLIC_URL handles GH Pages subpaths if you ever use them
        const base = process.env.PUBLIC_URL || "";
        const res = await fetch(`${base}/content/projects/${slug}.md`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Not found: ${slug}.md`);
        const text = await res.text();
        if (alive) {
          setContent(text);
          setError("");
        }
      } catch (e) {
        if (alive) {
          setContent("");
          setError("not-found");
        }
      }
    }

    load();
    return () => { alive = false; };
  }, [slug]);

  if (error === "not-found") {
    return (
      <div className="project-not-found">
        <h1>Project not found</h1>
        <p>We couldn’t find “{slug}”.</p>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  if (!content) return <div>Loading…</div>;

  return (
    <article className="project-article">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
