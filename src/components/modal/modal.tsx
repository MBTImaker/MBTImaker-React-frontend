import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { BlockInner } from "../block-inner";
import Report from "../../assets/images/text/report.png";
import { Textarea } from "../textarea";
import { Select } from "../select";
import { Button } from "../button";

const StyledContainer = styled.div<{ isModalActive: boolean }>`
  position: absolute;
  bottom: -460%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.isModalActive ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StyledBlock = styled.section`
  width: 100%;
  max-width: 604px;
  background-color: ${PALETTE.WHITE};
  border: 6px solid ${PALETTE.DARK_GREEN};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 32px 32px;
  gap: 26px;
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
  const [description, setDescription] = useState<string>();

  const onClickOutside = (event: any) => {
    if (modalRef.current && !(modalRef.current as any).contains(event.target)) {
      return handleModalActive(false);
    }
  };

  const handleDescription = (contents: string) => {
    setDescription(contents);
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
        <BlockInner
          backgroundColor={PALETTE.DARK_WHITE}
          borderWidth="2px"
          padding={32}
          gap={18}
        >
          <Select isModalActive={isModalActive} />
          <Textarea
            height="216px"
            placeholder="신고 내용을 적어주세요"
            handleDescription={setDescription}
          ></Textarea>
          <StyledButtonContainer>
            <Button content="취소" color="gray" />
            <Button content="제출" />
          </StyledButtonContainer>
        </BlockInner>
      </StyledBlock>
    </StyledContainer>
  );
};
