import axiosClients from "../axiosClients";

const ApiGetCategory = {
  getAll: () => {
    const url = "/api/v1/admin/category/all";
    return axiosClients.get(url);
  },
};

export default ApiGetCategory;
