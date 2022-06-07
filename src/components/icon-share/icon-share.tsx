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
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
        break;

      default:
        handleClick();
    }
  };

  return <StyledIconShare image={image} onClick={onClick} />;
};
