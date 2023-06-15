import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [task,setTask] = useState("")
	const [toDos,setToDos] = useState(["Do laundry","Cook dinner","Pick up around the house"])

	let toDo = toDos.map((item,index)=>{
		return(
			<li key={index}>
				{item}
				<div
                style={{float:"right"}}
				onClick={()=>removeToDo(index)}
				>x</div>
			</li>
		)
	})
	const removeToDo=(index)=>{
		const newArray = toDos.filter((item,i)=>i !== index)
		setToDos(newArray)
	}
	const newToDo = (onKeyDownEvent) => {
		if(onKeyDownEvent.key=== "Enter"){
			const newToDo = [...toDos,task]
			setToDos(newToDos)
			setTask("")
		}
	}
	return (
		<div className="text-center">
        <h1>newToDos</h1>
		<div>
			<input
            placeholder="addToDo"
			value={task}
			onChange={(e)=> setTask(e.target.value)}
			onKeyDown={newToDo}
			></input>
		</div>
		<ol className="task">{toDos}</ol>
		  <div className="remaining">{toDos.length} items left</div>
		</div>
	);
};

export default Home;
