import { useContext, useReducer } from "react";
import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { makeRequest, methodTypes } from "../helpers/api";
import { fetchReducer, fetchReducerStates } from "../helpers/reducer";
import { makeToast } from "../helpers/notifications";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    data: "",
    error: "",
  });
  const { isLoading, error } = state;

  const handleLogin = async (formData) => {
    dispatch({ type: fetchReducerStates.LOADING });

    try {
      const response = await makeRequest({
        method: methodTypes.POST,
        url: "/auth/login",
        data: formData,
        withCredentials: true,
      });

      dispatch({ type: fetchReducerStates.SUCCESS, data: response });
      setUser({ loggedIn: true });
      makeToast({ msg: response.msg, type: "success" });
      navigate("/");
    } catch (error) {
      dispatch({
        type: fetchReducerStates.ERROR,
        error: error.response.data.msg,
      });

      makeToast({ msg: error.response.data.msg, type: "danger" });
    }
  };

  return (
    <PageLayout>
      <LoginForm
        type={"login"}
        error={error}
        isLoading={isLoading}
        handleSubmit={handleLogin}
      />
    </PageLayout>
  );
};

export default LoginPage;
