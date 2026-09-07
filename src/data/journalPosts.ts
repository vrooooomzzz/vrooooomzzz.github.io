import localJournalContent from '../content/journal/first-local-journal.md?raw'
import simImage from '../assets/photo_8.jpg'
import type { LocalJournalPost, WritingEntry } from '../types/portfolio'
import { createJournalPostHref } from '../utils/journal'
import { blog } from './blog'

export const journalPosts = [
  {
    source: 'local',
    slug: 'my-first-local-journal-entry',
    href: createJournalPostHref('my-first-local-journal-entry'),
    title: 'Mentoring for the SIM-LSE Data Analytics Challenge 2026',
    image: simImage,
    imageAlt: 'Study desk representing a local learning journal entry',
    publishedDate: 'Jul 4, 2026',
    category: 'Learning Journal',
    summary:
      'Things I\'ve learnt from the experience as a mentor for 50+ student participants from the competition.',
    topics: ['Data Analytics', 'Competition', 'Superstore Dataset'],
    content: localJournalContent,
  },
] satisfies LocalJournalPost[]

export const writing = [...journalPosts, ...blog] satisfies WritingEntry[]

export const getLocalJournalPostBySlug = (slug: string): LocalJournalPost | undefined =>
  journalPosts.find((post) => post.slug === slug)
