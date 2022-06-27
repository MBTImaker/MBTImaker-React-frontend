import axios, { AxiosResponse } from "axios";
import { createContext, useCallback, useState } from "react";
import { Option, Children, TestCode, TestResult } from "../../types";

const userTestResultDefaultValue: TestResult = {
  status: 0,
  code: "",
  message: "테스트 결과 가져오는 중",
  data: {
    mbtiResult: {
      mbti: "",
      character: {
        movieName: {
          url: "",
        },
        name: {
          url: "",
        },
        image: {
          url: "",
        },
        representativePersonality: "",
        personalities: [],
      },
      bestChemistry: {
        movieName: "",
        characterName: "",
        imageUrl: "",
      },
      worstChemistry: {
        movieName: "",
        characterName: "",
        imageUrl: "",
      },
      recommendedMovies: [
        {
          url: "",
        },
        {
          url: "",
        },
        {
          url: "",
        },
      ],
    },
    sameType: {
      movieName: "",
      characterName: "",
      imageUrl: "",
      percentage: 0,
    },
    mostPopularType: {
      movieName: "",
      characterName: "",
      imageUrl: "",
      percentage: 0,
    },
    kakao_JAVASCRIPT_KEY: "",
  },
};

export const UserTestCode = createContext({
  loading: false,
  userTestCode: {},
  userTestResult: userTestResultDefaultValue,
  resetTestCode: () => {},
  handleUserChoices: (id: number, userSelected: Option) => {},
  getUserTestResult: () => {},
});

type UserTestCodeProviderProps = {
  children: Children;
};

const UserTestCodeProvider = ({ children }: UserTestCodeProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [userTestCode, setUserTestCode] = useState<TestCode>({});
  const [userTestResult, setUserTestResult] = useState<TestResult>(
    userTestResultDefaultValue
  );

  const resetTestCode = () => {
    setUserTestCode({});
  };

  const handleUserChoices = useCallback((id: number, userSelected: Option) => {
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

  const getUserTestResult = async () => {
    setLoading(true);

    try {
      const response: AxiosResponse<TestResult> = await axios({
        method: "post",
        url: `https://mbti-test.herokuapp.com/test`,
        data: {
          testCode: setUserTestCodeFitInServer(),
        },
      });
      if (response.status !== 200)
        throw new Error("검사 결과를 가져오지 못했어요. 다시 접속해 주세요.");

      setUserTestResult(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserTestCode.Provider
      value={{
        loading,
        userTestCode,
        userTestResult,
        resetTestCode,
        handleUserChoices,
        getUserTestResult,
      }}
    >
      {children}
    </UserTestCode.Provider>
  );
};

export default UserTestCodeProvider;
