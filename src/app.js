import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}</h1>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
}

export default App;
