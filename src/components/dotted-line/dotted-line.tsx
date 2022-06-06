import styled from "styled-components";

const StyledDottedLine = styled.div`
  width: 100%;
  height: 0.625rem;
  background: linear-gradient(to right, #ededed 50%, rgba(255, 255, 255, 0) 0%)
    repeat-x bottom;
  background-size: 16px 2px;
  margin-top: 2.3125rem;
`;

const DottedLine = () => <StyledDottedLine />;

export default DottedLine;
