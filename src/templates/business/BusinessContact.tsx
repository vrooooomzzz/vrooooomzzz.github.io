import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Box, Button, Input, Link, Text, Textarea } from "@chakra-ui/react";

import { profile, subsectionContent } from "../../data/portfolio";
import type { ContactFormInput } from "../../utils/contact";
import { buildMailtoUrl } from "../../utils/contact";
import BusinessSectionHeading from "./BusinessSectionHeading";

const initialForm: ContactFormInput = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function BusinessContact() {
  const [formData, setFormData] = useState(initialForm);
  const change = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailtoUrl(formData, profile.email);
  };

  return (
    <Box
      as="section"
      id="contact"
      className="business-casebook-section business-closing-brief"
      data-presentation="business-contact"
      data-testid="contact-section"
    >
      <BusinessSectionHeading sectionId="contact" />
      <Box className="business-contact-layout">
        <Box
          className="business-contact-card"
          data-testid="business-direct-contact"
        >
          <Text className="business-contact-label">
            {subsectionContent.contact.channelsTitle}
          </Text>
          <Link
            className="business-contact-email"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </Link>
          <Text className="business-contact-location">{profile.location}</Text>
          <Box className="business-contact-socials">
            {profile.socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
        <form onSubmit={submit} className="business-contact-form">
          <Box>
            <label htmlFor="business-contact-name">Name *</label>
            <Input
              id="business-contact-name"
              name="name"
              value={formData.name}
              onChange={change}
              required
              data-testid="contact-name-input"
            />
          </Box>
          <Box>
            <label htmlFor="business-contact-email">Email *</label>
            <Input
              id="business-contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={change}
              required
              data-testid="contact-email-input"
            />
          </Box>
          <Box>
            <label htmlFor="business-contact-subject">Subject</label>
            <Input
              id="business-contact-subject"
              name="subject"
              value={formData.subject}
              onChange={change}
              data-testid="contact-subject-input"
            />
          </Box>
          <Box>
            <label htmlFor="business-contact-message">Message *</label>
            <Textarea
              id="business-contact-message"
              name="message"
              value={formData.message}
              onChange={change}
              required
              data-testid="contact-message-input"
            />
          </Box>
          <Button type="submit" data-testid="contact-submit">
            Send message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default BusinessContact;
