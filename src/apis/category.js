import axiosClients from "../axiosClients";

const ApiCategory = {
  getAll: () => {
    const url = "api/v1/category/all?page=all";
    return axiosClients.get(url);
  },
  delete:(params) => {
    const url="api/v1/admin/category/delete";
    return axiosClients.delete(url,{params});
  },
  update:(params) => {
    const url='api/v1/admin/category/update';
    return axiosClients.update(url,{params});
  }
};

export default ApiCategory;
