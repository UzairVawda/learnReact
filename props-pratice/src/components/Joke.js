export default function Joke(props) {
	console.log(props)
	return (
		<div>
			{props.setup && <h1>{props.setup}</h1>}
			<h2>{props.punchline}</h2>
			<p>{props.isPun}</p>
			<p>{props.likeCount}</p>
			<p>{props.likedusers}</p>
			<hr />
		</div>
	)
}