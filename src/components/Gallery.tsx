import { useState } from 'react'
import { Box, Dialog, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import SectionShell from './shared/SectionShell'
import { gallery, sectionContent } from '../data/portfolio'
import type { GalleryItem } from '../types/portfolio'
import { getAnimationDelayClass } from '../utils/animation'

function Gallery() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const openModal = (image: GalleryItem) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <SectionShell
      id="gallery"
      eyebrow={sectionContent.gallery.eyebrow}
      title={sectionContent.gallery.title}
      intro={sectionContent.gallery.description}
      nextSectionId="journal"
    >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {gallery.map((image, index) => (
            <Box
              key={image.id}
              role="button"
              tabIndex={0}
              cursor="pointer"
              onClick={() => openModal(image)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openModal(image)
                }
              }}
              borderRadius="lg"
              overflow="hidden"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              className={`reveal-up ${getAnimationDelayClass(index)}`}
              _hover={{
                transform: 'translateY(-3px)',
                borderColor: 'rgba(98, 240, 213, 0.45)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
              transition="all 0.25s ease"
              textAlign="left"
              data-testid={`gallery-card-${image.id}`}
              aria-label={`Open ${image.title} gallery image`}
            >
              <Image src={image.src} alt={image.alt} w="100%" h="220px" objectFit="cover" />
              <Box p={5}>
                <Heading as="h3" fontSize="lg" mb={2} color="var(--text-100)">
                  {image.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.75" fontSize="sm">
                  {image.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop bg="rgba(0, 0, 0, 0.55)" />
        <Dialog.Positioner>
          <Dialog.Content maxW="860px" bg="var(--surface-800)" border="1px solid" borderColor="var(--line-700)">
            <Dialog.CloseTrigger />
            {selectedImage && (
              <Box p={6}>
                <Image src={selectedImage.src} alt={selectedImage.alt} w="100%" mb={4} borderRadius="md" />
                <Heading as="h3" fontSize="xl" mb={2} color="var(--text-100)">
                  {selectedImage.title}
                </Heading>
                <Text color="var(--text-300)">{selectedImage.description}</Text>
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </SectionShell>
  )
}

export default Gallery
