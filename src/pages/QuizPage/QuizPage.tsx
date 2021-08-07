import { useQuizContext } from '../../context/QuizContextProvider';
import { useState } from 'react'
import { useNavigate } from "react-router";
import styles from './QuizPage.module.css';

export function QuizPage(prop: any) {
    const { quizState, quizDispatch } = useQuizContext();
    const { quizName, quizId, allQuizList } = quizState;
    const quizData = allQuizList.find(i => i.quizId === quizId)
    const [quesIndex, setQuesIndex] = useState(0)
    // const currentQuesData = quizData?.questions[quesIndex]

    const currentQuesData = quizData?.questions[quesIndex]

    const [clicked, setClicked] = useState(false)
    const [clickedIndex, setClickedIndex] = useState(-1);
    const navigate = useNavigate();

    const checkIsRight = (isRight: boolean) => {
        isRight ? quizDispatch({ type: 'INCREMENT' }) : quizDispatch({ type: 'DECREMENT' })
        setClicked(() => true)
    }

    return (
        <div className={styles.quizPage}>
            <h1 className={styles.quizPage__heading} onClick={() => navigate('/')}>{quizName}</h1>
            <div className={styles.quizPage__score}>SCORE: {quizState?.score}</div>

            <div style={{ margin: "0.9rem 0" }}>
                <h2>{currentQuesData?.question}</h2>
                <hr className={styles.quizPage__hr} />
                <div className={styles.quizPage__optionList}>
                    <span style={{ display: "none" }}></span>
                    {
                        currentQuesData?.options !== undefined && currentQuesData?.options?.length + 1 > quesIndex ?
                            currentQuesData?.options?.map((i, index) => {
                                return <button
                                    disabled={clicked}
                                    key={i.text}
                                    style={{
                                        cursor: clicked ? "not-allowed" : "pointer",
                                        backgroundColor: clicked ? i.isRight ? "lightgreen" : clickedIndex === index ? "red" : "inherit" : "inherit",
                                    }}
                                    className={styles.quizPage__option}
                                    onClick={() => {
                                        setClickedIndex(() => index)
                                        checkIsRight(i.isRight)
                                    }}
                                >{i.text}</button>
                            })
                            : navigate('/finalscore')
                    }
                </div>
                {clicked && <button
                    color="secondary"
                    // style={{ marginTop: "0.5rem" }}
                    onClick={() => {
                        setQuesIndex(quesIndex => quesIndex + 1)
                        setClicked(() => false)
                    }}
                    className={styles.quizPage__nextBtn}
                >
                    Next
                </button>}
            </div>
        </div>
    )
}