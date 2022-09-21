import axiosClients from "../axiosClients";

const ApiCategory = {
  getAll: (params) => {
    const url = "/api/v1/category/admin";
    return axiosClients.get(url, { params });
  },
  // getAll for Admin
  getAllByUser: (params) => {
    const url = "/api/v1/category";
    return axiosClients.get(url, { params });
  },
  // getAll for User
  delete: (params) => {
    const url = "/api/v1/category";
    return axiosClients.delete(url, { params });
  },
  create: (data) => {
    const url = "/api/v1/category/create";
    return axiosClients.post(url, data);
  },
  update: (data) => {
    const url = "/api/v1/category";
    return axiosClients.put(url, data);
  },
};

export default ApiCategory;
