import axios from "axios";
import baseURL from "./baseApi";

export const GetUser = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/api/Statistic/GetUserStatistic`
    );
    console.log(response);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.status);
      console.error("Headers:", error.response?.headers);
      console.error("Data:", error.response?.data);
    } else {
      console.error("Error:", error);
    }
    throw error; // Re-throw the error after logging it
  }
};
