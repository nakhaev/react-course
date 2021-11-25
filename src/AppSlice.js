import { createSlice } from '@reduxjs/toolkit';
import { getData, getElseData, getResponse, getError } from './services/apiService';

const initialState = {
    example: 0,
    some: 12,
    test: '',
    loading: false,
    error: null
}

// sync actions
export const AppSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.example += 1;
        },
        decrement: state => {
            return {...state, example: state.example - 1};
        },
        incrementByAmount: (state, action) => {
            return {...state, example: state.example + Number(action.payload)};
        },
        setData: (state, action) => {
            return {...state, ...action.payload};
        },
        clearState: () => {
            return initialState;
        }
    }
})

// selectors
export const selectCount = state => state.app.example;
export const appSelector = state => state.app;

export const { increment, decrement, incrementByAmount, setData, clearState } = AppSlice.actions

// async actions
export const incrementAsync = () => {
    return async (dispatch, getState) => {
        const data = await getData();
        dispatch(incrementByAmount(data));
    }
}

export const getTest = () => {
    return async (dispatch, getState) => {
        const data = await getElseData();
        dispatch(setData({test: data}));
    }
}

export const init = () => {
    return async (dispatch, getState) => {
        dispatch(setData({ loading: true }));
        console.log(getState());
        try {
            // await getError();
            const data = await getData();
            const test = await getElseData();
            const some = await getResponse();
            dispatch(setData({ test, some, example: data, loading: false }));
        } catch(error) {
            console.log(`error: ${error}`);
            dispatch(setData({loading: false, error: error}));
        }
    }
}

export const getDataTest = (url) =>  {
    return async (dispatch, getState) => {
        try {
            const data = await fetch(url);
            return await data.json();
        } catch {
            console.log('Some error');
        }
    }
};

export default AppSlice.reducer
