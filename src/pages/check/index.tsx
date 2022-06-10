import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Block } from "../../components/block";
import { Button } from "../../components/button";
import { Loading } from "../../components/loading";
import { QUESTION_LIST } from "../../constants";
import { UserTestCode } from "../../contexts/userTestCode";
import { Question } from "../../types";

/**
 * Test page.
 * MBTI 검사 페이지입니다.
 */
const Check = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const {
    loading,
    userTestCode,
    resetTestCode,
    handleTestCode,
    getUserTestResult,
  } = useContext(UserTestCode);
  const QUESTION_LIST_LENGTH = QUESTION_LIST.length;
  const remainQuestion =
    QUESTION_LIST_LENGTH - Object.keys(userTestCode).length;

  useEffect(() => {
    resetTestCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
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

          <Button
            position="fixed"
            bottom="20px"
            left="50%"
            width="532px"
            height="12.76%"
            widthMobile="74.3%"
            heightMobile="10.76%"
            boxShadowSize={8}
            fontSize="1.375rem"
            fontSizeMobile="0.875rem"
            color={remainQuestion > 0 ? "gray" : "red"}
            cursor={remainQuestion > 0 ? "default" : "pointer"}
            content={
              remainQuestion > 0
                ? `${remainQuestion}개의 항목이 남았습니다. \n(총 ${QUESTION_LIST_LENGTH}문항)`
                : `나랑 비슷한 영화 캐릭터 결과 보기`
            }
            onClick={() => {
              if (remainQuestion === 0) {
                getUserTestResult();
                if (!loading) navigate("/result");
              }
            }}
          />
        </>
      )}
    </>
  );
};

export default Check;

/////////////////////////////
/// Styles
/////////////////////////////

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
