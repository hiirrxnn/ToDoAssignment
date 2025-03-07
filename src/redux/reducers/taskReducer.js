import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_TASK_PRIORITY,
  TASK_ERROR,
  CLEAR_TASKS
} from '../actions/types';

const initialState = {
  tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
  loading: true,
  error: null
};

const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false
      };
    case ADD_TASK:
      const newTasks = [...state.tasks, payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
        loading: false
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter(task => task.id !== payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
        loading: false
      };
    case UPDATE_TASK:
    case SET_TASK_PRIORITY:
      const updatedTasks = state.tasks.map(task =>
        task.id === payload.id ? payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
        loading: false
      };
    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_TASKS:
      localStorage.removeItem('tasks');
      return {
        ...state,
        tasks: [],
        loading: false
      };
    default:
      return state;
  }
};

export default taskReducer;