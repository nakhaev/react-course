import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    { text: 'Answer 1' },
                    { text: 'Answer 2' },
                    { text: 'Answer 3' },
                    { text: 'Answer 4' },
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer all questions</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        )
    }
}

export default Quiz;
