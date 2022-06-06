import { useContext } from "react";
import styled from "styled-components";
import { UserTestCode } from "../../contexts/userTestCode";
import { PALETTE } from "../../styles/palette";
import { Bar } from "../../components/bar";
import { DottedLine } from "../../components/dotted-line";
import { SmallCard } from "../../components/small-card";
import { BlockInner } from "../../components/block-inner";
import ResultComment from "../../assets/images/text/result-comment.png";
import Band from "../../assets/images/share/band.png";
import Facebook from "../../assets/images/share/facebook.png";
import Instagram from "../../assets/images/share/instagram.png";
import Kakaotalk from "../../assets/images/share/kakotalk.png";
import Twitter from "../../assets/images/share/Twitter.png";
import { SOCIAL_MEIDA } from "../../constants";
import { Link } from "react-router-dom";

const StyledBox = styled.div`
  width: 716px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 6px solid ${PALETTE.DARK_GREEN};
  background: ${PALETTE.WHITE};
  gap: 22px;
  padding: 60px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
    padding-top: 6.59%;
    border-radius: 20px;
    border-width: 2px;
  }
`;

const StyledCharacterContainer = styled.section`
  width: 100%;
  padding: 50px 60px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledComment = styled.img`
  width: 80%;
  content: url(${ResultComment});
  object-fit: contain;
`;

const StyledMovie = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: contain;
`;

const StyledName = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: contain;
`;

const StyledCharacter = styled.img<{ image: string }>`
  width: 100%;
  content: url(${(props) => props.image});
  object-fit: contain;
  border: 4px solid ${PALETTE.DARK_GREEN};
  border-radius: 16px;
`;

const StyledRepresentativePersonality = styled.h3`
  font-size: 2rem;
  text-align: center;
  white-space: pre;
`;

const StyledBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledChemistryContainer = styled.section`
  width: 100%;
  padding: 66px 60px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledShare = styled.h4`
  font-size: 1.75rem;
`;

const StyledFlexRow = styled.ul<{ gap: number }>`
  display: flex;
  gap: ${(props) => props.gap}px;
`;

const StyledShareIcon = styled.li<{ image: string }>`
  content: url(${(props) => props.image});
  object-fit: contain;
`;

const StyledRecommendedMovie = styled.li<{ image: string }>`
  border: 2px solid ${PALETTE.LIGHT_GRAY_040};
  border-radius: 16px;
`;

const StyledMoveToHome = styled.div`
  font-family: "SBAggroB", sans-serif;
  width: 380px;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PALETTE.RED_GRADIENT};
  border: 4px solid ${PALETTE.RED_010};
  box-shadow: 0px 8px 0px ${PALETTE.DARK_RED};
  border-radius: 80px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 74.3%;
    height: 10.76%;
    font-size: 0.875rem;
    line-height: 30px;
  }
`;

const StyledMoveToHomeSpan = styled.span`
  color: ${PALETTE.WHITE};
  font-size: 1.375rem;
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 0.875rem;
    line-height: 20px;
  }
`;

const Result = () => {
  const { userTestResult } = useContext(UserTestCode);
  const data = userTestResult.data;

  return (
    <StyledBox>
      <BlockInner>
        <StyledCharacterContainer>
          <StyledComment />
          {/* <StyledMovie image={data.mbtiResult.character.movieName.url} />
          <StyledName image={data.mbtiResult.character.name.url} />
          <StyledCharacter image={data.mbtiResult.character.image.url} /> */}
          <StyledRepresentativePersonality>
            {data.mbtiResult.character.representativePersonality}
          </StyledRepresentativePersonality>

          <StyledBarContainer>
            {data.mbtiResult.character.personalities.map((personality) => (
              <Bar key={personality} content={personality} />
            ))}
          </StyledBarContainer>
        </StyledCharacterContainer>

        <DottedLine />

        <StyledChemistryContainer>
          <SmallCard
            title="환상의 케미"
            image={data.mbtiResult.bestChemistry.imageUrl}
            movie={data.mbtiResult.bestChemistry.movieName}
            character={data.mbtiResult.bestChemistry.characterName}
          />
          <SmallCard
            title="환장의 케미"
            image={data.mbtiResult.worstChemistry.imageUrl}
            movie={data.mbtiResult.worstChemistry.movieName}
            character={data.mbtiResult.worstChemistry.characterName}
          />
        </StyledChemistryContainer>
      </BlockInner>

      <BlockInner>
        <StyledShare>결과 공유하기</StyledShare>
        <StyledFlexRow gap={26}>
          {SOCIAL_MEIDA.map((media) => (
            <StyledShareIcon image={media} />
          ))}
        </StyledFlexRow>
      </BlockInner>

      <BlockInner>
        <StyledShare>추천 영화</StyledShare>
        <StyledFlexRow gap={20}>
          {data.mbtiResult.recommendedMovies.map((recommendedMovie) => (
            <StyledRecommendedMovie image={recommendedMovie.url} />
          ))}
        </StyledFlexRow>
      </BlockInner>

      <Link to="/">
        <StyledMoveToHome>
          <StyledMoveToHomeSpan>테스트 다시하기</StyledMoveToHomeSpan>
        </StyledMoveToHome>
      </Link>
    </StyledBox>
  );
};

export default Result;
