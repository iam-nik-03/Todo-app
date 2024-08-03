import './Todo.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

let [todos, setTodos] = useState([{task:"Sample task", id :uuidv4(),isDone:false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(),isDone:false }];
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        
    };
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
        
    };
    let markAllDone= () => {
        setTodos((prevTodos)=>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone:true,
                };
            })
        )
    };
    let marksAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id ==id) {
                    return {
                        ...todo,
                        isDone:true,

                    };
                } else {
                    return todo;
                }
                    
            })
        );
    };
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
                     <span style={todo.isDone ? { textDecorationLine:"line-through" ,textDecorationColor:"red"} : { }}> {todo.task}</span>
                         &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}> Delete</button>
                    <button onClick={()=>marksAsDone(todo.id)}> Marks As Done</button>
                     </li>
                 ))
               }
            </ul>
            <br /><br />
            <button onClick={markAllDone}> Mark All as Done</button>
    
        </div>
    )
}