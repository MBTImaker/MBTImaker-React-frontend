import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Option } from "../../types";

type AnswerButtonProps = {
  currentQuestionIndex: number;
  type: Option;
  handleButtonAnswer: (answer: Option) => void;
  isClicked: boolean;
  content: string;
};

/**
 * Indicate one option within the question. If it pressed, the background changes from gray to green.
 * 문제 안에 있는 하나의 선택을 나타냅니다. 누르면 배경이 회색에서 초록색으로 변경됩니다.
 */
export const ButtonAnswer = ({
  /**
   * 문제의 번호 (삭제 예정)
   */
  currentQuestionIndex,
  type,
  handleButtonAnswer,
  isClicked,
  content,
}: AnswerButtonProps) => {
  const onClick = () => {
    handleButtonAnswer(type);
    scrollToNextQuestion();
  };

  const scrollToNextQuestion = () => {
    // window.scrollTo({
    //   top: document.documentElement.scrollTop + 400,
    //   behavior: "smooth",
    // });
    console.log("scrollTo");
  };

  return (
    <StyledButton onClick={onClick} isClicked={isClicked}>
      {content}
    </StyledButton>
  );
};

/////////////////////////////
/// Styles
/////////////////////////////

const StyledButton = styled.button<{ isClicked: boolean }>`
  width: 74.3%;
  height: 12.76vh;
  background: ${(props) =>
    props.isClicked ? PALETTE.DARK_GREEN_GRADIENT : PALETTE.LIGHT_GRAY_010};
  border: ${(props) =>
    props.isClicked ? `4px ${PALETTE.DARK_GREEN} solid` : 0};
  border-radius: 80px;
  font-size: 1.25rem;
  color: ${(props) => (props.isClicked ? PALETTE.WHITE : PALETTE.GRAY)};
  white-space: pre;
  line-height: 30px;
  font-family: "SBAggroM";

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 88%;
    height: 10.76vh;
    font-size: 0.875rem;
    line-height: 30px;
  }
`;
