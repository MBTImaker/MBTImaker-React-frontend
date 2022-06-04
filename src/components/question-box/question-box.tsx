import { useCallback, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Answer, Question } from "../../types";
import { SelectButton } from "../select-button";

const StyledBox = styled.article`
  width: 716px;
  height: 87.03vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 6px solid ${PALETTE.DARK_GREEN};
  background: ${PALETTE.DARK_WHITE};
  gap: 40px;
`;

const StyledId = styled.div<{ questionId: number }>`
  content: url();
`;

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StyledQuestion = styled.h3`
  font-size: 2rem;
  white-space: pre;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const QuestionBox = ({ id, question, answer }: Question) => {
  const [userSelected, setUserSelected] = useState<Answer>(null);

  const HandleClick = useCallback((answer: Answer) => {
    setUserSelected(answer);
  }, []);

  return (
    <StyledBox>
      <StyledId questionId={id} />

      <StyledQuestionContainer>
        <StyledQuestion>{question.situation}</StyledQuestion>
        <StyledQuestion>{question.ask}</StyledQuestion>
      </StyledQuestionContainer>

      <StyledButtonContainer>
        <SelectButton
          id="a"
          onClick={HandleClick}
          content={answer.a}
          isClicked={userSelected === "a"}
        />
        <SelectButton
          id="b"
          onClick={HandleClick}
          content={answer.b}
          isClicked={userSelected === "b"}
        />
      </StyledButtonContainer>
    </StyledBox>
  );
};
