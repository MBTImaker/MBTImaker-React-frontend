/**
 * url: /result
 * component: modal
 * purpose: It used to receive long sentences.
 *          긴 문장을 입력받을 때 사용됩니다.
 */

import { useRef } from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

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

type TextareaProps = {
  disabled?: boolean;
  // onSave: boolean;
  width?: string;
  height?: string;
  placeholder: string;
  handleDescription: (contents: string) => void;
};

export const Textarea = ({
  disabled = false,
  // onSave = false,
  width = "100%",
  height = "100%",
  placeholder = "",
  handleDescription,
}: TextareaProps) => {
  const textareaRef = useRef(null);

  // useEffect(() => {}, [onSave]);

  return (
    <StyledTextarea
      ref={textareaRef}
      disabled={disabled}
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={(e) => {
        console.log((textareaRef.current as any).value);
      }}
    />
  );
}; // submit되면 지워지는 거
// 비밀번호 숫자만. 이모티콘 안돼. 글자 수 세는 거.
