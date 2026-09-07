import type { NavigationItem, SectionId } from '../types/portfolio'

export const sectionIds = [
  'home',
  'about',
  'education',
  'experience',
  'awards',
  'projects',
  'gallery',
  'journal',
  'skills',
  'contact',
] as const satisfies readonly SectionId[]

export const navigation = [
  { id: 'home', label: 'Home', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  { id: 'education', label: 'Education', enabled: true },
  { id: 'experience', label: 'Experience', enabled: true },
  { id: 'awards', label: 'Awards', enabled: true },
  { id: 'projects', label: 'Projects', enabled: true },
  { id: 'gallery', label: 'Gallery', enabled: true },
  { id: 'journal', label: 'Journal', enabled: true },
  { id: 'skills', label: 'Skills', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true },
] satisfies NavigationItem[]
