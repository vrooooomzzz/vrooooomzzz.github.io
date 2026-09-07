export const JOURNAL_POST_HASH_PREFIX = '#/journal/'

export const createJournalPostHref = (slug: string): string => `${JOURNAL_POST_HASH_PREFIX}${slug}`

export const parseJournalPostHash = (hash: string): string | undefined => {
  if (!hash.startsWith(JOURNAL_POST_HASH_PREFIX)) {
    return undefined
  }

  const slug = hash.slice(JOURNAL_POST_HASH_PREFIX.length).trim()

  return slug.length > 0 ? decodeURIComponent(slug) : undefined
}
