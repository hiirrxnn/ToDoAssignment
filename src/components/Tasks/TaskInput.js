import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/taskActions';
import Button from '../UI/Button';

const TaskInput = () => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  
  const dispatch = useDispatch();
  
  const onSubmit = e => {
    e.preventDefault();
    
    if (text.trim() === '') {
      return;
    }
    
    dispatch(addTask({ text, priority }));
    setText('');
  };
  
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex mb-2">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-grow shadow appearance-none border rounded-l-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Add new task..."
        />
        <Button 
          type="submit" 
          className="rounded-l-none py-2"
          disabled={text.trim() === ''}
        >
          Add Task
        </Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Priority:</span>
        
        {['High', 'Medium', 'Low'].map(p => (
          <label key={p} className="inline-flex items-center">
            <input
              type="radio"
              name="priority"
              value={p}
              checked={priority === p}
              onChange={() => setPriority(p)}
              className="form-radio h-4 w-4"
            />
            <span className={`ml-2 text-sm ${
              p === 'High' ? 'text-red-600' : p === 'Medium' ? 'text-yellow-600' : 'text-green-600'
            }`}>
              {p}
            </span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default TaskInput;