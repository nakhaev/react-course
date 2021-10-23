import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
    const {answers, question} = props;
        return (
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                        <strong>2. </strong>
                        {question}
                    </span>
                    <small> 2 from 12 </small>
                </p>
                <AnswersList answers={answers}/>
            </div>
    )
}

export default ActiveQuiz;
