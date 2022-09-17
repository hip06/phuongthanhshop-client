import axiosClients from "../axiosClients";

const ApiProduct = {
  getAll: (params) => {
    const url = "/api/v1/admin/product/get-all";
    return axiosClients.get(url, { params });
  },
  create: (data) => {
    const url = "/api/v1/admin/product/create";
    return axiosClients.post(url, data);
  },
  delete: (id) => {
    const url = `/api/v1/admin/product/delete/${id}`;
    return axiosClients.delete(url);
  },
};

export default ApiProduct;
