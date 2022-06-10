import { useCallback, useState } from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { PALETTE } from "../../styles/palette";
import { ButtonAnswer } from "../button-answer";
import { Answer, Question } from "../../types";

type BlockProps = Question & {
  currentQuestionIndex: number;
  handleTestCode: (id: number, userSelected: Answer) => void;
};

/**
 * Indicate the area of the problem. It's a white background.
 * 문제 하나의 영역을 나타냅니다. 하얀색 배경입니다.
 */
export const Block = ({
  /**
   * 문제의 번호 (삭제 예정)
   */
  currentQuestionIndex,
  /**
   * 사용자가 버튼을 눌렀을 때 선택한 값을 저장하는 함수
   */
  handleTestCode,
  /**
   * 문제의 번호
   */
  id,
  /**
   * 문제
   */
  question,
  /**
   * 선택지 문항 2개 (이름 변경 예정)
   */
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
        <ButtonAnswer
          currentQuestionIndex={currentQuestionIndex}
          id="a"
          handleClick={handleClick}
          content={answer.a}
          isClicked={userSelected === "a"}
        />
        <ButtonAnswer
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

/////////////////////////////
/// Styles
/////////////////////////////

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
