import React, { useState } from "react";

function NewTaskForm({ categories, onButtonClick, handleSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  const displayCategories = categories.map((category) => {
    return (<option key={category} onClick={() => onButtonClick(category)}>{category}</option>)
  })

  function onFormSubmit(e) {
    e.preventDefault()
    handleSubmit({ text, category })
    setText("")
    setCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={onFormSubmit} >
      <label>
        Details
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
