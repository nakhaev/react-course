import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props =>(
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2. </strong>
                How are you?
            </span>
            <small> 2 from 12 </small>
        </p>
        <AnswersList answers={props.answers}/>
    </div>
)

export default ActiveQuiz;
