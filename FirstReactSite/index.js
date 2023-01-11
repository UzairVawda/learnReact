// react components are a function that returns react elements (UI) in the form of JSX
// react components are resuable 

function Footer() {
	return (
		<footer className="footer">
			<small >@2023 Vawda React Testing. All Rights Reserved!</small>
		</footer>
	)
}

function MainContent() {
	return (
		<div className="card">
			<h1>React Fun Facts</h1>
			<ul className="container">
				<li>Released in 2013</li>
				<li>Managed by Facebook</li>
				<li>Well over 100k projects on GitHub</li>
			</ul>
		</div>
	)
}

function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// "calling" the component
root.render(<Page />)

