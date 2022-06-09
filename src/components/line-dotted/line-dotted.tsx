/**
 * url: /result
 * purpose: It's a dotted line.
 *          점선입니다. 줄간격을 조정하기 위해 만들었습니다.
 */

import styled from "styled-components";

const StyledLineDotted = styled.div`
  width: 100%;
  height: 0.625rem;
  background: linear-gradient(to right, #ededed 50%, rgba(255, 255, 255, 0) 0%)
    repeat-x bottom;
  background-size: 16px 2px;
`;

export const LineDotted = () => <StyledLineDotted />;
