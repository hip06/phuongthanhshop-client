import axiosClients from "../axiosClients";

const ApiGetProduct = {
  getAll: (data) => {
    const url = "/api/v1/admin/product/get-all";
    return axiosClients.get(url, data);
  },
  create: (data) => {
    return axiosClients({
      method: "POST",
      url: "/api/v1/admin/product/create",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
  },
};

export default ApiGetProduct;
