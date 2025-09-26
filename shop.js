// src/shop.js
import { getProducts } from "./api.js";
import Product from "./product.js";



    const productListEl = document.getElementById("productList");
    const checkoutBtn = document.getElementById("checkoutBtn");
    
    let products = [];
    let cart = [];

    
    

// render San pham S
const renderProducts = (arr) => {
      productListEl.innerHTML = arr.map(p => `
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
      `).join("");
    };
// onclick xem chi tiec hien thi ket qua 

//khi tăng / giảm số lượng
 

// xem chi tiết san pham


//thanh toán S
  checkoutBtn.addEventListener("click", () => {
      if(!cart.length) return alert("Giỏ hàng trống!");
      const total = cart.reduce((sum,i)=>sum+i.price*i.quantity,0);
      alert(`Thanh toán thành công! Tổng tiền: $${total}`);
      cart=[];
      renderCart();
    });

  
  // Seach tim kiem san pham S Up (26/9)
  const applyFilterSearch = () => {
  if (!products || !products.length) {
    productListEl.innerHTML = `<p class="text-muted">Danh sách sản phẩm trống.</p>`;
    return;
  }

  let filtered = products;
  const keyword = searchInput.value.toLowerCase().trim();
  const type = filterSelect.value.toLowerCase();

  console.log("🔎 keyword nhập:", keyword);
  console.log("🔎 type chọn:", type);
  console.log("📦 products mẫu:", products[0]);

  if (type) {
    filtered = filtered.filter(p => p.type.toLowerCase() === type);
  }

  if (keyword) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(keyword));
  }

  console.log("✅ Kết quả lọc:", filtered);

  if (!filtered.length) {
    productListEl.innerHTML = `<p class="text-danger fw-bold">Không tìm thấy sản phẩm phù hợp.</p>`;
    return;
  }

  renderProducts(filtered);
};

    searchBtn.addEventListener("click", applyFilterSearch);
    searchInput.addEventListener("keypress", e => {
      if(e.key==="Enter") applyFilterSearch();
    });
    filterSelect.addEventListener("change", applyFilterSearch);
    const init = async () => {
  const data = await getProducts();
  console.log("API data:", data[0]); 
  products = data.map(i => new Product(
    i.id, i.name, i.price, i.screen, i.backCamera, i.frontCamera,
    i.image, i.description, i.type
  ));
  renderProducts(products);
};

    // Lấy du lieu tu API
    export default class Products {
  constructor(id, name, price, screen, backCamera, frontCamera, image, desc, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.image = image; 
    this.desc = desc;
    this.type = type;
  }
}


    init();
    
  



