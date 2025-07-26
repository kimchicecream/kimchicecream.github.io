import "./NavBar.css";

function NavBar({ activeSection, setActiveSection }) {
    const buttons = [
        { id: "about", label: "About Me" },
        { id: "resume", label: "Resume" },
        { id: "projects", label: "Projects" },
        { id: "blog", label: "Blog" },
    ];

    return (
        <div className="navbar-container">
            {buttons.map(btn => (
                <button key={btn.id} onClick={() => setActiveSection(btn.id)} className={activeSection === btn.id ? "active" : ""}>
                    {btn.label}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
