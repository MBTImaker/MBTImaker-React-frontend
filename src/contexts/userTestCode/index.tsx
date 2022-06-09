import axios, { AxiosResponse } from "axios";
import { createContext, useCallback, useState } from "react";
import { Answer, Children, TestCode, TestResult } from "../../types";

const userTestResultDefaultValue: TestResult = {
  status: 200,
  code: "T101",
  message: "테스트 분석 성공",
  data: {
    mbtiResult: {
      mbti: "ENTJ",
      character: {
        movieName: {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/movie-title/movie-title/title_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4.png",
        },
        name: {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/movie-character/movie-character/character_ENTJ_%EB%AF%B8%EB%9E%80%EB%8B%A4.png",
        },
        image: {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/character-Big-Image/character-Big-Image/big_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4_%EB%AF%B8%EB%9E%80%EB%8B%A4.png",
        },
        representativePersonality: "통솔력 있는<br>성격을 가지고 있어요.",
        personalities: [
          "조직적, 체계적이에요.",
          "완벽을 추구해요.",
          "상상을 많이 하는 편이에요.",
          "호기심이 많아요.",
          "지적 욕구가 강해요.",
          "감정표현이 솔직한 편이에요.",
          "가끔 엉뚱할 때가 있어요.",
          "지적 능력 향상에 노력하는 편이에요.",
          "자기 주관이 확고해요.",
          "미래에 대한 꿈이 큰 편이에요.",
        ],
      },
      bestChemistry: {
        movieName: "이미테이션 게임",
        characterName: "앨런 튜링",
        imageUrl:
          "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/character-Small-Image/character-Small-Image/small_INTP_%EC%9D%B4%EB%AF%B8%ED%85%8C%EC%9D%B4%EC%85%98+%EA%B2%8C%EC%9E%84_%EC%95%A8%EB%9F%B0+%ED%8A%9C%EB%A7%81.png",
      },
      worstChemistry: {
        movieName: "해리포터",
        characterName: "헤르미온느",
        imageUrl:
          "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/character-Small-Image/character-Small-Image/small_ESTJ_%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0_%ED%97%A4%EB%A5%B4%EB%AF%B8%EC%98%A8%EB%8A%90.png",
      },
      recommendedMovies: [
        {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/movie-Image/movie-Image/movie_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4_%EB%AF%B8%EB%9E%80%EB%8B%A4(1).png",
        },
        {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/movie-Image/movie-Image/movie_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4_%EB%AF%B8%EB%9E%80%EB%8B%A4(2).png",
        },
        {
          url: "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/movie-Image/movie-Image/movie_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4_%EB%AF%B8%EB%9E%80%EB%8B%A4(3).png",
        },
      ],
    },
    sameType: {
      movieName: "악마는 프라다를 입는다",
      characterName: "미란다",
      imageUrl:
        "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/character-Small-Image/character-Small-Image/small_ENTJ_%EC%95%85%EB%A7%88%EB%8A%94+%ED%94%84%EB%9D%BC%EB%8B%A4%EB%A5%BC+%EC%9E%85%EB%8A%94%EB%8B%A4_%EB%AF%B8%EB%9E%80%EB%8B%A4.png",
      percentage: 1,
    },
    mostPopularType: {
      movieName: "이미테이션 게임",
      characterName: "앨런 튜링",
      imageUrl:
        "https://mbti-image-server.s3.ap-northeast-2.amazonaws.com/character-Small-Image/character-Small-Image/small_INTP_%EC%9D%B4%EB%AF%B8%ED%85%8C%EC%9D%B4%EC%85%98+%EA%B2%8C%EC%9E%84_%EC%95%A8%EB%9F%B0+%ED%8A%9C%EB%A7%81.png",
      percentage: 41,
    },
    kakao_JAVASCRIPT_KEY: "5b31acb4c361a42e64bc467dba869278",
  },
};

export const UserTestCode = createContext({
  userTestCode: {},
  userTestResult: userTestResultDefaultValue,
  handleTestCode: (id: number, userSelected: Answer) => {},
  getUserTestResult: (testCode: TestCode) => {},
});

type UserTestCodeProviderProps = {
  children: Children;
};

const UserTestCodeProvider = ({ children }: UserTestCodeProviderProps) => {
  const [userTestCode, setUserTestCode] = useState<TestCode>({});
  const [userTestResult, setUserTestResult] = useState<TestResult>(
    userTestResultDefaultValue
  );

  const handleTestCode = useCallback((id: number, userSelected: Answer) => {
    const userSelectedNumber = userSelected === "a" ? 0 : 1;
    setUserTestCode((userTestCode) => ({
      ...userTestCode,
      [id]: userSelectedNumber,
    }));
  }, []);

  const setUserTestCodeFitInServer = () => {
    let result: String = Object.keys(userTestCode).reduce((res, key) => {
      return res + userTestCode[Number(key)];
    }, "");
    return result.replace(/(.{3})/g, "$1-").replace(/-$/, "");
  };

  const getUserTestResult = async (testCode: TestCode) => {
    try {
      const response: AxiosResponse<TestResult> = await axios({
        method: "post",
        url: `https://mbti-test.herokuapp.com/test`,
        data: {
          testCode: setUserTestCodeFitInServer(),
        },
      });

      setUserTestResult(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <UserTestCode.Provider
      value={{
        userTestCode,
        userTestResult,
        handleTestCode,
        getUserTestResult,
      }}
    >
      {children}
    </UserTestCode.Provider>
  );
};

export default UserTestCodeProvider;
