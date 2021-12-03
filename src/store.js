import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import quizListSlice from './containers/QuizList/quizListSlice';
import quizSlice from "./containers/Quiz/quizSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        quizList: quizListSlice,
        quiz: quizSlice
    }
})

export default store;
