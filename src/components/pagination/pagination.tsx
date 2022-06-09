import styled from "styled-components";
import { PALETTE } from "../../styles/palette";
import LeftArrowBlocked from "../../assets/images/arrow/left-arrow-blocked.svg";
import RightArrowBlocked from "../../assets/images/arrow/right-arrow-blocked.svg";
import LeftArrow from "../../assets/images/arrow/left-arrow.svg";
import RightArrow from "../../assets/images/arrow/right-arrow.svg";
import { useEffect } from "react";

const BUTTON_SIZE = "32px";

const StyledUl = styled.ul`
  display: flex;
  padding: 0 16px;
`;

const StyledNumber = styled.button<{ isCurrentPageIndex: boolean }>`
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  font-size: 1rem;
  color: ${(props) =>
    props.isCurrentPageIndex ? PALETTE.RED_020 : PALETTE.NAVY};
`;

const StyledLeftArrow = styled.button<{ isBlocked: boolean }>`
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  background-size: contain;
  background-image: url(${(props) =>
    props.isBlocked ? LeftArrowBlocked : LeftArrow});
`;

const StyledRightArrow = styled.button<{ isBlocked: boolean }>`
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  background-size: contain;
  background-image: url(${(props) =>
    props.isBlocked ? RightArrowBlocked : RightArrow});
`;

type PaginationProps = {
  currentPageIndex: number;
  commentsPerPage: number;
  totalCommentLength: number;
  handleCurrentPageIndex: (index: number) => void;
  handleCommnetsFromServer?: (page: number, size: number) => void;
};

export const Pagination = ({
  currentPageIndex,
  commentsPerPage,
  totalCommentLength,
  handleCurrentPageIndex,
  handleCommnetsFromServer,
}: PaginationProps) => {
  const pageNumbers: number[] = [];

  useEffect(() => {
    if (handleCommnetsFromServer)
      handleCommnetsFromServer(currentPageIndex, commentsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPageIndex, commentsPerPage]);

  const getFirstIndex = () => {
    if (currentPageIndex % 3 === 0) return currentPageIndex - 2;
    else if (currentPageIndex % 3 === 1) return currentPageIndex;
    else return currentPageIndex - 1;
  };

  const setPageNumbers = () => {
    let index = firstIndex;
    while (index < firstIndex + 3) {
      pageNumbers.push(index);
      index += 1;
      if (index > totalCommentLength) break;
    }
  };

  const firstIndex = getFirstIndex();
  setPageNumbers();

  const onPageIndexClick = (index: number) => {
    handleCurrentPageIndex(index);
  };

  const onLeftArrowClick = () => {
    if (currentPageIndex > 1) handleCurrentPageIndex(currentPageIndex - 1);
  };

  const onRightArrowClick = () => {
    if (currentPageIndex < totalCommentLength)
      handleCurrentPageIndex(currentPageIndex + 1);
  };

  return (
    <nav>
      <StyledUl>
        <StyledLeftArrow
          isBlocked={currentPageIndex === 1}
          onClick={onLeftArrowClick}
        />
        {pageNumbers.map((number) => (
          <StyledNumber
            key={number}
            isCurrentPageIndex={currentPageIndex === number}
            onClick={() => {
              onPageIndexClick(number);
            }}
          >
            {number}
          </StyledNumber>
        ))}
        <StyledRightArrow
          isBlocked={currentPageIndex === totalCommentLength}
          onClick={onRightArrowClick}
        />
      </StyledUl>
    </nav>
  );
};
