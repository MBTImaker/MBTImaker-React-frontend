import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { TestCountResult } from "../../types";
import Subtitle from "../../assets/images/text/subtitle.png";
import Title from "../../assets/images/text/title.png";
import TestStart from "../../assets/images/button/test-start.png";
import { Link } from "react-router-dom";

/**
 * The First screen. There are the number of MBTI results stored on the server and button that allow users to navigate to the test page.
 * 첫 화면입니다. 서버에 저장된 MBTI 결과 횟수와 테스트 페이지로 이동할 수 있는 버튼이 있습니다.
 */
const Home = () => {
  const [testCount, setTestCount] = useState<number | string>("__");

  useEffect(() => {
    axios
      .get<TestCountResult>(`https://mbti-test.herokuapp.com/test`)
      .then((response) => {
        setTestCount(response.data.data.testCount);
      })
      .catch((e) => console.error(e));
  });

  return (
    <StyledMainPage>
      <StyledTop>
        <StyleSubtitle />
        <SytleTitle />
      </StyledTop>

      <StyledBottom>
        <Link to="/check">
          <StyledMoveToTest />
        </Link>
        <StyledTestCount>현재 총 {testCount}명이 참여했어요.</StyledTestCount>
      </StyledBottom>
    </StyledMainPage>
  );
};

export default Home;

/////////////////////////////
/// Styles
/////////////////////////////

const DESKTOP_WIDTH = "37.29vw";
const MOBILE_WIDTH = "100%";

const StyledMainPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 9.53vh 0 8.42vh 0;
  gap: 37.77vh;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 17.73vh 20px 8.42vh 20px;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.div`
  object-fit: contain;
`;

const StyledTop = styled(StyledFlex)`
  gap: 21px;
`;

const StyledBottom = styled(StyledFlex)`
  gap: 33px;
`;

const StyleSubtitle = styled(StyledImage)`
  width: ${DESKTOP_WIDTH};
  content: url(${Subtitle});

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: ${MOBILE_WIDTH};
  }
`;

const SytleTitle = styled(StyledImage)`
  width: ${DESKTOP_WIDTH};
  content: url(${Title});

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: ${MOBILE_WIDTH};
  }
`;

const StyledMoveToTest = styled.img`
  width: ${DESKTOP_WIDTH};
  content: url(${TestStart});
  object-fit: cover;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: ${MOBILE_WIDTH};
  }
`;

const StyledTestCount = styled.span`
  font-size: 1.5rem;
  color: ${PALETTE.WHITE};

  @media screen and (max-width: ${(props) => props.theme.media.md}px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 1rem;
  }
`;
