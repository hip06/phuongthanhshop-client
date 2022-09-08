import axiosClients from "../axiosClients";

const ApiGetProduct = {
  getAll: (data) => {
    const url = "/api/v1/admin/product/get-all";
    return axiosClients.get(url, data);
  },
  create: (data) => {
    const url = "/api/v1/admin/product/create";
    return axiosClients.post(url, data);
  },
};

export default ApiGetProduct;
