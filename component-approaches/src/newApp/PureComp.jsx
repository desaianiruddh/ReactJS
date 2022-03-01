import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
	constructor(props) {
		super(props)
		this.state = { data: 10 };
	}
	render() {
		console.log("Component Rendered")
		return(
			<>
				<h1>State Data = {this.state.data}</h1>
				<button onClick={() => this.setState(() => ({data : 20}))}>Click</button>
			</>
		)
	}
}

export default PureComp;