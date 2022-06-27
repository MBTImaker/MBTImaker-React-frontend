import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { Character } from "../../types";
import { PieChart } from "react-minimal-pie-chart";

type CardPercentageProps = Character & {
  percentage: number;
  explanation: string;
};

/**
 * Show the ratio.
 * 나와 같은 유형과 가장 많이 나온 유형의 비율을 보여줍니다.
 */
export const CardPercentage = ({
  explanation,
  movie,
  character,
  image,
  percentage,
}: CardPercentageProps) => (
  <StyledCardPercentage>
    <StyledMovieName>{movie}</StyledMovieName>
    <StyledCharacterName>{character}</StyledCharacterName>
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

/////////////////////////////
/// Styles
/////////////////////////////

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
