import axios from "axios";
import { useReducer } from "react";

const getDataStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERRO",
};

export const methodTypes = {
  POST: "POST",
  GET: "GET",
};

export const baseUrl =
  process.env.REACT_APP_VERCEL_ENV === "Dev"
    ? "http://localhost:4000"
    : "task-4-postgres.vercel.app";
console.log();
const request = async (method, url, data, config) => {
  switch (method) {
    case methodTypes.POST:
      return await axios.post(url, data, config);
    case methodTypes.GET:
      return await axios.get(url, config);

    default:
      throw new Error("Uknow request method");
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case getDataStates.LOADING:
      return { ...state, isLoading: true };
    case getDataStates.SUCCESS:
      return { data: action.data, isLoading: false, error: "" };
    case getDataStates.ERROR:
      return { data: null, isLoading: false, error: action.error };
    default:
      throw new Error("Uknow action type");
  }
};

const useApi = (method, url, config) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: "",
    isLoading: false,
  });
  let cancel = false;

  const getData = async (data) => {
    dispatch({ type: getDataStates.LOADING });
    console.log(data);

    try {
      const response = await request(method, url, data, config);
      if (cancel) return;
      dispatch({ type: getDataStates.SUCCESS, data: response.data });
    } catch (error) {
      if (cancel) return;
      console.log(error);

      dispatch({ type: getDataStates.ERROR, error: error.response.data.msg });
    }
  };

  return { state, getData };
};

export default useApi;
