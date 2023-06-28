import React, { useState } from "react";



//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("false");
	const handleOnClick = (color)=> {setSelectedColor(color)}

	return (
		
		<div className="traffic-light">
			<button
				onClick={() => handleOnClick('red')}
				className={"light red" + (selectedColor === "red" ? " glow" : "")}>
			</button>
			<button
				onClick={() => handleOnClick('yellow')}
				className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
			></button>
			<button
				onClick={() => handleOnClick("green")}
				className={"light green" + (selectedColor === "green" ? " glow" : "")}
			></button>
		</div>
	);
}


export default Home;
