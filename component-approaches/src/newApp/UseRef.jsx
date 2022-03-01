import React, { useRef, useState } from 'react'

const App = () => {
	const [show, setShow] = useState(false)
	const refVar = useRef('')
	//click handle function
	function handleRef() {
		let inputElement = refVar.current;
		inputElement.value===''? alert('Input Filed is Empty :)'):setShow(show => !show);
		inputElement.style.color = 'red';
		inputElement.style.backgroundColor='aqua';
	}
	return (
		<div className='App'>
			<div className="form-content">
				<div>
					<label htmlFor="text">Enter text: </label>
					<input type="text" ref={refVar} />
				</div>
				<br />
				<button onClick={handleRef}>Message</button>
			</div>
			<br />
			<div className='view text'>
				{show && 'You added: ' + (refVar.current.value)}
			</div>
		</div>
	)
}

export default App