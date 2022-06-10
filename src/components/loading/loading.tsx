import styled from "styled-components";
import LoadingText from "../../assets/images/text/loading.png";

/**
 * Loading screen shows when data is loaded.
 * 데이터를 불러오고 있을 때 보여주는 로딩화면입니다.
 */
export const Loading = () => (
  <StyledContainer>
    <StyledText />
  </StyledContainer>
);

/////////////////////////////
/// Styles
/////////////////////////////

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.img`
  width: 40%;
  content: url(${LoadingText});
  object-fit: contain;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
  }
`;
