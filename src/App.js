import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';


function App() {
  // Declare a state variable called listTodo and initialize it as an empty array
  const [listTodo,setListTodo]=useState([]);

  // Define a function called addList to add new items to the todo list
  let addList = (inputText)=>{
    if(inputText!==''){
      // Append the new inputText value to the listTodo state using spread operator
      setListTodo([...listTodo,inputText]);
    }
  };

  // Define a function called deleteListItem to delete an item from the todo list
  const deleteListItem = (key)=>{
    // Create a copy of the listTodo state using the spread operator
    let newListTodo = [...listTodo];
    // Remove the item at the specified key index from the newListTodo array
    newListTodo.splice(key,1)
    // Update the listTodo state with the modified newListTodo array
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        {/* Render the TodoInput component and pass the addList function as a prop */}
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO LIST</h1>
        <hr/>

        {/* Iterate over the listTodo state array and render Todolist component for each item */}
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App