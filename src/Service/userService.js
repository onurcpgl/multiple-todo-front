import axiosClient from "../Utils/axiosClient";

const getProfile = () => {
  return axiosClient
    .get(`/user-profile`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const getByUser = (id) => {
  return axiosClient
    .get(`/user-profile/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const updateUser = (values) => {
  return axiosClient
    .put("/user-update", values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const createUser = (values) => {
  return axiosClient
    .post("/user", values)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const userService = {
  getProfile,
  getByUser,
  updateUser,
  createUser,
};
export default userService;
