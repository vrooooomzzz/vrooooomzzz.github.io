import type { ExperienceEntry } from '../types/portfolio'

export const experience = [
  {
    title: 'Mentor',
    company: 'Self-employed',
    period: '2025 - Present',
    description: [
      'Mentored students in-person and online across Math, Science, English, Economics, and Computer Science.',
      'Prepared students for certifications such as SAT, ACT, GMAT/GRE, IELTS, GCSE/IGCSE, O-levels and A-levels.',
      'Supported scholarship and entrance exam applications including ASEAN, A*STAR, TestAS, AEIS and UEE into top secondary schools and universities in Singapore or globally.',
      'Designed new curricula and syllabi to equip students with meaningful and practical skills to prepare for undergraduate studies, higher education and career orientation.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Torilab Inc.',
    period: '2025 - Present',
    description: [
      'Built and maintained 40+ data models across multiple company platforms to support executive decision-making.',
      'Designed pipelines powering analytics workflows and Business Intelligence (BI) dashboards for management and business teams.',
      'Partnered with cross-functional teams to build a centralise data warehouse and enable self-service analytical reporting.',
      'Managed entire BI data infrastructure on Google Cloud Platform to ensure reporting consistency, reliability and timeliness'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rakuten Asia Pte Ltd',
    period: '2023 - 2025',
    description: [
      'Maintained mission-critical and revenue-generating ad delivery systems for Rakuten Ichiba Marketplace.',
      'Managed Couchbase and Hive data platforms operating at hundreds of millions of records to support real-time ads delivery.',
      'Built scalable backend APIs with Spring, Kafka, Kubernetes, Redis, and caching strategies for cross-department data ingestion and synchronisation.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Sea Limited (Garena)',
    period: 'Jul 2022 - Jul 2023',
    description: [
      'Developed batch and real-time ingestion pipelines under the Data Platform team, supporting HQ Finance with data modelling and NYSE financial reporting for Shopee and Garena.',
      'Monitored and maintained hundreds of terabyte-scale batch and streaming ingestion jobs across major game titles using Bash and Apache Spark.',
      'Built a self-service ingestion portal that enabled non-technical Finance users to load data from databases, Google Sheets, CSV files, and Kafka into HDFS.',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Sea Limited (Shopee Finance)',
    period: 'Nov 2021 - May 2022',
    description: [
      'Helped the Shopee Finance team build efficient terabyte-scale financial data models for NYSE reporting by researching Spark SQL internals and optimising heavy Spark applications.',
      'Built an auto-tuning program that evaluated runtime statistics, identified bottlenecks, and suggested optimised model configurations for data users.',
      'Led optimisation efforts addressing data skew and improper null handling, reducing runtime and resource usage for selected applications by 10 to 50 percent.',
    ],
  },
  {
    title: 'Data Analytics and Machine Learning Intern',
    company: 'PSA International',
    period: 'May 2021 - Nov 2021',
    description: [
      'Supported the PSA Analytics team in researching reinforcement learning models designed to reduce reliance on human operators when planning costly port operations.',
      'Prototyped a container pre-shuffling model using Proximal Policy Optimization to rearrange a container yard within minutes and reduce subsequent vessel-loading planning time and cost.',
    ],
  },
] satisfies ExperienceEntry[]
