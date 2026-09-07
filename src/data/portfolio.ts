import type { Portfolio } from "../types/portfolio";
import { about } from "./about";
import { awards } from "./awards";
import { blog } from "./blog";
import { certificates } from "./certificates";
import { education } from "./education";
import { experience } from "./experience";
import { gallery } from "./gallery";
import { journalPosts, writing } from "./journalPosts";
import { navigation, sectionIds } from "./navigation";
import { hero, profile } from "./profile";
import { projects } from "./projects";
import { sectionContent, subsectionContent } from "./sectionContent";
import { skills } from "./skills";
import { videos } from "./videos";

export const portfolio = {
  profile,
  hero,
  navigation,
  sectionContent,
  about,
  education,
  experience,
  awards,
  projects,
  gallery,
  videos,
  blog,
  journalPosts,
  writing,
  skills,
  certificates,
} satisfies Portfolio;

export {
  about,
  awards,
  blog,
  certificates,
  education,
  experience,
  gallery,
  hero,
  journalPosts,
  navigation,
  profile,
  projects,
  sectionContent,
  subsectionContent,
  sectionIds,
  skills,
  videos,
  writing,
};
