import axiosClients from "../axiosClients";

const ApiGetProduct = {
  getAll: (params) => {
    const url = "/api/v1/admin/product/get-all";
    return axiosClients.get(url, { params });
  },
};

export default ApiGetProduct;
