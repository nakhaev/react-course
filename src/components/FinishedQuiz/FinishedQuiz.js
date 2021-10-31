import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const FinishedQuiz = (props) => {
    const {results, quiz, onRetry} = props;
    const rightAnswersCount = Object.keys(results).filter(key => results[key] === 'success').length;
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {quiz.map((item, index) => {
                    const cls = [
                        'fa',
                        results[item.id] === 'success' ? 'fa-check' : 'fa-times',
                        classes[results[item.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}. </strong>
                            {item.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Right answers {rightAnswersCount} from {quiz.length}</p>
            <div>
                <Button onClick={onRetry} type="primary">Repeat Quiz</Button>
                <Link to={"/"}>
                    <Button type="success">Choose another Quiz</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz;
