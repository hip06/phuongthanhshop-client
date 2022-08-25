import axios from "../axios";

export const apiGetProduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "/api/v1/admin/...",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
