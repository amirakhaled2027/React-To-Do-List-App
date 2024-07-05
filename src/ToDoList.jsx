import { useState } from 'react'


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);

    function handleInputChange(event) {
        // wen need this function to see the text we write within our input element
        setNewTask(event.target.value)

    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
        
    }

    //what is the index of the list item we would like to move up to our list
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
       if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
       } 
    }

    function moveTaskDown(index) {
        if(index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(<div className='to-do-list'>
                <h1>To-Do-List</h1>
                
                <input 
                    type="text"
                    placeholder= "enter a task"
                    value={newTask}
                    onChange={handleInputChange}/>
                
                <br />
                <br />

                <button className='add-button'
                        onClick={addTask}>
                    Add 
                </button>

                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>

                        {/* a button to delete tasks */}
                        <button className="delete-button"  onClick={() => deleteTask(index)}>Delete</button>

                        {/* a button to move a task up */}
                        <button className="move-up-button"  onClick={() => moveTaskUp(index)}>⬆👆</button>

                        {/* a button to move a task down */}
                        <button className="move-down-button" onClick={() => moveTaskDown(index)}>⬇👇</button>
                    </li> )}
                </ol>

            </div>);
}
export default ToDoList

