import React from 'react';
import { Button, TextInput } from '@design-system';
import { login } from './reducer';
import { useDispatch } from 'react-redux';

export const ChangePassword = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      password: 'Password',
      new_password: 'NewPassword',
      confirm_password: 'NewPassword',
    };
    dispatch(login(data));
  };
  return (
    <div>
      <h3>Hello Change Password</h3>
      <TextInput />
      <Button text="Hello" onClick={handleClick} />
    </div>
  );
};

export default ChangePassword;
