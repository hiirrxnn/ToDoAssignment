import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// Mock user data - in a real app, this would come from an API
const mockUsers = [
  {
    id: 1,
    name: 'Akshat Jaiswal',
    email: 'akshat@example.com',
    password: 'password123',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
];

// Load user data from localStorage
export const loadUser = () => dispatch => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return dispatch({
        type: AUTH_ERROR
      });
    }

    // In a real app, you would verify the token with an API
    // For this mock, we'll just check if it's the preset token
    if (token === 'mock-jwt-token') {
      dispatch({
        type: USER_LOADED,
        payload: mockUsers[0]  // Use the mock user data
      });
    } else {
      dispatch({
        type: AUTH_ERROR
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register a new user
export const register = ({ name, email, password }) => dispatch => {
  try {
    // In a real app, you would make an API call to register
    // For this mock, we'll just simulate a successful registration
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        token: 'mock-jwt-token',
        user: {
          id: Date.now(),
          name,
          email,
          avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }
      }
    });

    // Load user after registration
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: 'Registration failed. Please try again.'
    });
  }
};

// Login user
export const login = (email, password) => dispatch => {
  try {
    // In a real app, you would make an API call to login
    // For this mock, we'll check against our mock users
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: 'mock-jwt-token',
          user
        }
      });

      // Load user after login
      dispatch(loadUser());
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Invalid credentials'
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: 'Login failed. Please try again.'
    });
  }
};

// Logout user
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};