import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    increment,
    decrement,
    incrementByAmount,
    init,
    appSelector,
    clearState
} from '../AppSlice';

const Counter3 = () => {
    const { example, loading, error } = useSelector(appSelector);
    // you can use another approach with passing the function in useSelector
    // because the appSelector is also a function that was determined in another file
    // const { example, loading, error } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        dispatch(clearState());
        dispatch(init());
    }, []);

    return (
        <div style={{border: '1px solid black', padding: '5px', margin: '10px'}}>
            <p>Counter 3</p>
            <p>{example}</p>
            <button onClick={() => dispatch(increment())}>add</button>
            <button onClick={() => dispatch(decrement())}>sub</button>
            <hr/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(amount))}>add</button>
            {loading && <p style={{color: 'green'}}>Loading...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default Counter3;
