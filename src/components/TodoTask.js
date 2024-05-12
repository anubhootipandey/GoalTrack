import React, { useEffect, useState } from 'react';
import "../App.css";

const TodoTask = ({ formData, setFormData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');
  const [editedPriority, setEditedPriority] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('key');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);

  const getFilteredData = () => {
    return formData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleDeleteTask = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1); // Remove the task at the specified index
    setFormData(updatedFormData);
    localStorage.setItem('key', JSON.stringify(updatedFormData));
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    const taskToEdit = formData[index];
    setEditedTitle(taskToEdit.title);
    setEditedDescription(taskToEdit.description);
    setEditedDueDate(taskToEdit.dueDate);
    setEditedPriority(taskToEdit.priority);
  };

  const handleSaveEdit = () => {
    const updatedFormData = [...formData];
    updatedFormData[editingIndex] = {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      priority: editedPriority
    };
    setFormData(updatedFormData);
    localStorage.setItem('key', JSON.stringify(updatedFormData));
    setEditingIndex(null);
  };

  const handleTaskDone = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index].done = true; // Add a "done" property to the task object
    setFormData(updatedFormData);
    localStorage.setItem('key', JSON.stringify(updatedFormData));
  };

  const getArrayData = () => {
    const filteredData = getFilteredData();
    return filteredData.map((item, index) => (
      <tr key={index} className={item.done ? 'done' : ''}>
        <td>{index === editingIndex ? <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} /> : item.title}</td>
        <td>{index === editingIndex ? <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} /> : item.description}</td>
        <td>{index === editingIndex ? <input type="date" value={editedDueDate} onChange={(e) => setEditedDueDate(e.target.value)} /> : item.dueDate}</td>
        <td>{index === editingIndex ? <input type="text" value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)} /> : item.priority}</td>
        <td>
          {index === editingIndex ? (
            <button onClick={handleSaveEdit}>Save</button>
          ) : (
            <>
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              {!item.done && <button onClick={() => handleTaskDone(index)}>Done</button>}
            </>
          )}
        </td>
      </tr>
    ));
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className='todo-container'>
      <h3>List of todo item:</h3>
      <input
        type='search'
        placeholder='Search by task title or description'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      
      <div className="table-wrapper">
        <table id='data'>
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
            {getArrayData()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoTask;
