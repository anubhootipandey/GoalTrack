import React from 'react';

const TodoTask = () => {
  return (
    <>
    <h3>List of todo item:</h3>
    <input type='search' placeholder='Search by task title or description' />
    <thead>
    <tr>
        <th>Task No</th>
        <th>Title</th>
        <th>Description</th>
        <th>Due Date</th>
        <th>Priority</th>
        <th>Action</th>
    </tr>
    </thead>
    </>
  );
}

export default TodoTask;