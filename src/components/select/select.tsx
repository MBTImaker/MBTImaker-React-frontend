import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import DownArrow from "../../assets/images/arrow/down-arrow.svg";

const DEAULT_TEXT = "유형 선택";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  background: ${PALETTE.WHITE};
  border-radius: 16px;

  /* ::after {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 35px;
    background: lightcoral;
  } */
`;

const StyledButton = styled.button`
  font-family: "SBAggroM";
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  height: inherit;
  padding: 19px 22px 15px 32px;
  font-size: 1.125rem;
`;

const StyledReportTypeList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: ${PALETTE.WHITE};
  border-radius: 16px;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
`;

const StyledReportTypeItem = styled.li`
  border-bottom: 1px dashed ${PALETTE.LIGHT_GRAY_010};
  padding: 12px 32px;
  font-size: 1.125rem;
  cursor: pointer;

  :hover {
    background: ${PALETTE.LIGHT_GRAY_010};
  }

  :last-child {
    border-bottom: 0 none;
  }
`;

const StyledArrow = styled.img<{ isOpen: boolean }>`
  content: url(${DownArrow});
  object-fit: contain;
  transform: ${(props) => (props.isOpen ? "rotate(0.5turn)" : "none")};
`;

type SelectProps = {
  isModalActive: boolean;
};

export const Select = ({ isModalActive }: SelectProps) => {
  const [buttonText, setButtonText] = useState(DEAULT_TEXT);
  const [isOpen, setIsOpen] = useState(false);

  const onSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const onTypeItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setIsOpen(false);
    setButtonText((e.target as Element).innerHTML);
  };

  useEffect(() => {
    if (!isModalActive) setButtonText(DEAULT_TEXT);
  }, [isModalActive]);

  return (
    <StyledContainer>
      <StyledButton onClick={onSelectClick}>
        {buttonText}

        <StyledArrow isOpen={isOpen} />
      </StyledButton>
      <StyledReportTypeList isOpen={isOpen}>
        <StyledReportTypeItem onClick={(e) => onTypeItemClick(e)} value="ABUSE">
          욕설 / 비하
        </StyledReportTypeItem>
        <StyledReportTypeItem onClick={onTypeItemClick} value="PORNOGRAPHY">
          음란물 / 불건전한 대화
        </StyledReportTypeItem>
        <StyledReportTypeItem onClick={onTypeItemClick} value="COMMERCIAL">
          상업적 광고 / 판매
        </StyledReportTypeItem>
        <StyledReportTypeItem onClick={onTypeItemClick} value="PAPERING">
          낚시 / 도배
        </StyledReportTypeItem>
        <StyledReportTypeItem onClick={onTypeItemClick} value="DISPUTE">
          지나친 정치 / 종교 논쟁
        </StyledReportTypeItem>
        <StyledReportTypeItem onClick={onTypeItemClick} value="PROMOTION">
          불법 홍보
        </StyledReportTypeItem>
      </StyledReportTypeList>
    </StyledContainer>
  );
};
