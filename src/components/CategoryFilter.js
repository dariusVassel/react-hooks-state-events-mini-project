import React from "react";

function CategoryFilter({ categories, onButtonClick, selectedCategory }) {

  const displayCategories = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (<button key={category} onClick={() => onButtonClick(category)} className={className}>{category}</button>)
  })




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
}

export default CategoryFilter;
