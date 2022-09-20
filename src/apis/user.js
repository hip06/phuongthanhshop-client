import axiosClients from "../axiosClients";

export const  apiGetCurrent = {
  get: (data) => {
    const url = "/api/v1/user/get-current";
    return axiosClients.get(url, data);
  },
};
export const apiAllUsers = {
  get: () => {
    const url = "/api/v1/admin/user/all?page=1";
    return axiosClients.get(url);
  },
};
export const apiDeleteUser = {
  delete: (params) => {
    const url = "/api/v1/admin/user/delete";
    return axiosClients.delete(url, { params });
  },
};
export const apiUpdateUser = {
  put: (data) => {
    const url = "/api/v1/user/update";
    return axiosClients.put(url, data);
  },
};
