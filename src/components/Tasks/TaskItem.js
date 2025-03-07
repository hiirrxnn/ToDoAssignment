import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, setTaskPriority } from '../../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  
  const { id, text, completed, priority } = task;
  
  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };
  
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTaskCompletion(id))}
          className="h-5 w-5 text-green-500 rounded mr-3 cursor-pointer"
        />
        
        <span className={`flex-grow ${completed ? 'line-through text-gray-500' : ''}`}>
          {text}
        </span>
        
        <span className={`text-xs px-2 py-1 ml-2 rounded border ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
      
      <div className="relative ml-4">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        
        {showOptions && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="py-1">
              <button
                onClick={() => {
                  dispatch(setTaskPriority(id, 'High'));
                  setShowOptions(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Set High Priority
              </button>
              
              <button
                onClick={() => {
                  dispatch(setTaskPriority(id, 'Medium'));
                  setShowOptions(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Set Medium Priority
              </button>
              
              <button
                onClick={() => {
                  dispatch(setTaskPriority(id, 'Low'));
                  setShowOptions(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Set Low Priority
              </button>
              
              <button
                onClick={() => {
                  dispatch(deleteTask(id));
                  setShowOptions(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;