# ⚡ Quick Start Guide - SCSS Restructure

## 🚀 Chạy Dự Án

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Cấu Trúc SCSS

```
assets/scss/
├── _variables.scss    → Biến toàn cục
├── _base.scss        → Reset & animations
├── main.scss         → Import tất cả
└── pages/
    ├── _home.scss    → Trang chủ
    ├── _customer.scss → Trang bán hàng
    └── _admin.scss   → Trang quản trị
```

## 🎨 Thay Đổi Màu Sắc

**File:** `assets/scss/_variables.scss`

```scss
// Đổi màu chính
$primary-color: #667eea;     // Purple
$primary-dark: #764ba2;      // Dark purple

// Đổi màu trạng thái
$success-color: #28a745;     // Green
$danger-color: #dc3545;      // Red
$warning-color: #ffc107;     // Yellow
```

## 📏 Thay Đổi Kích Thước

```scss
// Spacing
$spacing-sm: 0.5rem;   // 8px
$spacing-md: 1rem;     // 16px
$spacing-lg: 1.5rem;   // 24px

// Border radius
$border-radius-md: 10px;
$border-radius-lg: 15px;
```

## ✨ Sử Dụng Animations

```scss
// Trong file SCSS của bạn
.my-element {
  animation: fadeInUp 0.6s ease-out;
}

// Animations có sẵn:
// fadeIn, fadeInUp, fadeInDown
// slideInLeft, slideInRight
// pulse, shimmer, rotate, spin
```

## 📱 Responsive Design

```scss
.my-element {
  width: 100%;
  
  @media (max-width: $breakpoint-sm) {
    width: 50%;
  }
}

// Breakpoints:
// $breakpoint-xs: 576px
// $breakpoint-sm: 768px
// $breakpoint-md: 992px
```

## 🎯 Thêm Trang Mới

1. **Tạo file SCSS:**
   ```bash
   assets/scss/pages/_newpage.scss
   ```

2. **Viết styles:**
   ```scss
   // _newpage.scss
   .newpage-container {
     background: $bg-primary;
     padding: $spacing-xl;
   }
   ```

3. **Import vào main.scss:**
   ```scss
   @import 'pages/newpage';
   ```

4. **Tạo HTML và thêm script:**
   ```html
   <script type="module" src="/assets/js/main.js"></script>
   ```

## 🐛 Fix Lỗi Thường Gặp

### Styles không hiển thị?
```bash
# 1. Restart dev server
Ctrl + C
npm run dev

# 2. Clear browser cache
Ctrl + Shift + R
```

### SCSS compile error?
- Kiểm tra syntax (dấu `;` và `}`)
- Kiểm tra biến đã được định nghĩa chưa
- Xem console để biết lỗi cụ thể

## 📝 Best Practices

1. **Luôn dùng biến:**
   ```scss
   // ❌ Không tốt
   color: #667eea;
   
   // ✅ Tốt
   color: $primary-color;
   ```

2. **Tổ chức theo trang:**
   - Home styles → `_home.scss`
   - Customer styles → `_customer.scss`
   - Admin styles → `_admin.scss`

3. **Sử dụng nesting hợp lý:**
   ```scss
   .card {
     padding: $spacing-md;
     
     &:hover {
       transform: translateY(-5px);
     }
     
     .card-title {
       color: $primary-color;
     }
   }
   ```

## 🔗 Links Hữu Ích

- Dev Server: `http://localhost:5174`
- Tài liệu đầy đủ: `SCSS-RESTRUCTURE.md`
- README: `README.md`

## ✅ Checklist Trước Khi Deploy

- [ ] Test tất cả trang
- [ ] Check responsive trên mobile
- [ ] Run `npm run build`
- [ ] Test production build với `npm run preview`
- [ ] Check console không có lỗi
- [ ] Verify tất cả styles hiển thị đúng

---

**Need help?** Check `SCSS-RESTRUCTURE.md` for detailed documentation.
