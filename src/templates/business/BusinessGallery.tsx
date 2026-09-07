import { useState } from "react";
import { Box, Dialog, Image, Text, useDisclosure } from "@chakra-ui/react";

import { gallery } from "../../data/portfolio";
import type { GalleryItem } from "../../types/portfolio";
import BusinessSectionHeading from "./BusinessSectionHeading";

function BusinessGallery() {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const showImage = (image: GalleryItem) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box
      as="section"
      id="gallery"
      className="business-casebook-section business-contact-sheet"
      data-presentation="business-gallery"
      data-testid="gallery-section"
    >
      <BusinessSectionHeading sectionId="gallery" />
      <Box className="business-gallery-grid">
        {gallery.map((image) => (
          <button
            type="button"
            key={image.id}
            className="business-gallery-plate"
            data-uniform-card="true"
            onClick={() => showImage(image)}
            data-testid={`business-gallery-card-${image.id}`}
            aria-label={`Open ${image.title} gallery image`}
          >
            <Box className="business-gallery-image-wrap">
              <Image src={image.src} alt={image.alt} />
            </Box>
            <Text as="h3">{image.title}</Text>
            <Text>{image.description}</Text>
          </button>
        ))}
      </Box>
      <Dialog.Root
        open={open}
        onOpenChange={(event) => !event.open && onClose()}
      >
        <Dialog.Backdrop className="business-gallery-backdrop" />
        <Dialog.Positioner>
          <Dialog.Content className="business-gallery-dialog">
            <Dialog.CloseTrigger />
            {selectedImage ? (
              <Box p={{ base: 4, md: 7 }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  w="100%"
                />
                <Text as="h3" mt={5} fontWeight="700">
                  {selectedImage.title}
                </Text>
                <Text mt={2}>{selectedImage.description}</Text>
              </Box>
            ) : null}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}

export default BusinessGallery;
