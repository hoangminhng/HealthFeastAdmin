import axios from "axios";
import baseURL from "./baseApi";
// const baseUrl = process.env.REACT_APP_BACK_END_URL;

export const GetTotalStatistic = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/api/Statistic/GetTotalStatistic`
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
