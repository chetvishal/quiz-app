import { useNavigate } from 'react-router';
import { useQuizContext } from '../../context/QuizContextProvider';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function FinalScore() {
    const navigate = useNavigate();
    const { quizState } = useQuizContext();

    var sliceCss = {}
    var fillCss = {}
    var barCss = {}


    function createCircle(percentage: number) {
        if (percentage === 0 || percentage > 100) {
            console.log("null")
        } else {
            if (percentage > 50) {
                percentage = percentage - 50;
                let val = 180 / 50;
                let fval = val * percentage;
                fval = fval + 180;

                sliceCss = { "clip": "rect(auto, auto, auto, auto)" }
                fillCss = { "transform": "rotate(180deg)" }
                barCss = { "transform": "rotate(" + fval + "deg)" }

            } else {
                let val = 180 / 50;
                let fval = val * percentage;

                barCss = { "display": "none" }
                sliceCss = { "clip": "rect(0em, 1em, 1em, 0.5em)" }
                fillCss = { "transform": "rotate(" + fval + "deg)" }
            }
        }
    }


    var percentage = 0;

    percentage = quizState.score / quizState.quizQuesQty * 100;
    createCircle(percentage);

    return (
        <>
            <h1

                className="heading-gradient"

            >Final Score: {quizState.score}/{quizState.quizQuesQty}</h1>

            <button
                onClick={() => navigate('/')}
                className={`text-base py-2 px-6 mx-auto block border-none
                text-white font-bold cursor-pointer bg-btn-pink-gradient my-6`}>
                home
            </button>

            <div
                className="lg:w-1/4 w-full mx-auto mt-16"
            >
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
        </>
    )
}