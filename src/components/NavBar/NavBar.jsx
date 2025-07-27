import GlassSurface from "../GlassSurface/GlassSurface";
import { useEffect, useState } from "react";
import "./NavBar.css";

function NavBar({ activeSection, setActiveSection }) {
  const buttons = [
    { id: "about", label: "About Me" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonElements = (
    <div className="navbar-container">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setActiveSection(btn.id)}
          className={activeSection === btn.id ? "active" : ""}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );

  return isMobile ? (
    <GlassSurface
        className="glass-surface-wrapper"
        width='100%'
        displace={2}
    >
        {buttonElements}
    </GlassSurface>
  ) : (
    buttonElements
  );
}

export default NavBar;
