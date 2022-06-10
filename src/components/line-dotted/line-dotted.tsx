import styled from "styled-components";

/**
 * A dotted line.
 * 점선입니다. 줄간격을 조정하기 위해 만들었습니다.
 */
export const LineDotted = () => <StyledLineDotted />;

/////////////////////////////
/// Styles
/////////////////////////////

const StyledLineDotted = styled.div`
  width: 100%;
  height: 0.625rem;
  background: linear-gradient(to right, #ededed 50%, rgba(255, 255, 255, 0) 0%)
    repeat-x bottom;
  background-size: 16px 2px;
`;
