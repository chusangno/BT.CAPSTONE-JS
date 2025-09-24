import axios from "axios";

const BASE_URL = "https://68b2bc2ac28940c9e69d3808.mockapi.io/Producst";

//danh sách sản phẩm API
export const getProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API getProducts:", err);
  }
};
