import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import ContentCard from "./shared/ContentCard";
import ExternalAction from "./shared/ExternalAction";
import SectionShell from "./shared/SectionShell";
import { profile, sectionContent, subsectionContent } from "../data/portfolio";
import type { ExternalLink } from "../types/portfolio";
import { buildMailtoUrl } from "../utils/contact";
import type { ContactFormInput } from "../utils/contact";

const emptyFormData: ContactFormInput = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const getSocialIcon = (link: ExternalLink) => {
  if (link.label.toLowerCase().includes("github")) {
    return <FaGithub size={22} />;
  }

  if (link.label.toLowerCase().includes("linkedin")) {
    return <FaLinkedin size={22} />;
  }

  return <FaEnvelope size={22} />;
};

function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>(emptyFormData);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(formData, profile.email);
  };

  return (
    <SectionShell
      id="contact"
      eyebrow={sectionContent.contact.eyebrow}
      title={sectionContent.contact.title}
      intro={sectionContent.contact.description}
    >
      <ContentCard p={{ base: 5, md: 8 }} className="reveal-up delay-1">
        <form onSubmit={handleSubmit}>
          <VStack gap={5} align="stretch">
            <HStack
              gap={4}
              align="stretch"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box flex={1}>
                <Text
                  className="code-font"
                  color="var(--text-300)"
                  fontSize="xs"
                  mb={2}
                >
                  NAME *
                </Text>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  bg="var(--input-bg)"
                  color="var(--text-100)"
                  border="1px solid"
                  borderColor="var(--line-500)"
                  _focusVisible={{
                    borderColor: "var(--focus-border)",
                    boxShadow: "var(--focus-ring)",
                  }}
                  data-testid="contact-name-input"
                />
              </Box>
              <Box flex={1}>
                <Text
                  className="code-font"
                  color="var(--text-300)"
                  fontSize="xs"
                  mb={2}
                >
                  EMAIL *
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  bg="var(--input-bg)"
                  color="var(--text-100)"
                  border="1px solid"
                  borderColor="var(--line-500)"
                  _focusVisible={{
                    borderColor: "var(--focus-border)",
                    boxShadow: "var(--focus-ring)",
                  }}
                  data-testid="contact-email-input"
                />
              </Box>
            </HStack>

            <Box>
              <Text
                className="code-font"
                color="var(--text-300)"
                fontSize="xs"
                mb={2}
              >
                SUBJECT
              </Text>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project discussion"
                bg="var(--input-bg)"
                color="var(--text-100)"
                border="1px solid"
                borderColor="var(--line-500)"
                _focusVisible={{
                  borderColor: "var(--focus-border)",
                  boxShadow: "var(--focus-ring)",
                }}
                data-testid="contact-subject-input"
              />
            </Box>

            <Box>
              <Text
                className="code-font"
                color="var(--text-300)"
                fontSize="xs"
                mb={2}
              >
                MESSAGE *
              </Text>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you've been up to."
                required
                rows={6}
                resize="vertical"
                bg="var(--input-bg)"
                color="var(--text-100)"
                border="1px solid"
                borderColor="var(--line-500)"
                _focusVisible={{
                  borderColor: "var(--focus-border)",
                  boxShadow: "var(--focus-ring)",
                }}
                data-testid="contact-message-input"
              />
            </Box>

            <Button
              type="submit"
              bg="var(--primary-bg)"
              color="var(--primary-text)"
              border="1px solid"
              borderColor="rgba(118, 168, 255, 0.58)"
              _hover={{ bg: "var(--primary-hover-bg)" }}
              data-testid="contact-submit"
            >
              Send Message
            </Button>
          </VStack>
        </form>

        <Box
          mt={8}
          pt={6}
          borderTop="1px solid"
          borderColor="rgba(118, 168, 255, 0.24)"
          textAlign="center"
        >
          <Text
            className="code-font"
            color="var(--text-300)"
            fontSize="xs"
            mb={3}
          >
            {subsectionContent.contact.channelsTitle}
          </Text>
          <HStack gap={4} flexWrap="wrap" justify="center" w="100%">
            {profile.socialLinks.map((link) => (
              <ExternalAction
                key={link.href}
                href={link.href}
                label={link.label}
                ariaLabel={link.ariaLabel}
                icon={getSocialIcon(link)}
                variant="icon"
                testId={`contact-social-link-${link.label.toLowerCase()}`}
              />
            ))}
          </HStack>
        </Box>
      </ContentCard>
    </SectionShell>
  );
}

export default Contact;
