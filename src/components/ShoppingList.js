import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItems, setSearchItems] = useState(null);
  const [arrays, setArrays] = useState(items)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function addItemToArray(newItem){
     const newArray = [...arrays, newItem]
     setArrays(newArray)
     console.log(arrays)
  }

  function handleSearchChange(event) {
    setSearchItems(event.target.value);
  }
  
 console.log(items)

  const itemsToDisplay = arrays.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const searchItemsToDisplay = itemsToDisplay.filter((item) => {
    if(searchItems === null) return true;

    return item.name.includes(searchItems)
    
  })
  
  return (
    <div className="ShoppingList">
      <ItemForm  add = {addItemToArray} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={setSearchItems}  search = {searchItems} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
