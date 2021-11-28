import React, { useEffect, useState } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';

const Quiz = props => {

    const [results, setResults] = useState({});
    const [isFinished, setIsFinished] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerState, setAnswerState] = useState(null);
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getQuiz = async () => {
            const id = props.match.params.id;
            try {
                const response = await axios.get('/quizzes/'+id+'.json');
                setQuiz(response.data);
                setLoading(false)
            } catch(error) {
                console.log('error', error);
            }
        }
        getQuiz();
    })

    const onAnswerClickHandler = (id) => {
        if(answerState) {
            const key = Object.keys(answerState)[0];
            if(answerState[key] === 'success') {
                return;
            }
        }
        const question = quiz[activeQuestion];
        const currentResults = { ...results};
        let currentState = { ...answerState};

        if (question.rightAnswerId === id) {
            if(!currentResults[question.id]) {
                currentResults[question.id] = 'success';
            }
            setResults(currentResults);

            currentState[id] = 'success';
            setAnswerState(currentState);

            nextQuestion();
        } else {
            currentResults[question.id] = 'error';
            setResults(currentResults);

            currentState[id] = 'error';
            setAnswerState(currentState);

            nextQuestion();
        }
    }

    const onRetryHandler = () => {
        setResults({});
        setIsFinished(false);
        setActiveQuestion(0);
        setAnswerState(null);
    }

    const nextQuestion = () => {
        const timeout = window.setTimeout(() => {
            if(isQuizFinished()) {
                setIsFinished(true);
            } else {
                setActiveQuestion(activeQuestion + 1);
                setAnswerState(null);
            }
            window.clearTimeout(timeout);
        }, 1000);
    }

    const isQuizFinished = () => {
        return activeQuestion + 1 === quiz.length;
    }

    return (
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>
                {
                    loading
                    ? <Loader />
                    : isFinished ?
                        <>
                            <h1>All answers:</h1>
                            <FinishedQuiz
                                results={results}
                                quiz={quiz}
                                onRetry={onRetryHandler}
                            />
                        </> :
                        <>
                            <h1>Please, answer all questions</h1>
                            <ActiveQuiz
                                answers={ quiz[activeQuestion].answers}
                                question={ quiz[activeQuestion].question}
                                onAnswerClick={onAnswerClickHandler}
                                questionsLength={quiz.length}
                                questionNumber={activeQuestion + 1}
                                answerState={answerState}
                            />
                        </>
                }

            </div>
        </div>
    )
}

export default Quiz;
