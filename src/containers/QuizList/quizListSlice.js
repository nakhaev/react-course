import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quizzes: [],
    loading: true
}

const quizListSlice = createSlice({
    name: 'quizList',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setQuizzes: (state, action) => {
            return { ...state, quizzes: action.payload };
        },
        setLoading: (state, action) => {
            return { ...state, loading: action.payload };
        }
    }
});

export const { clearState, setQuizzes, setLoading } = quizListSlice.actions;
export default quizListSlice.reducer;
