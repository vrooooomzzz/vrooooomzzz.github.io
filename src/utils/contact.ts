export type ContactFormInput = {
  name: string
  email: string
  subject: string
  message: string
}

const encodeMailtoValue = (value: string): string => encodeURIComponent(value.trim())

export const buildMailtoUrl = (
  formInput: ContactFormInput,
  recipientEmail: string,
): string => {
  const subject = formInput.subject.trim() || 'Portfolio contact'
  const bodyLines = [
    `Name: ${formInput.name}`,
    `Email: ${formInput.email}`,
    '',
    formInput.message,
  ]

  return `mailto:${recipientEmail}?subject=${encodeMailtoValue(subject)}&body=${encodeMailtoValue(
    bodyLines.join('\n'),
  )}`
}
