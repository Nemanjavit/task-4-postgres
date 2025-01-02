import axios from "axios";

export const methodTypes = {
  POST: "POST",
  GET: "GET",
};

const baseURL =
  process.env.REACT_APP_VERCEL_ENV === "Dev"
    ? "http://localhost:4000"
    : "https://task-4-postgres.vercel.app";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const makeRequest = async ({
  method,
  url,
  data,
  params,
  withCredentials,
}) => {
  try {
    const response = await instance({
      method,
      url,
      data,
      params,
      withCredentials,
    });

    return response.data;
  } catch (error) {
    console.error(`HTTP ${method.toUpperCase()} request failed`);
    throw error;
  }
};
