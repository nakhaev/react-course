import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';

class Quiz extends Component {
    state = {
        results: {}, // {[id]: 'success' / 'error' }
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        try {
            const response = await axios.get('/quizzes/'+id+'.json');
            this.setState({quiz: response.data});
        } catch(error) {
            console.log('error', error);
        }
    }

    onAnswerClickHandler = (id) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = { ...this.state.results};

        if (question.rightAnswerId === id) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({
                answerState: {[id]: 'success'},
                results
            });
            this.nextQuestion();
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[id]: 'error'},
                results
            });
            this.nextQuestion();
        }
    }

    onRetryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        });
    }

    nextQuestion = () => {
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
                            <>
                                <h1>All answers:</h1>
                                <FinishedQuiz
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry={this.onRetryHandler}
                                />
                            </> :
                            <>
                            {this.state.quiz[this.state.activeQuestion] ? <>
                                    <h1>Please, answer all questions</h1>
                                    <ActiveQuiz
                                    answers={ this.state.quiz[this.state.activeQuestion].answers}
                                    question={ this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    questionsLength={this.state.quiz.length}
                                    questionNumber={this.state.activeQuestion + 1}
                                    answerState={this.state.answerState}
                                    />
                                </> : null}
                            </>
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;
