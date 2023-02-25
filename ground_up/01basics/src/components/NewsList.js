import React from 'react'
import NewsItem from './NewsItem'

export default function NewsList(props) {
	return (
		<div>
			{
				props.news.map((item) => (
					<NewsItem item={item} key={item.id} />
				))
			}
		</div>
	)
}
