/**
 * url: /check
 * purpose: It indicates the area of the problem. It's a white background.
 *          문제 하나의 영역을 나타냅니다. 하얀색 배경입니다.
 */

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Block } from "../../components/block";
import { Button } from "../../components/button";
import { QUESTION_LIST } from "../../constants";
import { UserTestCode } from "../../contexts/userTestCode";
import { Question } from "../../types";

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

const Check = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const { userTestCode, handleTestCode, getUserTestResult } =
    useContext(UserTestCode);
  const QUESTION_LIST_LENGTH = QUESTION_LIST.length;
  const remainQuestion =
    QUESTION_LIST_LENGTH - Object.keys(userTestCode).length;

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
            }
          }}
        />
      </Link>
    </>
  );
};

export default Check;
