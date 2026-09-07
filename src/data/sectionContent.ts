import type { SectionContent } from "../types/portfolio";

// Students can edit section headings and introductions here without changing components.
export const sectionContent = {
  about: {
    eyebrow: "ABOUT_PROTOCOL",
    title: "About Me",
    description:
      "I build robust data pipelines, meaningful educational products and lasting connections with others in hope of creating a more caring-through-sharing world.",
  },
  education: {
    eyebrow: "EDU_TIMELINE",
    title: "Education",
    description:
      "Before specialising in Computer Science, I enjoyed both social and natural science subjects. I believe all of them are interesting and fun to learn in their own unique ways.",
  },
  experience: {
    eyebrow: "CAREER_LOG",
    title: "Professional Experience",
    description:
      "Within Computer Science, I was fascinated by how Data elegantly connects multiple disciplines and as such, decided to pursue a career revolving entirely around this field.",
  },
  awards: {
    eyebrow: "ACHIEVEMENT_LOG",
    title: "Awards and Achievements",
    description:
      "My most significant achievements mostly orbited around academics and leadership, with some sprinkles of the performing arts, sports and outside competitions.",
  },
  projects: {
    eyebrow: "BUILD_LOGS",
    title: "Selected Projects",
    description:
      "Unlike other Comp Sci students, I mostly enjoy acquiring knowledge through obtaining certificates rather than shipping products, so please excuse the lack of major personal projects outside of work ^^.",
  },
  gallery: {
    eyebrow: "JOURNEY_FRAMES",
    title: "Learning Journey",
    description:
      "Looking back, despite the ups and downs, the 12 years of learning and growth in Singapore have completely shaped who I am and I'm excited to see where this foundation will bring me to next.",
  },
  journal: {
    eyebrow: "JOURNAL_FEED",
    title: "Journal",
    description:
      "Perhaps you can see by now, I have a burning passion for synthesising knowledge and sharing it with others. So here are the proofs.",
  },
  skills: {
    eyebrow: "SKILL_MATRIX",
    title: "Technical Skills and Certifications",
    description:
      "There was a time when I was particularly into collecting new skillsets as if they were pokemons. However, they matter much less now and the only fun things are, to me, the very fundamentals.",
  },
  contact: {
    eyebrow: "CONTACT_INTERFACE",
    title: "Contact Me",
    description:
      "With all of this personal information being shared online, I guess you can feel how open I am towards having a chat. So please don't hesitate to reach out!",
  },
} satisfies SectionContent;

// Shared visible subsection names follow the established Engineering wording.
export const subsectionContent = {
  journal: {
    videosEyebrow: "VIDEO_FEED",
    videosTitle: "Educational Videos",
    writingEyebrow: "WRITING_LOG",
    writingTitle: "Writing and Technical Notes",
  },
  skills: {
    certificatesEyebrow: "CERTIFICATE_PREVIEW",
    certificatesTitle: "Certificate Gallery",
    certificatesDescription:
      "Click any preview to expand the PDF. Files are configured in the shared certificate data file.",
  },
  contact: {
    channelsTitle: "CONNECT_CHANNELS",
  },
} as const;
