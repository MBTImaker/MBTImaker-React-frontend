import styled from "styled-components";
import { forwardRef } from "react";
import { PALETTE } from "../../styles/palette";

type InputProps = {
  disabled?: boolean;
  isSubmit: boolean;
  width?: string;
  height?: string;
  placeholder: string;
};

/**
 * Used to receive short words.
 * 짧은 단어를 입력받을 때 사용됩니다.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      /**
       * 활성화 여부
       */
      disabled = false,
      /**
       * 컴포넌트에 저장된 값이 사용되었는지 여부
       */
      isSubmit,
      /**
       * 요소의 너비
       */
      width = "100%",
      /**
       * 요소의 높이
       */
      height = "100%",
      /**
       * 입력된 값이 없을 때 보이는 문구
       */
      placeholder = "",
    }: InputProps,
    /**
     * 저장된 값을 알아볼 때 사용
     */
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

/////////////////////////////
/// Styles
/////////////////////////////

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
