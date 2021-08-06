import { questions } from '../../data/quiz-data';
import styles from "./Home.module.css";
import { useQuizContext } from '../../context/QuizContextProvider';
import { useNavigate } from "react-router";
import { QuizCard } from '../../components/index'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { QuizState } from '../../reducer/quiz-reducer';

export function Home() {

    const { quizState, quizDispatch } = useQuizContext();
    const navigate = useNavigate();
    const [quizQuestions, setQuizQuestions] = useState<QuizState[]>([])

    useEffect(() => {
        (
            async function () {
                await axios.get('https://oh-my-quiz-api.herokuapp.com/quiz')
                    .then(resp => {
                        console.log("response: ", resp)
                        setQuizQuestions(() => resp.data.quizList)
                    })
                    .catch(err => {
                        setQuizQuestions(() => [])
                        console.error("error fetching data: ", err)})
            }
        )()
    }, [])

    return (
        <div className={styles.home}>
            <h1 className={styles.home__heading}>Oh My Quiz!</h1>
            <div className={styles.home__quizList}>
                {
                    quizQuestions.map(item => {
                        return <QuizCard QuizTitle={item.quizName} QuizData={item} />
                    })
                }
            </div>
        </div>
    )
}