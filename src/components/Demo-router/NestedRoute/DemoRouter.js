// Nhúng thư viện React vào file này.
import React from 'react';
// Nhúng các thành phần liên quan đến React Router.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import thành phần Home từ tệp 'Home.js'.
import Home from './Home.js';
// Import thành phần Products từ tệp 'Products.js'.
import Products from './Products.js';
// Import thành phần EditProduct từ tệp 'EditProduct.js'.
import EditProduct from './EditProduct.js';
// Import thành phần ProductD từ tệp 'ProductD.js'.
import ProductDetail from './ProductD.js';
// Tạo một functional component có tên là NestedRoute
function NestedRoute() {
  // Component trả về một cây phần tử JSX
  return (
    <Router>
      <div>
        {/* Phần đầu của ứng dụng với các liên kết */}
        <div className='router'>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/products/:id">ProductId</a></li>
            <li><a href="/products">Product</a></li>
            <li><a href="/products/:id/edit">edit</a></li>
          </ul>
        </div>
     {/* Routes component chứa các Route components để xác định các route của ứng dụng */}
        <Routes>
          {/* Route cho trang chủ */}
          <Route path="/" element={<Home />} />
          {/* Route cho trang danh sách sản phẩm */}
          <Route path="/products" element={<Products />} />
          {/* Route cho trang chi tiết sản phẩm */}
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Route cho trang chỉnh sửa sản phẩm */}
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}
// Xuất (export) component để có thể sử dụng ở những nơi khác
export default NestedRoute;