import React from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

const StyledSmallCard = styled.li`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${PALETTE.WHITE};
  border: 2px solid ${PALETTE.LIGHT_GRAY_040};
  border-radius: 16px;
`;

const StyledTitle = styled.h6`
  font-size: 1.5rem;
  color: ${PALETTE.BLACK_030};
`;

const StyledImage = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: contain;
  border-radius: 16px;
`;

const StyledMovie = styled.span`
  color: ${PALETTE.DARK_GRAY_03};
`;

const StyledCharacter = styled.span`
  font-size: 1.625rem;
  color: ${PALETTE.RED_020};
`;

type SmallCardProps = {
  title: string;
  image: string;
  movie: string;
  character: string;
};

export const SmallCard = ({
  title,
  image,
  movie,
  character,
}: SmallCardProps) => {
  return (
    <StyledSmallCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage image={image} />
      <StyledMovie>{movie}</StyledMovie>
      <StyledCharacter>{character}</StyledCharacter>
    </StyledSmallCard>
  );
};