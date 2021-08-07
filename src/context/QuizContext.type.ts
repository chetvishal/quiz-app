import { ACTIONTYPE } from "../reducer/quiz-reducer";
import { QuizState } from "../reducer/quiz-reducer";

export type ContextType = {
    quizState: QuizState,
    quizDispatch: (args: ACTIONTYPE) => void,
}

export const initialState: QuizState = {
    score: 0,
    quizId: '',
    quizName: '',
    quizQuesQty: 0,
    allQuizList: []
}