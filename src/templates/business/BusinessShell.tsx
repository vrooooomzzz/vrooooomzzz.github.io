import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
const links = [
  ["projects", "The work"],
  ["skills", "My process"],
  ["experience", "The journey"],
  ["awards", "Beyond data"],
] as const;
export default function BusinessShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (e: MediaQueryListEvent) => {
      if (e.matches) setMotion(false);
    };
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <div className="dt-site" data-motion={motion ? "on" : "off"}>
      <a className="dt-skip" href="#portfolio-main">
        Skip to content
      </a>
      <header className="dt-header">
        <div className="dt-header-inner">
          <a href="#home" className="dt-brand" aria-label="Duc Tuan — home">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <path
                d="M5 27V17m7 15V8m7 28V4m7 27V9m7 18V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>
              đức tuấn<span className="dt-brand-dot">.</span>
            </span>
          </a>
          <nav className="dt-desktop-nav" aria-label="Main navigation">
            {links.map(([id, label]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <div className="dt-header-tools">
            <button
              className="dt-motion"
              aria-pressed={motion}
              aria-label={motion ? "Pause animations" : "Enable animations"}
              onClick={() => setMotion((v) => !v)}
              data-testid="motion-toggle"
            >
              <span aria-hidden="true" className={motion ? "dt-spin" : ""}>
                ✳
              </span>
              <span className="dt-motion-label">
                Motion {motion ? "on" : "off"}
              </span>
            </button>
            <button
              className="dt-menu"
              ref={trigger}
              aria-expanded={open}
              aria-controls="dt-mobile-navigation"
              onClick={() => setOpen((v) => !v)}
              data-testid="mobile-menu-toggle"
            >
              {open ? "Close −" : "Explore +"}
            </button>
          </div>
        </div>
        <nav
          id="dt-mobile-navigation"
          className="dt-mobile-nav"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {links.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </header>
      <main id="portfolio-main" tabIndex={-1} data-testid="portfolio-main">
        {children}
      </main>
      <footer className="dt-footer">
        <div className="dt-wrap dt-footer-main">
          <div>
            <p className="dt-eyebrow">THERE’S ALWAYS ANOTHER QUESTION.</p>
            <h2>
              Keep listening.
              <br />
              <em>Look a little closer.</em>
            </h2>
          </div>
          <a
            href="#projects"
            className="dt-round-link"
            aria-label="Return to selected work"
          >
            ↗
          </a>
        </div>
        <div className="dt-wrap dt-footer-bottom">
          <span>© 2026 Nguyễn Đức Tuấn</span>
          <span>Mathematics. Music. A curious mind.</span>
          <a href="#home">Back to the beginning ↑</a>
        </div>
      </footer>
    </div>
  );
}
