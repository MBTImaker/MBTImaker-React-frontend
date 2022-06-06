import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

const StyledContainer = styled.div<{
  width: string;
  height: string;
  widthMobile: string;
  heightMobile: string;
}>`
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
    width: ${(props) => props.widthMobile}; //74.3%;
    height: ${(props) => props.heightMobile}; //10.76%;
    line-height: 30px;
  }
`;

const StyledSpan = styled.span<{ fontSize: string; fontSizeMobile: string }>`
  color: ${PALETTE.WHITE};
  font-size: ${(props) => props.fontSize};
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: ${(props) => props.fontSizeMobile};
    line-height: 20px;
  }
`;

type ButtonRedProps = {
  width?: string;
  height?: string;
  widthMobile?: string;
  heightMobile?: string;
  fontSize?: string;
  fontSizeMobile?: string;
  content: string;
  onClick?: () => void;
};

export const ButtonRed = ({
  width = "100%",
  height = "100%",
  widthMobile = "100%",
  heightMobile = "100%",
  fontSize = "1rem",
  fontSizeMobile = "1rem",
  content,
  onClick,
}: ButtonRedProps) => (
  <StyledContainer
    width={width}
    height={height}
    widthMobile={widthMobile}
    heightMobile={heightMobile}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <StyledSpan fontSize={fontSize} fontSizeMobile={fontSizeMobile}>
      {content}
    </StyledSpan>
  </StyledContainer>
);
