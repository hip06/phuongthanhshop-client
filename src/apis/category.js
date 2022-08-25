import axiosClients from "../axiosClients";

const ApiGetCategory = {
  getAll: (params) => {
    const url = "/users/currentUser";
    return axiosClients.get(url, { params });
  },
};

export default ApiGetCategory;
