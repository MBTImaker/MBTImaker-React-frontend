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
  width?: string;
  height?: string;
  placeholder: string;
  handleDescription: (contents: string) => void;
};

export const Textarea = ({
  disabled = false,
  width = "100%",
  height = "100%",
  placeholder = "",
  handleDescription,
}: TextareaProps) => (
  <StyledTextarea
    disabled={disabled}
    width={width}
    height={height}
    placeholder={placeholder}
    onChange={(event) => {
      handleDescription(event.target.value);
    }}
  />
);
