import {
  apiGetProducts,
  apiAddProduct,
  apiDeleteProduct,
  apiGetProductById,
  apiUpdateProduct,
} from "../assets/js/api_admin.js";

// Lấy các phần tử từ HTML
const productTableBody = document.getElementById("productTableBody");
const productForm = document.getElementById("productForm");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");

// Form inputs
const productIdInput = document.getElementById("productId");
const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const productScreenInput = document.getElementById("productScreen");
const productBackCameraInput = document.getElementById("productBackCamera");
const productFrontCameraInput = document.getElementById("productFrontCamera");
const productImageInput = document.getElementById("productImage");
const productDescInput = document.getElementById("productDesc");
const productTypeInput = document.getElementById("productType");

let products = [];
let isEditMode = false;
let currentEditId = null;

// ===================================================================
// === CÁC HÀM CHÍNH ===
// ===================================================================

/**
 * Hiển thị danh sách sản phẩm ra bảng
 */
const renderProducts = (arr) => {
  if (!arr || arr.length === 0) {
    productTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-muted">Chưa có sản phẩm nào</td>
      </tr>
    `;
    return;
  }

  productTableBody.innerHTML = arr
    .map(
      (p) => `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>$${p.price}</td>
        <td><img src="${p.image}" alt="${p.name}" style="width: 60px; height: 60px; object-fit: cover;"></td>
        <td>${p.desc || "N/A"}</td>
        <td>
          <button class="btn btn-sm btn-warning me-1" onclick="editProduct('${p.id}')">
            <i class="bi bi-pencil"></i> Sửa
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct('${p.id}')">
            <i class="bi bi-trash"></i> Xóa
          </button>
        </td>
      </tr>
    `
    )
    .join("");
};

/**
 * Lấy danh sách sản phẩm từ API và hiển thị
 */
const fetchAndRenderProducts = async () => {
  try {
    products = await apiGetProducts();
    renderProducts(products);
  } catch (error) {
    console.error("Lỗi khi tải danh sách sản phẩm:", error);
    alert("Không thể tải danh sách sản phẩm. Vui lòng thử lại!");
  }
};

/**
 * Validation form - Kiểm tra các trường không được để trống
 */
const validateForm = () => {
  const name = productNameInput.value.trim();
  const price = productPriceInput.value.trim();
  const screen = productScreenInput.value.trim();
  const backCamera = productBackCameraInput.value.trim();
  const frontCamera = productFrontCameraInput.value.trim();
  const image = productImageInput.value.trim();
  const desc = productDescInput.value.trim();
  const type = productTypeInput.value;

  if (!name) {
    alert("Vui lòng nhập tên sản phẩm!");
    productNameInput.focus();
    return false;
  }

  if (!price || isNaN(price) || Number(price) <= 0) {
    alert("Vui lòng nhập giá hợp lệ (số dương)!");
    productPriceInput.focus();
    return false;
  }

  if (!screen) {
    alert("Vui lòng nhập thông tin màn hình!");
    productScreenInput.focus();
    return false;
  }

  if (!backCamera) {
    alert("Vui lòng nhập thông tin camera sau!");
    productBackCameraInput.focus();
    return false;
  }

  if (!frontCamera) {
    alert("Vui lòng nhập thông tin camera trước!");
    productFrontCameraInput.focus();
    return false;
  }

  if (!image) {
    alert("Vui lòng nhập link hình ảnh!");
    productImageInput.focus();
    return false;
  }

  if (!desc) {
    alert("Vui lòng nhập mô tả sản phẩm!");
    productDescInput.focus();
    return false;
  }

  if (!type) {
    alert("Vui lòng chọn loại sản phẩm!");
    productTypeInput.focus();
    return false;
  }

  return true;
};

/**
 * Lấy dữ liệu từ form
 */
const getFormData = () => {
  return {
    name: productNameInput.value.trim(),
    price: productPriceInput.value.trim(),
    screen: productScreenInput.value.trim(),
    backCamera: productBackCameraInput.value.trim(),
    frontCamera: productFrontCameraInput.value.trim(),
    image: productImageInput.value.trim(),
    desc: productDescInput.value.trim(),
    type: productTypeInput.value,
  };
};

/**
 * Reset form về trạng thái ban đầu
 */
const resetForm = () => {
  productForm.reset();
  isEditMode = false;
  currentEditId = null;
  addBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
  productIdInput.value = "";
};

/**
 * Thêm sản phẩm mới
 */
const handleAddProduct = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const productData = getFormData();

  try {
    await apiAddProduct(productData);
    alert("Thêm sản phẩm thành công!");
    resetForm();
    await fetchAndRenderProducts();
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
    alert("Không thể thêm sản phẩm. Vui lòng thử lại!");
  }
};

/**
 * Xóa sản phẩm
 */
window.deleteProduct = async (productId) => {
  const confirmed = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (!confirmed) return;

  try {
    await apiDeleteProduct(productId);
    alert("Xóa sản phẩm thành công!");
    await fetchAndRenderProducts();
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
    alert("Không thể xóa sản phẩm. Vui lòng thử lại!");
  }
};

/**
 * Chỉnh sửa sản phẩm - Load dữ liệu vào form
 */
window.editProduct = async (productId) => {
  try {
    const product = await apiGetProductById(productId);

    // Điền dữ liệu vào form
    productIdInput.value = product.id;
    productNameInput.value = product.name;
    productPriceInput.value = product.price;
    productScreenInput.value = product.screen || "";
    productBackCameraInput.value = product.backCamera || "";
    productFrontCameraInput.value = product.frontCamera || "";
    productImageInput.value = product.image;
    productDescInput.value = product.desc || "";
    productTypeInput.value = product.type || "";

    // Chuyển sang chế độ chỉnh sửa
    isEditMode = true;
    currentEditId = product.id;
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");

    // Scroll lên form
    productForm.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Lỗi khi tải thông tin sản phẩm:", error);
    alert("Không thể tải thông tin sản phẩm. Vui lòng thử lại!");
  }
};

/**
 * Cập nhật sản phẩm
 */
const handleUpdateProduct = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const productData = getFormData();

  try {
    await apiUpdateProduct(currentEditId, productData);
    alert("Cập nhật sản phẩm thành công!");
    resetForm();
    await fetchAndRenderProducts();
  } catch (error) {
    console.error("Lỗi khi cập nhật sản phẩm:", error);
    alert("Không thể cập nhật sản phẩm. Vui lòng thử lại!");
  }
};

// ===================================================================
// === EVENT LISTENERS ===
// ===================================================================

addBtn.addEventListener("click", handleAddProduct);
updateBtn.addEventListener("click", handleUpdateProduct);

// ===================================================================
// === KHỞI TẠO ỨNG DỤNG ===
// ===================================================================

const init = async () => {
  await fetchAndRenderProducts();
};

init();
