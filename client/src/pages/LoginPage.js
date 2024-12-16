import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";
import useApi, { methodTypes } from "../hooks/useApi";

const LoginPage = () => {
  const { state, getData } = useApi(
    methodTypes.POST,
    "http://localhost:4000/auth/login"
  );

  const handleLogin = async (data) => {
    console.log(data);
    getData(data);
  };
  return (
    <PageLayout>
      <LoginForm type={"login"} handleSubmit={handleLogin} />
    </PageLayout>
  );
};

export default LoginPage;
