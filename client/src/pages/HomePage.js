import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
      HOME PAGE return
      <button onClick={() => loginWithRedirect()}>Log In</button>;
    </div>
  );
};

export default HomePage;
