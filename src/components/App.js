import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }

  function handleSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={category} categories={CATEGORIES} onButtonClick={setCategory} />
      <NewTaskForm categories={CATEGORIES} handleSubmit={handleSubmit} />
      <TaskList categories={CATEGORIES} tasks={visibleTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
