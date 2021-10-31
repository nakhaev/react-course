import React from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';

const QuizList = props => {
    const quizzes = [1,2,3];
    return (
        <div className={classes.QuizList}>
            <div>
                <h1> All Quizzes </h1>
                <ul>
                    {(quizzes || []).map((q, index) => {
                            return <li key={index}><NavLink to={'/quiz/'+q}>Test {q}</NavLink></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default QuizList;
