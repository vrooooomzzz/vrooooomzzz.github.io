import { Box, Text } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import {
  SiAmazonwebservices,
  SiAnsible,
  SiApache,
  SiApacheairflow,
  SiApachehadoop,
  SiApachehive,
  SiApachekafka,
  SiApachespark,
  SiCplusplus,
  SiCouchbase,
  SiCoursera,
  SiDbt,
  SiDocker,
  SiElasticstack,
  SiGithub,
  SiGnubash,
  SiGooglecloud,
  SiGradle,
  SiGrafana,
  SiJenkins,
  SiJupyter,
  SiKubernetes,
  SiLinux,
  SiMlflow,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiRedis,
  SiScala,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'

const logoIcons: Record<string, IconType> = {
  amazonwebservices: SiAmazonwebservices,
  ansible: SiAnsible,
  apache: SiApache,
  apacheairflow: SiApacheairflow,
  apachehadoop: SiApachehadoop,
  apachehive: SiApachehive,
  apachekafka: SiApachekafka,
  apachespark: SiApachespark,
  cplusplus: SiCplusplus,
  couchbase: SiCouchbase,
  coursera: SiCoursera,
  dbt: SiDbt,
  docker: SiDocker,
  elasticstack: SiElasticstack,
  github: SiGithub,
  gnubash: SiGnubash,
  googlecloud: SiGooglecloud,
  gradle: SiGradle,
  grafana: SiGrafana,
  jenkins: SiJenkins,
  jupyter: SiJupyter,
  kubernetes: SiKubernetes,
  linux: SiLinux,
  mlflow: SiMlflow,
  mongodb: SiMongodb,
  mysql: SiMysql,
  openjdk: SiOpenjdk,
  postgresql: SiPostgresql,
  prometheus: SiPrometheus,
  python: SiPython,
  pytorch: SiPytorch,
  redis: SiRedis,
  scala: SiScala,
  scikitlearn: SiScikitlearn,
  tensorflow: SiTensorflow,
}

const logoTextMarks: Record<string, string> = {
  act: '35',
  aiximpact: 'AI',
  database: 'DB',
  ielts: '8.0',
  javafx: 'JFX',
  nus: 'NUS',
  pdfbox: 'PDF',
  sat: '800',
  university: 'UNI',
}

type LogoMarkProps = {
  logoKey: string
  logoLabel: string
  logoAccent?: string
  size?: 'xs' | 'sm' | 'lg' | 'xl'
}

const logoSizes = {
  xs: { box: '28px', icon: 16, font: '0.58rem', radius: 'lg' },
  sm: { box: '34px', icon: 18, font: '0.66rem', radius: 'xl' },
  lg: { box: '48px', icon: 24, font: '0.78rem', radius: 'xl' },
  xl: { box: '64px', icon: 32, font: '0.9rem', radius: '2xl' },
} as const

function LogoMark({ logoKey, logoLabel, logoAccent = 'var(--accent-300)', size = 'sm' }: LogoMarkProps) {
  const IconComponent = logoIcons[logoKey]
  const logoText = logoTextMarks[logoKey] ?? logoKey.slice(0, 3).toUpperCase()
  const logoSize = logoSizes[size]

  return (
    <Box
      as="span"
      role="img"
      aria-label={logoLabel}
      flex="0 0 auto"
      boxSize={logoSize.box}
      borderRadius={logoSize.radius}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      bg="var(--accent-control-bg)"
      border="1px solid"
      borderColor="rgba(98, 240, 213, 0.3)"
      color={logoAccent}
      boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.08)"
    >
      {IconComponent ? (
        <IconComponent aria-hidden="true" size={logoSize.icon} />
      ) : (
        <Text as="span" className="code-font" fontSize={logoSize.font} fontWeight={800}>
          {logoText}
        </Text>
      )}
    </Box>
  )
}

export default LogoMark
