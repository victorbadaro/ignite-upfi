import {
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay // eslint-disable-line
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent w="auto" h="auto" overflow="hidden" bgColor="pGray.800">
        <ModalBody p="0">
          <Image
            src={imgUrl}
            alt="imagem"
            maxW="900px"
            maxH="600px"
            objectFit="cover"
          />
        </ModalBody>
        <ModalFooter px="2" py="2.5" justifyContent="flex-start">
          <Link href={imgUrl} target="_blank" fontSize="sm" color="pGray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
