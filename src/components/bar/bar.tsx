import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

const StyledBar = styled.div`
  width: 100%;
  height: 56px;
  background: ${PALETTE.WHITE};
  border-radius: 16px;
`;

const StyledSpan = styled.span`
  font-family: "SBAggroL", sans-serif;
  font-size: 1.125rem;
`;

type BarProps = {
  content: string;
};

const Bar = ({ content }: BarProps) => (
  <StyledBar>
    <StyledSpan>{content}</StyledSpan>
  </StyledBar>
);

export default Bar;
