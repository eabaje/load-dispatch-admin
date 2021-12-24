import axios from "axios";
import { API_URL } from "../constants/enum";

export const fetchData = async (url, param) => {
  try {
    const res = await axios.get(`${API_URL}${url}/${param}`);
    if (res) {
      return res.data.data;
    }
  } catch (err) {
    return err;
  }
};

export const fetchDataAll = async (url) => {
  try {
    const res = await axios.get(`${API_URL}${url}`);
    if (res) {
      //  console.log(`data`, res.data.data);
      return res.data.data;
    }
  } catch (err) {
    return err;
  }
};
