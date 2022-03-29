import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
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
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="fit-content"
        h="fit-content"
        maxH="600px"
        maxW="900px"
        bgColor="pGray.700"
      >
        <ModalBody p={0}>
          <Image borderTopRadius={6} src={imgUrl} maxH="600px" maxW="900px" />
        </ModalBody>
        <ModalFooter
          justifyContent="flex-start"
          bgColor="pGray.800"
          borderBottomRadius={6}
        >
          <Link href={imgUrl} target="_blank">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
