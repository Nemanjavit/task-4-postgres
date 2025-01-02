import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import LoginForm from "../components/LoginForm";
import { fetchReducer, fetchReducerStates } from "../helpers/reducer";
import { useReducer } from "react";
import { makeRequest, methodTypes } from "../helpers/api";
import { makeToast } from "../helpers/notifications";

const SignUpPage = () => {
  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    error: "",
    data: "",
  });
  const { error, isLoading } = state;
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    dispatch({ type: fetchReducerStates.LOADING });
    try {
      const response = await makeRequest({
        method: methodTypes.POST,
        url: "/auth/signup",
        data: formData,
      });

      dispatch({ type: fetchReducerStates.SUCCESS, data: response });
      makeToast({ msg: response.msg, status: "success" });
      navigate("/login");
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
        type={"signup"}
        isLoading={isLoading}
        error={error}
        handleSubmit={handleSignUp}
      />
    </PageLayout>
  );
};

export default SignUpPage;
