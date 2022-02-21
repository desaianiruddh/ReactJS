import React from "react";
import "../css/style.css";
import natureImg from '../img/nature.jpg';

const App = () => {
	return (
		<>
			<h1>Hello World!!</h1>
			<img src={natureImg} alt="nature img"></img>
		</>
	);
};

export default App;