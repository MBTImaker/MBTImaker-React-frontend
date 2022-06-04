import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { QuestionBox } from "../../components/question-box";
import { QUESTION_LIST } from "../../constants";
import { PALETTE } from "../../styles/palette";
import { Question } from "../../types";

const StyledBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 20px;
`;

const StyledMoveToNextQuestion = styled.div`
  position: fixed;
  bottom: 8.51%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 532px;
  height: 94px;
  color: ${PALETTE.DARK_GRAY_01};
  font-size: 1.375rem;
  text-align: center;
  line-height: 86px;
  vertical-align: middle;
  background: ${PALETTE.GRAY_GRADIENT};
  border: 4px solid ${PALETTE.DARK_GRAY_01};
  box-shadow: 0px 8px 0px ${PALETTE.DART_GRAY_02};
  border-radius: 80px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 200px;
  }
`;

const Check = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <>
      <StyledBoxContainer>
        {QUESTION_LIST.map((q: Question, index) => (
          <QuestionBox
            key={q.id}
            id={q.id}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </StyledBoxContainer>

      <Link to="/check">
        <StyledMoveToNextQuestion>
          {QUESTION_LIST.length - currentQuestionIndex}개의 항목이 남았습니다.
          (총 {QUESTION_LIST.length}문항)
        </StyledMoveToNextQuestion>
      </Link>
    </>
  );
};

export default Check;
