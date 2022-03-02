import React, { useReducer } from 'react'
import useRenderCounter from './useRenderCounter';
import '../Css/App.css'

const UseReducer = () => {
	console.log('component rendered');
	//reducer function
	const reducer = (state,action) =>{
		console.log(state,action);
		switch(action.type){
			case 'DECREMENT_TO_5' : state = state - 5;
			break ;
			case 'DECREMENT_TO_1' : state = state - 1;
			break ;
			case 'INCREMENT_TO_1' : state = state + 1;
			break ;
			case 'INCREMENT_TO_5' : state = state + 5;
			break ;
			default : alert('Invalid Action');
			break;
		}
		return state;
	}
	//initialize useReduce hook
	const initialState = 0;
	const [state, dispatch] = useReducer(reducer,initialState)
	//use custom hook
	useRenderCounter(state);
	return (
		<>
			<div className='footer'>
				<button onClick={() => dispatch({type : 'DECREMENT_TO_5' })}> <small>-5</small></button>
				<button onClick={() => dispatch({type : 'DECREMENT_TO_1' })}> - </button>
				<div className='counter-text'>{state}</div>
				<button onClick={() => dispatch({type : 'INCREMENT_TO_1' })}> + </button>
				<button onClick={() => dispatch({type : 'INCREMENT_TO_5' })}> <small>+5</small></button>
			</div>
		</>
	)
}

export default UseReducer