import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsList extends Component {

	render() {
		return (
			<div>
				{
					this.props.news.map((item) => (
						<NewsItem item={item} key={item.id} />
					))
				}
			</div>
		)
	}
}

