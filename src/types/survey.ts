export interface IAnswerProps {
  id: number;
  answer: number;
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
