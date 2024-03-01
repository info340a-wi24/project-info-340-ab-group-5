import React, { useState } from 'react';

export default function FoodPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <main>
        <section>
          <h2>Track Your Food Intake</h2>
          <form id="food-input-form">
            <div className="form-group">
              <label htmlFor="food-name">Food Name:</label>
              <input type="text" id="food-name" name="food-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" required />
            </div>
            <div className="form-group">
              <label htmlFor="calories">Calories (kcal):</label>
              <input type="number" id="calories" name="calories" required />
            </div>
            <div className="form-group">
              <label htmlFor="protein">Protein (g):</label>
              <input type="number" id="protein" name="protein" />
            </div>
            <div className="form-group">
              <label htmlFor="carbs">Carbohydrates (g):</label>
              <input type="number" id="carbs" name="carbs" />
            </div>
            <div className="form-group">
              <label htmlFor="fats">Fats (g):</label>
              <input type="number" id="fats" name="fats" />
            </div>
            <div className="form-group">
              <label htmlFor="time-of-consumption">Time of Consumption:</label>
              <input type="time" id="time-of-consumption" name="time-of-consumption" required />
            </div>
            <button type="submit">Submit</button>
          </form>
          <hr />
          <h2>To-Do List</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleChange} placeholder="Enter a new task" />
            <button type="submit">Add task to list</button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => handleDelete(index)}>Complete</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Group 5. All rights reserved.</p>
      </footer>
    </div>
  );
}
