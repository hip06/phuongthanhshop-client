import axiosClients from "../axiosClients";

export const apiGetCurrent = {
  get: (data) => {
    const url = "/api/v1/user/get-current";
    return axiosClients.post(url, data);
  },
};
