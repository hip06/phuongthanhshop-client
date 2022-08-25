import axiosClients from "../axiosClients";

const ApiGetCategory = {
  getAll: (params) => {
    const url = "/api/v1/admin/category/all";
    return axiosClients.get(url, { params });
  },
};

export default ApiGetCategory;
