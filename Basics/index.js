// Targeting root element and inserting list 
// ReactDOM.render(<ul><li>one</li><li>two</li></ul>, document.getElementById("root"));

// below is imperative but react is focused on declareative 
// const root = document.getElementById("root")
// const h1 = document.createElement("h1")
// h1.textContent = "THIS IS SOME TEXT"
// h1.className = "header"
// root.appendChild(h1)
// console.log(h1)

// // using reusable components
// function Navbar() {
// 	return (
// 		<nav className="navbar navbar-expand-lg navbar-light bg-light">
// 			<a className="navbar-brand" href="#">Navbar</a>
// 			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 				<span className="navbar-toggler-icon"></span>
// 			</button>

// 			<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 				<ul className="navbar-nav mr-auto">
// 					<li className="nav-item active">
// 						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
// 					</li>
// 					<li className="nav-item">
// 						<a className="nav-link" href="#">Link</a>
// 					</li>
// 					<li className="nav-item dropdown">
// 						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 							Dropdown
// 						</a>
// 						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
// 							<a className="dropdown-item" href="#">Action</a>
// 							<a className="dropdown-item" href="#">Another action</a>
// 							<div className="dropdown-divider"></div>
// 							<a className="dropdown-item" href="#">Something else here</a>
// 						</div>
// 					</li>
// 					<li className="nav-item">
// 						<a className="nav-link disabled" href="#">Disabled</a>
// 					</li>
// 				</ul>
// 				<form className="form-inline my-2 my-lg-0">
// 					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
// 						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// 				</form>
// 			</div>
// 		</nav>
// 	)
// }

// function MainContent() {
// 	return (
// 		<h1>THIS IS MAIN CONTENT</h1>
// 	)
// }

// ReactDOM.render(<div>
// 	<Navbar/>
// 	<MainContent />
// 	</div>
// 	, document.getElementById("root"))

// react also brings in jsx when it is imported
//compareing jsx vs normal js created html
// const ele = <h1 className="header">THIS IS JSX</h1>
// console.log(ele)

// const page = (
// 	<div>
// 		<h1>This is JSX</h1>
// 		<p>SOME MORE JSX CREATED CONTENT</p>
// 	</div>
// )
// console.log(page)
// ReactDOM.render(page, document.getElementById("root"));
// console.log("hello")
// const navbar = (
// 	<nav>
// 		<h1>WEBSITE</h1>
// 		<ul>
// 			<li>Pricing</li>
// 			<li>About</li>
// 			<li>Contact</li>
// 		</ul>
// 	</nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

const page = (
	<div>
		<h1>This is react</h1>
		<h3>learing react</h3>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>c</li>
		</ul>
	</div>
)

// document.getElementById("root").append(JSON.stringify(page))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page)

