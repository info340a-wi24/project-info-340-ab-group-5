import React, { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignIn(props) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [weightGoal, setWeightGoal] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail('');
        setPassword('');
        setErrorMessage('');
        setGender('');
        setHeight('');
        setWeight('');
        setWeightGoal('');
        setCalorieGoal('');
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'username') setUsername(value);
    else if (name === 'gender') setGender(value);
    else if (name === 'height') setHeight(value);
    else if (name === 'weight') setWeight(value);
    else if (name === 'weightGoal') setWeightGoal(value);
    else if (name === 'calorieGoal') setCalorieGoal(value);
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        setUsername('');

        await updateProfile(userCredential.gender, { displayName: gender });
        setGender('');

        await updateProfile(userCredential.height, { displayName: height });
        setHeight('');

        await updateProfile(userCredential.weight, { displayName: weight });
        setWeight('');

        await updateProfile(userCredential.weightGoal, { displayName: weightGoal });
        setWeightGoal('');

        await updateProfile(userCredential.calorieGoal, { displayName: calorieGoal });
        setCalorieGoal('');

        props.setShowSignIn(false);
        props.setCurrentUser({
          username: userCredential.user,
          gender: userCredential.gender,
          height: userCredential.height,
          weight: userCredential.weight,
          weightGoal: userCredential.weightGoal,
          dailyCalorieGoal: userCredential.calorieGoal,
        })
      
        setUser(userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      props.setShowSignIn(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setEmail('');
      setPassword('');
      setUsername('');
      setGender('');
      setHeight('');
      setWeight('');
      setWeightGoal('');
      setCalorieGoal('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const errorDiv = errorMessage === '' ? '' : <Alert color="danger">Error: {errorMessage}</Alert>;

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isReadytoSubmit = !!user || !isValidEmail(email) || password === '';
  console.log(!!user);
  console.log(!isValidEmail(email));
  console.log(password === '');

  return (
    <div>
      <FormGroup floating>
        <Label for="email">Email: </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          valid={isValidEmail(email)}
          invalid={!isValidEmail(email)}
          value={email}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Password: </Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Username: </Label>
        <Input
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Gender: </Label>
        <Input
          id="gender"
          name="gender"
          placeholder="Gender"
          value={gender}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Height: </Label>
        <Input
          id="height"
          name="height"
          placeholder="Height"
          value={height}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Weight: </Label>
        <Input
          id="weight"
          name="weight"
          placeholder="Weight"
          value={weight}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Weight Goal: </Label>
        <Input
          id="weightGoal"
          name="weightGoal"
          placeholder="Weight Goal"
          value={weightGoal}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup floating>
        <Label>Daily Calorie Goal: </Label>
        <Input
          id="calorieGoal"
          name="calorieGoal"
          placeholder="Daily Calorie Goal"
          value={calorieGoal}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Button color="primary" className="mr-2" onClick={handleSignUp} disabled={isReadytoSubmit || username === '' || gender === '' || height === '' || weight === '' || weightGoal === '' || calorieGoal === ''}>
          Sign Up
        </Button>
        {' '}
        <Button color="success" className="mr-2" onClick={handleSignIn} disabled={isReadytoSubmit || username !== ''}>
          Sign In
        </Button>
        {' '}
        <Button color="danger" className="mr-2" onClick={handleSignOut} disabled={user === null}>
          Sign Out
        </Button>
      </FormGroup>
      {errorDiv}
      </div>
  );
}

export default SignIn;

/*
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
*/