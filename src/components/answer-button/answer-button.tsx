import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Answer } from "../../types";

const StyledButton = styled.button<{ isClicked: boolean }>`
  width: 74.3%;
  height: 12.76vh;
  background: ${(props) =>
    props.isClicked ? PALETTE.DARK_GREEN_GRADIENT : PALETTE.LIGHT_GRAY};
  border: ${(props) =>
    props.isClicked ? `4px ${PALETTE.DARK_GREEN} solid` : 0};
  border-radius: 80px;
  font-size: 1.25rem;
  color: ${(props) => (props.isClicked ? PALETTE.WHITE : PALETTE.GRAY)};
  white-space: pre;
  line-height: 30px;
  font-family: "SBAggroM";
`;

type AnswerButtonProps = {
  currentQuestionIndex: number;
  id: Answer;
  handleClick: (answer: Answer) => void;
  isClicked: boolean;
  content: string;
};

export const AnswerButton = ({
  currentQuestionIndex,
  id,
  handleClick,
  isClicked,
  content,
}: AnswerButtonProps) => {
  const onClick = () => {
    handleClick(id);
    scrollToNextQuestion();
  };

  const scrollToNextQuestion = () => {
    window.scrollTo({
      top: document.documentElement.scrollTop + 400,
      behavior: "smooth",
    });
  };

  return (
    <StyledButton onClick={onClick} isClicked={isClicked}>
      {content}
    </StyledButton>
  );
};
