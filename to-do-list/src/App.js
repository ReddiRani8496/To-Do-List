import { useState } from "react";
import "./App.css";

function App() {
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    let task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask(""); // Clear the input box
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, index) => {
          return (
            <div
              key={index}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <h1>{task.taskname}</h1>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
