import axios from "axios";

export const logInAPI = async logindata => {
  console.log("logindata : ", logindata);
  const response = await axios
    .post("/user/login", logindata)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.status);
    });

  return response;
};

export const signUpAPI = async signUpData => {
  console.log("signUpData : ", signUpData);
  const response = await axios
    .post("/user/putuser", signUpData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.status);
    });

  return response;
};

export const logOutAPI = async logoutdata => {
  console.log("logoutdata : ", logoutdata);
  const response = await axios
    .post("/user/logout", logoutdata)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.status);
    });

  return response;
};

export const deleteUserAPI = async deleteUserData => {
  console.log("deleteUserData : ", deleteUserData);
  const response = await axios
    .post("/user/deleteuser", deleteUserData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.status);
    });

  return response;
};

export const loadUserAPI = async userId => {
  console.log("userId : ", userId);
  const response = await axios.get(`/user/${userId}`);
  return response.data;
};

export const editUserAPI = async editUserData => {
  console.log("editUserData : ", editUserData);
  const response = await axios
    .post("user/patchuser", editUserData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.status);
    });

  return response;
};
