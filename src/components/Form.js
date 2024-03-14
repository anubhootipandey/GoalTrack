import React, {useState} from 'react';
import TodoTask from './TodoTask';

const Form = () => {
    const initialTodoData = {
        title:" ", 
        description:" ",
        dueDate:" ", 
        priority:" "
    }
    const [userInput, setUserInput] = useState([initialTodoData]);
    const [formData, setFormData] = useState([initialTodoData]);
    
    const handleUserInput = (event) => {
        // setUserInput();
        const name = event.target.name;
        const value = event.target.value;
        //...value->destructuring of the previous userInput state value
        setUserInput(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();//used to stop the default behavior of an event from happening.
        setFormData(userInput);
    };
    console.log(formData);

    return (
    <form onSubmit={handleSubmit}>
        <label>Title:
            <input type='text' name='title' placeholder='Enter title' value={userInput.title} onChange={handleUserInput} />
        </label>
        <label>Description:
            <input type='textarea' name='description' placeholder='Enter description' value={userInput.description} onChange={handleUserInput} />
        </label>
        <label>Due date:
            <input type='date' name='dueDate' value={userInput.dueDate} onChange={handleUserInput} />
        </label>
        <label>Priority:
            <select name='priority' value={userInput.priority} onChange={handleUserInput}>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
            </select>
        </label>
        <button type='submit'>Add task</button>
        <TodoTask formData={formData} />

    </form>
  );
}

export default Form;