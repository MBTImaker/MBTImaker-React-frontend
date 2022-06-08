import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { BlockInner } from "../block-inner";
import { ButtonRed } from "../button-red";
import Select from "../select/select";
import Textarea from "../textarea/textarea";
import Report from "../../assets/images/text/report.png";

const StyledContainer = styled.div<{ isModalActive: boolean }>`
  position: absolute;
  display: ${(props) => (props.isModalActive ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledBlock = styled.section`
  width: 100%;
  max-width: 716px;
  background-color: ${PALETTE.WHITE};
  border: 6px solid ${PALETTE.DARK_GREEN};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.img<{ image: string }>`
  width: 15.56%;
  content: url(${(props) => props.image});
  object-fit: contain;
`;

const StyledButtonContainer = styled.div`
  width: 54.96%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

type ModalProps = {
  titleImage?: string;
  isModalActive: boolean;
  handleModalActive: (isActive: boolean) => void;
};

export const Modal = ({
  titleImage = Report,
  isModalActive,
  handleModalActive,
}: ModalProps) => {
  const modalRef = useRef(null);

  const onClickOutside = (event: any) => {
    if (modalRef.current && !(modalRef.current as any).contains(event.target)) {
      return handleModalActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  });

  return (
    <StyledContainer isModalActive={isModalActive}>
      <StyledBlock ref={modalRef}>
        <StyledTitle image={titleImage} />
        <BlockInner backgroundColor={PALETTE.DARK_WHITE} borderWidth="2px">
          <Select />
          <Textarea></Textarea>
          <StyledButtonContainer>
            <ButtonRed content="제출"></ButtonRed>
            <ButtonRed content="제출"></ButtonRed>
          </StyledButtonContainer>
        </BlockInner>
      </StyledBlock>
    </StyledContainer>
  );
};
