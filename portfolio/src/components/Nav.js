import React from "react"
import ReactLogo from"../images/react.png"
export default function Nav() {
	return (
		<header>
			<nav>
				<img src={ReactLogo} alt="logo" />
				<h3>React Facts</h3>
				<h4>React Course 1</h4>
			</nav>
		</header>
	)
}