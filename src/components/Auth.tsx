import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser } from 'react-icons/fa';
import Spinner from './Spinner';

const Auth: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, 'user');
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      {isAuthenticated ? (
        <>
          <div className="flex items-center space-x-2 mb-4">
            <FaUser />
            <span>Hola, {user?.name}</span>
          </div>
          <button
            onClick={() => logout({ returnTo: window.location.origin } as any)}
            className="bg-primary text-white p-2 w-full rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-primary text-white p-2 w-full rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;