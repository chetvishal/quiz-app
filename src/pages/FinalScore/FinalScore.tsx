import { useNavigate } from 'react-router';
import { useQuizContext } from '../../context/QuizContextProvider';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function FinalScore() {
    const navigate = useNavigate();
    const { quizState } = useQuizContext();

    var percentage = 0;

    percentage = quizState.score / quizState.quizQuesQty * 100;

    return (
        <div className="sm:h-screen lg:h-full h-screen">
            <h1

                className="heading-gradient"

            >Final Score: {quizState.score}/{quizState.quizQuesQty}</h1>

            <button
                onClick={() => navigate('/')}
                className={`text-base py-2 px-6 mx-auto block border-none
                text-white font-bold cursor-pointer bg-btn-pink-gradient my-6 rounded-xl`}>
                home
            </button>

            <div
                className="lg:w-1/4 w-full mx-auto mt-16"
            >
                <CircularProgressbar value={percentage} text={`${percentage}%`} 
                styles={buildStyles({
                    
                    pathColor: `#39ace7`,
                    textColor: '#39ace7',
                  })}
                />
            </div>
        </div>
    )
}