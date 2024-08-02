import './Todo.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

let [todos, setTodos] = useState([{task:"Sample task", id :uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
           return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        
    }
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
        
    }
    return (
        <div>
           <input type="text" placeholder="Add a Task" value={newTodo}  onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br /><br /><br />
            <hr />
            <h4> Tasks Todo</h4>
            <ul>
                {
                 todos.map((todo) => (
                     <li key={todo.id}  >
                         <span> {todo.task}</span>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}> Delete</button>
                     </li>
                 ))
               }
            </ul>
        </div>
    )
}