# 🛒 Hệ Thống Bán Hàng - Capstone JavaScript Project

Dự án website bán hàng điện thoại với đầy đủ chức năng quản lý sản phẩm và giỏ hàng, được xây dựng bằng JavaScript thuần (Vanilla JS) và Bootstrap 5.

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Tính Năng](#tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [SCSS Architecture](#scss-architecture) ⭐ **MỚI**
- [Cài Đặt](#cài-đặt)
- [Sử Dụng](#sử-dụng)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## 🎯 Giới Thiệu

Đây là một dự án Capstone hoàn chỉnh về website bán hàng điện thoại, bao gồm:
- **Trang Khách Hàng**: Xem sản phẩm, tìm kiếm, lọc và quản lý giỏ hàng
- **Trang Quản Trị**: Quản lý sản phẩm với đầy đủ chức năng CRUD (Create, Read, Update, Delete)

## ✨ Tính Năng

### 🛍️ Trang Khách Hàng (`customer/`)

- ✅ **Hiển thị danh sách sản phẩm** với giao diện card đẹp mắt
- 🔍 **Tìm kiếm sản phẩm** theo tên
- 🎯 **Lọc sản phẩm** theo loại (iPhone, Samsung, Khác)
- 🛒 **Giỏ hàng đầy đủ chức năng**:
  - Thêm sản phẩm vào giỏ
  - Tăng/giảm số lượng
  - Xóa sản phẩm khỏi giỏ
  - Tính tổng tiền tự động
  - Lưu giỏ hàng vào LocalStorage
- 💳 **Thanh toán** với thông báo tổng tiền

### ⚙️ Trang Quản Trị (`admin/`)

- ➕ **Thêm sản phẩm mới** với form validation đầy đủ
- ✏️ **Sửa sản phẩm**: Load dữ liệu vào form và cập nhật
- 🗑️ **Xóa sản phẩm** với xác nhận trước khi xóa
- 📊 **Hiển thị danh sách sản phẩm** dạng bảng với hình ảnh
- ✔️ **Validation**: Kiểm tra tất cả trường bắt buộc và định dạng dữ liệu

### 📝 Thông Tin Sản Phẩm

Mỗi sản phẩm bao gồm:
- Tên sản phẩm
- Giá
- Màn hình
- Camera sau
- Camera trước
- Hình ảnh (URL)
- Mô tả
- Loại (iPhone/Samsung/Khác)

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling tùy chỉnh
- **JavaScript (ES6+)** - Logic ứng dụng
  - ES6 Modules (import/export)
  - Async/Await
  - Arrow Functions
  - Template Literals
  - Destructuring

### Frameworks & Libraries
- **Bootstrap 5.3.2** - UI Framework
- **Bootstrap Icons 1.11.1** - Icon library
- **Axios 1.12.2** - HTTP client cho API calls

### Build Tools
- **Vite 7.1.6** - Build tool và dev server
- **npm** - Package manager

### Backend/API
- **MockAPI.io** - REST API giả lập
  - Base URL: `https://68b2bc2ac28940c9e69d3808.mockapi.io/Producst`

## 📁 Cấu Trúc Dự Án

```
BT.CAPSTONE-JS/
│
├── index.html                      # 🏠 Trang chủ điều hướng
│
├── customer/                       # 👥 Module khách hàng
│   ├── customer.html                 # Giao diện trang bán hàng
│   └── shop.js                    # Logic trang bán hàng
│
├── admin/                          # 🔧 Module quản trị
│   ├── admin.html                 # Giao diện trang quản trị
│   └── admin.js                   # Logic trang quản trị
│
├── assets/                         # 📦 Tài nguyên dùng chung
│   ├── css/
│   │   └── index.css              # CSS tùy chỉnh
│   ├── js/
│   │   ├── api.js                 # API functions cho customer
│   │   ├── api_admin.js           # API functions cho admin
│   │   ├── CartItem.js            # Model giỏ hàng
│   │   └── product.js             # Model sản phẩm
│   └── scss/                      # SCSS files (optional)
│       ├── main.scss
│       ├── variables.scss
│       ├── mixins.scss
│       └── components.scss
│
├── src/
│   └── models/                    # Models bổ sung
│
├── public/                         # Static assets
│
├── node_modules/                   # Dependencies
│
├── package.json                    # NPM configuration
├── package-lock.json              # NPM lock file
└── README.md                      # 📖 File này
```

## 🎨 SCSS Architecture

Dự án sử dụng **SCSS modular architecture** với cấu trúc chuyên nghiệp:

### Cấu Trúc SCSS

```
assets/scss/
├── _variables.scss      # 100+ biến (colors, spacing, fonts, shadows, etc.)
├── _base.scss          # Reset CSS, animations, utility classes
├── main.scss           # Entry point - imports tất cả
└── pages/
    ├── _home.scss      # Styles cho trang chủ
    ├── _customer.scss  # Styles cho trang bán hàng
    └── _admin.scss     # Styles cho trang quản trị
```

### Tính Năng SCSS

- ✅ **100+ Variables**: Colors, spacing, typography, shadows, transitions
- ✅ **9 Keyframe Animations**: fadeIn, fadeInUp, slideInLeft, pulse, shimmer, etc.
- ✅ **Custom Scrollbar**: Gradient scrollbar với smooth hover
- ✅ **Responsive Design**: Breakpoints cho mọi thiết bị
- ✅ **Modular Structure**: Dễ maintain và scale
- ✅ **Hot Reload**: Vite tự động compile và reload

### Quick Start với SCSS

```bash
# Chạy dev server (auto-compile SCSS)
npm run dev

# Build production
npm run build
```

**Đọc thêm:** 
- 📘 [SCSS-RESTRUCTURE.md](./SCSS-RESTRUCTURE.md) - Tài liệu đầy đủ
- ⚡ [QUICK-START.md](./QUICK-START.md) - Hướng dẫn nhanh

## 🚀 Cài Đặt

### Yêu Cầu Hệ Thống

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0

### Các Bước Cài Đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd BT.CAPSTONE-JS
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```

4. **Mở trình duyệt**
```
http://localhost:5173
```

### Build cho Production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

### Preview bản build

```bash
npm run preview
```

## 💻 Sử Dụng

### 1. Trang Chủ

Mở `index.html` - Bạn sẽ thấy 2 lựa chọn:
- **Trang Bán Hàng** - Dành cho khách hàng
- **Trang Quản Trị** - Dành cho admin

### 2. Trang Bán Hàng (Customer)

**Xem sản phẩm:**
- Tất cả sản phẩm hiển thị dạng card với hình ảnh, tên, giá và mô tả

**Tìm kiếm:**
- Nhập tên sản phẩm vào ô "Tìm kiếm theo tên..."
- Kết quả tự động lọc khi bạn gõ

**Lọc theo loại:**
- Chọn loại sản phẩm từ dropdown (iPhone/Samsung/Khác)

**Quản lý giỏ hàng:**
- Click nút **"Mua"** để thêm vào giỏ
- Dùng nút **+/-** để điều chỉnh số lượng
- Click **"Xóa"** để xóa sản phẩm khỏi giỏ
- Click **"Thanh toán"** để hoàn tất đơn hàng

### 3. Trang Quản Trị (Admin)

**Thêm sản phẩm mới:**
1. Điền đầy đủ thông tin vào form
2. Click nút **"Thêm sản phẩm"**
3. Sản phẩm mới sẽ xuất hiện trong bảng

**Sửa sản phẩm:**
1. Click nút **"Sửa"** trên sản phẩm cần chỉnh sửa
2. Thông tin sẽ tự động điền vào form
3. Chỉnh sửa thông tin
4. Click nút **"Cập nhật sản phẩm"**

**Xóa sản phẩm:**
1. Click nút **"Xóa"** trên sản phẩm cần xóa
2. Xác nhận trong hộp thoại
3. Sản phẩm sẽ bị xóa khỏi hệ thống

## 🔌 API Endpoints

### Base URL
```
https://68b2bc2ac28940c9e69d3808.mockapi.io/Producst
```

### Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/` | Lấy danh sách tất cả sản phẩm |
| GET | `/:id` | Lấy thông tin chi tiết 1 sản phẩm |
| POST | `/` | Thêm sản phẩm mới |
| PUT | `/:id` | Cập nhật thông tin sản phẩm |
| DELETE | `/:id` | Xóa sản phẩm |

### Cấu Trúc Dữ Liệu Sản Phẩm

```javascript
{
  "id": "1",
  "name": "iPhone 15 Pro Max",
  "price": "1199",
  "screen": "6.7 inch",
  "backCamera": "48MP",
  "frontCamera": "12MP",
  "image": "https://example.com/iphone15.jpg",
  "desc": "Flagship mới nhất của Apple",
  "type": "iphone"
}
```

## 📸 Screenshots

### Trang Chủ
Giao diện điều hướng với gradient đẹp mắt và 2 lựa chọn chính.

### Trang Bán Hàng
- Hiển thị sản phẩm dạng card
- Thanh tìm kiếm và lọc
- Giỏ hàng với bảng chi tiết

### Trang Quản Trị
- Form nhập liệu đầy đủ với validation
- Bảng hiển thị sản phẩm với hình ảnh
- Nút Sửa/Xóa cho mỗi sản phẩm

## 🎨 Đặc Điểm Kỹ Thuật

### Code Organization
- ✅ **Modular Structure**: Tách biệt rõ ràng giữa customer và admin
- ✅ **ES6 Modules**: Sử dụng import/export
- ✅ **Separation of Concerns**: API logic tách riêng khỏi UI logic
- ✅ **Reusable Components**: Models và utilities có thể tái sử dụng

### Best Practices
- ✅ **Async/Await**: Xử lý bất đồng bộ hiện đại
- ✅ **Error Handling**: Try-catch blocks cho tất cả API calls
- ✅ **Form Validation**: Kiểm tra dữ liệu đầu vào
- ✅ **LocalStorage**: Lưu trữ giỏ hàng bền vững
- ✅ **Responsive Design**: Tương thích mọi thiết bị
- ✅ **Clean Code**: Comments và naming conventions rõ ràng

### UI/UX Features
- 🎨 **Modern Design**: Gradient backgrounds, shadows, hover effects
- 📱 **Responsive**: Bootstrap grid system
- ⚡ **Fast Loading**: Optimized với Vite
- 🔔 **User Feedback**: Alerts và confirmations
- 🎯 **Intuitive Navigation**: Dễ sử dụng cho mọi đối tượng

## 🐛 Troubleshooting

### Lỗi CORS
Nếu gặp lỗi CORS khi gọi API, hãy đảm bảo:
- Sử dụng dev server (npm run dev) thay vì mở file trực tiếp
- API endpoint đúng và hoạt động

### Giỏ hàng không lưu
- Kiểm tra LocalStorage có bị disable không
- Xóa cache và thử lại

### Sản phẩm không hiển thị
- Kiểm tra console để xem lỗi API
- Đảm bảo kết nối internet ổn định
- Verify API endpoint còn hoạt động

## 📝 TODO / Tính Năng Tương Lai

- [ ] Thêm trang chi tiết sản phẩm
- [ ] Xác thực người dùng (Login/Register)
- [ ] Phân quyền Admin/Customer
- [ ] Upload hình ảnh thay vì dùng URL
- [ ] Pagination cho danh sách sản phẩm
- [ ] Sắp xếp sản phẩm (theo giá, tên, etc.)
- [ ] Wishlist/Yêu thích
- [ ] Đánh giá và bình luận sản phẩm
- [ ] Lịch sử đơn hàng
- [ ] Export dữ liệu ra Excel/PDF

## 👨‍💻 Tác Giả

**Đặng Ngọc Tài**
**Nguyễn Văn Sang**

- 🔗 GitHub: [taidangdev](https://github.com/taidangdev)
- 🔗 GitHub: [chusangno](https://github.com/chusangno)
## 📄 License

Dự án này được tạo ra cho mục đích học tập.

## 🙏 Acknowledgments

- Bootstrap team cho UI framework tuyệt vời
- MockAPI.io cho REST API miễn phí
- Vite team cho build tool nhanh chóng
- Axios team cho HTTP client đơn giản

---
