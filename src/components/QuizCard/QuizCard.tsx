import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            {/* <Card
                style={{ margin: "0.9rem 0" }}
            >
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {QuizTitle}
                    </Typography>

                    <Button variant="contained" color="secondary"
                        style={{ marginTop: "0.5rem" }}
                        onClick={() => {
                            quizDispatch({ type: 'SET_QUIZ', payload: QuizData })
                            navigate(`/quiz/${QuizData.quizId}`)
                        }}
                    >
                        Take Quiz
                    </Button>
                </CardContent>
            </Card> */}
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
