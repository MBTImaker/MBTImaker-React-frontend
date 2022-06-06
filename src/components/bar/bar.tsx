import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

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

type BarProps = {
  content: string;
};

export const Bar = ({ content }: BarProps) => (
  <StyledBar>
    <StyledSpan>{content}</StyledSpan>
  </StyledBar>
);
