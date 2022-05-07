import {useReducer} from "react";

import './Counter.css';

const init = (initCount) => {
    return {count_1: initCount, count_2: initCount, count_3: initCount}
};

const reducer = (state, action) => {
    let {type, payload} = action;
    switch (type) {
        // case 'inc_1':
        //     return {...state, count_1: state.count_1 + 1};
        // case 'dec_1':
        //     return {...state, count_1: state.count_1 - 1};
        // case 'reset_1':
        //     return {...state, count_1: 0};
        // case 'inc_2':
        //     return {...state, count_2: state.count_2 + 1};
        // case 'dec_2':
        //     return {...state, count_2: state.count_2 - 1};
        // case 'reset_2':
        //     return {...state, count_2: 0};
        // case 'inc_3':
        //     return {...state, count_3: state.count_3 + 1};
        // case 'dec_3':
        //     return {...state, count_3: state.count_3 - 1};
        // case 'reset_3':
        //     return {...state, count_3: 0};
        case 'counter_1':
            return {...state, count_1: state.count_1 + payload};
        case 'counter_2':
            return {...state, count_2: state.count_2 + payload};
        case 'counter_3':
            return {...state, count_3: state.count_3 + payload};
        case 'reset_1':
            return {...state, count_1: 0};
        case 'reset_2':
            return {...state, count_2: 0};
        case 'reset_3':
            return {...state, count_3: 0};
        default:
           return  state;
    }
}


function Counter() {


    const [state, dispatch] = useReducer(reducer, 0, init);


    return (
        <div className={'wrapper'}>
            <div>
                <div className={'counter'}>
                    {state.count_1}
                </div>
                <div className={'btn-wrapper'}>
                    <button onClick={() => dispatch({type: 'counter_1', payload: 1})} className={'btn'}>Increment</button>
                    <button onClick={() => dispatch({type: 'counter_1', payload: -1})} className={'btn'}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset_1'})} className={'btn'}>Reset</button>
                </div>
            </div>
            <div>
                <div className={'counter'}>
                    {state.count_2}
                </div>
                <div className={'btn-wrapper'}>
                    <button onClick={() => dispatch({type: 'counter_2', payload: 1})} className={'btn'}>Increment</button>
                    <button onClick={() => dispatch({type: 'counter_2', payload: -1})} className={'btn'}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset_2'})} className={'btn'}>Reset</button>
                </div>
            </div>
            <div>
                <div className={'counter'}>
                    {state.count_3}
                </div>
                <div className={'btn-wrapper'}>
                    <button onClick={() => dispatch({type: 'counter_3', payload: 1})} className={'btn'}>Increment</button>
                    <button onClick={() => dispatch({type: 'counter_3', payload: -1})} className={'btn'}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset_3'})} className={'btn'}>Reset</button>
                </div>
            </div>

        </div>
    );
}

export {Counter};

