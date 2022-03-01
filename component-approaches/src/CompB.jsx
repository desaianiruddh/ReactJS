import React,{ useContext } from 'react'
import { ContextText } from './App'
const CompB = () => {
	const text =  useContext(ContextText);
	return (
		<>
			<h1>Counter value from CompB: {text}</h1>
		</>
	)
}

export default CompB;