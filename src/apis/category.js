import axiosClients from "../axiosClients";

const ApiCategory = {
  getAll: () => {
    const url = "/api/v1/admin/category/all";
    return axiosClients.get(url);
  },
  delete:(params) => {
    const url="/api/v1/admin/category/delete";
    return axiosClients.delete(url,{params});
  }
};

export default ApiCategory;
