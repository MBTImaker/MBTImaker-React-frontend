import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { UserTestCode } from "../../contexts/userTestCode";
import { PALETTE } from "../../styles/palette";
import { Bar } from "../../components/bar";
import { BlockInner } from "../../components/block-inner";
import { Link } from "react-router-dom";
import { LineDotted } from "../../components/line-dotted";
import ResultComment from "../../assets/images/text/result-comment.png";
import { Input } from "../../components/input";
import { ButtonRed } from "../../components/button-red";
import useComment from "../../hooks/useComment";
import { Reply } from "../../components/reply";
import { CardChemistry } from "../../components/card-chemistry";
import { CardPercentage } from "../../components/card-percentage";
import { ShareKaKao } from "../../components/share-kakao";
import { IconShare } from "../../components/icon-share";
import { Comment } from "../../types";
import { Pagination } from "../../components/pagination";
import { Textarea } from "../../components/textarea";

const StyledBoxContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 40px 20px;
  }
`;

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
    padding: 20px;
    border-radius: 10px;
    border-width: 2px;
  }
`;

const StyledCharacterContainer = styled.section`
  width: 100%;
  padding: 50px 60px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    width: 100%;
    padding: 41px 0;
  }
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

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 1.25rem;
  }
`;

const StyledBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledChemistryContainer = styled.section`
  width: 100%;
  padding: 48px 82px 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 41px 0;
  }
`;

const StyledShareContainer = styled.section`
  width: 100%;
  padding: 66px 60px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 20px 0;
  }
`;

const StyledShare = styled.h4`
  font-size: 1.75rem;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    font-size: 1.125rem;
  }
`;

const StyledFlexRow = styled.ul<{ gap: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap}px;
`;

const StyledRecommendedMovie = styled.li<{ image: string }>`
  border: 2px solid ${PALETTE.LIGHT_GRAY_040};
  border-radius: 16px;
`;

const StyledUserCommentContainer = styled.article`
  width: 100%;
  padding: 50px 60px 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    padding: 33px 0 35px;
    gap: 11px;
  }
`;

const StyledUserCommentWriteContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.media.sm}px) {
    flex-direction: column;
  }
`;

const Result = () => {
  const { userTestResult } = useContext(UserTestCode);
  const { savedComments, writeComment } = useComment();
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [newComments, setNewComments] = useState<string>();
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const passwordRef = useRef(null);
  const data = userTestResult.data;
  const commentsPerPage = 3;

  const indexOfLast = currentPageIndex * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const getCurrentPageComments = (savedComments: Comment[]) => {
    return savedComments.slice(indexOfFirst, indexOfLast);
  };

  return (
    <StyledBoxContainer>
      <StyledBox>
        <BlockInner>
          <StyledCharacterContainer>
            <StyledComment />
            <StyledMovie image={data.mbtiResult.character.movieName.url} />
            <StyledName image={data.mbtiResult.character.name.url} />
            <StyledCharacter image={data.mbtiResult.character.image.url} />
            <StyledRepresentativePersonality>
              {data.mbtiResult.character.representativePersonality}
            </StyledRepresentativePersonality>

            <StyledBarContainer>
              {data.mbtiResult.character.personalities.map((personality) => (
                <Bar key={personality} content={personality} />
              ))}
            </StyledBarContainer>
          </StyledCharacterContainer>

          <LineDotted />

          <StyledChemistryContainer>
            <CardChemistry
              title="환상의 케미"
              image={data.mbtiResult.bestChemistry.imageUrl}
              movie={data.mbtiResult.bestChemistry.movieName}
              character={data.mbtiResult.bestChemistry.characterName}
            />
            <CardChemistry
              title="환장의 케미"
              image={data.mbtiResult.worstChemistry.imageUrl}
              movie={data.mbtiResult.worstChemistry.movieName}
              character={data.mbtiResult.worstChemistry.characterName}
            />
          </StyledChemistryContainer>
        </BlockInner>

        <BlockInner>
          <StyledShareContainer>
            <StyledShare>나와 같은 유형</StyledShare>
            <CardPercentage
              explanation="나와 같은 유형"
              movieName={data.sameType.movieName}
              characterName={data.sameType.characterName}
              imageUrl={data.sameType.imageUrl}
              percentage={data.sameType.percentage}
            />
          </StyledShareContainer>
        </BlockInner>
        <BlockInner>
          <StyledShareContainer>
            <StyledShare>가장 많이 나온 유형</StyledShare>
            <CardPercentage
              explanation="현재 1위 유형"
              movieName={data.mostPopularType.movieName}
              characterName={data.mostPopularType.characterName}
              imageUrl={data.mostPopularType.imageUrl}
              percentage={data.mostPopularType.percentage}
            />
          </StyledShareContainer>
        </BlockInner>

        <BlockInner>
          <StyledShareContainer>
            <StyledShare>결과 공유하기</StyledShare>
            <StyledFlexRow gap={0}>
              <ShareKaKao />
              <IconShare media={"facebook"} />
              <IconShare media={"twitter"} />
              <IconShare media={"band"} />
              <IconShare media={"instagram"} />
            </StyledFlexRow>
          </StyledShareContainer>
        </BlockInner>

        <BlockInner>
          <StyledShare>추천 영화</StyledShare>
          <StyledFlexRow gap={20}>
            {data.mbtiResult.recommendedMovies.map((recommendedMovie) => (
              <StyledRecommendedMovie
                key={recommendedMovie.url}
                image={recommendedMovie.url}
              />
            ))}
          </StyledFlexRow>
        </BlockInner>

        <Link to="/">
          <ButtonRed
            width="380px"
            height="102px"
            widthMobile="84vw"
            heightMobile="61px"
            fontSize="1.375rem"
            content="테스트 다시하기"
          />
        </Link>

        <BlockInner>
          <StyledUserCommentContainer>
            <Input
              ref={nameRef}
              height="52px"
              placeholder="닉네임을 입력하세요"
            />
            <Textarea
              height="216px"
              placeholder="댓글을 입력하세요"
              handleDescription={setNewComments}
            ></Textarea>
            <StyledUserCommentWriteContainer>
              <Input
                ref={passwordRef}
                width="100%"
                height="52px"
                placeholder="비밀번호를 입력하세요"
              />
              <ButtonRed
                width="114px"
                height="52px"
                heightMobile="40px"
                fontSizeMobile="0.875rem"
                content="댓글 작성"
                onClick={() => {
                  writeComment(
                    (contentRef.current as any).value,
                    data.mbtiResult.mbti,
                    (nameRef.current as any).value,
                    (passwordRef.current as any).value
                  );
                }}
              />
            </StyledUserCommentWriteContainer>
          </StyledUserCommentContainer>

          <LineDotted />

          <StyledUserCommentContainer>
            {savedComments &&
              getCurrentPageComments(savedComments).map((comment) => (
                <Reply
                  key={comment.id}
                  id={comment.id}
                  createdDate={comment.createdDate}
                  name={comment.name}
                  mbti={comment.mbti}
                  content={comment.content}
                />
              ))}

            <Pagination
              currentPageIndex={currentPageIndex}
              commentsPerPage={commentsPerPage}
              totalCommentLength={savedComments?.length || 0}
              handleCurrentPageIndex={setCurrentPageIndex}
            />
          </StyledUserCommentContainer>
        </BlockInner>
      </StyledBox>
    </StyledBoxContainer>
  );
};

export default Result;
