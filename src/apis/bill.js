import axiosClients from "../axiosClients";

const ApiBill = {
  getAll: (page = "1") => {
    const url = "/api/v1/admin/bill/get-all?page=1";
    return axiosClients.get(url);
  },
};

export default ApiBill;
