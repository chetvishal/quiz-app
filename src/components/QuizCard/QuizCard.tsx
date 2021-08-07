import { useQuizContext } from '../../context/QuizContextProvider';
import { useNavigate } from "react-router";
import QuizDefaultImage from '../../assets/Image/Quiz.jpg';
import styles from './QuizCard.module.css';

export type QuizCardProps = {
    QuizTitle: string,
    QuizData: any
}

export function QuizCard({ QuizTitle, QuizData }: QuizCardProps) {
    const { quizDispatch } = useQuizContext();
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.quizCard}
                onClick={() => {
                    quizDispatch({ type: "SET_QUIZ", payload: QuizData })
                    navigate(`/quiz/${QuizData.quizId}`)

                }}
            >
                <div className={styles.quizCard__imgContainer}>
                    <img
                        src={QuizData.quizImage ? QuizData.quizImage : QuizDefaultImage}
                        alt="quiz background"
                        className={styles.quizCard__image}
                    />
                </div>
                <div className={styles.quizCard__info}>
                    <span className={styles.quizCard__name}>{QuizTitle}</span>
                    <span className={styles.quizCard__questionQty}>{QuizData.questions.length} questions</span>
                </div>
            </div>
        </>
    );
}
