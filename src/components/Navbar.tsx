import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Container,
  Drawer,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'

import { navigation, profile } from '../data/portfolio'
import type { LayoutMode } from '../hooks/usePortfolioLayout'
import type { PortfolioTemplateId } from '../templates/types'
import type { NavigationItem, SectionId } from '../types/portfolio'
import { getEnabledNavigationItems } from '../utils/scroll'
import { PortfolioStyleSelector } from './shared/PortfolioStyleSelector'
import { ColorModeButton } from './ui/color-mode'

type NavbarProps = {
  activeSection?: SectionId
  activeTemplateId: PortfolioTemplateId
  getNavigationHref?: (sectionId: SectionId) => string
  layoutMode?: LayoutMode
  navigationItems?: NavigationItem[]
  onNavigate?: (sectionId: SectionId) => void
  onSelectTemplate: (templateId: PortfolioTemplateId) => void
  onToggleLayoutMode?: () => void
}

function Navbar({
  activeSection = 'home',
  activeTemplateId,
  getNavigationHref = (sectionId) => `#${sectionId}`,
  layoutMode = 'single',
  navigationItems = getEnabledNavigationItems(navigation),
  onNavigate = () => undefined,
  onSelectTemplate,
  onToggleLayoutMode = () => undefined,
}: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)
  const nextLayoutLabel = layoutMode === 'single' ? 'Multi-page' : 'Single page'
  const isMultiPageLayout = layoutMode === 'multi'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (sectionId: SectionId) => {
    onNavigate(sectionId)
    onClose()
  }

  const handleLayoutToggle = () => {
    onToggleLayoutMode()
    onClose()
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={isScrolled ? 'var(--nav-border)' : 'transparent'}
      bg={isScrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)'}
      backdropFilter="blur(14px)"
      boxShadow={isScrolled ? 'var(--nav-shadow)' : 'none'}
      transition="all 0.3s ease"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <Flex as="nav" justify="space-between" align="center" h={{ base: '68px', md: '76px' }}>
          <Link
            href={getNavigationHref('home')}
            onClick={(e) => {
              e.preventDefault()
              handleSectionClick('home')
            }}
            display="flex"
            alignItems="center"
            gap={3}
            aria-label="Scroll to home section"
            data-testid="navbar-brand-link"
          >
            <Box
              w={{ base: '36px', md: '40px' }}
              h={{ base: '36px', md: '40px' }}
              borderRadius="md"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(98, 240, 213, 0.5)"
              boxShadow="0 0 0 2px rgba(98, 240, 213, 0.15)"
            >
              <Image src={profile.profileImage} alt={`${profile.name} profile`} w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box>
              <Text className="code-font" fontSize="xs" color="var(--text-300)" letterSpacing="widest">
                PROFILE.NODE
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={600} color="var(--text-100)">
                {profile.name}
              </Text>
            </Box>
          </Link>

          {!isMultiPageLayout ? (
            <Flex as="ul" listStyleType="none" gap={1} align="center" display={{ base: 'none', lg: 'flex' }}>
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <Box as="li" key={item.id}>
                    <Link
                      href={getNavigationHref(item.id)}
                      onClick={(e) => {
                        e.preventDefault()
                        handleSectionClick(item.id)
                      }}
                      px={3}
                      py={2}
                      borderRadius="md"
                      fontSize="sm"
                      className="code-font"
                      color={isActive ? 'var(--text-100)' : 'var(--text-300)'}
                      bg={isActive ? 'var(--active-nav-bg)' : 'transparent'}
                      border="1px solid"
                      borderColor={isActive ? 'var(--active-nav-border)' : 'transparent'}
                      _hover={{
                        color: 'var(--text-100)',
                        borderColor: 'var(--active-nav-border)',
                        bg: 'var(--active-nav-bg)',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label}`}
                      data-testid={`navbar-link-${item.id}`}
                    >
                      {item.label}
                    </Link>
                  </Box>
                )
              })}
            </Flex>
          ) : null}

          <Flex align="center" gap={2}>
            <PortfolioStyleSelector
              activeTemplateId={activeTemplateId}
              onSelectTemplate={onSelectTemplate}
              testIdPrefix="navbar"
            />

            <ColorModeButton
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg-soft)"
              _hover={{ bg: 'var(--control-hover-bg)' }}
              data-testid="navbar-theme-toggle"
            />

            <Button
              display={{ base: 'none', sm: 'inline-flex' }}
              size="sm"
              variant="outline"
              borderColor="rgba(98, 240, 213, 0.46)"
              color="var(--text-100)"
              bg="var(--accent-control-bg)"
              className="code-font"
              fontSize="xs"
              onClick={handleLayoutToggle}
              _hover={{ bg: 'var(--accent-control-hover-bg)' }}
              aria-label={`Switch to ${nextLayoutLabel} layout`}
              data-testid="navbar-layout-toggle"
            >
              {nextLayoutLabel}
            </Button>

            <IconButton
              aria-label="Toggle menu"
              display={isMultiPageLayout ? 'flex' : { base: 'flex', lg: 'none' }}
              variant="ghost"
              onClick={open ? onClose : onOpen}
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              _hover={{ bg: 'var(--control-hover-bg)' }}
              data-testid="navbar-menu-toggle"
            >
              {open ? <HiX size={20} /> : <HiMenu size={20} />}
            </IconButton>
          </Flex>
        </Flex>
      </Container>

      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="var(--drawer-backdrop)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="300px" bg="var(--surface-800)" borderLeft="1px solid" borderColor="var(--line-700)">
            <Drawer.Header borderBottom="1px solid" borderColor="var(--line-700)">
              <Flex justify="space-between" align="center">
                <Text className="code-font" fontWeight={600} color="var(--text-100)">
                  NAV_INDEX
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  color="var(--text-100)"
                  _hover={{ bg: 'var(--control-hover-bg)' }}
                  data-testid="navbar-menu-close"
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={4} px={3}>
              <VStack align="stretch" gap={2}>
                <Button
                  w="100%"
                  variant="outline"
                  borderColor="rgba(98, 240, 213, 0.46)"
                  color="var(--text-100)"
                  bg="var(--accent-control-bg)"
                  className="code-font"
                  fontSize="xs"
                  onClick={handleLayoutToggle}
                  _hover={{ bg: 'var(--accent-control-hover-bg)' }}
                  aria-label={`Switch to ${nextLayoutLabel} layout`}
                  data-testid="navbar-mobile-layout-toggle"
                >
                  {nextLayoutLabel}
                </Button>
                {navigationItems.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <Link
                      key={item.id}
                      href={getNavigationHref(item.id)}
                      onClick={(e) => {
                        e.preventDefault()
                        handleSectionClick(item.id)
                      }}
                      px={3}
                      py={2.5}
                      borderRadius="md"
                      className="code-font"
                      fontSize="sm"
                      color={isActive ? 'var(--text-100)' : 'var(--text-300)'}
                      bg={isActive ? 'var(--active-nav-bg)' : 'transparent'}
                      border="1px solid"
                      borderColor={isActive ? 'var(--active-nav-border)' : 'transparent'}
                      _hover={{
                        bg: 'var(--active-nav-bg)',
                        borderColor: 'var(--active-nav-border)',
                        color: 'var(--text-100)',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label}`}
                      data-testid={`navbar-mobile-link-${item.id}`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
