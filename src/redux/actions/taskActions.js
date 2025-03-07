import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_TASK_PRIORITY,
  TASK_ERROR,
  CLEAR_TASKS
} from './types';

// Get all tasks
export const getTasks = () => dispatch => {
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    dispatch({
      type: GET_TASKS,
      payload: tasks
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error fetching tasks'
    });
  }
};

// Add a new task
export const addTask = (taskData) => dispatch => {
  try {
    const newTask = {
      id: Date.now().toString(),
      text: taskData.text,
      priority: taskData.priority || 'Medium',
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    dispatch({
      type: ADD_TASK,
      payload: newTask
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error adding task'
    });
  }
};

// Delete a task
export const deleteTask = (id) => dispatch => {
  try {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error deleting task'
    });
  }
};

// Update a task
export const updateTask = (task) => dispatch => {
  try {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error updating task'
    });
  }
};

// Set task priority
export const setTaskPriority = (id, priority) => dispatch => {
  try {
    // First get the current tasks
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      const updatedTask = {
        ...tasks[taskIndex],
        priority
      };
      
      dispatch({
        type: SET_TASK_PRIORITY,
        payload: updatedTask
      });
    }
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error setting task priority'
    });
  }
};

// Toggle task completion
export const toggleTaskCompletion = (id) => dispatch => {
  try {
    // First get the current tasks
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      const updatedTask = {
        ...tasks[taskIndex],
        completed: !tasks[taskIndex].completed
      };
      
      dispatch({
        type: UPDATE_TASK,
        payload: updatedTask
      });
    }
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error toggling task completion'
    });
  }
};

// Clear all tasks
export const clearTasks = () => dispatch => {
  try {
    dispatch({ type: CLEAR_TASKS });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: 'Error clearing tasks'
    });
  }
};