import React, { Component } from 'react'

export default class Header extends Component {

	state = {
		inputText: "",
		count: 0
	}

	inputChangeHandler = (e) => {
		this.setState({
			inputText: e.target.value
		})
	}
	counterHandler = (e) => {
		this.setState((state, props) => ({
			count: state.count + 1
		}))
	}

	render() {
		return (
			<header>
				<div className='logo'>Input text is :{this.state.inputText}</div>
				<input value={this.state.inputText} onChange={this.inputChangeHandler} />
				<br />
				<button onClick={this.counterHandler}>Increment</button>
				<h1>Current Count: {this.state.count}</h1>
			</header>
		)
	}
}
