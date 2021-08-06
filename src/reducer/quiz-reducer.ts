import { Quiz } from '../data/quiz-types';

export type QuizState = {
    score: number;
    quizId: string;
    quizName: string;
    quizQuesQty: number;
};

export type ACTIONTYPE =
    | { type: "SET_QUIZ"; payload: Quiz }
    | { type: "RESET" }
    | { type: "INCREMENT" }
    | { type: "DECREMENT" };

export const quizReducer = (state: QuizState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'SET_QUIZ':
            return {
                ...state,
                quizId: action.payload.quizId,
                score: 0,
                quizName: action.payload.quizName,
                quizQuesQty: action.payload.questions.length
            };
        case 'RESET':
            return {
                ...state,
                score: 0,
            };
        case 'INCREMENT':
            return {
                ...state,
                score: state.score + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                score: state.score - 0.5,
            };
        default:
            return state;
    }
};