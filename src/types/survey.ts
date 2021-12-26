export interface IAnswerProps {
  answer: {
    id: number;
    answer: string;
  };
}

export interface ISurveyProps {
  answers: Array<IAnswerProps>;
}

export interface ISuggestionProps {
  toStay: string;
  toEat: string;
  toMove: string;
  toActive: string;
  time: string;
}

export interface ITRTIResultProps {
  message: string;
  name: string;
  result: ISuggestionProps;
}
