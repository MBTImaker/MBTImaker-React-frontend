import { useCallback, useState } from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { PALETTE } from "../../styles/palette";
import { Answer, Question } from "../../types";
import { AnswerButton } from "../answer-button";

const StyledBox = styled.li`
  width: 716px;
  height: 87.03vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 6px solid ${PALETTE.DARK_GREEN};
  background: ${PALETTE.DARK_WHITE};
  gap: 22px;
  padding-top: 30px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
    height: 70vh;
    padding-top: 6.59%;
    border-radius: 20px;
    border-width: 2px;
  }
`;

const StyledId = styled.div<{ image: any }>`
  height: 70px;
  content: url(${(props) => props.image});
  padding: 11px 0;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 15px 0;
  }
`;

const StyledQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 48px;
  gap: 30px;
`;

const StyledQuestion = styled.h3`
  font-size: 2rem;
  white-space: pre;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 1.125rem;
    line-height: 30px;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

type BlockProps = Question & {
  currentQuestionIndex: number;
  handleTestCode: (id: number, userSelected: Answer) => void;
};

export const Block = ({
  currentQuestionIndex,
  handleTestCode,
  id,
  question,
  answer,
}: BlockProps) => {
  const { image } = useImage(id);
  const [userSelected, setUserSelected] = useState<Answer>();

  const handleClick = useCallback(
    (answer: Answer) => {
      if (userSelected === answer) {
        setUserSelected(null);
      } else {
        setUserSelected(answer);
        handleTestCode(id, answer);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [userSelected]
  );

  return (
    <StyledBox>
      <StyledId image={image} />

      <StyledQuestionContainer>
        <StyledQuestion>{question.situation}</StyledQuestion>
        <StyledQuestion>{question.ask}</StyledQuestion>
      </StyledQuestionContainer>

      <StyledButtonContainer>
        <AnswerButton
          currentQuestionIndex={currentQuestionIndex}
          id="a"
          handleClick={handleClick}
          content={answer.a}
          isClicked={userSelected === "a"}
        />
        <AnswerButton
          currentQuestionIndex={currentQuestionIndex}
          id="b"
          handleClick={handleClick}
          content={answer.b}
          isClicked={userSelected === "b"}
        />
      </StyledButtonContainer>
    </StyledBox>
  );
};
