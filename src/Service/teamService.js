import axiosClient from "../Utils/axiosClient";

const getTeam = () => {
  return axiosClient
    .get("all-team")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const saveTeam = (values) => {
  return axiosClient
    .post("save-team", values)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const allTeam = async () => {
  return axiosClient
    .get("all-team")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const userService = {
  getTeam,
  saveTeam,
  allTeam,
};
export default userService;
