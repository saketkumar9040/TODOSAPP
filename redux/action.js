import axios from "axios";
import { SERVER_URL } from "@env";

export const register = (formData) => async (dispatch) => {
  try {
    console.log(JSON.stringify(formData))
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${SERVER_URL}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "registerFailure",
      payload: error.response.data.message,
    });
    console.log(error)
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${SERVER_URL}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(`${SERVER_URL}/getProfile`);

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    dispatch({ type: "addTaskRequest" });

    const { data } = await axios.post(
      `${SERVER_URL}/addTask`,
      {
        title,
        description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "addTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "updateTaskRequest" });

    const { data } = await axios.get(
      `${SERVER_URL}/updateTask/${taskId}`,
      {
        taskId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "updateTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "upadteTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteTaskRequest" });

    const { data } = await axios.delete(
      `${SERVER_URL}/removeTask/${taskId}`,
      {
        taskId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "deleteTaskSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteTaskFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateProfile = (formData) => async (dispatch) => {
  try {
    // console.log(formData)
    dispatch({ type: "updateProfileRequest" });

    const { data } = await axios.put(
      `${SERVER_URL}/updateProfile`,formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch({ type: "updateProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword = (oldPassword,newPassword) => async (dispatch) => {
  try {
    dispatch({ type: "updatePasswordRequest" });
   
    const { data } = await axios.put(
      `${SERVER_URL}/updatePassword`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "updatePasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updatePasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(
      `${SERVER_URL}/logout`
    );
   await dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "logoutFailure",
      payload: error.response.data.message,
    });
  }
};


export const otpVerify = (otp) => async (dispatch) => {
  try {

    dispatch({ type: "otpVerifyRequest" });

    const { data } = await axios.post(`${SERVER_URL}/verify`, {otp}, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "otpVerifySuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "otpVerifyFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {

    dispatch({ type: "forgetPasswordRequest" });

    const { data } = await axios.post(`${SERVER_URL}/forgetPassword`, {email}, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: "forgetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "forgetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (otp,newPassword) => async (dispatch) => {
  try {

    dispatch({ type: "resetPasswordRequest" });

    const { data } = await axios.put(
      `${SERVER_URL}/resetPassword`,
      { otp, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "resetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "resetPasswordFailure",
      payload: error.response.data.message,
    });
  }
};


