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
  /**
   * 문서 상에 요소를 배치하는 방법
   */
  position,
  /**
   * 위치된 요소의 수직 위치를 설정
   */
  bottom,
  /**
   * 위치된 요소의 수평 위치를 설정
   */
  left,
  /**
   * 요소의 너비
   */
  width = "100%",
  /**
   * 요소의 높이
   */
  height = "100%",
  /**
   * 요소의 너비 (600px 이하 == 모바일)
   */
  widthMobile = "100%",
  /**
   * 요소의 높이 (모바일)
   */
  heightMobile = "100%",
  /**
   * 글씨 크기
   */
  fontSize = "1rem",
  /**
   * 글씨 크기 (모바일)
   */
  fontSizeMobile = "1rem",
  /**
   * 컴포넌트의 전체적인 색상 유형
   */
  color = "red",
  /**
   * 아래쪽 그림자 크기
   */
  boxShadowSize = 5,
  /**
   * 버튼 안에 들어가는 글자
   */
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
