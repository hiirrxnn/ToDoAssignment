import { GET_WEATHER, WEATHER_ERROR } from './types';
import axios from 'axios';

// Get weather data from the OpenWeatherMap API
export const getWeather = (location = 'Delhi') => async dispatch => {
  try {
    // You would typically use your own API key here
    const API_KEY = '58ca784660cb687f48f7e9934db828dc';
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    
    dispatch({
      type: GET_WEATHER,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: WEATHER_ERROR,
      payload: 'Error fetching weather data'
    });
  }
};