import api from "./client";

const getUsers = () => api.get("/api/users");

export default {
  getUsers,
};
