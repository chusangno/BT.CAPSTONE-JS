import { getProducts } from "./api.js";

// Lấy các phần tử từ HTML
const productListEl = document.getElementById("productList");
const checkoutBtn = document.getElementById("checkoutBtn");
const searchInput = document.getElementById("searchInput"); // Bổ sung
const filterSelect = document.getElementById("filterSelect"); // Bổ sung
const cartBodyEl = document.getElementById("cartBody"); // Bổ sung
const cartTotalEl = document.getElementById("cartTotal"); // Bổ sung

let products = [];
// *** NÂNG CẤP: Lấy giỏ hàng từ Local Storage nếu có, nếu không thì là mảng rỗng
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===================================================================
// === TOÀN BỘ CÁC HÀM ĐẶT Ở ĐÂY ===
// ===================================================================

// render San pham S
const renderProducts = (arr) => {
  productListEl.innerHTML = arr
    .map(
      (p) => `
      <div class="card h-100 m-2" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="${p.name}" style="width:100%; height:250px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.desc}</p>
          <p class="card-text"><b>Giá: $${p.price}</b></p>
          <div class="mt-auto">
            <button class="btn btn-danger" onclick="addToCart(${p.id})">Mua</button>
            <button class="btn btn-warning" onclick="viewDetail(${p.id})">Xem chi tiết</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
};

// Tìm kiếm SP
const applyFilterSearch = () => {
  if (!products || !products.length) {
    productListEl.innerHTML = `<p class="text-muted">Danh sách sản phẩm trống.</p>`;
    return;
  }

  let filtered = products;
  const keyword = searchInput.value.toLowerCase().trim();
  const type = filterSelect.value.toLowerCase();

  if (type) {
    // Chỉ lọc những sản phẩm CÓ thuộc tính 'type' và khớp với giá trị lọc
    filtered = filtered.filter((p) => p.type && p.type.toLowerCase() === type);
  }

  // Lọc theo từ khóa tìm kiếm
  if (keyword) {
    // Chỉ lọc những sản phẩm CÓ thuộc tính 'name' và chứa từ khóa
    filtered = filtered.filter(
      (p) => p.name && p.name.toLowerCase().includes(keyword)
    );
  }

  if (!filtered.length) {
    productListEl.innerHTML = `<p class="text-danger fw-bold">Không tìm thấy sản phẩm phù hợp.</p>`;
  } else {
    renderProducts(filtered);
  }
};

searchInput.addEventListener("input", applyFilterSearch);
filterSelect.addEventListener("change", applyFilterSearch);

// thanh toán S
checkoutBtn.addEventListener("click", () => {
  if (!cart.length) return alert("Giỏ hàng trống!");
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  alert(`Thanh toán thành công! Tổng tiền: $${total}`);
  cart = [];
  renderCart();
});

//Hiển thị giỏ hàng
const renderCart = () => {
  console.log("Hiển thị lại giỏ hàng");
  if (cart.length === 0) {
    cartBodyEl.innerHTML = `<tr><td colspan="5" class="text-center">Giỏ hàng trống</td></tr>`;
    cartTotalEl.innerText = "0";
    return;
  }
  let htmlContent = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
     htmlContent += `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
          <button class="btn btn-sm btn-secondary" onclick="changeQuantity('${item.id}', 'decrease')">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-secondary" onclick="changeQuantity('${item.id}', 'increase')">+</button>
        </td>
        <td>$${itemTotal}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.id}')">Xóa</button>
        </td>
      </tr>
    `;
  });
  // Cập nhật giao diện
  cartBodyEl.innerHTML = htmlContent;
  cartTotalEl.innerText = `$${total}`;
};

/**
 * Logic thêm sản phẩm vào giỏ hàng
 */
window.addToCart = (productId) => {
  // Chuyển đổi productId (số) thành chuỗi để so sánh
  const productIdAsString = String(productId);

  // So sánh chuỗi với chuỗi
  const itemInCart = cart.find((item) => item.id === productIdAsString);

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    // So sánh chuỗi với chuỗi
    const productToAdd = products.find((p) => p.id === productIdAsString);
    if (productToAdd) {
      const cartItem = {
        ...productToAdd,
        quantity: 1,
      };
      cart.push(cartItem);
    }
  }
  saveCartToLocalStorage();
  renderCart();
};
window.changeQuantity = (productId, action) => {
  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex === -1) return; // Không tìm thấy sản phẩm

  if (action === 'increase') {
    cart[itemIndex].quantity += 1;
  } else if (action === 'decrease') {
    cart[itemIndex].quantity -= 1;
    // Nếu số lượng về 0, xóa sản phẩm khỏi giỏ hàng
    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
    }
  }
  saveCartToLocalStorage();
  renderCart();
};

/**
 * *** MỚI: Xóa sản phẩm khỏi giỏ hàng
 */
window.removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  saveCartToLocalStorage();
  renderCart();
};

//  NÂNG CẤP: Lưu giỏ hàng vào Local Storage
window.saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// ===================================================================
// === TOÀN BỘ CÁC HÀM ĐẶT Ở ĐÂY ===
// ===================================================================

/**
 * KHỞI TẠO ỨNG DỤNG
 * Hàm này sẽ được gọi khi trang được tải
 */
const init = async () => {
  try {
    const productData = await getProducts();
    products = productData;
    renderProducts(products);
  } catch (error) {
    console.error("Đã có lỗi xảy ra khi khởi tạo ứng dụng:", error);
    productListEl.innerHTML = `<p class="text-danger">Không thể tải dữ liệu sản phẩm.</p>`;
  }
};
init();
