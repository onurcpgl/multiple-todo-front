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
const userInvite = (value) => {
  return axiosClient
    .post(`/user-invite`, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const teamMember = (id) => {
  return axiosClient
    .get(`/team-member/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const notTeamMember = (teamSlug) => {
  return axiosClient
    .get(`/get-team-member/${teamSlug}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const teamOwner = (teamId) => {
  return axiosClient
    .get(`/team-owner/${teamId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
const isAdmin = (teamId) => {
  return axiosClient
    .get(`/is-admin/${teamId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
const userService = {
  getTeam,
  saveTeam,
  allTeam,
  getByTeam,
  updateTeam,
  deleteTeam,
  userInvite,
  teamMember,
  notTeamMember,
  teamOwner,
  isAdmin,
};
export default userService;
