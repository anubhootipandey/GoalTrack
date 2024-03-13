import React, {useState} from 'react';

const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('P1');

    const handleSubmit = (event) => {
        event.preventDefault();//used to stop the default behavior of an event from happening.
        setTitle('');//when onSubmit it shows updated title
        setDescription('');//when onSubmit it shows updated description
        setDueDate('');//when onSubmit it shows updated due date 
        setPriority('P1');//when onSubmit it shows updated priority 
    };
    return (
    <form onSubmit={handleSubmit}>
        <label>Title:
            <input type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>Description:
            <input type='textarea' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>Due date:
            <input type='date' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <label>Priority:
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
            </select>
        </label>
        <button type='submit'>Add task</button>
    </form>
  );
}

export default Form;