import axiosClients from "../axiosClients";

const ApiProduct = {
  getAllProducts: (params) => {
    const url = "/api/v1/product/";
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
  update: (data, id) => {
    const url = `/api/v1/admin/product/update/${id}`;
    return axiosClients.post(url, data);
  },
  getProductById: (id) => {
    const url = `/api/v1/admin/product/${id}`;
    return axiosClients.get(url);
  },
};

export default ApiProduct;
