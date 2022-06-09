import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Children } from "../../types";

const StyledInnerBox = styled.div<{
  backgroundColor: string;
  borderWidth: string;
  padding: number;
  gap: number;
}>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.backgroundColor};
  border: ${(props) => props.borderWidth} solid ${PALETTE.LIGHT_GRAY_030};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.padding}px;
  gap: ${(props) => props.gap}px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    border-width: 2px;
  }
`;

type BlockInnerProps = {
  children: Children;
  backgroundColor?: string;
  borderWidth?: string;
  padding?: number;
  gap?: number;
};

export const BlockInner = ({
  children,
  backgroundColor = PALETTE.LIGHT_GRAY_020,
  borderWidth = "4px",
  padding = 0,
  gap = 0,
}: BlockInnerProps) => (
  <StyledInnerBox
    backgroundColor={backgroundColor}
    borderWidth={borderWidth}
    padding={padding}
    gap={gap}
  >
    {children}
  </StyledInnerBox>
);
