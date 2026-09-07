import profileImage from '../assets/profile.jpeg'
import resumePdf from '../assets/documents/resume.pdf'
import type { HeroSection, Profile } from '../types/portfolio'

export const profile = {
  name: 'Nham Quoc Hung',
  slug: 'nham-quoc-hung',
  role: 'Data Engineer at Torilab Inc.',
  location: 'Hanoi Capital Region, Vietnam',
  email: 'nhamhung.gttn@gmail.com',
  profileImage,
  resume: {
    label: 'Download Resume',
    href: resumePdf,
    fileName: 'Nham-Quoc-Hung-Resume.pdf',
    ariaLabel: 'Download Nham Quoc Hung resume PDF',
  },
  summary:
    'I am a Computer Science graduate with a specialisation in Data and passion for teaching. In a world being increasingly influenced and shaped by technological advances, these domains are my way of navigating through present complexities and making sense of what is coming next.',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/nhamhung',
      ariaLabel: 'Open Nham Quoc Hung GitHub profile',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/quoc-hung-nham/',
      ariaLabel: 'Open Nham Quoc Hung LinkedIn profile',
    },
    {
      label: 'Email',
      href: 'mailto:nhamhung.gttn@gmail.com',
      ariaLabel: 'Email Nham Quoc Hung',
    },
  ],
} satisfies Profile

export const hero = {
  eyebrow: '<engineer id="nham-quoc-hung" />',
  statusBadges: ['SYSTEM STATUS: BUILDING', 'DATA | SOFTWARE | MENTORSHIP'],
  headline: 'Building reliable data pipelines and scalable data platforms.',
  highlightedPhrase: 'data pipelines',
  intro: profile.summary,
  stats: [
    { value: '4+ Years', label: 'Experience' },
    { value: 'Data + Teaching', label: 'Focus' },
    { value: 'Everything Data-related', label: 'Coverage' },
  ],
  primaryAction: {
    label: 'View Projects',
    sectionId: 'projects',
    ariaLabel: 'Scroll to selected projects',
  },
  secondaryAction: {
    label: 'Contact',
    sectionId: 'contact',
    ariaLabel: 'Scroll to contact section',
  },
  stackHighlights: ['Big Data', 'Data Analytics', 'Data Science', 'Data Engineering', 'Machine Learning', 'Deep Learning'],
} satisfies HeroSection
