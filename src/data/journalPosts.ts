import type { LocalJournalPost, WritingEntry } from "../types/portfolio";
export const journalPosts: LocalJournalPost[] = [];
export const writing: WritingEntry[] = [];
export const getLocalJournalPostBySlug = (
  slug: string,
): LocalJournalPost | undefined =>
  journalPosts.find((post) => post.slug === slug);
