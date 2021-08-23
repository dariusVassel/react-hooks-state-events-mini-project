import React from "react";
import Task from "./Task"

function TaskList({ categories, tasks, handleDelete }) {



  const taskElements = tasks.map((task) => {
    return (
      <Task task={task} key={task.text} onClickDelete={handleDelete} />
    )
  })

  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
