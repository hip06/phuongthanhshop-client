import axiosClients from "../axiosClients";

const ApiGetProduct = {
  getAll: (data) => {
    const url = "/api/v1/product/all";
    return axiosClients.get(url,{data});  
  },
  getById: (data) => {
    const url=`/api/v1/admin/product/${data}`;
    return axiosClients.get(url);
  }
};

export default ApiGetProduct;