export type Options = {
    text: string;
    isRight: boolean;
  };
  
  export type Questions = {
    question: string;
    options: Options[];
  };
  
  export type Quiz = {
    quizImage?:string;
    quizId: string;
    quizName: string;
    points: number;
    questions: Questions[];
  };
  