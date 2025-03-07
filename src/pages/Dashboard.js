import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout/Layout';
import TaskInput from '../components/Tasks/TaskInput';
import TaskList from '../components/Tasks/TaskList';
import { getWeather } from '../redux/actions/weatherActions';
import WeatherWidget from '../components/UI/WeatherWidget';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Get weather data on component mount
    dispatch(getWeather());
  }, [dispatch]);
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Tasks</h1>
        <p className="text-gray-600">Manage your tasks and stay organized</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <WeatherWidget />
      </div>
      
      <TaskInput />
      <TaskList />
    </Layout>
  );
};

export default Dashboard;