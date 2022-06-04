import { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { QuestionBox } from "../../components/question-box";
import { QUESTION_LIST } from "../../constants";
import { PALETTE } from "../../styles/palette";
import { Question } from "../../types";

const StyledBoxContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 20px;
`;

const StyledMoveToNextQuestion = styled.div`
  font-family: "SBAggroB", sans-serif;
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  const onClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <StyledBoxContainer>
        {QUESTION_LIST.map((q: Question) => (
          <QuestionBox
            key={q.id}
            id={String(q.id)}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </StyledBoxContainer>

      <Link to={String(currentQuestionIndex + 1)} spy={true} smooth={true}>
        <StyledMoveToNextQuestion onClick={onClick}>
          {QUESTION_LIST.length - Number(currentQuestionIndex)}개의 항목이
          남았습니다. (총 {QUESTION_LIST.length}문항)
        </StyledMoveToNextQuestion>
      </Link>
    </>
  );
};

export default Check;
