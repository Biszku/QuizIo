import { SetStateAction } from "react";

const addIndexOfQuestionToState = (
  updateFunc: (value: SetStateAction<number[]>) => void,
  questionIndex: number
) => {
  updateFunc((prev) => {
    if (prev.find((el) => el === questionIndex) !== undefined) {
      return prev;
    }
    return [questionIndex, ...prev];
  });
};

export default addIndexOfQuestionToState;
