import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";

const Auth: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  console.log(user, "user");
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow mt-14 ">
      {isAuthenticated ? (
        <>
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-xl font-semibold">
              {user?.nickname || "Usuario"}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <button
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            onClick={() => logout({ returnTo: window.location.origin } as any)}
            className="bg-black hover:bg-gray-900 text-white p-2 w-full rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="text-center text-gray-600 mb-4">
            Inicia sesión para sincronizar tus favoritos en diferentes
            dispositivos.
          </p>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-black text-white p-2 w-full rounded"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Auth;
