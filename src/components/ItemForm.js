import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

 const [name, setName] = useState('')
 const [catagory, setCatagory] = useState('')


 function addItems(event){
   event.preventDefault()
   
   const newItem ={
     id:uuid(),
     name,
     catagory
   }

   props.add(newItem)
 }
 

 

  return (
    <form  onSubmit ={addItems} className="NewItem">
      <label>
        Name:
        <input onChange = {(e) => setName(e.target.value)} type="text" name="name" placeholder = "hello"/>
      </label>

      <label>
        Category:
        <select onChange = {(e) => setCatagory(e.target.value)}  name="category">
        <option value="nothing">nothing</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;


// ### ItemForm

// There is a new component called `ItemForm` that will allow us to add new items
// to our shopping list. _When the form is submitted_, a new item should be created
// and added to our list of items.

// 1. Make all the input fields for this form controlled inputs, so that you can
//    access all the form data via state. When setting the initial state for the
//    `<select>` tag, use an initial value of "Produce" (since that's the first
//    option in the list).

// 2. Handle the form's _submit_ event, and use the data that you have saved in
//    state to create a new item object with the following properties:

//    ```js
//    const newItem = {
//      id: uuid(), // the `uuid` library can be used to generate a unique id
//      name: itemName,
//      category: itemCategory,
//    };
//    ```

// 3. Add the new item to the list by updating state. To get the test passing,
//    you'll need to use a prop called `onItemFormSubmit` as a callback.

//    **NOTE**: to add a new element to an array in state, it's a good idea to use
//    the spread operator:

//    ```js
//    function addElement(element) {
//      setArray([...array, element]);
//    }
//    ```

//    The spread operator allows us to copy all the old values of an array into a
//    new array, and then add new elements as well. When you're working with state
//    you never want to _mutate_ state by using methods like `.push` -- always
//    use _non-destructive_ array methods when working with state!