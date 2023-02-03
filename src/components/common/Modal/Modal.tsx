// Modal.tsx

import React, { ReactNode } from "react";
import { ModalBox, ModalOverlay } from "./style/Modal-Style";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <ModalOverlay onClick={props.toggle}>
          <ModalBox>
            {props.children}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
}
