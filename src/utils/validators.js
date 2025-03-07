// Validate email format
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate password length
export const isValidPassword = (password, minLength = 6) => {
  return password && password.length >= minLength;
};

// Validate required field
export const isRequired = (value) => {
  return value && value.trim() !== '';
};

// Validate field min length
export const minLength = (value, min) => {
  return value && value.length >= min;
};

// Validate field max length
export const maxLength = (value, max) => {
  return value && value.length <= max;
};