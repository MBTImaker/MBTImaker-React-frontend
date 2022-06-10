/**
 * url: /result
 * purpose: It used to receive short words.
 *          짧은 단어를 입력받을 때 사용됩니다.
 */

import styled from "styled-components";
import { forwardRef } from "react";
import { PALETTE } from "../../styles/palette";

const StyledInput = styled.input<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${PALETTE.WHITE};
  border: 3px solid ${PALETTE.LIGHT_GRAY_010};
  border-radius: 20px;
  padding: 4px 20px;
  font-size: 1rem;

  ::placeholder {
    font-family: "SBAggroM";
    color: ${PALETTE.DARK_GRAY_04};
  }

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    border-radius: 10px;
    border-width: 2px;
  }
`;

type InputProps = {
  disabled?: boolean;
  isSubmit: boolean;
  width?: string;
  height?: string;
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled = false,
      isSubmit,
      width = "100%",
      height = "100%",
      placeholder = "",
    }: InputProps,
    ref
  ) => (
    <StyledInput
      ref={ref}
      disabled={disabled}
      width={width}
      height={height}
      placeholder={placeholder}
      value={isSubmit ? "" : undefined}
    />
  )
);
