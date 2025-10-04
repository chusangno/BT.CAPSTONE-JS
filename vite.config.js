import { defineConfig } from 'vite'

// Lấy tên repo của bạn (ví dụ: BT.CAPSTONE-JS)
const baseName = '/BT.CAPSTONE-JS/'; 

export default defineConfig({
  base: baseName, // Đặt Base URL 

  // Quan trọng: Thêm cấu hình build cho ứng dụng đa trang (MPA)
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Thêm các trang khác của bạn vào đây:
        admin: 'admin/admin.html',
        customer: 'customer/customer.html',
      },
    },
  },
});