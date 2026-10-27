import type { HeroSection, Profile } from "../types/portfolio";

export const profile: Profile = {
  name: "Nguyễn Đức Tuấn",
  slug: "nguyen-duc-tuan",
  role: "Mathematics student · Data analytics",
  location: "Hanoi, Vietnam",
  summary:
    "I explore how mathematics and data can help us understand people, make better decisions, and discover something unexpected. My work connects music recommendation, machine learning, and business analytics.",
  socialLinks: [],
};

export const hero: HeroSection = {
  eyebrow: "DATA / MATHEMATICS / CURIOSITY",
  statusBadges: ["HANOI, VIETNAM", "STUDENT ANALYST"],
  headline: "Finding the human story in data.",
  highlightedPhrase: "human story",
  intro:
    "I explore how mathematics and data can help us understand people, make better decisions, and discover something unexpected. My work connects music recommendation, machine learning, and business analytics.",
  stats: [
    {
      value: "Music & behavior",
      label: "Research interests",
    },
    {
      value: "Python + SQL",
      label: "Analytical toolkit",
    },
    {
      value: "Class of 2027",
      label: "Expected graduation",
    },
  ],
  primaryAction: {
    label: "Explore my work",
    sectionId: "projects",
    ariaLabel: "Explore selected analytics projects",
  },
  secondaryAction: {
    label: "My background",
    sectionId: "about",
    ariaLabel: "Read about Duc Tuan",
  },
  stackHighlights: [
    "Data exploration",
    "Recommendation systems",
    "Business intelligence",
  ],
};
