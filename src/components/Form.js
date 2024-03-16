import React, { useState, useEffect } from "react";
import TodoTask from "./TodoTask";
import '../App.css';

const Form = () => {
  const initialUserInput = {
    title: "",
    description: "",
    dueDate: "",
    priority: "P2",
  };
  
  const [userInput, setUserInput] = useState(initialUserInput);
  const [formData, setFormData] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedFormData = localStorage.getItem('key');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput(prevUserInput => ({ ...prevUserInput, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //used to stop the default behavior of an event from happening.
    const updatedFormData = [...formData, userInput]; // Update form data
    setFormData(updatedFormData); // Update form data state
    localStorage.setItem('key', JSON.stringify(updatedFormData)); // Update local storage
    setUserInput(initialUserInput); // Reset userInput to initial state
  };
  console.log(formData);
  
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit} className="form-style">
        <label>
          Title: 
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={userInput.title}
            onChange={handleUserInput}
          />
        </label>
        <label>
          Description: 
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={userInput.description}
            onChange={handleUserInput}
          />
        </label>
        <label>
          Due date:
          <input
            type="date"
            name="dueDate"
            value={userInput.dueDate}
            onChange={handleUserInput}
          />
        </label>
        <label>
          Priority:
          <select
            name="priority"
            value={userInput.priority}
            onChange={handleUserInput}
          >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
            <option value="P4">P4</option>
          </select>
        </label>
        <button type="submit">Add task</button>
      </form>
      <TodoTask formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default Form;
