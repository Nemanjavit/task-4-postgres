import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithPopup } = useAuth0();

  const handleSignUp = async () => {
    await loginWithPopup({});
  };
  return <button onClick={handleSignUp}>SignUp</button>;
};

export default SignUp;
