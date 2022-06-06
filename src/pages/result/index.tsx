import React, { useContext } from "react";
import { UserTestCode } from "../../contexts/userTestCode";

const Result = () => {
  const { userTestResult } = useContext(UserTestCode);

  return <div>Result</div>;
};

export default Result;
