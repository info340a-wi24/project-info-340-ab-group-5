import React, { useState } from 'react';
import Background from './img/food_background.jpeg';

export default function FoodPage() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: 1,
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    timeOfConsumption: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would replace this console.log with your Firebase integration to save the form data
    // Reset the form state to clear the form after submission
    setFormData({
      foodName: '',
      quantity: 1,
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
      timeOfConsumption: ''
    });
  };

  const foodStyle = {
    backgroundImage: `linear-gradient(rgba(169,169,169,0.9), rgba(169,169,169,0.9)), url(${Background})`
  };

  return (
    <div style={foodStyle}>
      <main>
        <section>
          <h2>Track Your Food Intake</h2>
          <form id="food-input-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="foodName">Food Name:</label>
              <input type="text" id="foodName" name="foodName" value={formData.foodName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required />
            </div>
            <div className="form-group">
              <label htmlFor="calories">Calories (kcal):</label>
              <input type="number" id="calories" name="calories" value={formData.calories} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="protein">Protein (g):</label>
              <input type="number" id="protein" name="protein" value={formData.protein} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="carbs">Carbohydrates (g):</label>
              <input type="number" id="carbs" name="carbs" value={formData.carbs} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="fats">Fats (g):</label>
              <input type="number" id="fats" name="fats" value={formData.fats} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="timeOfConsumption">Time of Consumption:</label>
              <input type="time" id="timeOfConsumption" name="timeOfConsumption" value={formData.timeOfConsumption} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Group 5. All rights reserved.</p>
      </footer>
    </div>
  );
}
