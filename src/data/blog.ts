import type { BlogEntry } from '../types/portfolio'

export const blog = [
  {
    source: 'wordpress',
    title: 'Năm nay mình làm được những gì?',
    href: 'https://nhamhung.wordpress.com/2024/12/31/nam-nay-minh-lam-duoc-nhung-gi/',
    image: 'https://nhamhung.wordpress.com/wp-content/uploads/2024/12/pexels-photo-1478685.jpeg',
    imageAlt: 'Person sitting by the water representing a reflective year-end review',
    publishedDate: 'Dec 31, 2024',
    category: 'Reflection',
    summary:
      'A year-end reflection on learning, teaching, graduate study, and the personal milestones that have shaped a meaningful year for me.',
    topics: ['Reflection', 'Learning', 'Teaching'],
  },
  {
    source: 'wordpress',
    title: 'Cách mình tối ưu hoá thời gian cho việc học IT?',
    href: 'https://nhamhung.wordpress.com/2024/12/07/cach-minh-toi-uu-hoa-thoi-gian-cho-viec-it/',
    image: 'https://nhamhung.wordpress.com/wp-content/uploads/2024/12/pexels-photo-3077882.jpeg',
    imageAlt: 'Person rock climbing representing disciplined time management and progress',
    publishedDate: 'Dec 7, 2024',
    category: 'Computer Science',
    summary:
      'A personal sharing on tips to juggle multiple tasks at once despite our often tight schedule.',
    topics: ['Time Management', 'Learning', 'Computer Science'],
  },
  {
    source: 'wordpress',
    title: 'Apply thạc sĩ Online ngành Khoa học máy tính',
    href: 'https://nhamhung.wordpress.com/2023/11/08/apply-thac-si-online-nganh-khoa-hoc-may-tinh/',
    image: 'https://nhamhung.wordpress.com/wp-content/uploads/2023/11/pexels-photo-4348401.jpeg',
    imageAlt: 'Person writing beside a laptop representing an online master application process',
    publishedDate: 'Nov 8, 2023',
    category: 'Computer Science',
    summary:
      'A detailed walkthrough of researching and applying to an online Computer Science master program while working full time.',
    topics: ['Graduate Study', 'Computer Science', 'Career'],
  },
  {
    source: 'wordpress',
    title: 'Trình biên dịch (Compiler) là gì? (Phần 1)',
    href: 'https://nhamhung.wordpress.com/2022/08/13/sweet-success-2/',
    image: 'https://nhamhung.wordpress.com/wp-content/uploads/2022/08/scott-graham-5fnmwej4taa-unsplash.jpg',
    imageAlt: 'Desk with notes and a laptop representing compiler concepts and abstraction',
    publishedDate: 'Aug 13, 2022',
    category: 'Compiler',
    summary:
      'An introductory explainer on compilers, abstraction, and how programming languages bridge human ideas with machine execution.',
    topics: ['Compiler', 'Programming Languages', 'Computer Science'],
  },
] satisfies BlogEntry[]
