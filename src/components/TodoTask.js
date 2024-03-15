import React from 'react';
import "../App.css";

const TodoTask = ({formData}) => {
  //optional chaining
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
      <tr>
        <td>{formData?.title}</td>
        <td>{formData?.description}</td>
        <td>{formData?.dueDate}</td>
        <td>{formData?.priority}</td>
      </tr>
    </tbody>
    </table>
    </div>
  );
}

export default TodoTask;