import {createSlice} from '@reduxjs/toolkit';

// determine initial state
const initialState = {
    user: null
}

// create  slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        clearState: () => {
            return initialState;
        },
        setData: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

// export action creators
export const { clearState, setData } = appSlice.actions;

// export reducer
export default appSlice.reducer;
