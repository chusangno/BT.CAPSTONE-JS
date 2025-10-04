import"./main-DC-GXSNi.js";import{a as p}from"./index-ngrFHoWO.js";const b="https://68b2bc2ac28940c9e69d3808.mockapi.io/Producst",y=async()=>{try{return(await p.get(b)).data}catch(e){console.error("Lỗi khi gọi API getProducts:",e)}},r=document.getElementById("productList"),f=document.getElementById("checkoutBtn"),u=document.getElementById("searchInput"),g=document.getElementById("filterSelect"),l=document.getElementById("cartBody"),d=document.getElementById("cartTotal");let i=[],c=JSON.parse(localStorage.getItem("cart"))||[];const h=e=>{r.innerHTML=e.map(n=>`
      <div class="card h-100">
        <img src="${n.image}" class="card-img-top" alt="${n.name}" style="width:100%; height:250px; object-fit:contain;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${n.name}</h5>
          <p class="card-text">${n.desc}</p>
          <p class="card-text"><b>Giá: $${n.price}</b></p>
          <div class="mt-auto">
            <button class="btn btn-danger" onclick="addToCart(${n.id})">Mua</button>
            <button class="btn btn-warning" onclick="viewDetail(${n.id})">Xem chi tiết</button>
          </div>
        </div>
      </div>
    `).join("")},m=()=>{if(!i||!i.length){r.innerHTML='<p class="text-muted">Danh sách sản phẩm trống.</p>';return}let e=i;const n=u.value.toLowerCase().trim(),t=g.value.toLowerCase();t&&(e=e.filter(a=>a.type&&a.type.toLowerCase()===t)),n&&(e=e.filter(a=>a.name&&a.name.toLowerCase().includes(n))),e.length?h(e):r.innerHTML='<p class="text-danger fw-bold">Không tìm thấy sản phẩm phù hợp.</p>'};u.addEventListener("input",m);g.addEventListener("change",m);f.addEventListener("click",()=>{if(!c.length)return alert("Giỏ hàng trống!");const e=c.reduce((n,t)=>n+t.price*t.quantity,0);alert(`Thanh toán thành công! Tổng tiền: $${e}`),c=[],saveCartToLocalStorage(),s()});const s=()=>{if(console.log("Hiển thị lại giỏ hàng"),c.length===0){l.innerHTML=`
      <div class="text-center py-5 text-muted">
        <i class="bi bi-cart-x" style="font-size: 3rem;"></i>
        <p class="mt-3">Giỏ hàng của bạn đang trống.</p>
      </div>
    `,d.innerText="$0";return}let e="",n=0;c.forEach(t=>{const a=t.price*t.quantity;n+=a,e+=`
      <div class="cart-item d-flex align-items-center mb-3">
        <img src="${t.image}" alt="${t.name}" width="60" height="60" class="rounded me-3">
        <div class="flex-grow-1">
          <h6 class="mb-1">${t.name}</h6>
          <p class="mb-1 text-muted">$${t.price} x ${t.quantity}</p>
          <div class="d-flex align-items-center gap-2 mt-2">
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity('${t.id}', 'decrease')" title="Giảm số lượng">
              <i class="bi bi-dash"></i>
            </button>
            <span class="fw-bold">${t.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity('${t.id}', 'increase')" title="Tăng số lượng">
              <i class="bi bi-plus"></i>
            </button>
          </div>
        </div>
        <div class="text-end">
          <p class="fw-bold mb-2 text-success">$${a}</p>
          <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${t.id}')" title="Xóa sản phẩm">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `}),l.innerHTML=e,d.innerText=`$${n}`};window.addToCart=e=>{const n=String(e),t=c.find(a=>a.id===n);if(t)t.quantity+=1;else{const a=i.find(o=>o.id===n);if(a){const o={...a,quantity:1};c.push(o)}}saveCartToLocalStorage(),s()};window.changeQuantity=(e,n)=>{const t=c.findIndex(a=>a.id===e);t!==-1&&(n==="increase"?c[t].quantity+=1:n==="decrease"&&(c[t].quantity-=1,c[t].quantity===0&&c.splice(t,1)),saveCartToLocalStorage(),s())};window.removeFromCart=e=>{c=c.filter(n=>n.id!==e),saveCartToLocalStorage(),s()};window.saveCartToLocalStorage=()=>{localStorage.setItem("cart",JSON.stringify(c))};const v=async()=>{try{i=await y(),h(i),s()}catch(e){console.error("Đã có lỗi xảy ra khi khởi tạo ứng dụng:",e),r.innerHTML='<p class="text-danger">Không thể tải dữ liệu sản phẩm.</p>'}};v();
