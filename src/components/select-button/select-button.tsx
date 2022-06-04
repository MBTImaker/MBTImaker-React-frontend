import React from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Answer } from "../../types";

const StyledButton = styled.button<{ content: string; isClicked: boolean }>`
  width: 74.3%;
  height: 12.76vh;
  background: ${(props) =>
    props.isClicked ? PALETTE.DARK_GREEN_GRADIENT : PALETTE.LIGHT_GRAY};
  border: ${(props) =>
    props.isClicked ? `4px ${PALETTE.DARK_GREEN} solid` : 0};
  border-radius: 80px;
  font-size: 1.25rem;
  color: ${(props) => (props.isClicked ? PALETTE.WHITE : PALETTE.GRAY)};

  &::after {
    content: ${(props) => props.content};
    white-space: pre;
  }
`;

type SelectButtonProps = {
  id: Answer;
  onClick: (answer: Answer) => void;
  isClicked: boolean;
  content: string;
};

export const SelectButton = ({
  id,
  onClick,
  isClicked,
  content,
}: SelectButtonProps) => {
  return (
    <StyledButton
      onClick={() => {
        onClick(id);
      }}
      content={content}
      isClicked={isClicked}
    />
  );
};
