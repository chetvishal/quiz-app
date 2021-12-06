import { useQuizContext } from '../../context/QuizContextProvider';
import { useState } from 'react'
import { useNavigate } from "react-router";

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
        <div
            className=""
        >
            <h1
                className="mx-5 my-0 heading-gradient text-3xl font-bold cursor-pointer" 
                onClick={() => navigate('/')}>{quizName}</h1>
            <div 
            
            className="text-white bg-black inline-block py-2 px-2 font-medium"
            
            >SCORE: {quizState?.score}</div>

            <div style={{ margin: "0.9rem 0" }}>
                <h2 
                    className="h2"
                >{currentQuesData?.question}</h2>
                <hr 
                
                className="h-0 border-solid border-t-1" 
                
                />
                <div 
                
                className="grid justify-center grid-cols-quizOptionlist"
                >
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
                                    className="mt-2 block mx-auto mb-0 border-none text-gray-900 shadow-quizOptionBoxShadow py-1 px-8
                                     text-base font-semibold w-full rounded-xl text-left min-h-quizOptionHeight min-w-quizOptionMinWidth max-w-quizOptionMaxWidth
                                    "
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
                    onClick={() => {
                        setQuesIndex(quesIndex => quesIndex + 1)
                        setClicked(() => false)
                    }}
                    className="text-base py-2 px-6 mx-auto block border-none
                     text-white font-bold cursor-pointer bg-btn-pink-gradient my-6"
                >
                    Next
                </button>}
            </div>
        </div>
    )
}