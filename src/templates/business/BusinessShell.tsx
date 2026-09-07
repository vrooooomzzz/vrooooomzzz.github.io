import {
  Box,
  Button,
  Drawer,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { LuLayoutGrid, LuMenu, LuX } from "react-icons/lu";

import { PortfolioStyleSelector } from "../../components/shared/PortfolioStyleSelector";
import { ColorModeButton } from "../../components/ui/color-mode";
import { profile } from "../../data/portfolio";
import type { PortfolioShellProps } from "../types";

function BusinessShell({
  activeSection,
  activeTemplateId,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onSelectTemplate,
  onToggleLayoutMode,
  children,
}: PortfolioShellProps) {
  const { open, onOpen, onClose } = useDisclosure();
  const nextLayoutLabel =
    layoutMode === "single" ? "Multi-page" : "Single page";
  const activeIndex = Math.max(
    navigationItems.findIndex((item) => item.id === activeSection),
    0,
  );
  const activeLabel = navigationItems[activeIndex]?.label ?? "Home";

  const navigate = (sectionId: typeof activeSection) => {
    onNavigate(sectionId);
    onClose();
  };

  const navigationLinks = (prefix: "contents" | "mobile") =>
    navigationItems.map((item) => {
      const isActive = activeSection === item.id;

      return (
        <Box as="li" key={item.id}>
          <Link
            href={getNavigationHref(item.id)}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.id);
            }}
            minH="46px"
            px={3}
            display="grid"
            gridTemplateColumns="minmax(0, 1fr)"
            alignItems="center"
            color={isActive ? "var(--text-100)" : "var(--text-300)"}
            borderBottom="1px solid"
            borderLeft={prefix === "mobile" ? "3px solid" : undefined}
            borderColor={
              isActive
                ? "var(--accent-500)"
                : prefix === "contents"
                  ? "var(--line-700)"
                  : "transparent"
            }
            bg={isActive ? "var(--active-nav-bg)" : "transparent"}
            aria-current={isActive ? "page" : undefined}
            data-testid={`business-${prefix}-link-${item.id}`}
          >
            <Text as="span" fontSize="sm" fontWeight={isActive ? 700 : 500}>
              {item.label}
            </Text>
          </Link>
        </Box>
      );
    });

  return (
    <Box
      minH="100vh"
      w="100%"
      className="portfolio-template portfolio-template-business business-shell"
      data-template-id="business"
      position="relative"
      isolation="isolate"
    >
      <Link className="business-skip-link" href="#portfolio-main">
        Skip to portfolio content
      </Link>
      <Box className="business-background" aria-hidden="true">
        <Box className="business-background-grid" />
        <Box className="business-background-glow business-background-glow-a" />
        <Box className="business-background-glow business-background-glow-b" />
      </Box>
      <Box
        as="header"
        className="business-casebook-header"
        position="sticky"
        top={0}
        zIndex={1000}
        bg="var(--surface-900)"
        borderBottom="1px solid"
        borderColor="var(--line-700)"
      >
        <Flex
          maxW="1600px"
          mx="auto"
          minH="64px"
          px={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
          gap={5}
        >
          <Link
            href={getNavigationHref("home")}
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
            minW={0}
            display="flex"
            alignItems="center"
            gap={4}
            aria-label="Navigate to Business portfolio home"
            data-testid="business-brand-link"
          >
            <Box
              w="34px"
              h="34px"
              display={{ base: "none", sm: "flex" }}
              alignItems="center"
              justifyContent="center"
              border="1px solid"
              borderColor="var(--line-500)"
              color="var(--accent-300)"
              fontSize="xs"
              fontWeight={800}
              flex="none"
            >
              NQH
            </Box>
            <Box minW={0}>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={800}
                color="var(--text-100)"
                truncate
              >
                {profile.name}
              </Text>
              <Text color="var(--text-300)" fontSize="xs" truncate>
                Editorial casebook / {profile.role}
              </Text>
            </Box>
          </Link>

          <Flex align="center" gap={2} flex="none">
            <Box
              display={{ base: "none", md: "block" }}
              pr={4}
              mr={2}
              borderRight="1px solid"
              borderColor="var(--line-700)"
              textAlign="right"
            >
              <Text color="var(--text-100)" fontSize="sm" fontWeight={700}>
                {activeLabel}
              </Text>
            </Box>
            <PortfolioStyleSelector
              activeTemplateId={activeTemplateId}
              onSelectTemplate={onSelectTemplate}
              testIdPrefix="business"
            />
            <ColorModeButton
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="business-theme-toggle"
            />
            <Button
              display={{ base: "none", md: "inline-flex" }}
              size="sm"
              variant="outline"
              borderColor="var(--line-500)"
              color="var(--text-100)"
              bg="var(--control-bg-soft)"
              onClick={onToggleLayoutMode}
              aria-label={`Switch to ${nextLayoutLabel} layout`}
              data-testid="business-layout-toggle"
            >
              <LuLayoutGrid />
              {nextLayoutLabel}
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label="Open contents"
              onClick={onOpen}
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="business-menu-toggle"
            >
              <LuMenu />
            </IconButton>
          </Flex>
        </Flex>
      </Box>

      <Drawer.Root
        open={open}
        onOpenChange={(event) => !event.open && onClose()}
        placement="end"
      >
        <Drawer.Backdrop bg="var(--modal-overlay-bg)" />
        <Drawer.Positioner>
          <Drawer.Content
            maxW="340px"
            bg="var(--surface-800)"
            color="var(--text-100)"
          >
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              <Flex justify="space-between" align="center" w="100%">
                <Box>
                  <Text fontWeight={800}>Casebook index</Text>
                  <Text mt={1} color="var(--text-300)" fontSize="xs">
                    {profile.name}
                  </Text>
                </Box>
                <IconButton
                  aria-label="Close contents"
                  variant="ghost"
                  onClick={onClose}
                  data-testid="business-menu-close"
                >
                  <LuX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={5}>
              <VStack align="stretch" gap={5}>
                <Box as="nav" aria-label="Business mobile showcase navigation">
                  <VStack as="ul" align="stretch" gap={1} listStyleType="none">
                    {navigationLinks("mobile")}
                  </VStack>
                </Box>
                <Button
                  w="100%"
                  variant="outline"
                  borderColor="var(--line-500)"
                  color="var(--text-100)"
                  onClick={() => {
                    onToggleLayoutMode();
                    onClose();
                  }}
                  data-testid="business-mobile-layout-toggle"
                >
                  <LuLayoutGrid />
                  {nextLayoutLabel}
                </Button>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      <Box
        className="business-casebook-layout"
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "280px minmax(0, 1fr)" }}
        maxW="1600px"
        mx="auto"
        alignItems="start"
      >
        <Box
          as="aside"
          className="business-casebook-rail"
          display={{ base: "none", lg: "flex" }}
          position="sticky"
          top="64px"
          h="calc(100vh - 64px)"
          flexDirection="column"
          justifyContent="space-between"
          px={7}
          py={8}
          borderRight="1px solid"
          borderColor="var(--line-700)"
          bg="var(--surface-800)"
        >
          <Box>
            <Text
              color="var(--accent-300)"
              fontSize="xs"
              fontWeight={800}
              textTransform="uppercase"
            >
              Contents
            </Text>
            <Text mt={2} color="var(--text-300)" fontSize="sm" lineHeight="1.6">
              A structured record of work, study, and ongoing learning.
            </Text>
            <Box as="nav" aria-label="Business showcase contents" mt={6}>
              <VStack as="ul" align="stretch" gap={0} listStyleType="none">
                {navigationLinks("contents")}
              </VStack>
            </Box>
          </Box>

          <VStack align="stretch" gap={3}>
            <Text color="var(--text-300)" fontSize="xs">
              {profile.location}
            </Text>
            <Link
              href={`mailto:${profile.email}`}
              color="var(--accent-300)"
              fontSize="sm"
              fontWeight={700}
              data-testid="business-header-contact"
            >
              Contact
            </Link>
          </VStack>
        </Box>

        <Box
          as="main"
          className="business-casebook-document"
          id="portfolio-main"
          minW={0}
          minH="100vh"
          data-layout-mode={layoutMode}
          data-template-id="business"
          data-testid="portfolio-main"
          tabIndex={-1}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default BusinessShell;
