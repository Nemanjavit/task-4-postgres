import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";
import useApi, { baseUrl, methodTypes } from "../hooks/useApi";

const LoginPage = () => {
  const { state, getData } = useApi(methodTypes.POST, `${baseUrl}/auth/login`);

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
