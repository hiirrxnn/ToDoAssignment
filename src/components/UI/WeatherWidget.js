import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CircularProgress from './CircularProgress';

const WeatherWidget = () => {
  const { weather, loading, error } = useSelector(state => state.weather);
  
  if (loading) {
    return (
      <Card className="p-4">
        <div className="flex justify-center items-center h-32">
          <CircularProgress />
        </div>
      </Card>
    );
  }
  
  if (error || !weather) {
    return (
      <Card className="p-4">
        <div className="text-center p-4">
          <h3 className="font-semibold text-lg mb-2">Weather</h3>
          <p className="text-gray-600">{error || 'Unable to load weather data'}</p>
        </div>
      </Card>
    );
  }
  
  // Format temperature
  const temp = Math.round(weather.main.temp);
  const condition = weather.weather[0].main;
  const description = weather.weather[0].description;
  const city = weather.name;
  
  // Icon mapping (simplified)
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return (
          <svg className="h-10 w-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1z" clipRule="evenodd" />
          </svg>
        );
      case 'clouds':
        return (
          <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        );
      case 'rain':
      case 'drizzle':
        return (
          <svg className="h-10 w-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        );
      default:
        return (
          <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        );
    }
  };
  
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">Current Weather</h3>
          <p className="text-gray-600">{city}</p>
          <div className="mt-2">
            <span className="text-3xl font-bold">{temp}°C</span>
            <p className="text-gray-600 capitalize">{description}</p>
          </div>
        </div>
        <div>{getWeatherIcon(condition)}</div>
      </div>
    </Card>
  );
};

export default WeatherWidget;