import { Modal as NUIModal, ModalContent } from "@nextui-org/modal";
import Lenis from "lenis";
import { useEffect } from "react";

type TModal = {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    children: JSX.Element
}

export default function Modal(props: TModal) {
    const { isOpen, onOpen, onOpenChange, children } = props;


    return (
        <>
            <NUIModal
                id="super-modal"
                shouldBlockScroll={true}
                scrollBehavior="normal"
                placement="top"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="4xl"
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
                            }
                        },
                        exit: {
                            y: "100%",
                            transition: {
                                y: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.6,
                                },
                            }
                        }
                    }
                }}
                className="bg-[#F9FAFF] shadow-2xl"
                backdrop="transparent"
                hideCloseButton
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {children}
                        </>
                    )}
                </ModalContent>
            </NUIModal>
        </>
    );
}
