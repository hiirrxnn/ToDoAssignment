import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { user } = useSelector(state => state.auth);
  const { tasks } = useSelector(state => state.tasks);
  
  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const highPriorityTasks = tasks.filter(task => task.priority === 'High').length;
  const mediumPriorityTasks = tasks.filter(task => task.priority === 'Medium').length;
  const lowPriorityTasks = tasks.filter(task => task.priority === 'Low').length;
  
  return (
    <aside className="bg-white shadow-md rounded-lg p-4 h-full">
      <div className="mb-6">
        <div className="flex items-center">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="h-12 w-12 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-lg">{user?.name}</h2>
            <p className="text-gray-600 text-sm">{user?.email}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Overview</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-600">Total Tasks</span>
            <span className="font-medium">{totalTasks}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">Completed</span>
            <span className="font-medium">{completedTasks}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">Remaining</span>
            <span className="font-medium">{totalTasks - completedTasks}</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Priority Breakdown</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="text-red-600">High Priority</span>
            <span className="font-medium">{highPriorityTasks}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-yellow-600">Medium Priority</span>
            <span className="font-medium">{mediumPriorityTasks}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-green-600">Low Priority</span>
            <span className="font-medium">{lowPriorityTasks}</span>
          </li>
        </ul>
      </div>
      
      {/* Progress Chart */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700 mb-2">Progress</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-green-600">
                {totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0}% Complete
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;