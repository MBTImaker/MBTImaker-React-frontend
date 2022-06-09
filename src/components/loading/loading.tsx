import styled from "styled-components";
import LoadingText from "../../assets/images/text/loading.png";

const StyledText = styled.img`
  content: url(${LoadingText});
  object-fit: contain;
`;

export const Loading = () => <StyledText />;
