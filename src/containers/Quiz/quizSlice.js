import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setData: (state, action) => {
            return { ...state, ...action.payload}
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload}
        },
        setQuiz: (state, action) => {
            return { ...state, quiz: action.payload}
        },
        setAnswerState: (state, action) => {
            return { ...state, answerState: action.payload}
        },
        setActiveQuestion: (state, action) => {
            return { ...state, activeQuestion: action.payload}
        },
        setResults: (state, action) => {
            return { ...state, results: action.payload}
        },
        setIsFinished: (state, action) => {
            return { ...state, isFinished: action.payload}
        },
    }
});

export const {
    clearState,
    setData,
    setLoading,
    setQuiz,
    setAnswerState,
    setActiveQuestion,
    setResults,
    setIsFinished } = quizSlice.actions;

export default quizSlice.reducer
