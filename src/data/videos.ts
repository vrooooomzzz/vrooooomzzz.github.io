import type { VideoEntry } from '../types/portfolio'

export const videos = [
  {
    id: 'effective-it-self-study',
    title: 'Tự học IT như nào hiệu quả nhất?',
    description:
      'With many learning resources available, this video focuses on choosing the most practical and efficient way to self-study IT.',
    videoId: '1Whd4I0b1u4',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=1Whd4I0b1u4',
      ariaLabel: 'Watch Tu hoc IT nhu nao hieu qua nhat on YouTube',
    },
  },
  {
    id: 'cdc-real-time-processing',
    title: 'Change Data Capture (CDC) là gì? Ứng dụng CDC với Debezium + MySQL + PostgreSQL + Kafka',
    description: 'A detailed walkthrough of building real-time data processing flows with Apache Kafka.',
    videoId: 'bOHkXixyGig',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=bOHkXixyGig',
      ariaLabel: 'Watch the CDC real-time processing video on YouTube',
    },
  },
  {
    id: 'computer-science-masters-reflection',
    title: 'Mình có hối tiếc khi học Thạc sĩ Khoa học Máy tính?',
    description: 'A reflection on my decision to pursue a Master\'s of Computer Science online and part-time while working a full-time job.',
    videoId: 'lBOcJR7QOMs',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=lBOcJR7QOMs',
      ariaLabel: 'Watch the Master of Computer Science reflection on YouTube',
    },
  },
  {
    id: 'optimizing-it-study-time',
    title: 'Cách mình tối ưu hoá thời gian cho việc học IT?',
    description: 'A personal sharing on tips and tricks to maximise learning within the IT field given our busy schedule and limited time.',
    videoId: 'C7d0LEefUcw',
    watchLink: {
      label: 'Watch on YouTube',
      href: 'https://www.youtube.com/watch?v=C7d0LEefUcw',
      ariaLabel: 'Watch the IT study time optimization video on YouTube',
    },
  },
] satisfies VideoEntry[]
