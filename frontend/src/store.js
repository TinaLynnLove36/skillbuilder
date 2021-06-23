import { configureStore } from '@reduxjs/toolkit';
//import { createStore } from 'redux';
import goalsReducer from './components/Goals/GoalsSlice';
import userReducer from './components/User/UserSlice';


export default configureStore({
  reducer: {
    goals: goalsReducer,
    user: userReducer,
  },
});


