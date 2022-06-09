import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import Siren from "../../assets/images/button/siren.svg";
import Delete from "../../assets/images/button/delete.svg";
import useComment from "../../hooks/useComment";
import { useState } from "react";
import { Modal } from "../modal";

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

type ReplyProps = {
  id: number;
  createdDate: string;
  name: string;
  content: string;
  mbti: string;
};

export const Reply = ({ id, createdDate, name, content, mbti }: ReplyProps) => {
  const { deleteComment } = useComment();
  const [isModalActive, setIsModalActive] = useState(false);

  const onDelete = () => {
    const promptPassword = prompt("비밀번호를 입력해 주세요.") || "";
    deleteComment(id, name, promptPassword);
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
            <StyledMBTI>{mbti}</StyledMBTI>
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
      />
    </>
  );
};
