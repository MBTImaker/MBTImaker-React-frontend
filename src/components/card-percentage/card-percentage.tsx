import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import { CardPercentageInfo } from "../../types";
import { PieChart } from "react-minimal-pie-chart";

type CardPercentageProps = CardPercentageInfo & { explanation: string };

/**
 * Show the ratio.
 * 나와 같은 유형과 가장 많이 나온 유형의 비율을 보여줍니다.
 */
export const CardPercentage = ({
  /**
   * 비율의 나타내는 의미를 알려주는 글자
   */
  explanation,
  /**
   * 캐릭터가 나온 영화 이름
   */
  movieName,
  /**
   * 영화에 나온 캐릭터 이름
   */
  characterName,
  /**
   * 캐릭터의 사진 (추가 예정)
   */
  imageUrl,
  /**
   * 전체 응답 결과 대비 사용자와 관련되 응답의 비율
   */
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
