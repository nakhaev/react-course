import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = () => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. First</strong>
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>
                <li>
                    <strong>2. Second</strong>
                    <i className={'fa fa-check ' + classes.success}></i>
                </li>
            </ul>
            <p>Right answers 4 from 10</p>
            <div>
                <button>Repeat Quiz</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
