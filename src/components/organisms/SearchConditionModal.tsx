import React, { memo } from "react";
import styled from "styled-components";
import Modal from "react-modal";

interface Props {
  className?: string;
}
const SearchConditionModalComponent: React.FC<Props> = memo(({ className }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#F6F9FC",
    },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = React.useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SearchConditionModal className={className}>
      <ModalButton onClick={openModal}>詳細検索</ModalButton>
      <Modal
        className={className}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <BatsuButton onClick={closeModal}>×</BatsuButton>
      </Modal>
    </SearchConditionModal>
  );
});

const SearchConditionModal = styled.div``;
const ModalButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const BatsuButton = styled.p`
  font-size: 2.5rem;
  font-weight: 100;
  cursor: pointer;
  color: ${({ theme }) => theme.default.palette.typography.main};
`;

export default SearchConditionModalComponent;
