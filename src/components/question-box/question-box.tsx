import { useCallback, useState } from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { PALETTE } from "../../styles/palette";
import { Answer, Question } from "../../types";
import { SelectButton } from "../select-button";

const StyledBox = styled.li`
  width: 716px;
  height: 87.03vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 6px solid ${PALETTE.DARK_GREEN};
  background: ${PALETTE.DARK_WHITE};
  gap: 40px;
  padding-top: 62px;
`;

const StyledId = styled.div<{ image: any }>`
  height: 70px;
  content: url(${(props) => props.image});
  padding: 11px 0px;
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
  font-weight: 100;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

type QuestionBoxProps = Question & {
  currentQuestionIndex: number;
};

export const QuestionBox = ({
  currentQuestionIndex,
  id,
  question,
  answer,
}: QuestionBoxProps) => {
  const { loading, error, image } = useImage(id);
  const [userSelected, setUserSelected] = useState<Answer>(null);

  const HandleClick = useCallback((answer: Answer) => {
    setUserSelected(answer);
  }, []);

  return (
    <StyledBox id={id}>
      <StyledId image={image} />

      <StyledQuestionContainer>
        <StyledQuestion>{question.situation}</StyledQuestion>
        <StyledQuestion>{question.ask}</StyledQuestion>
      </StyledQuestionContainer>

      <StyledButtonContainer>
        {/* <Link to={String(String(id) + 1)} spy={true} smooth={true}> */}
        <SelectButton
          currentQuestionIndex={currentQuestionIndex}
          id="a"
          onClick={HandleClick}
          content={answer.a}
          isClicked={userSelected === "a"}
        />
        <SelectButton
          currentQuestionIndex={currentQuestionIndex}
          id="b"
          onClick={HandleClick}
          content={answer.b}
          isClicked={userSelected === "b"}
        />
      </StyledButtonContainer>
    </StyledBox>
  );
};
