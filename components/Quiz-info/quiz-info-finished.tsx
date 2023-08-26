import { FC } from "react";

interface QuizziesInfoType {
  quizziesQuestions: any[];
}

const FinishedElement: FC<QuizziesInfoType> = ({ quizziesQuestions }) => {
  return (
    <>
      <p>finished</p>
    </>
  );
};

export default FinishedElement;
