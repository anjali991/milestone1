// components/AuthButton.js

import React from 'react';

const AuthButton = ({ isAuthenticated, onLogin, onLogout }) => {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default AuthButton;
