import axios from "axios";
import api from "./clientapi";
export const getmainservice = async () => {
  try {
    const res = await api.get("/users/getservice");
    console.log("Data fetched successfully:", res.data);
    // Return the data payload from the response
    return res.data;
  } catch (error) {
    // Log the error so your app doesn't fail silently
    console.error(
      "Failed to fetch main service:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
