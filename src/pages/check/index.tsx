import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Block } from "../../components/block";
import { QUESTION_LIST } from "../../constants";
import { PALETTE } from "../../styles/palette";
import { Answer, Question, TestCode } from "../../types";

const StyledBoxContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 70px 20px;
  }
`;

const StyledMoveToNext = styled.div<{ remainQuestion: number }>`
  font-family: "SBAggroB", sans-serif;
  width: 532px;
  height: 12.76%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.remainQuestion > 0 ? PALETTE.GRAY_GRADIENT : PALETTE.RED_GRADIENT};
  border: 4px solid
    ${(props) =>
      props.remainQuestion > 0 ? PALETTE.DARK_GRAY_01 : PALETTE.RED};
  box-shadow: 0px 8px 0px
    ${(props) =>
      props.remainQuestion > 0 ? PALETTE.DART_GRAY_02 : PALETTE.DARK_RED};
  border-radius: 80px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.remainQuestion > 0 ? "default" : "pointer")};

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 74.3%;
    height: 10.76%;
    font-size: 0.875rem;
    line-height: 30px;
  }
`;

const StyledMoveToNextSpan = styled.span<{ remainQuestion: number }>`
  color: ${(props) =>
    props.remainQuestion > 0 ? PALETTE.DARK_GRAY_01 : PALETTE.WHITE};
  font-size: 1.375rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
    line-height: 20px;
  }
`;

const Check = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [userTestCode, setUserTestCode] = useState<TestCode>({});
  const QUESTION_LIST_LENGTH = QUESTION_LIST.length;
  const remainQuestion =
    QUESTION_LIST_LENGTH - Object.keys(userTestCode).length;

  const handleTestCode = useCallback((id: number, userSelected: Answer) => {
    const userSelectedNumber = userSelected === "a" ? 0 : 1;
    setUserTestCode((userTestCode) => ({
      ...userTestCode,
      [id]: userSelectedNumber,
    }));
  }, []);

  return (
    <>
      <StyledBoxContainer>
        {QUESTION_LIST.map((q: Question) => (
          <Block
            currentQuestionIndex={currentQuestionIndex}
            handleTestCode={handleTestCode}
            key={q.id}
            id={q.id}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </StyledBoxContainer>

      <Link to={remainQuestion === 0 ? "/result" : "#"}>
        <StyledMoveToNext remainQuestion={remainQuestion}>
          <StyledMoveToNextSpan remainQuestion={remainQuestion}>
            {remainQuestion > 0 && (
              <>
                {remainQuestion}개의 항목이 남았습니다.
                <br />
                (총 {QUESTION_LIST_LENGTH}
                문항)
              </>
            )}
            {remainQuestion === 0 && <>나랑 비슷한 영화 캐릭터 결과 보기</>}
          </StyledMoveToNextSpan>
        </StyledMoveToNext>
      </Link>
    </>
  );
};

export default Check;
