import styled from "styled-components";
import useImage from "../../hooks/useImage";
import { SocialMedia } from "../../types";

const StyledIconShare = styled.button<{ image: string }>`
  width: 64px;
  height: 64px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`;

type IconShareProps = {
  handleClick?: () => void;
  media: SocialMedia;
  url?: string;
};

export const IconShare = ({
  handleClick = () => {},
  media,
  url = "https://christmas-movie.netlify.app",
}: IconShareProps) => {
  const { image } = useImage(undefined, media);

  const onClick = () => {
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
      default:
        handleClick();
    }
  };

  return <StyledIconShare image={image} onClick={onClick} />;
};
