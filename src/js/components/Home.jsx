import React, { useState } from "react";



//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);


	return (
		<div className="Container">
			<h1>Todos</h1>
			<ul>
				<li>
					<input
						type="text" placeholder="What do you need to do?"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{""}
						<i
						
						onClick={() =>
							setTodos (
								todos.filter(
									(t, currentIndex) =>
										index != currentIdenx
								)
							)
							
						}></i>
					</li>


				)
				)
				}

			</ul>
			<div className="task">{todos.length} tasks</div>
		</div>
	

















	)
}

			
export default Home;