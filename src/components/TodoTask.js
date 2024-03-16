import React,{useEffect} from 'react';
import "../App.css";

const TodoTask = ({formData, setFormData}) => {
  //optional chaining
  useEffect(() => {
    const storedFormData = localStorage.getItem('key');
    if (storedFormData) {
        setFormData(JSON.parse(storedFormData));
    }
}, [setFormData]);

  const getArrayData = () => {
    const data = formData.map((item) => {
      return <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.dueDate}</td>
      <td>{item.priority}</td>
      </tr>
    })
    return data;
  }
  console.log("result", formData);
  return (
    <div className='todo-container'>
    <h3>List of todo item:</h3>
    <input type='search' placeholder='Search by task title or description' />
    <table id='data'>
    <thead>
    <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Priority</th>
    </tr>
    </thead>
    <tbody>
      {getArrayData()}
    </tbody>
    </table>
    </div>
  );
}

export default TodoTask;