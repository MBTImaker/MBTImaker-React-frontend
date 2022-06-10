import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { ReportType, SelectAndModalType } from "../../types";
import { REPORT_TYPE } from "../../constants";
import DownArrow from "../../assets/images/arrow/down-arrow.svg";

type SelectProps = {
  isModalActive: boolean;
  selectType: SelectAndModalType;
  handleReportType: (reportType: ReportType) => void;
};

/**
 * <select>. made it for the design.
 * 모달 안에 있는 <select>입니다. 디자인을 위해 직접 만들었습니다.
 */
export const Select = ({
  /**
   * 모달의 활성화 여부
   */
  isModalActive,
  /**
   * 유형 ("신고")
   */
  selectType,
  /**
   * 신고 유형을 변경하는 함수
   */
  handleReportType,
}: SelectProps) => {
  const [buttonText, setButtonText] = useState(DEAULT_TEXT);
  const [isOpen, setIsOpen] = useState(false);

  const onSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const onTypeItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const selectedReportType = (e.target as Element).innerHTML;
    setIsOpen(false);
    setButtonText(selectedReportType);
  };

  const getContents = () => {
    switch (selectType) {
      case "신고":
        return REPORT_TYPE;
      default:
        return REPORT_TYPE;
    }
  };

  useEffect(() => {
    if (!isModalActive) setButtonText(DEAULT_TEXT);
  }, [isModalActive]);

  const contents = getContents();

  return (
    <StyledContainer>
      <StyledButton onClick={onSelectClick}>
        {buttonText}
        <StyledArrow isOpen={isOpen} />
      </StyledButton>
      <StyledReportTypeList isOpen={isOpen}>
        {contents.map((content) => (
          <StyledReportTypeItem
            key={content.value}
            onClick={(e) => {
              handleReportType(content.value);
              onTypeItemClick(e);
            }}
          >
            {content.korean}
          </StyledReportTypeItem>
        ))}
      </StyledReportTypeList>
    </StyledContainer>
  );
};

/////////////////////////////
/// Styles
/////////////////////////////

const DEAULT_TEXT = "유형 선택";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  background: ${PALETTE.WHITE};
  border-radius: 16px;
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
