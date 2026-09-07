import { Box, Button, Flex, Menu, Portal, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuBriefcaseBusiness, LuCode, LuPalette } from "react-icons/lu";

import {
  portfolioTemplateOptionList,
  portfolioTemplateOptions,
} from "../../templates/options";
import type { PortfolioTemplateId } from "../../templates/types";
import { isPortfolioTemplateId } from "../../utils/templateSelection";

type PortfolioStyleSelectorProps = {
  activeTemplateId: PortfolioTemplateId;
  onSelectTemplate: (templateId: PortfolioTemplateId) => void;
  testIdPrefix: string;
};

const templateIcons: Record<PortfolioTemplateId, IconType> = {
  engineering: LuCode,
  business: LuBriefcaseBusiness,
};

export function PortfolioStyleSelector({
  activeTemplateId,
  onSelectTemplate,
  testIdPrefix,
}: PortfolioStyleSelectorProps) {
  const activeTemplate = portfolioTemplateOptions[activeTemplateId];

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <Button
          size="sm"
          variant="outline"
          minW={{ base: "40px", xl: "132px" }}
          h="40px"
          px={{ base: 2, xl: 3 }}
          gap={2}
          borderColor="var(--line-500)"
          color="var(--text-100)"
          bg="var(--control-bg)"
          _hover={{ bg: "var(--control-hover-bg)" }}
          aria-label={`Portfolio style: ${activeTemplate?.label ?? "Engineering"}`}
          title="Portfolio style"
          data-testid={`${testIdPrefix}-style-selector-trigger`}
        >
          <LuPalette />
          <Text
            as="span"
            display={{ base: "none", xl: "inline" }}
            fontSize="xs"
            fontWeight={700}
            whiteSpace="nowrap"
          >
            Portfolio style
          </Text>
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            minW="280px"
            maxW="min(340px, calc(100vw - 24px))"
            p={2}
            border="1px solid"
            borderColor="var(--line-500)"
            bg="var(--surface-800)"
            color="var(--text-100)"
            boxShadow="lg"
            zIndex={1500}
            data-testid={`${testIdPrefix}-style-selector-menu`}
          >
            <Box px={2} pt={1} pb={2}>
              <Text fontSize="sm" fontWeight={800}>
                Portfolio style
              </Text>
              <Text mt={1} color="var(--text-300)" fontSize="xs">
                Choose how the same portfolio content is presented.
              </Text>
            </Box>

            <Menu.RadioItemGroup
              value={activeTemplateId}
              onValueChange={(event) => {
                if (isPortfolioTemplateId(event.value)) {
                  onSelectTemplate(event.value);
                }
              }}
            >
              {portfolioTemplateOptionList.map((template) => {
                const TemplateIcon = templateIcons[template.id];

                return (
                  <Menu.RadioItem
                    key={template.id}
                    value={template.id}
                    minH="64px"
                    px={2}
                    py={2}
                    borderRadius="sm"
                    cursor="pointer"
                    _highlighted={{ bg: "var(--active-nav-bg)" }}
                    _checked={{ bg: "var(--active-nav-bg)" }}
                    data-testid={`${testIdPrefix}-style-selector-option-${template.id}`}
                  >
                    <Flex align="flex-start" gap={3} w="100%" minW={0}>
                      <Flex
                        w="32px"
                        h="32px"
                        flex="none"
                        align="center"
                        justify="center"
                        border="1px solid"
                        borderColor="var(--line-500)"
                        color="var(--accent-300)"
                        aria-hidden="true"
                      >
                        <TemplateIcon />
                      </Flex>
                      <Menu.ItemText asChild>
                        <Box minW={0} flex="1">
                          <Text fontSize="sm" fontWeight={700}>
                            {template.label}
                          </Text>
                          <Text
                            mt={0.5}
                            color="var(--text-300)"
                            fontSize="xs"
                            lineHeight="1.45"
                          >
                            {template.description}
                          </Text>
                        </Box>
                      </Menu.ItemText>
                    </Flex>
                  </Menu.RadioItem>
                );
              })}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
