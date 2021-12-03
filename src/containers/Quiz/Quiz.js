import React, { useEffect } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';
import {useDispatch, useSelector} from "react-redux";
import {setLoading, setQuiz, setAnswerState, setActiveQuestion, setResults, setIsFinished, setData} from "./quizSlice";

const Quiz = props => {

    const dispatch = useDispatch();
    const {results, isFinished, activeQuestion, answerState, quiz, loading} = useSelector(state => state.quiz);

    useEffect(() => {
        const getQuiz = async () => {
            const id = props.match.params.id;
            try {
                const response = await axios.get('/quizzes/'+id+'.json');
                dispatch(setQuiz(response.data));
                dispatch(setLoading(false));
            } catch(error) {
                console.log('error', error);
            }
        }
        getQuiz();
    }, []);

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
            dispatch(setResults(currentResults));

            currentState[id] = 'success';
            dispatch(setAnswerState(currentState));

            nextQuestion();
        } else {
            currentResults[question.id] = 'error';
            dispatch(setResults(currentResults));

            currentState[id] = 'error';
            dispatch(setAnswerState(currentState));

            nextQuestion();
        }
    }

    const onRetryHandler = () => {
        dispatch(setData({results: {}, isFinished: false, activeQuestion: 0, answerState: null}))
    }

    const nextQuestion = () => {
        const timeout = window.setTimeout(() => {
            if(isQuizFinished()) {
                dispatch(setIsFinished(true));
            } else {
                dispatch(setActiveQuestion(activeQuestion + 1));
                dispatch(setAnswerState(null));
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
