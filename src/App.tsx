import { useEffect, useState } from "react";
import type { PortfolioTemplate } from "./templates/types";
import BusinessShell from "./templates/business/BusinessShell";
import BusinessHero from "./templates/business/BusinessHero";
import BusinessAbout from "./templates/business/BusinessAbout";
import BusinessProjects from "./templates/business/BusinessProjects";
import BusinessSkills from "./templates/business/BusinessSkills";
import BusinessExperience from "./templates/business/BusinessExperience";
import BusinessAwards from "./templates/business/BusinessAwards";
import "./templates/business/business.css";

// Old saved presentation preferences no longer select a different public experience.
export function PortfolioApp(_props?: { initialTemplate?: PortfolioTemplate }) {
  const [hash, setHash] = useState(() => window.location.hash);
  const missingArticle = hash.startsWith("#/journal/");
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);
  useEffect(() => {
    const target = hash.replace(/^#\/?/, "");
    if (missingArticle) {
      window.scrollTo({ top: 0 });
      return;
    }
    const frame = requestAnimationFrame(() => {
      if (!target) return;
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: "instant" });
        if (hash.startsWith("#/")) history.replaceState(null, "", `#${target}`);
      } else {
        history.replaceState(null, "", "#home");
        document
          .getElementById("home")
          ?.scrollIntoView({ behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [hash, missingArticle]);
  return (
    <BusinessShell>
      {missingArticle ? (
        <section
          className="dt-wrap dt-missing"
          data-testid="journal-post-not-found"
        >
          <p className="dt-eyebrow">PAGE NOT AVAILABLE</p>
          <h1>This story isn’t part of my portfolio.</h1>
          <a href="#projects" className="dt-button">
            Explore my work ↗
          </a>
        </section>
      ) : (
        <>
          <BusinessHero />
          <BusinessAbout />
          <BusinessProjects />
          <BusinessSkills />
          <BusinessExperience />
          <BusinessAwards />
        </>
      )}
    </BusinessShell>
  );
}
export default function App() {
  return <PortfolioApp />;
}
