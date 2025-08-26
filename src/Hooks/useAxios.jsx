import axios from "axios";
import { config } from "localforage";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-psi-gules.vercel.app/",
});
const useAxios = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  // // Add a request interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //   Add a response interceptor or status code
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const statusCode = error.response.status;
      //   status code checking
      useEffect(() => {
        if (statusCode === 401 || statusCode === 403) {
          (async () => {
            await logOutUser();
            navigate("/login");
          })();
        }
      }, [statusCode, logOutUser]);

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
