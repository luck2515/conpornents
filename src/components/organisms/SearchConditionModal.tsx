import React, { memo } from "react";
import styled from "styled-components";
import Modal from "react-modal";

interface Props {
  className?: string;
  isMobile?: boolean;
}
const SearchConditionModalComponent: React.FC<Props> = memo(
  ({ className, isMobile }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const openModal = React.useCallback(() => {
      setIsOpen(true);
    }, []);
    const closeModal = React.useCallback(() => {
      setIsOpen(false);
    }, []);

    const modalStyle = {
      overlay: {
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      content: {
        top: "5rem",
        left: isMobile ? "2rem" : "5rem",
        right: isMobile ? "2rem" : "5rem",
        bottom: "5rem",
        backgroundColor: "#F6F9FC",
        padding: 0,
      },
    };

    return (
      <SearchConditionModal className={className}>
        <ModalButton onClick={openModal}>詳細検索</ModalButton>
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
          <BatsuButton onClick={closeModal} isMobile={isMobile} />
        </Modal>
      </SearchConditionModal>
    );
  }
);

const SearchConditionModal = styled.div``;
const ModalButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const BatsuButton = styled.span<{ isMobile: boolean }>`
  cursor: pointer;
  margin: 14px 14px 0 auto;
  display: block;
  width: 30px; /*枠の大きさ*/
  height: 30px; /*枠の大きさ*/
  position: relative;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%; /*バツ線の長さ*/
    height: 4px; /*バツ線の太さ*/
    background: ${({ theme }) => theme.default.palette.typography.main};
    transform: rotate(45deg);
    transform-origin: 0% 50%;
    position: absolute;
    top: calc(14% - 5px);
    left: 14%;
  }

  &::after {
    transform: rotate(-45deg);
    transform-origin: 100% 50%;
    left: auto;
    right: 14%;
  }
`;

export default SearchConditionModalComponent;
