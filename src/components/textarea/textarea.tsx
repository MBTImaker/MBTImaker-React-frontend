import styled from "styled-components";
import { useRef } from "react";
import { PALETTE } from "../../styles/palette";

// 비밀번호 숫자만. 이모티콘 안돼. 글자 수 세는 거.
type TextareaProps = {
  disabled?: boolean;
  isSubmit: boolean;
  width?: string;
  height?: string;
  placeholder: string;
  value?: string;
  handleDescription: (contents: string) => void;
};

/**
 * Used to receive long sentences.
 * 긴 문장을 입력받을 때 사용됩니다.
 */
export const Textarea = ({
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
  placeholder,
  /**
   * 입력된 값을 state에 저장하는 함수
   */
  handleDescription,
}: TextareaProps) => {
  const textareaRef = useRef(null);
  return (
    <StyledTextarea
      ref={textareaRef}
      disabled={disabled}
      width={width}
      height={height}
      placeholder={placeholder}
      value={isSubmit ? "" : undefined}
      onMouseOut={() => {
        handleDescription((textareaRef.current as any).value);
      }}
    />
  );
};

/////////////////////////////
/// Styles
/////////////////////////////

const StyledTextarea = styled.textarea<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${PALETTE.WHITE};
  border: 3px solid ${PALETTE.LIGHT_GRAY_010};
  border-radius: 20px;
  padding: 18px 20px;
  font-size: 1rem;
  resize: none;

  ::placeholder {
    font-family: "SBAggroM";
    color: ${PALETTE.DARK_GRAY_04};
  }

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    border-radius: 10px;
    border-width: 2px;
  }
`;
