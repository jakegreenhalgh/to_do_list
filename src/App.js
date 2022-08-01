import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ]);
  const [newName, setNewTask] =useState("");

  const [newPriority, setNewPriority] = useState("")
  
  const isHighPriority = (priority)=> {
      if (priority === "high") {
        return true
      } else {
        return false
      }}
  
  const taskNodes = tasks.map( (task, index) => {
    return (
      <li key={index} className={ isHighPriority(task.priority) ? "high-priority" : "low-priority"} >
        <span>
          { task.name }
        </span>
        {isHighPriority(task.priority) ? <span className="high-priority">High</span> : <span className="low-priority">Low</span>}
      </li>
    )
  });

  

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  }
  const handlePriorityInput = (event) => {
    setNewPriority(event.target.value);
  }
  
  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newName,
      priority: newPriority
    })
    setTasks(copyTasks);
    setNewTask("")
  }
  
  
  return (
    <div className="App">
        <h1> To-Do's</h1>
        <form onSubmit={saveNewTask}>
        <input id='new_task'
        type="text"
        value={newName}
        onChange= {handleTaskInput} ></input>
        <div onChange= {handlePriorityInput}>
        <label htmlFor='low-priority'>Low Priority</label>  
        <input 
        type='radio' 
        id='low-priority'
        name='priority'
        value='low'>
        </input>
        <label htmlFor='high-priority'>High Priority</label>
        <input 
        type='radio' 
        id='high-priority'
        name='priority'
        value='high'>
        </input>
        </div>
        <input
        type="submit"
        value="Save new task">

        </input>
        </form>
        
        
        <ul>{taskNodes}</ul>
        

    </div>
  );
}

export default App;
