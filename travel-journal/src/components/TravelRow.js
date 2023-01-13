export default function TravelRow(props) {
	return (
		<div className="destination">
			<img src={props.destination.imageUrl} alt="destination" className="destination--img" />
			<div className="destination--info">
				<h1 className="destination--title">{props.destination.title}</h1>
				<p className="destination--location">{props.destination.location}</p>
				<a className="destination--link" href={props.destination.googleMapsUrl}>Visit On Google Maps</a>
				<p className="destination--dates">{props.destination.startDate} - {props.destination.endDate}</p>
				<p className="destination--description">{props.destination.description}</p>
			</div>
		</div>
	)
}
