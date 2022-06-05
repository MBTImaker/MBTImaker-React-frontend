import { useState } from "react";
import styled from "styled-components";
import { QuestionBox } from "../../components/question-box";
import { QUESTION_LIST } from "../../constants";
import { PALETTE } from "../../styles/palette";
import { Question } from "../../types";

const StyledBoxContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 20px;
`;

const StyledMoveToNext = styled.div`
  font-family: "SBAggroB", sans-serif;
  width: 532px;
  height: 12.76%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PALETTE.GRAY_GRADIENT};
  border: 4px solid ${PALETTE.DARK_GRAY_01};
  box-shadow: 0px 8px 0px ${PALETTE.DART_GRAY_02};
  border-radius: 80px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 200px;
  }
`;

const StyledMoveToNextSpan = styled.span`
  color: ${PALETTE.DARK_GRAY_01};
  font-size: 1.375rem;
  line-height: 86px;
`;

const Check = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const QUESTION_LIST_LENGTH = QUESTION_LIST.length;

  const onClick = () => {
    const nextQuestionIndex = Math.min(
      currentQuestionIndex + 1,
      QUESTION_LIST_LENGTH
    );
    setCurrentQuestionIndex(nextQuestionIndex);
  };

  return (
    <>
      <StyledBoxContainer>
        {QUESTION_LIST.map((q: Question) => (
          <QuestionBox
            currentQuestionIndex={currentQuestionIndex}
            key={q.id}
            id={String(q.id)}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </StyledBoxContainer>

      <StyledMoveToNext>
        <StyledMoveToNextSpan>
          {QUESTION_LIST_LENGTH - Number(currentQuestionIndex)}개의 항목이
          남았습니다. (총 {QUESTION_LIST_LENGTH}문항)
        </StyledMoveToNextSpan>
      </StyledMoveToNext>
    </>
  );
};

export default Check;
