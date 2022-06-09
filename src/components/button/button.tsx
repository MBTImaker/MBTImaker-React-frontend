import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { ButtonColor, ButtonSize } from "../../types";

const StyledContainer = styled.div<{
  width: string;
  height: string;
  widthMobile: string;
  heightMobile: string;
  color: ButtonColor;
}>`
  font-family: "SBAggroB", sans-serif;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.color === "red" ? PALETTE.RED_GRADIENT : PALETTE.GRAY_GRADIENT};
  border: solid
    ${(props) =>
      props.color === "red"
        ? `${PALETTE.RED_010} 4px`
        : `${PALETTE.DARK_GRAY_01} 3px`};
  box-shadow: 0px 5px 0px
    ${(props) =>
      props.color === "red" ? PALETTE.DARK_RED : PALETTE.DARK_GRAY_02};
  border-radius: 80px;
  cursor: pointer;

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

type ButtonRedProps = ButtonSize & {
  color?: ButtonColor;
  content: string;
  onClick?: () => void;
};

export const Button = ({
  width = "100%",
  height = "100%",
  widthMobile = "100%",
  heightMobile = "100%",
  fontSize = "1rem",
  fontSizeMobile = "1rem",
  color = "red",
  content,
  onClick,
}: ButtonRedProps) => (
  <StyledContainer
    width={width}
    height={height}
    widthMobile={widthMobile}
    heightMobile={heightMobile}
    color={color}
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
