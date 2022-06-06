import React, { useContext } from "react";
import styled from "styled-components";
import { UserTestCode } from "../../contexts/userTestCode";
import { PALETTE } from "../../styles/palette";
import ResultComment from "../../assets/images/text/result-comment.png";
import { Bar } from "../../components/bar";
import { DottedLine } from "../../components/dotted-line";
import { SmallCard } from "../../components/small-card";

const StyledBox = styled.div`
  width: 716px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  border: 6px solid ${PALETTE.DARK_GREEN};
  background: ${PALETTE.DARK_WHITE};
  gap: 22px;
  padding: 60px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
    padding-top: 6.59%;
    border-radius: 20px;
    border-width: 2px;
  }
`;

const StyledInnerBox = styled.div`
  width: 100%;
  background: ${PALETTE.LIGHT_GRAY_020};
  border: 4px solid ${PALETTE.LIGHT_GRAY_030};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Result = () => {
  const { userTestResult } = useContext(UserTestCode);
  const data = userTestResult.data;

  return (
    <StyledBox>
      <StyledInnerBox>
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
      </StyledInnerBox>
    </StyledBox>
  );
};

export default Result;
