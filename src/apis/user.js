import axiosClients from "../axiosClients";

export const apiGetCurrent = {
  get: (data) => {
    const url = "/api/v1/user/get-current";
    return axiosClients.post(url,data);
  },
};
export const apiAllUsers = {
  get: () => {
    const url = "/api/v1/admin/user/all?page=1";
    return axiosClients.get(url);
  },
};
