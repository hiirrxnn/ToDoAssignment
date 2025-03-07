import { GET_WEATHER, WEATHER_ERROR } from '../actions/types';

const initialState = {
  weather: null,
  loading: true,
  error: null
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: payload,
        loading: false,
        error: null
      };
    case WEATHER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default weatherReducer;