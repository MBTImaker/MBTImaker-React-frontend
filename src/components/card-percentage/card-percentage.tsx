/**
 * url: /result
 * purpose: It shows the ratio.
 *          나와 같은 유형과 가장 많이 나온 유형의 비율을 보여줍니다.
 */

import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { CardPercentageInfo } from "../../types";
import { PieChart } from "react-minimal-pie-chart";

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
    padding: 40px 42px;
  }
`;

const StyledMovieName = styled.span``;

const StyledCharacterName = styled.span`
  font-size: 1.5rem;
`;

const StyledImageContainer = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    flex-direction: column;
  }
`;

const StyledImage = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: cover;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transform: translate(0, -235%);
`;

const StyledNumber = styled.span`
  font-size: 2rem;
  color: ${PALETTE.BLACK_010};
`;

const StyledPercentage = styled.span`
  font-size: 1.5rem;
  color: ${PALETTE.BLACK_010};
`;

const StyledExplanation = styled.span`
  font-size: 0.875rem;
  color: ${PALETTE.BLACK_010};
`;

type CardPercentageProps = CardPercentageInfo & { explanation: string };

export const CardPercentage = ({
  explanation,
  movieName,
  characterName,
  imageUrl,
  percentage,
}: CardPercentageProps) => (
  <StyledCardPercentage>
    <StyledMovieName>{movieName}</StyledMovieName>
    <StyledCharacterName>{characterName}</StyledCharacterName>
    <StyledImageContainer>
      <StyledImage image="" />

      <div>
        <PieChart
          data={[{ title: "", value: percentage, color: PALETTE.GREEN }]}
          animate={true}
          animationEasing="ease-out"
          lineWidth={15}
          startAngle={-90}
          totalValue={100}
          rounded
          background={PALETTE.LIGHT_GRAY_040}
        />

        <StyledTextContainer>
          <StyledNumber>
            {percentage}
            <StyledPercentage>%</StyledPercentage>
          </StyledNumber>
          <StyledExplanation>{explanation}</StyledExplanation>
        </StyledTextContainer>
      </div>
    </StyledImageContainer>
  </StyledCardPercentage>
);
