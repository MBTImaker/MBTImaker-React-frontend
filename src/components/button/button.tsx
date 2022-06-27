import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { ButtonColor, ButtonSize } from "../../types";

type ButtonRedProps = ButtonSize & {
  position?: string;
  bottom?: string;
  left?: string;
  color?: ButtonColor;
  boxShadowSize?: number;
  content: string;
  cursor?: "default" | "pointer";
  onClick?: () => void;
};

/**
 * Red and gray buttons with shadows.
 * 그림자가 있는 빨간색과 회색 버튼입니다.
 */
export const Button = ({
  position,
  bottom,
  left,
  width = "100%",
  height = "100%",
  widthMobile = "100%",
  heightMobile = "100%",
  fontSize = "1rem",
  fontSizeMobile = "1rem",
  color = "red",
  boxShadowSize = 5,
  content,
  cursor = "pointer",
  onClick,
}: ButtonRedProps) => (
  <StyledContainer
    position={position}
    bottom={bottom}
    left={left}
    width={width}
    height={height}
    widthMobile={widthMobile}
    heightMobile={heightMobile}
    color={color}
    boxShadowSize={boxShadowSize}
    cursor={cursor}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    <StyledSpan
      fontSize={fontSize}
      fontSizeMobile={fontSizeMobile}
      color={color}
    >
      {content}
    </StyledSpan>
  </StyledContainer>
);

/////////////////////////////
/// Styles
/////////////////////////////

const StyledContainer = styled.div<{
  width: string;
  height: string;
  position?: string;
  bottom?: string;
  left?: string;
  widthMobile: string;
  heightMobile: string;
  color: ButtonColor;
  boxShadowSize: number;
  cursor: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  transform: ${(props) =>
    props.position === "fixed" ? `translate(-50%, -50%)` : ``};
  background: ${(props) =>
    props.color === "red" ? PALETTE.RED_GRADIENT : PALETTE.GRAY_GRADIENT};
  border: ${(props) =>
      props.color === "red"
        ? `${PALETTE.RED_010} 4px`
        : `${PALETTE.DARK_GRAY_01} 3px`}
    solid;
  box-shadow: ${(props) =>
      props.color === "red" ? PALETTE.DARK_RED : PALETTE.DARK_GRAY_02}
    0px ${(props) => props.boxShadowSize}px 0px;
  cursor: ${(props) => props.cursor};
  font-family: "SBAggroB", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    line-height: 30px;
  }
`;

const StyledSpan = styled.span<{
  fontSize: string;
  fontSizeMobile: string;
  color: ButtonColor;
}>`
  color: ${(props) =>
    props.color === "red" ? PALETTE.WHITE : PALETTE.DARK_GRAY_01};
  font-size: ${(props) => props.fontSize};
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: ${(props) => props.fontSizeMobile};
    line-height: 20px;
    white-space: pre;
  }
`;
