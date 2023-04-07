// AuthButton.js
import React from 'react';
import { Button } from 'react-native-elements';

const AuthButton = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={{ backgroundColor: '#1abc9c', marginBottom: 10 }}
    />
  );
};

export default AuthButton;

