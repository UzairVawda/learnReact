import Logo from "../images/react.png"

function Header() {
	return (
		<header>
			<nav className="navBar">
				<img src={Logo} alt="REACT LOGO" className="navImg"/>
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header