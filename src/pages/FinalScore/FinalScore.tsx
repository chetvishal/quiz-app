import { useNavigate } from 'react-router';
import { useQuizContext } from '../../context/QuizContextProvider';
import styles from './FinalScore.module.css';

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
            <h1 className={styles.result__heading}>Final Score: {quizState.score}/{quizState.quizQuesQty}</h1>

            <button
                onClick={() => navigate('/')}
                className={styles.result__homeBtn}>
                home
            </button>

            <div className={`${styles.c100} ${styles.big}`}>
                <span className={styles.no}>{percentage}%</span>
                <div className={styles.slice} style={sliceCss}>
                    <div className={styles.bar} style={{ ...barCss, borderColor: percentage < 0 ? "red" : "#307bbb" }}></div>
                    <div className={styles.fill} style={{ ...fillCss, borderColor: percentage < 0 ? "red" : "#307bbb" }}></div>
                </div>
            </div>
        </>
    )
}