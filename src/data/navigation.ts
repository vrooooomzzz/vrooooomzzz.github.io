import type { NavigationItem, SectionId } from "../types/portfolio";
export const sectionIds = [
  "home",
  "about",
  "projects",
  "education",
  "experience",
  "awards",
  "skills",
  "gallery",
  "journal",
  "contact",
] as const satisfies readonly SectionId[];
export const navigation: NavigationItem[] = [
  {
    id: "home",
    label: "Overview",
    enabled: true,
  },
  {
    id: "about",
    label: "About",
    enabled: true,
  },
  {
    id: "projects",
    label: "Selected work",
    enabled: true,
  },
  {
    id: "education",
    label: "Education",
    enabled: true,
  },
  {
    id: "experience",
    label: "Experience",
    enabled: true,
  },
  {
    id: "awards",
    label: "Beyond data",
    enabled: true,
  },
  {
    id: "skills",
    label: "Toolkit",
    enabled: true,
  },
  {
    id: "gallery",
    label: "Gallery",
    enabled: false,
  },
  {
    id: "journal",
    label: "Notes",
    enabled: false,
  },
  {
    id: "contact",
    label: "Contact",
    enabled: false,
  },
];
