import { Modal as NUIModal, ModalContent } from "@nextui-org/modal";

type TModal = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  children: JSX.Element;
};

export default function Modal(props: TModal) {
  const { isOpen, onOpenChange, children } = props;

  return (
    <>
      <NUIModal
        hideCloseButton
        backdrop="transparent"
        className="bg-[#F9FAFF] shadow-2xl"
        id="super-modal"
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              y: "0%",
              transition: {
                y: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                },
              },
            },
            exit: {
              y: "100%",
              transition: {
                y: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                },
              },
            },
          },
        }}
        placement="top"
        scrollBehavior="normal"
        shouldBlockScroll={true}
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>{() => <>{children}</>}</ModalContent>
      </NUIModal>
    </>
  );
}
