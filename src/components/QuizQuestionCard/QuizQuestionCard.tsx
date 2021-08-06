import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useQuizContext } from '../../context/QuizContextProvider';
import { useNavigate } from "react-router";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export type QuizCardProps = {
    QuizTitle: string,
    QuizData: any
}

export function QuizQuestionCard({ QuizTitle, QuizData }: QuizCardProps) {
    const classes = useStyles();
    const { quizDispatch } = useQuizContext();
    const navigate = useNavigate();

    return (
        <Card className={classes.root} 
            style={{margin: "0.9rem 0"}}
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
        </Card>
    );
}
