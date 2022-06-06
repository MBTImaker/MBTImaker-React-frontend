import React from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { SocialMedia } from "../../types";

const StyledIconShare = styled.li<{ image: string }>`
  content: url(${(props) => props.image});
  object-fit: contain;
`;

type IconShareProps = {
  media: SocialMedia;
};

export const IconShare = ({ media }: IconShareProps) => {
  const { image } = useImage(undefined, media);

  return <StyledIconShare image={image} />;
};
