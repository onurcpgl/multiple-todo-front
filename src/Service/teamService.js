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

const getByTeam = (slug) => {
  return axiosClient
    .get(`/team/${slug}`)
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

const updateTeam = (values) => {
  return axiosClient
    .put("/update-team", values, {
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
const deleteTeam = (id) => {
  return axiosClient
    .delete(`/delete-team/${id}`)
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
  getByTeam,
  updateTeam,
  deleteTeam,
};
export default userService;
