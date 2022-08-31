import axiosClients from "../axiosClients";

const ApiCategory = {
  getAll: () => {
    const url = "/api/v1/category/all?page=all";
    return axiosClients.get(url);
  },
  delete: (params) => {
    const url = "/api/v1/admin/category/delete";
    return axiosClients.delete(url, {params});
  },
  post: (data) => {
    const url = "/api/v1/admin/category/create-new";
    return axiosClients.post(url, data);
  },
  put: (data) => {
    const url = "/api/v1/admin/category/update";
    return axiosClients.put(url, data);
  },
};

export default ApiCategory;
