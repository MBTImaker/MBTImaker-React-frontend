/**
 * url: /result
 * purpose: It shows camestries.
 *          환상의 케미와 환장의 케미를 보여줍니다.
 */

import styled from "styled-components";
import { PALETTE } from "../../styles/palette";

const StyledCardChemistry = styled.li`
  width: 100%;
  height: 100%;
  padding: 40px;
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

const StyledTitle = styled.h6`
  font-size: 1.5rem;
  color: ${PALETTE.BLACK_030};

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
  }
`;

const StyledImage = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: contain;
  border-radius: 16px;
`;

const StyledMovie = styled.span`
  color: ${PALETTE.DARK_GRAY_03};

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.75rem;
  }
`;

const StyledCharacter = styled.span`
  font-size: 1.625rem;
  color: ${PALETTE.RED_020};

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
  }
`;

type CardChemistryProps = {
  title: string;
  image: string;
  movie: string;
  character: string;
};

export const CardChemistry = ({
  title,
  image,
  movie,
  character,
}: CardChemistryProps) => {
  return (
    <StyledCardChemistry>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage image={image} />
      <StyledMovie>{movie}</StyledMovie>
      <StyledCharacter>{character}</StyledCharacter>
    </StyledCardChemistry>
  );
};
