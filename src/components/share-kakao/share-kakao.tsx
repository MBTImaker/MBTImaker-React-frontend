import { useEffect } from "react";
import { IconShare } from "../icon-share";

type ShareKaKaoProps = {
  url?: string;
};

export const ShareKaKao = ({
  url = "https://christmas-movie.netlify.app",
}: ShareKaKaoProps) => {
  useEffect(() => {
    initKakao();
  }, []);

  const initKakao = () => {
    if ((window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
      }
    }
  };

  const shareKakao = () => {
    try {
      (window as any).Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "나의 영화 캐릭터 유형은? ",
          description: "나의 MBTI 유형과 어울리는 캐릭터와 영화를 알아보세요!",
          imageUrl:
            "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/og_image.png",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        // 카카오톡 미설치 시 카카오톡 설치
        installTalk: true,
      });
    } catch (e) {
      alert("카카오톡이 설치되어 있지 않습니다.");
      console.error(`카카오톡 미설치 오류: ${e}`);
    }
  };

  return <IconShare media="kakaotalk" handleClick={shareKakao} />;
};
