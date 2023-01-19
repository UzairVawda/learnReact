import React, { useState, useEffect } from "react"

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		url: ""
	})
	const [allMemes, setAllMemes] = useState([])
	
	function handleChange(event) {
		const { name, value } = event.target
		setMeme((prevValue) => ({
			...prevValue,
			[name] : value
		}))
	}
	useEffect(() => {
		console.log("effect ran")
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => {setAllMemes(data.data.memes)})
	}, [])

	function generateMeme(event) {
		event.preventDefault();
		if (!meme.topText || !meme.bottomText){
			alert("ENTER TOP AND BOTTOM TEXT!!!")
			return
		}

		const selected = allMemes[Math.floor(Math.random() * allMemes.length)].url;
		setMeme((prevValue) => ({
			...prevValue,
			url: selected
		}))
	}

	return (
		<main>
			<form className="meme--form">
				<input type="text" 
					placeholder="Top Text!"
					name="topText"
					onChange={handleChange}
					className="meme--input"
					value={meme.topText}
				/>
				<input type="text" 
					placeholder="Bottom Text!"
					name="bottomText"
					onChange={handleChange}
					className="meme--input"
					value={meme.bottomText}
				/>
				<button 
					className="meme--button"
					onClick={generateMeme}
				>Get a new meme image!</button>
			</form>
			{meme.url && 
				<div className="meme">
					<img src={meme.url} alt="meme" className="meme--image" />
					{meme.topText && <h2 className="meme--text top">{meme.topText}</h2>}
					{meme.bottomText && <h2 className="meme--text bottom">{meme.bottomText}</h2>}
				</div>
			}
		</main>
	)
}