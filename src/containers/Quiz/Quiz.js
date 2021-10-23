import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'What the color of sky?',
                rightAnswerId: 3,
                answers: [
                    { text: 'White', id: 1 },
                    { text: 'Black', id: 2 },
                    { text: 'Blue', id: 3 },
                    { text: 'Red', id: 4},
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer all questions</h1>
                    <ActiveQuiz { ...this.state.quiz[0]}/>
                </div>
            </div>
        )
    }
}

export default Quiz;
