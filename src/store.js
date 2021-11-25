import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import quizListSlice from './containers/QuizList/quizListSlice';

const store = configureStore({
    reducer: {
        app: appSlice,
        quizList: quizListSlice
    }
})

export default store;
