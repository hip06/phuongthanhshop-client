import axiosClients from "../axiosClients";

const ApiPayment = {
  createBill: (data) => {
    const url = "/api/v1/bill/create";
    return axiosClients.post(url,{...data});  
  },
};

export default ApiPayment;