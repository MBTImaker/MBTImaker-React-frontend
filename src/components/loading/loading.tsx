import styled from "styled-components";
import LoadingText from "../../assets/images/text/loading.png";

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

export const Loading = () => (
  <StyledContainer>
    <StyledText />
  </StyledContainer>
);
