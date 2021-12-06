import { useQuizContext } from '../../context/QuizContextProvider';
import { Loader, QuizCard } from '../../components/index';


export function Home() {

    const { quizState } = useQuizContext();

    return (
        <div
            className=""
        >
            <h1
                className="heading-gradient"
            >Oh My Quiz!</h1>
            <div
                className="my-0 mx-2 grid grid-cols-quizzesList justify-center items-end"
            >
                {
                    quizState.allQuizList.length !== 0 ?
                        quizState.allQuizList.map(item => {
                            return <QuizCard QuizTitle={item.quizName} QuizData={item} key={item.quizId} />
                        })
                        :
                        <div style={{ gridColumn: "span 4" }}>
                            <Loader />
                        </div>
                }
            </div>
        </div>
    )
}