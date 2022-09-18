import axiosClients from "../axiosClients";

const ApiProduct = {
  getAllByAdmin: (params) => {
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
  update: (data, id) => {
    const url = `/api/v1/admin/product/update/${id}`;
    return axiosClients.post(url, data);
  },
  getProductsFollowPage: ({ params }) => {
    const url = "/api/v1/product/all";
    return axiosClients.get(url, { params });
  },
  getProductById: (id) => {
    const url = `/api/v1/admin/product/${id}`;
    return axiosClients.get(url);
  },
};

export default ApiProduct;
