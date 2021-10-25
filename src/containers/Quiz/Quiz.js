import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What the color of sky?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    { text: 'White', id: 1 },
                    { text: 'Black', id: 2 },
                    { text: 'Blue', id: 3 },
                    { text: 'Red', id: 4},
                ]
            },
            {
                question: 'What the color of blood?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: 'Green', id: 1 },
                    { text: 'Red', id: 2},
                    { text: 'Blue', id: 3 },
                ]
            }
        ]
    }

    onAnswerClickHandler = (id) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId === id) {
            this.setState({
                answerState: {[id]: 'success'}
            });
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    this.setState({isFinished: true});
                } else {
                    this.setState({
                        activeQuestion:  this.state.activeQuestion + 1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {[id]: 'error'}
            });
        }
    }

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {
                        this.state.isFinished ?
                            <h1>Finished!</h1> :
                            <>
                                <h1>Please, answer all questions</h1>
                                <ActiveQuiz
                                answers={ this.state.quiz[this.state.activeQuestion].answers}
                                question={ this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                questionsLength={this.state.quiz.length}
                                questionNumber={this.state.activeQuestion + 1}
                                answerState={this.state.answerState}
                                />
                            </>
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;
