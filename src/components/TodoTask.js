import React from 'react';

const TodoTask = ({formData}) => {
  //optional chaining
  return (
    <>
    <h3>List of todo item:</h3>
    <input type='search' placeholder='Search by task title or description' />
    <thead>
    <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Priority</th>
        <th>Action</th>
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
    </>
  );
}

export default TodoTask;