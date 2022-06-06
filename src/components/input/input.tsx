import styled from "styled-components";
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
`;

type InputProps = {
  disabled?: boolean;
  width?: string;
  height?: string;
  placeholder: string;
};

export const Input = ({
  disabled = false,
  width = "100%",
  height = "100%",
  placeholder,
}: InputProps) => (
  <StyledInput
    disabled={disabled}
    width={width}
    height={height}
    placeholder={placeholder}
  />
);
