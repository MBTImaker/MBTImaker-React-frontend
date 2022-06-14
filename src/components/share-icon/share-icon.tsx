import { useCallback } from "react";
import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { SocialMedia } from "../../types";

type ShareIconProps = {
  handleClick?: () => void;
  media: SocialMedia;
  url?: string;
};

/**
 * Display a different icon for each SNS.
 * sns별로 공유 아이콘을 다르게 보여줍니다.
 */

export const ShareIcon = ({
  media,
  url = "https://christmas-movie.netlify.app",
  handleClick = () => {},
}: ShareIconProps) => {
  const { image } = useImage(undefined, media);

  const onClick = useCallback(() => {
    switch (media) {
      case "facebook":
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=나의 영화 캐릭터 유형은? &url=${url}`
        );
        break;
      case "band":
        window.open(
          `http://band.us/plugin/share?body=나의 영화 캐릭터 유형은? 여기서 확인 ➡️ ${url}&route=${url}`,
          "share",
          "width=500, height=500"
        );
        break;
      case "instagram":
        alert("테스트 결과를 이미지로 다운로드했어요.");
        break;
      default:
        handleClick();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media, url]);

  return <StyledShareIcon image={image} onClick={onClick} />;
};

/////////////////////////////
/// Styles
/////////////////////////////

const StyledShareIcon = styled.button<{ image: string }>`
  width: 64px;
  height: 64px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`;
