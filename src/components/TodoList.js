import React from 'react'

// Define a functional component called Todolist
function Todolist(props) {
  return (
    // Render a list item with the class name "list-item"
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            // Call the deleteItem function from props, passing the index as an argument
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

// Export the Todolist component as the default export
export default Todolist