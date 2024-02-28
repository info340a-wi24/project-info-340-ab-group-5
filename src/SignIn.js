import React, { useState } from 'react'; //import React Component

export default function SignIn(props)
{
    return (
        <div>
            <main>
                <section>
                    <h2>Please Input Your Information</h2>
                    <div className='form-group'>
                        <label>Username:</label>
                    </div>
                    <div className='form-group'>
                        <label>Gender:</label>
                    </div>
                    <div className='form-group'>
                        <label>Height:</label>
                    </div>
                    <div className='form-group'>
                        <label>Weight:</label>
                    </div>
                    <div className='form-group'>
                        <label>Weight Goal:</label>
                    </div>
                    <div className='form-group'>
                        <label>Daily Calorie Goal:</label>
                    </div>
                </section>
            </main>
        </div>
    );
}