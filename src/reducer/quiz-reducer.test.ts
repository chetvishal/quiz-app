import { quizReducer, ACTIONTYPE } from './quiz-reducer';
import { initialState } from '../context/QuizContext.type';
import { QuizState } from "../reducer/quiz-reducer";
import { Quiz } from '../data/quiz-types';

describe("testing quiz reducer", () => {

    test("should add all quizzes", () => {
        const action: ACTIONTYPE = {
            type: 'ADD_ALL_QUIZZES',
            payload: [
                {
                    "quizId": "dfjsa224",
                    "quizName": "The blockchain quiz",
                    "quizImage": "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/11/what-is-crypto.jpg",
                    "points": 10,
                    "questions": [
                        {
                            "question": "Who created Bitcoin?",
                            "options": [
                                {
                                    "text": "Satoshi Nakamoto",
                                    "isRight": true
                                }
                            ]
                        },
                    ]
                },
            ],
        }

        const state = quizReducer(initialState, action)
        expect(state).toEqual({
            score: 0,
            quizId: "",
            quizName: "",
            quizQuesQty: 0,
            allQuizList: [
                {
                    "quizId": "dfjsa224",
                    "quizName": "The blockchain quiz",
                    "quizImage": "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/11/what-is-crypto.jpg",
                    "points": 10,
                    "questions": [
                        {
                            "question": "Who created Bitcoin?",
                            "options": [
                                {
                                    "text": "Satoshi Nakamoto",
                                    "isRight": true
                                }
                            ]
                        },
                    ]
                },
            ],
        })
    })
    test("should set the quiz", () => {
        
        const action: ACTIONTYPE = {
            type: 'SET_QUIZ',
            payload: {
                quizImage: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/11/what-is-crypto.jpg",
                quizId: "dfjsa224",
                quizName: "The blockchain quiz",
                points: 10,
                questions:  [
                    {
                        "question": "Who created Bitcoin?",
                        "options": [
                            {
                                "text": "Satoshi Nakamoto",
                                "isRight": true
                            }
                        ]
                    },
                ],
            }
        }

        const state = quizReducer(initialState, action)
        expect(state).toEqual({
            score: 0,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: [],
        })
    })

    test("should reset the quiz SCORE", () => {
        const initialState: QuizState = {
            score: 5,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: []
        }
        const action: ACTIONTYPE = {
            type: 'RESET',
        }

        const state = quizReducer(initialState, action)
        expect(state).toEqual({
            score: 0,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: [],
        })
    })

    test("should increase the quiz SCORE", () => {
        const initialState: QuizState = {
            score: 5,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: []
        }
        const action: ACTIONTYPE = {
            type: 'INCREMENT',
        }

        const state = quizReducer(initialState, action)
        expect(state).toEqual({
            score: 6,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: [],
        })
    })

    test("should decrease the quiz SCORE", () => {
        const initialState: QuizState = {
            score: 5,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: []
        }
        const action: ACTIONTYPE = {
            type: 'DECREMENT',
        }

        const state = quizReducer(initialState, action)
        expect(state).toEqual({
            score: 4.5,
            quizId: "dfjsa224",
            quizName: "The blockchain quiz",
            quizQuesQty: 1,
            allQuizList: [],
        })
    })

});
