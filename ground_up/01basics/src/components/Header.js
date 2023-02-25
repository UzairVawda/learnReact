import React from 'react'

export default function Header(props) {
	return (
		<header >
			<div className='logo'>Logo</div>
			<input onChange={props.getKeywords} />
		</header >
	)
}
