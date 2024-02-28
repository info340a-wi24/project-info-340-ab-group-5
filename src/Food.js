import React, { useState } from 'react'; //import React Component

export default function FoodPage(props)
{
    return (
        <div>
            <main>
                <section>
                    <h2>Track Your Food Intake</h2>
                    <form id="food-input-form">
                        <div class="form-group">
                            <label for="food-name">Food Name:</label>
                        </div>
                        <div class="form-group">
                            <label for="quantity">Quantity:</label>
                        </div>
                        <div class="form-group">
                            <label for="calories">Calories (kcal):</label>
                        </div>
                        <div class="form-group">
                            <label for="protein">Protein (g):</label>
                        </div>
                        <div class="form-group">
                            <label for="carbs">Carbohydrates (g):</label>
                        </div>
                        <div class="form-group">
                            <label for="fats">Fats (g):</label>
                        </div>
                        <div class="form-group">
                            <label for="time-of-consumption">Time of Consumption:</label>
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