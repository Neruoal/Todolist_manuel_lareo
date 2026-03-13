import React, { useState } from "react";



//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	return (
		<div className="Container">
			<h1>Todos {inputValue}</h1>
			<ul>
				<li>
					<input
						type="text" placeholder="What do you need to do?"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
					
							}
						}}
						></input>
				</li>
				{todos.map((t) => (
					<li>
						Make the bed
					</li>


				)
				)
				}

			</ul>
			<div>{todos.length} tasks</div>
		</div>
	

















	)
}

			
export default Home;