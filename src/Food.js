import React, { useState } from 'react';
import Background from './img/food_background.jpeg';

import { push } from 'firebase/database';

export default function FoodPage(props) {
  const [foodData, setFoodData] = useState({
    foodName: '',
    quantity: 1,
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    timeOfConsumption: '',
  });

  const handleChange = (event) => {
    setFoodData({
      ...foodData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', foodData);
    const food = {
      foodName: foodData.foodName,
      quantity: foodData.quantity,
      calories: foodData.calories,
      protein: foodData.protein,
      carbs: foodData.carbs,
      fats: foodData.fats,
      timeOfConsumption: foodData.timeOfConsumption,
    };
    push(props.foodRef, food)
      .then(() => props.setCalories(props.calories + parseInt(food.calories)))
      .then(() => props.setProtein(props.protein + parseInt(food.protein)))
      .then(() => props.setCarbs(props.carbs + parseInt(food.carbs)))
      .then(() => props.setFats(props.fats + parseInt(food.fats)))
      .then(() => props.setCurrentFood({
        foodName: food.foodName,
        quantity: food.quantity,
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fats: food.fats,
        timeOfConsumption: food.timeOfConsumption,
      }))
      .then(() => props.setSubmitted(true));
  };

  const foodStyle = {
    backgroundImage: `linear-gradient(rgba(169,169,169,0.9), rgba(169,169,169,0.9)), url(${Background})`
  };

  const clearForm = () => {
    setFoodData({
      foodName: '',
      quantity: 1,
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
      timeOfConsumption: '',
    });
    props.setSubmitted(false);
  };

  return (
    <div className='food-input-container' style={foodStyle}>
      <div className='top-background'></div>
      <section className='content-container'>
        {props.submitted ? (
          <section className="submitted-info">
            <h2>Your Food Information</h2>
            <p>Date: {props.currentFood.timeOfConsumption}</p>
            <p>Food Name: {props.currentFood.FoodName}</p>
            <p>Quantity: {props.currentFood.quantity} </p>
            <p>Calories: {props.currentFood.calories}</p>
            <p>Protein: {props.currentFood.protein}</p>
            <p>Carbs: {props.currentFood.carbs}</p>
            <p>Fats: {props.currentFood.fats}</p>
            <button onClick={clearForm}>Clear Form</button>
          </section>
        ) : (
          <main>
            <section>
              <h2>Track Your Food Intake</h2>
              <form id="food-input-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="foodName">Food Name:</label>
                  <input type="text" id="foodName" name="foodName" value={foodData.foodName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" id="quantity" name="quantity" value={foodData.quantity} onChange={handleChange} min="1" required />
                </div>
                <div className="form-group">
                  <label htmlFor="calories">Calories (kcal):</label>
                  <input type="number" id="calories" name="calories" value={foodData.calories} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="protein">Protein (g):</label>
                  <input type="number" id="protein" name="protein" value={foodData.protein} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="carbs">Carbohydrates (g):</label>
                  <input type="number" id="carbs" name="carbs" value={foodData.carbs} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="fats">Fats (g):</label>
                  <input type="number" id="fats" name="fats" value={foodData.fats} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="timeOfConsumption">Time of Consumption:</label>
                  <input type="time" id="timeOfConsumption" name="timeOfConsumption" value={foodData.timeOfConsumption} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
          </section>
        </main>
      )}
      </section>
      <footer>
        <p>&copy; 2024 Group 5. All rights reserved.</p>
      </footer>
    </div>
  );
}