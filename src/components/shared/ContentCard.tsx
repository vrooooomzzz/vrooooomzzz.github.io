import { Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type ContentCardProps = BoxProps & {
  children: ReactNode
}

function ContentCard({ children, ...props }: ContentCardProps) {
  return (
    <Box
      p={{ base: 5, md: 7 }}
      borderRadius="lg"
      bg="var(--surface-900)"
      border="1px solid"
      borderColor="var(--line-700)"
      transition="all 0.25s ease"
      {...props}
    >
      {children}
    </Box>
  )
}

export default ContentCard
