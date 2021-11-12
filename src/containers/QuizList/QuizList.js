import React, { useEffect, useState } from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getQuizzes() {
            try {
                const response = await axios.get('/quizzes.json');
                const data = response.data;
                let temp = [];
                if(data) Object.keys(data).map((key, index) => {
                    temp.push({
                        id: key,
                        name: `Test #${index}`
                    })
                    return key;
                })
                setQuizzes(temp);
                setLoading(false);
            } catch(error) {
                console.log('error', error);
            }
        }
        getQuizzes();
    }, []);
    return (
        <div className={classes.QuizList}>
            <div>
                <h1> All Quizzes </h1>
                {
                    loading
                    ? <Loader />
                    :  <ul>
                            {(quizzes || []).map((q, index) => {
                                return <li key={index}><NavLink to={'/quiz/'+q.id}> {q.name} </NavLink></li>
                            })
                            }
                        </ul>
                }
            </div>
        </div>
    )
}

export default QuizList;
