import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div>{this.props.children}{this.props.footerText}</div>
		)
	}
}
