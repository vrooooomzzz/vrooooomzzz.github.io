import { HStack, Link, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'

type ExternalActionProps = {
  href: string
  label: string
  ariaLabel: string
  icon?: ReactNode
  variant?: 'button' | 'link' | 'icon'
  tone?: 'primary' | 'outline'
  download?: string
  testId?: string
}

const isExternalHref = (href: string): boolean => /^https?:\/\//.test(href)

function ExternalAction({
  href,
  label,
  ariaLabel,
  icon,
  variant = 'button',
  tone = 'outline',
  download,
  testId,
}: ExternalActionProps) {
  const external = isExternalHref(href)
  const sharedProps = {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    download,
    'aria-label': ariaLabel,
    'data-testid': testId,
  }

  if (variant === 'icon') {
    return (
      <Link
        {...sharedProps}
        className="portfolio-icon-action"
        color="var(--text-300)"
        _hover={{ color: 'var(--accent-300)', transform: 'translateY(-2px)' }}
        transition="all 0.2s ease"
      >
        {icon ?? <FiExternalLink size={22} />}
      </Link>
    )
  }

  if (variant === 'link') {
    return (
      <Link
        {...sharedProps}
        color="var(--accent-300)"
        fontWeight={600}
        _hover={{ color: 'var(--text-100)' }}
      >
        <HStack gap={1.5}>
          <Text>{label}</Text>
          {icon ?? <FiExternalLink />}
        </HStack>
      </Link>
    )
  }

  const primaryStyles =
    tone === 'primary'
      ? {
          bg: 'var(--primary-bg)',
          color: 'var(--primary-text)',
          borderColor: 'var(--primary-bg)',
          _hover: { bg: 'var(--primary-hover-bg)', borderColor: 'var(--primary-hover-bg)' },
        }
      : {
          bg: 'var(--control-bg-soft)',
          color: 'var(--text-100)',
          borderColor: 'var(--line-500)',
          _hover: { bg: 'var(--control-hover-bg)' },
        }

  return (
    <Link
      {...sharedProps}
      className="portfolio-action-link"
      display="inline-flex"
      alignItems="center"
      borderRadius="md"
      border="1px solid"
      fontSize="sm"
      fontWeight={600}
      textDecoration="none"
      {...primaryStyles}
    >
      <HStack gap={1.5}>
        <Text>{label}</Text>
        {icon ?? <FiExternalLink />}
      </HStack>
    </Link>
  )
}

export default ExternalAction
