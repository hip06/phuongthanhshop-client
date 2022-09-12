import axiosClients from "../axiosClients";

const ApiProduct = {
  getAll: (params) => {
    const url = "/api/v1/product/all";
    return axiosClients.get(url, { params });
  },
  create: (data) => {
    const url = "/api/v1/admin/product/create";
    return axiosClients.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default ApiProduct;
