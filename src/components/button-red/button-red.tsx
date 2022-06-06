import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

const StyledContainer = styled.div<{ width: string; height: string }>`
  font-family: "SBAggroB", sans-serif;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PALETTE.RED_GRADIENT};
  border: 4px solid ${PALETTE.RED_010};
  box-shadow: 0px 8px 0px ${PALETTE.DARK_RED};
  border-radius: 80px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 74.3%;
    height: 10.76%;
    font-size: 0.875rem;
    line-height: 30px;
  }
`;

const StyledSpan = styled.span<{ fontSize: string }>`
  color: ${PALETTE.WHITE};
  font-size: ${(props) => props.fontSize};
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
    line-height: 20px;
  }
`;

type ButtonRedProps = {
  width?: string;
  height?: string;
  content: string;
  fontSize?: string;
  onClick?: () => void;
};

export const ButtonRed = ({
  width = "100%",
  height = "100%",
  content,
  fontSize = "1rem",
  onClick,
}: ButtonRedProps) => (
  <StyledContainer
    width={width}
    height={height}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <StyledSpan fontSize={fontSize}>{content}</StyledSpan>
  </StyledContainer>
);
