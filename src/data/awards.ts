import nusLogo from '../assets/nus.png'
import saLogo from '../assets/sa.png'
import zhonghuaLogo from '../assets/zhonghua.jpg'
import type { AwardEntry } from '../types/portfolio'

export const awards: AwardEntry[] = [
  {
    title: 'ASEAN Secondary Scholarship',
    organization: "Zhonghua Secondary School - Saint Andrew's Junior College",
    year: '2014 - 2018',
    description: 'Full-ride scholarship for secondary and junior college education.',
    logo: zhonghuaLogo,
    tag: 'SCHOLARSHIP',
  },
  {
    title: 'Singapore Youth Festival Choir - Silver Award',
    organization: 'Zhonghua Secondary School',
    year: '2015',
    description: 'Received the Silver Award for choir performance at the Singapore Youth Festival.',
    logo: zhonghuaLogo,
    tag: 'ARTS',
  },
  {
    title: 'Model Student Award',
    organization: "Saint Andrew's Junior College",
    year: '2017',
    description: 'Recognised for exemplary character and conduct as a model student.',
    logo: saLogo,
    tag: 'CHARACTER',
  },
  {
    title: 'ASEAN Undergraduate Scholarship',
    organization: 'National University of Singapore',
    year: '2018 - 2022',
    description: 'Full-ride scholarship for undergraduate studies.',
    logo: nusLogo,
    tag: 'SCHOLARSHIP',
  },
  {
    title: '1st Prize Team | AIxImpact Case Competition',
    organization: 'QuantumBlack, a McKinsey company',
    year: '2022',
    description: 'Best project award in the AIxImpact healthcare case competition track.',
    logo: nusLogo,
    tag: 'COMPETITION',
  },
]
