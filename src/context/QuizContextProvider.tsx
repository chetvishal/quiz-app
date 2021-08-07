import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../reducer/quiz-reducer";
import { ContextType, initialState } from "./QuizContext.type";
import axios from 'axios';

const QuizContext = createContext<ContextType>({} as ContextType);

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider: React.FC = ({ children }) => {

    const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

    useEffect(() => {
        (
            async function () {
                await axios.get('https://oh-my-quiz-api.herokuapp.com/quiz')
                    .then(resp => {
                        quizDispatch({ type: "ADD_ALL_QUIZZES", payload: resp.data.quizList })
                    })
            }
        )()
    }, [])

    return (
        <QuizContext.Provider value={{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    );
};
