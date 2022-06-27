import { useCallback } from "react";
import { useEffect } from "react";
import { DISTRIBUTED_URL } from "../../constants";
import { ShareIcon } from "../share-icon";

type ShareKaKaoProps = {
  url?: string;
};

/**
 * It is the KakaoTalk sharing button.
 * 카카오톡 공유 버튼입니다.
 */
export const ShareKaKao = ({ url = DISTRIBUTED_URL }: ShareKaKaoProps) => {
  const KAKAO_KEY = process.env.REACT_APP_KAKAO_TOKEN;

  const initKakao = () => {
    if (KAKAO_KEY && (window as any).Kakao) {
      const kakao = (window as any).Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(KAKAO_KEY);
      }
    }
  };

  useEffect(() => {
    initKakao();
  }, []);

  const shareKakao = useCallback(() => {
    try {
      if (!KAKAO_KEY) {
        alert(
          "현재 카카오톡 공유를 할 수 없습니다. 관리자에게 문의 부탁드립니다."
        );
        return;
      }

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
  }, [url, KAKAO_KEY]);

  return <ShareIcon media="kakaotalk" handleClick={shareKakao} />;
};
