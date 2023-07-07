import React,{useState} from "react";

//in the below functional component we creating an input field where user will enter the task
// to be performed and we creating a button to add this task into TodoList 

function TodoInput(props) {
    // Declare a state variable called inputText and initialize it with an empty string
    const [inputText,setInputText] = useState('');

    // Define a function to handle the Enter key press event
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            // Call the addList function from props, passing the inputText as an argument
            props.addList(inputText)
            // Reset the inputText to an empty string
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            // Update the inputText state with the entered value
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        // Call the addList function from props, passing the inputText as an argument
        props.addList(inputText)
        // Reset the inputText to an empty string
        setInputText("")
      }}>+</button>      
    </div>
  );
}

// Export the TodoInput component as the default export
export default TodoInput;
