import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'
import photo7 from '../assets/photo_7.jpg'
import type { GalleryItem } from '../types/portfolio'

export const gallery = [
  {
    id: 'zhonghua-secondary-school',
    src: photo1,
    alt: 'Gallery Image 1',
    title: 'Zhonghua Secondary School',
    description: "My first experience studying with local students in Singapore, where I eventually completed the GCE O-levels with 7 A's.",
  },
  {
    id: 'saint-andrews-junior-college',
    src: photo2,
    alt: 'Gallery Image 2',
    title: "Saint Andrew's Junior College",
    description: "My next 2 years as a student there, where I also became a Student Councillor and completed the GCE A-levels with 6 A's.",
  },
  {
    id: 'national-university-of-singapore',
    src: photo3,
    alt: 'Gallery Image 3',
    title: 'National University of Singapore',
    description: "I was fortunate enough to receive 3 full-scholarship offers from NUS, NTU and SUTD. After careful ponderation, I chose to pursue a Bachelor's in Computer Science with Honours at NUS.",
  },
  {
    id: 'university-of-texas-at-austin',
    src: photo4,
    alt: 'Gallery Image 4',
    title: 'The University of Texas at Austin',
    description: "After completing undergraduate studies at NUS, my passion for Computer Science grew strong enough to warrant another academic pursuit at the University of Texas, Austin for a Master's Degree in Computer Science.",
  },
  {
    id: 'sea-limited',
    src: photo5,
    alt: 'Gallery Image 5',
    title: 'Sea Limited',
    description: 'During my final year in NUS, I also landed an internship as a Big Data Analyst at Sea Limited - the parent company behind Shopee and Garena. After its completion, I received a return offer as a Data Engineer in the Core Data Platform team.',
  },
  {
    id: 'rakuten-asia',
    src: photo6,
    alt: 'Gallery Image 6',
    title: 'Rakuten Asia Pte Ltd',
    description: 'Hoping to gain a diverse range of skillsets and experiences, I ventured out and landed a role as a Software Engineer in Rakuten Asia, under the Global Ad Tech Supervisory Department.',
  },
  {
    id: 'torilab',
    src: photo7,
    alt: 'Gallery Image 7',
    title: 'Torilab',
    description: 'Seeking an opportunity to return back home to Vietnam, I joined Torilab - an early-stage AI startup headquartered in Japan - as a Data Engineer under the Business Intelligence (BI) team.',
  }
] satisfies GalleryItem[]
