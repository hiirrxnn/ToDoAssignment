// Priority levels
export const PRIORITY_LEVELS = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

// Priority colors
export const PRIORITY_COLORS = {
  High: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-300'
  },
  Medium: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-300'
  },
  Low: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300'
  }
};

// Task filter options
export const TASK_FILTERS = [
  { value: 'all', label: 'All Tasks' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
  { value: 'high', label: 'High Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'low', label: 'Low Priority' }
];

// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  TASKS: 'tasks'
};

// Default user for demo
export const DEFAULT_USER = {
  id: 1,
  name: 'Akshat Jaiswal',
  email: 'akshat@example.com',
  password: 'password123',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
};