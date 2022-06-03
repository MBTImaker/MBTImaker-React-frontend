import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { TestCountResult } from "../../types";
import Subtitle from "../../assets/images/text/subtitle.png";
import Title from "../../assets/images/text/title.png";
import TestStart from "../../assets/images/button/test-start.png";

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

const StyledButton = styled.button`
  width: ${DESKTOP_WIDTH};

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: ${MOBILE_WIDTH};
  }
`;

const StyledMoveToTest = styled.img`
  width: 100%;
  content: url(${TestStart});
  object-fit: cover;
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

const Home = () => {
  const [testCount, setTestCount] = useState(0);

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
        <StyledButton>
          <StyledMoveToTest />
        </StyledButton>
        <StyledTestCount>현재 총 {testCount}명이 참여했어요.</StyledTestCount>
      </StyledBottom>
    </StyledMainPage>
  );
};

export default Home;
