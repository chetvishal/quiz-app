import { useQuizContext } from '../../context/QuizContextProvider';
import { Loader, QuizCard } from '../../components/index';
import Switch from "react-switch";



export function Home({ darkChecked, setDarkChecked }: { darkChecked: any, setDarkChecked: (arg: boolean) => void }) {

    const { quizState } = useQuizContext();

    return (
        <div
            className=""
        >
            <div className="flex justify-center items-center lg:flex-row flex-col">
                <h1
                    className="heading-gradient"
                >Oh My Quiz!</h1>

                <Switch
                    onChange={() => setDarkChecked(!darkChecked)}
                    checked={darkChecked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor={`#fcd440`}
                    className="absolute lg:left-96"
                />
            </div>
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