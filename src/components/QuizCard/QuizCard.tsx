import { useQuizContext } from '../../context/QuizContextProvider';
import { useNavigate } from "react-router";
import QuizDefaultImage from '../../assets/Image/Quiz.jpg';

export type QuizCardProps = {
    QuizTitle: string,
    QuizData: any
}

export function QuizCard({ QuizTitle, QuizData }: QuizCardProps) {
    const { quizDispatch } = useQuizContext();
    const navigate = useNavigate();

    return (
        <>
            <div
                className="inline-flex flex-col max-w-[-400px] my-4 mx-auto bg-white 
                cursor-pointer rounded-2xl shadow-md max-w-sm"
                onClick={() => {
                    quizDispatch({ type: "SET_QUIZ", payload: QuizData })
                    navigate(`/quiz/${QuizData.quizId}`)

                }}
            >
                <div
                    className="">

                    <img
                        src={QuizData.quizImage ? QuizData.quizImage : QuizDefaultImage}
                        alt="quiz background"
                        className="h-72 m-0 max-w-full object-cover 
                        rounded-2xl rounded-b-none p-0"
                    />
                </div>
                <div
                    className="px-8 py-4 text-left">
                    <span
                        className="text-xl font-bold text-gray-800 my-[-0.5rem] mx-0"
                    >{QuizTitle}</span>
                    <span className="block my-[-0.5rem] mx-0 font-medium">{QuizData.questions.length} questions</span>
                </div>
            </div>
        </>
    );
}
