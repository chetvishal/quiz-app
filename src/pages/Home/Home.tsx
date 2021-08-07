import styles from "./Home.module.css";
import { useQuizContext } from '../../context/QuizContextProvider';
import { QuizCard } from '../../components/index';

export function Home() {

    const { quizState } = useQuizContext();

    return (
        <div className={styles.home}>
            <h1 className={styles.home__heading}>Oh My Quiz!</h1>
            <div className={styles.home__quizList}>
                {
                    quizState.allQuizList.map(item => {
                        return <QuizCard QuizTitle={item.quizName} QuizData={item} key={item.quizId}/>
                    })
                }
            </div>
        </div>
    )
}