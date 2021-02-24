import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {

 function ci(event){
  onSearchChange( event.target.value)
  console.log(search)
 }

  return (
    <div className="Filter">
      <input type="text" onChange={ci} name="search" value = {search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


