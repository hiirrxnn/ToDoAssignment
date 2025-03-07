import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../redux/actions/taskActions';
import TaskItem from './TaskItem';
import Card from '../UI/Card';
import CircularProgress from '../UI/CircularProgress';

const TaskList = () => {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);
  
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  
  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    if (filter === 'high') return task.priority === 'High';
    if (filter === 'medium') return task.priority === 'Medium';
    if (filter === 'low') return task.priority === 'Low';
    return true;
  });
  
  if (loading) {
    return <CircularProgress />;
  }
  
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        
        <div className="flex">
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-md shadow-sm py-1 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
          >
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>
      
      {filteredTasks.length > 0 ? (
        <div>
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500">
          No tasks found. Add some tasks to get started!
        </div>
      )}
      
      {tasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          {tasks.filter(task => task.completed).length} of {tasks.length} tasks completed
        </div>
      )}
    </Card>
  );
};

export default TaskList;