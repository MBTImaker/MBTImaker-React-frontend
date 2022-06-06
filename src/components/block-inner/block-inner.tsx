import React from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Children } from "../../types";

const StyledInnerBox = styled.div`
  width: 100%;
  background: ${PALETTE.LIGHT_GRAY_020};
  border: 4px solid ${PALETTE.LIGHT_GRAY_030};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type BlockInnerProps = {
  children: Children;
};

export const BlockInner = ({ children }: BlockInnerProps) => (
  <StyledInnerBox>{children}</StyledInnerBox>
);
