import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUser } from 'react-icons/fa';
import Spinner from './Spinner';

const Auth: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const [imgError, setImgError] = useState(false);
  console.log(user, 'user');
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      {isAuthenticated ? (
        <>
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-xl font-semibold">{user?.nickname || 'Usuario'}</h2>
            <p className="text-gray-600">{user?.email}</p>
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