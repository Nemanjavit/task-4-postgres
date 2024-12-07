import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  const { loginWithRedirect, logout } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <PageLayout>
      <div>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
        HOME PAGE
        <button onClick={handleSignUp}>Sign Up</button>;
      </div>
    </PageLayout>
  );
};

export default HomePage;
