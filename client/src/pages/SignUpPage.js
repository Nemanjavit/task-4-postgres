import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import LoginForm from "../components/LoginForm";
import useApi, { baseUrl, methodTypes } from "../hooks/useApi";

const SignUpPage = () => {
  const { state, getData } = useApi(methodTypes.POST, `${baseUrl}/auth/signup`);
  const { error, isLoading } = state;
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    await getData(data);
    if (!state.error) {
      navigate("/login");
    }
  };

  return (
    <PageLayout>
      <LoginForm
        type={"signup"}
        isLoading={isLoading}
        error={error}
        handleSubmit={handleSignUp}
      />
    </PageLayout>
  );
};

export default SignUpPage;
