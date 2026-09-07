import About from "../../components/About";
import Awards from "../../components/Awards";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import Journal from "../../components/Journal";
import JournalPostPage from "../../components/JournalPostPage";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";
import EngineeringShell from "./EngineeringShell";

export const engineeringChapterLabels = {
  home: "Home",
  about: "About",
  education: "Education",
  experience: "Experience",
  awards: "Awards",
  projects: "Projects",
  gallery: "Gallery",
  journal: "Journal",
  skills: "Skills",
  contact: "Contact",
} satisfies PortfolioTemplate["chapterLabels"];

export const engineeringTemplate = {
  ...portfolioTemplateOptions.engineering,
  ShellComponent: EngineeringShell,
  JournalPostComponent: JournalPostPage,
  chapterLabels: engineeringChapterLabels,
  sectionComponents: {
    home: Hero,
    about: About,
    education: Education,
    experience: Experience,
    awards: Awards,
    projects: Projects,
    gallery: Gallery,
    journal: Journal,
    skills: Skills,
    contact: Contact,
  },
} satisfies PortfolioTemplate;
