import useComment from "../../hooks/useComment";
import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PALETTE } from "../../styles/palette";
import { UserTestCode } from "../../contexts/userTestCode";
import { Bar } from "../../components/bar";
import { BlockInner } from "../../components/block-inner";
import { LineDotted } from "../../components/line-dotted";
import { Input } from "../../components/input";
import { CardChemistry } from "../../components/card-chemistry";
import { CardPercentage } from "../../components/card-percentage";
import { ShareKaKao } from "../../components/share-kakao";
import { ShareIcon } from "../../components/share-icon";
import { Pagination } from "../../components/pagination";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { ReplySaved } from "../../components/reply-saved";
import ResultComment from "../../assets/images/text/result-comment.png";
import { QUESTION_LIST } from "../../constants";

/**
 * Test results.
 * 테스트 결과를 보여줍니다.
 */
const Result = () => {
  const currentCommentsIndex = 1;
  const commentsPerPage = 3;
  const navigate = useNavigate();
  const { loading, userTestCode, userTestResult } = useContext(UserTestCode);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [newComments, setNewComments] = useState<string>();
  const [isWriteCommentClick, setIsWriteCommentClick] = useState(false);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const data = userTestResult.data;
  const { savedComments, totalComments, getCommentsFromServer, writeComment } =
    useComment({
      page: 1,
      size: commentsPerPage,
    });

  const onWriteButtonClick = () => {
    if ((nameRef.current as any).value === "") {
      alert("닉네임을 입력해 주세요.");
      return;
    }

    if (newComments == null || newComments === "") {
      alert("작성된 댓글이 없어요. 확인해 주세요.");
      return;
    }

    if ((passwordRef.current as any).value === "") {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    setIsWriteCommentClick(true);

    writeComment({
      content: newComments,
      mbti: data.mbtiResult.mbti,
      name: (nameRef.current as any).value,
      password: (passwordRef.current as any).value,
      page: 1,
      size: commentsPerPage,
    }).finally(() => {
      setIsWriteCommentClick(false);
    });
  };

  const onCommentsIndexChange = (page: number, size: number) => {
    getCommentsFromServer({ page, size });
  };

  useEffect(() => {
    if (!loading && Object.keys(userTestCode).length !== QUESTION_LIST.length) {
      alert("12개의 모든 문항에 답하시면 결과를 보여드릴게요.");
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, userTestCode]);

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
          <StyledBlockInnerPadding>
            <StyledBlockInnerTitle>나와 같은 유형</StyledBlockInnerTitle>
            <CardPercentage
              explanation="나와 같은 유형"
              movie={data.sameType.movieName}
              character={data.sameType.characterName}
              image={data.sameType.imageUrl}
              percentage={data.sameType.percentage}
            />
          </StyledBlockInnerPadding>
        </BlockInner>
        <BlockInner>
          <StyledBlockInnerPadding>
            <StyledBlockInnerTitle>가장 많이 나온 유형</StyledBlockInnerTitle>
            <CardPercentage
              explanation="현재 1위 유형"
              movie={data.mostPopularType.movieName}
              character={data.mostPopularType.characterName}
              image={data.mostPopularType.imageUrl}
              percentage={data.mostPopularType.percentage}
            />
          </StyledBlockInnerPadding>
        </BlockInner>

        <BlockInner>
          <StyledBlockInnerPadding>
            <StyledBlockInnerTitle>결과 공유하기</StyledBlockInnerTitle>
            <StyledFlexRow gap={0}>
              <ShareKaKao />
              <ShareIcon media={"facebook"} />
              <ShareIcon media={"twitter"} />
              <ShareIcon media={"band"} />
              <ShareIcon media={"instagram"} />
            </StyledFlexRow>
          </StyledBlockInnerPadding>
        </BlockInner>

        <BlockInner>
          <StyledBlockInnerTitle>추천 영화</StyledBlockInnerTitle>
          <StyledFlexRow gap={20}>
            {data.mbtiResult.recommendedMovies.map((recommendedMovie) => (
              <StyledRecommendedMovie image={recommendedMovie.url} /> // TODO: add key
            ))}
          </StyledFlexRow>
        </BlockInner>

        <Link to="/">
          <Button
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
              isSubmit={isWriteCommentClick}
              height="52px"
              placeholder="닉네임을 입력하세요"
            />
            <Textarea
              height="216px"
              isSubmit={isWriteCommentClick}
              placeholder="댓글을 입력하세요 (이모티콘 사용 불가)"
              handleDescription={setNewComments}
            ></Textarea>
            <StyledUserCommentWriteContainer>
              <Input
                ref={passwordRef}
                isSubmit={isWriteCommentClick}
                width="100%"
                height="52px"
                placeholder="비밀번호를 입력하세요 (숫자만 가능)"
              />
              <Button
                width="114px"
                height="52px"
                heightMobile="40px"
                fontSizeMobile="0.875rem"
                content="댓글 작성"
                onClick={onWriteButtonClick}
              />
            </StyledUserCommentWriteContainer>
          </StyledUserCommentContainer>

          <LineDotted />

          <StyledUserCommentContainer>
            {savedComments.map((comment) => (
              <ReplySaved
                key={comment.id}
                id={comment.id}
                createdDate={comment.createdDate}
                name={comment.name}
                mbti={comment.mbti}
                content={comment.content}
                page={currentCommentsIndex}
                size={commentsPerPage}
              />
            ))}

            <Pagination
              currentPageIndex={currentPageIndex}
              commentsPerPage={commentsPerPage}
              totalCommentLength={totalComments || 0}
              handleCurrentPageIndex={setCurrentPageIndex}
              handleCommnetsFromServer={onCommentsIndexChange}
            />
          </StyledUserCommentContainer>
        </BlockInner>
      </StyledBox>
    </StyledBoxContainer>
  );
};

export default Result;

/////////////////////////////
/// Styles
/////////////////////////////

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

const StyledBlockInnerPadding = styled.section`
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

const StyledBlockInnerTitle = styled.h4`
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
