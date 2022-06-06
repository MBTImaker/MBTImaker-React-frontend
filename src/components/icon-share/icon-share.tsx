import React from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { SocialMedia } from "../../types";

const StyledIconShare = styled.button<{ image: string }>`
  width: 64px;
  height: 64px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`;

type IconShareProps = {
  media: SocialMedia;
};

export const IconShare = ({ media }: IconShareProps) => {
  const { image } = useImage(undefined, media);

  return <StyledIconShare image={image} />;
};
