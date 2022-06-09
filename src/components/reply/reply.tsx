import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import Siren from "../../assets/images/button/siren.svg";
import Delete from "../../assets/images/button/delete.svg";
import useComment from "../../hooks/useComment";
import { useState } from "react";
import { Modal } from "../modal";
import { GetCommetsProperties } from "../../types";

const DESKTOP_BORDER_RADIUS = "20px";

const StyledReplayContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${PALETTE.WHITE};
  border: 3px solid ${PALETTE.LIGHT_GRAY_030};
  border-radius: ${DESKTOP_BORDER_RADIUS};
`;

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${DESKTOP_BORDER_RADIUS} ${DESKTOP_BORDER_RADIUS} 0 0;
  background: ${PALETTE.DARK_WHITE};
  padding: 22px 29px;
  gap: 10px;
`;

const StyledSpanContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledBiggerSpan = styled.span`
  font-size: 1.125rem;
`;

const StyledMBTI = styled.span`
  font-family: "SBAggroL";
  font-size: 0.6875rem;
  color: ${PALETTE.DARK_GRAY_05};
`;

const StyledDate = styled.span`
  font-family: "SBAggroL";
  font-size: 0.875rem;
  color: ${PALETTE.DARK_GRAY_05};
`;

const StyledCommnetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 ${DESKTOP_BORDER_RADIUS} ${DESKTOP_BORDER_RADIUS};
  padding: 22px 29px;
  gap: 12px;
`;

const StyledSiren = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${Siren});
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledDelete = styled.button`
  width: 28px;
  height: 28px;
  background-image: url(${Delete});
  background-size: contain;
  background-repeat: no-repeat;
`;

type ReplyProps = GetCommetsProperties & {
  id: number;
  createdDate: string;
  name: string;
  content: string;
  mbti: string;
};

export const Reply = ({
  id,
  createdDate,
  name,
  content,
  mbti,
  page,
  size,
}: ReplyProps) => {
  const getNamebyMbti = () => {
    switch (mbti) {
      case "ISTJ": {
        return "킹스맨의 해리 하트";
      }
      case "ISFJ": {
        return "셜록홈즈의 왓슨";
      }
      case "ISTP": {
        return "007의 제임스 본드";
      }
      case "ISFP": {
        return "타이타닉의 로즈";
      }
      case "INTJ": {
        return "닥터 스트레인지의 닥터 스트레인지";
      }
      case "INTP": {
        return "이미테이션 게임의 앨런 튜링";
      }
      case "INFJ": {
        return "위대한 개츠비의 개츠비";
      }
      case "INFP": {
        return "신비한 동물사전의 뉴트 스캐맨더";
      }
      case "ESTJ": {
        return "해리포터의 헤르미온느";
      }
      case "ESFJ": {
        return "분노의 질주의 돔";
      }
      case "ESTP": {
        return "라푼젤의 플린 라이더";
      }
      case "ESFP": {
        return "수어사이드 스쿼드의 할리퀸";
      }
      case "ENTJ": {
        return "악마는 프라다를 입는다의 미란다";
      }
      case "ENTP": {
        return "크리스마스의 악몽의 잭 스켈레톤";
      }
      case "ENFJ": {
        return "금발이 너무해의 엘 우즈";
      }
      case "ENFP": {
        return "사운드 오브 뮤직의 마리아";
      }
      default: {
        return;
      }
    }
  };

  const { deleteComment } = useComment({ page, size });
  const [isModalActive, setIsModalActive] = useState(false);
  const nameByMbti = getNamebyMbti();

  const onDelete = () => {
    const promptPassword = prompt("비밀번호를 입력해 주세요.");
    if (promptPassword === "" || promptPassword == null) return;
    deleteComment({ id, name, password: promptPassword, page, size });
  };

  const handleModalActive = (isActive: boolean) => {
    setIsModalActive(isActive);
  };

  return (
    <>
      <StyledReplayContainer>
        <StyledUserInfo>
          <StyledSpanContainer>
            <StyledBiggerSpan>{name}</StyledBiggerSpan>
            <StyledMBTI>{nameByMbti}</StyledMBTI>
          </StyledSpanContainer>

          <StyledSiren onClick={() => setIsModalActive(true)} />
          <StyledDelete onClick={onDelete} />
        </StyledUserInfo>

        <StyledCommnetContainer>
          <StyledBiggerSpan>{content}</StyledBiggerSpan>
          <StyledDate>
            {createdDate.replace(/-/g, ".").replace(/T/g, " ")}
          </StyledDate>
        </StyledCommnetContainer>
      </StyledReplayContainer>

      <Modal
        commentId={id}
        textareaPlaceholder="신고 내용을 적어주세요"
        cancleButtonText="취소"
        submitButtonText="제출"
        isModalActive={isModalActive}
        handleModalActive={handleModalActive}
        currentCommentPage={page}
        currentCommentSize={size}
      />
    </>
  );
};
