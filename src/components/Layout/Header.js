import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import Button from '../UI/Button';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">To-Do App</h1>
        </div>
        
        {user && (
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 rounded-full mr-2"
              />
              <span className="text-gray-700">{user.name}</span>
            </div>
            
            <Button 
              onClick={() => dispatch(logout())} 
              variant="secondary"
              className="text-sm"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;