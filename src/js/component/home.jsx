import React, { useState } from "react";
import Toggle from "./toggle.js";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home() {
	const [task, setTask] = useState("");
	const [variable, setVariable] = useState([
	  "Do Homework",
	  "Do Laundry",
	  "Walk the Dog",
	]);

	const todo = variable.map((item, i) => (
	  <li className="list-group-item item" key={i}>
		{item}
		<div
		  className="mouseOver"
		  style={{ float: "right" }}
		  onClick={() => removeItem(i)}
		>
		  x
		</div>
	  </li>
	));

	const newTodo = (onKeyDownEvent) => {
	  if (onKeyDownEvent.key === "Enter") {
		const newTodo = [...variable, task];
		setVariable(newTodo);
		setTask("");
	  }
	};

	const removeItem = (index) => {
	  const newArray = variable.filter((item, i) => i !== index);
	  setVariable(newArray);
	};

	return (
	  <div className="container">
		<h1 className="todo">Todos</h1>
		<div className="main">
		  <input
			className="input"
			placeholder="Add your task here"
			value={task}
			onChange={(e) => setTask(e.target.value)}
			type="text"
			id="fname"
			name="fname"
			onKeyDown={newTodo}
		  />
		  <div>
			<ul className="task">{todo}</ul>
			<div className="remaining">{todo.length} items left</div>
		  </div>
		</div>
		<p>
		  {/* Toggle */}
		</p>
	  </div>
	);
  }

  export default Home;
