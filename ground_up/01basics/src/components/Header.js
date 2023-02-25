import React, { Component } from 'react'

export default class Header extends Component {

	state = {
		active: false,
		inputText: "",
	}

	inputChangeHandler = (e) => {
		const valueBool = e.target.value === '' ? false : true
		this.setState({
			inputText: e.target.value,
			active: valueBool
		})
	}

	render() {
		return (
			<header style={{ background: this.state.active ? "red" : "blue" }}>
				<div className='logo'>Input text is :{this.state.inputText}</div>
				<input value={this.state.inputText} onChange={this.inputChangeHandler} />
			</header >
		)
	}
}
