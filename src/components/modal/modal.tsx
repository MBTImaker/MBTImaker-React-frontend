/**
 * url: /result
 * purpose: It used to report unhealthy comments.
 *          불건전한 댓글을 신고할 때 사용됩니다.
 */

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useComment from "../../hooks/useComment";
import { PALETTE } from "../../styles/palette";
import { BlockInner } from "../block-inner";
import { Textarea } from "../textarea";
import { Select } from "../select";
import { Button } from "../button";
import { ReportType, SelectAndModalType } from "../../types";
import Report from "../../assets/images/text/report.png";

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
  modalType: SelectAndModalType;
  titleImage?: string;
  textareaPlaceholder: string;
  cancleButtonText: string;
  submitButtonText: string;
  isModalActive: boolean;
  handleModalActive: (isActive: boolean) => void;
  commentId: number;
  currentCommentPage: number;
  currentCommentSize: number;
};

export const Modal = ({
  modalType,
  titleImage = Report,
  textareaPlaceholder,
  cancleButtonText,
  submitButtonText,
  isModalActive,
  handleModalActive,
  commentId,
  currentCommentPage,
  currentCommentSize,
}: ModalProps) => {
  const { reportComment } = useComment({
    page: currentCommentPage,
    size: currentCommentSize,
  });
  const [description, setDescription] = useState<string>();
  const [reportType, setReportType] = useState<ReportType>();
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  const modalRef = useRef(null);

  const onClickOutside = (event: any) => {
    if (modalRef.current && !(modalRef.current as any).contains(event.target)) {
      return handleModalActive(false);
    }
  };

  const onSubmit = () => {
    switch (modalType) {
      case "신고": {
        if (reportType == null) {
          alert("신고 유형을 선택해 주세요.");
          return;
        }

        if (description == null || description === "") {
          alert("신고 내용을 작성해 주세요.");
          return;
        }

        setIsSubmitClick(true);

        reportComment({
          commentId,
          description,
          subject: reportType,
        }).finally(() => {
          setIsSubmitClick(false);
        });
      }
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
        <BlockInner
          backgroundColor={PALETTE.DARK_WHITE}
          borderWidth="2px"
          padding={32}
          gap={18}
        >
          <Select
            selectType="신고"
            isModalActive={isModalActive}
            handleReportType={setReportType}
          />
          <Textarea
            height="216px"
            isSubmit={isSubmitClick}
            placeholder={textareaPlaceholder}
            handleDescription={setDescription}
          />
          <StyledButtonContainer>
            <Button
              content={cancleButtonText}
              color="gray"
              onClick={() => handleModalActive(false)}
            />
            <Button content={submitButtonText} onClick={() => onSubmit()} />
          </StyledButtonContainer>
        </BlockInner>
      </StyledBlock>
    </StyledContainer>
  );
};
