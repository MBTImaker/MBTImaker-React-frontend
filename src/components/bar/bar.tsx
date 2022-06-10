import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

type BarProps = {
  content: string;
};

/**
 * Used to show 12 personalities one by one.
 * 12가지 성격을 하나씩 보여줄 때 사용됩니다.
 */
export const Bar = ({
  /**
   * 바 안에 들어가는 글자
   */
  content,
}: BarProps) => (
  <StyledBar>
    <StyledSpan>{content}</StyledSpan>
  </StyledBar>
);

/////////////////////////////
/// Styles
/////////////////////////////

const StyledBar = styled.div`
  width: 100%;
  height: 56px;
  background: ${PALETTE.WHITE};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-family: "SBAggroL", sans-serif;
  font-size: 1.125rem;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
  }
`;
