import { createContext, useCallback, useState } from "react";
import { Answer, TestCode } from "../../types";

export const UserTestCode = createContext({
  userTestCode: {},
  handleTestCode: (id: number, userSelected: Answer) => {},
});

type UserTestCodeProviderProps = {
  children: React.ReactNode;
};

const UserTestCodeProvider = ({ children }: UserTestCodeProviderProps) => {
  const [userTestCode, setUserTestCode] = useState<TestCode>({});

  const handleTestCode = useCallback((id: number, userSelected: Answer) => {
    const userSelectedNumber = userSelected === "a" ? 0 : 1;
    setUserTestCode((userTestCode) => ({
      ...userTestCode,
      [id]: userSelectedNumber,
    }));
  }, []);

  return (
    <UserTestCode.Provider
      value={{
        userTestCode,
        handleTestCode,
      }}
    >
      {children}
    </UserTestCode.Provider>
  );
};

export default UserTestCodeProvider;
