import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // เพิ่มรายการใหม่
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // ลบรายการ
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  // เปลี่ยนสถานะ completed เมื่อคลิกที่ข้อความ
  const toggleStrikeThrough = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do-List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            
            <span
              className={task.completed ? "check-btn" : "uncheck-btn"}
              onClick={() => toggleStrikeThrough(index)}
            >
              ✓
            </span>

            <span
              className={task.completed ? "completed" : ""}
              onClick={() => toggleStrikeThrough(index)}
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(index)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
