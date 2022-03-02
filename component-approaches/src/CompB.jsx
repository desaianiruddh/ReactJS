import React,{ useContext, memo } from 'react'
import { ContextText } from './App'
const CompB = () => {
	const text =  useContext(ContextText);
	console.log('CompB Rendered');
	return (
		<>
			<h1>Counter value from CompB: {text}</h1>
		</>
	)
}

export default memo(CompB);