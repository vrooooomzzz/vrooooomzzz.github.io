export type SectionId =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "awards"
  | "projects"
  | "gallery"
  | "journal"
  | "skills"
  | "contact";

export type ExternalLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type DownloadLink = ExternalLink & {
  fileName: string;
};

export type SectionAction = {
  label: string;
  sectionId: SectionId;
  ariaLabel: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type NavigationItem = {
  id: SectionId;
  label: string;
  enabled: boolean;
};

export type Profile = {
  name: string;
  slug: string;
  role: string;
  location: string;
  email: string;
  profileImage: string;
  resume: DownloadLink;
  summary: string;
  socialLinks: ExternalLink[];
};

export type HeroSection = {
  eyebrow: string;
  statusBadges: string[];
  headline: string;
  highlightedPhrase?: string;
  intro: string;
  stats: Metric[];
  primaryAction: SectionAction;
  secondaryAction: SectionAction;
  stackHighlights: string[];
};

export type AboutSection = {
  paragraphs: string[];
  metrics: Metric[];
};

export type ContentSectionId = Exclude<SectionId, "home">;

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SectionContent = Record<ContentSectionId, SectionCopy>;

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  specialization: string;
  logo: string;
  description: string[];
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export type AwardEntry = {
  title: string;
  organization: string;
  year: string;
  description: string;
  logo?: string;
  logoText?: string;
  tag: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  logoKey: string;
  logoLabel: string;
  logoAccent?: string;
  technologies: string[];
  actions: ExternalLink[];
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type VideoEntry = {
  id: string;
  title: string;
  description: string;
  videoId: string;
  watchLink: ExternalLink;
};

export type WordPressWritingPost = {
  source: "wordpress";
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  publishedDate: string;
  category: string;
  summary: string;
  topics: string[];
};

export type BlogEntry = WordPressWritingPost;

export type LocalJournalPost = {
  source: "local";
  slug: string;
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  publishedDate: string;
  category: string;
  summary: string;
  topics: string[];
  content: string;
};

export type WritingEntry = BlogEntry | LocalJournalPost;

export type SkillEntry = {
  label: string;
  logoKey: string;
  logoLabel: string;
  logoAccent?: string;
};

export type SkillCategory = {
  category: string;
  skills: SkillEntry[];
};

export type CertificateEntry = {
  title: string;
  issuer: string;
  kind: string;
  description: string;
  file: string;
  logoKey: string;
  logoLabel: string;
  logoAccent?: string;
  ariaLabel: string;
};

export type Portfolio = {
  profile: Profile;
  hero: HeroSection;
  navigation: NavigationItem[];
  sectionContent: SectionContent;
  about: AboutSection;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  awards: AwardEntry[];
  projects: ProjectEntry[];
  gallery: GalleryItem[];
  videos: VideoEntry[];
  blog: BlogEntry[];
  journalPosts: LocalJournalPost[];
  writing: WritingEntry[];
  skills: SkillCategory[];
  certificates: CertificateEntry[];
};
