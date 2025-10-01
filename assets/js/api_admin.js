import axios from "axios";

const BASE_URL = "https://68b2bc2ac28940c9e69d3808.mockapi.io/Producst";

/**
 * Lấy danh sách tất cả sản phẩm
 */
export const apiGetProducts = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API apiGetProducts:", err);
    throw err;
  }
};

/**
 * Thêm sản phẩm mới
 * @param {Object} productData - Dữ liệu sản phẩm cần thêm
 */
export const apiAddProduct = async (productData) => {
  try {
    const res = await axios.post(BASE_URL, productData);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API apiAddProduct:", err);
    throw err;
  }
};

/**
 * Xóa sản phẩm theo ID
 * @param {string|number} productId - ID của sản phẩm cần xóa
 */
export const apiDeleteProduct = async (productId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${productId}`);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API apiDeleteProduct:", err);
    throw err;
  }
};

/**
 * Lấy thông tin chi tiết sản phẩm theo ID
 * @param {string|number} productId - ID của sản phẩm cần lấy
 */
export const apiGetProductById = async (productId) => {
  try {
    const res = await axios.get(`${BASE_URL}/${productId}`);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API apiGetProductById:", err);
    throw err;
  }
};

/**
 * Cập nhật thông tin sản phẩm
 * @param {string|number} productId - ID của sản phẩm cần cập nhật
 * @param {Object} productData - Dữ liệu sản phẩm mới
 */
export const apiUpdateProduct = async (productId, productData) => {
  try {
    const res = await axios.put(`${BASE_URL}/${productId}`, productData);
    return res.data;
  } catch (err) {
    console.error("Lỗi khi gọi API apiUpdateProduct:", err);
    throw err;
  }
};
