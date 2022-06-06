import React from "react";
import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { CardPercentageInfo } from "../../types";

const StyledCardPercentage = styled.li`
  width: 100%;
  height: 100%;
  padding: 40px 60px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${PALETTE.WHITE};
  border: 2px solid ${PALETTE.LIGHT_GRAY_040};
  border-radius: 16px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 24px 20px;
  }
`;

const StyledMovieName = styled.span``;

const StyledCharacterName = styled.span`
  font-size: 1.5rem;
`;

const StyledImageContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledImage = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: cover;
`;

export const CardPercentage = ({
  movieName,
  characterName,
  imageUrl,
  percentage,
}: CardPercentageInfo) => (
  <StyledCardPercentage>
    <StyledMovieName>{movieName}</StyledMovieName>
    <StyledCharacterName>{characterName}</StyledCharacterName>
    <StyledImageContainer>
      <StyledImage image="" />
    </StyledImageContainer>
  </StyledCardPercentage>
);
