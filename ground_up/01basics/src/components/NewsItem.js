import React, { Component } from 'react'

export default class NewsItem extends Component {
	render() {
		return (
			<div className="news_item">
				<h3>{this.props.item.title}</h3>
				<div>
					{this.props.item.feed}
				</div>
			</div>
		)
	}
}

