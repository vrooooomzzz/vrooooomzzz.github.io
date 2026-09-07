import "./business.css";

import { portfolioTemplateOptions } from "../options";
import type { PortfolioTemplate } from "../types";
import BusinessAbout from "./BusinessAbout";
import BusinessAwards from "./BusinessAwards";
import BusinessContact from "./BusinessContact";
import BusinessEducation from "./BusinessEducation";
import BusinessExperience from "./BusinessExperience";
import BusinessGallery from "./BusinessGallery";
import BusinessHero from "./BusinessHero";
import BusinessJournal from "./BusinessJournal";
import BusinessJournalPostPage from "./BusinessJournalPostPage";
import BusinessProjects from "./BusinessProjects";
import BusinessShell from "./BusinessShell";
import BusinessSkills from "./BusinessSkills";

export const businessChapterLabels = {
  home: "Welcome",
  about: "My Story",
  education: "Education",
  experience: "Experience",
  awards: "Highlights",
  projects: "Projects",
  gallery: "Gallery",
  journal: "Journal",
  skills: "Skills",
  contact: "Say Hello",
} satisfies PortfolioTemplate["chapterLabels"];

export const businessTemplate = {
  ...portfolioTemplateOptions.business,
  ShellComponent: BusinessShell,
  JournalPostComponent: BusinessJournalPostPage,
  chapterLabels: businessChapterLabels,
  sectionComponents: {
    home: BusinessHero,
    about: BusinessAbout,
    education: BusinessEducation,
    experience: BusinessExperience,
    awards: BusinessAwards,
    projects: BusinessProjects,
    gallery: BusinessGallery,
    journal: BusinessJournal,
    skills: BusinessSkills,
    contact: BusinessContact,
  },
} satisfies PortfolioTemplate;
