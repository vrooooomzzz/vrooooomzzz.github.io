import type { SectionContent } from "../types/portfolio";

export const sectionContent: SectionContent = {
  about: {
    eyebrow: "THE PERSON BEHIND THE PATTERNS",
    title: "Curiosity, with a mathematical foundation.",
    description:
      "I enjoy asking better questions, testing ideas, and making the findings understandable.",
  },
  education: {
    eyebrow: "FOUNDATION",
    title: "Learning to think analytically.",
    description:
      "A mathematics education, extended through applied projects and independent study.",
  },
  experience: {
    eyebrow: "IN PRACTICE",
    title: "Learning with real teams.",
    description:
      "From BI reporting to student communications, each experience adds a new perspective.",
  },
  awards: {
    eyebrow: "BEYOND THE DATA",
    title: "Patterns have a soundtrack.",
    description:
      "Music is another way I explore structure, expression, and connection.",
  },
  projects: {
    eyebrow: "SELECTED ANALYSES",
    title: "Questions worth exploring.",
    description:
      "Three studies at the intersection of music, behavior, and business. Explore the question, method, and takeaway behind each one.",
  },
  skills: {
    eyebrow: "TOOLKIT & LEARNING",
    title: "From foundations to practice.",
    description:
      "The tools I use to prepare data, build models, and communicate useful findings.",
  },
  gallery: {
    eyebrow: "",
    title: "Gallery",
    description: "",
  },
  journal: {
    eyebrow: "",
    title: "Notes",
    description: "",
  },
  contact: {
    eyebrow: "",
    title: "Contact",
    description: "",
  },
};

export const subsectionContent = {
  journal: {
    videosEyebrow: "VIDEO",
    videosTitle: "Videos",
    writingEyebrow: "NOTES",
    writingTitle: "Notes",
  },
  skills: {
    certificatesEyebrow: "CONTINUING TO LEARN",
    certificatesTitle: "Coursework & certificates",
    certificatesDescription:
      "Selected learning from Google and Kaggle. Open a certificate to read the original.",
  },
  contact: {
    channelsTitle: "Contact",
  },
} as const;
