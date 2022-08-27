import axiosClients from "../axiosClients";

const ApiGetProduct = {
  getAll: () => {
    const url = "/api/v1/admin/product/get-all";
    return axiosClients.get(url);
  },
};

export default ApiGetProduct;
