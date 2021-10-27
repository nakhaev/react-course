import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
    const {answers, question, onAnswerClick, questionNumber, questionsLength, answerState} = props;
        return (
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                        <strong>{questionNumber}. </strong>
                        {question}
                    </span>
                    <small> {questionNumber} from {questionsLength} </small>
                </p>
                <AnswersList
                    answers={answers}
                    onAnswerClick={onAnswerClick}
                    answerState={answerState}
                />
            </div>
    )
}

export default ActiveQuiz;
