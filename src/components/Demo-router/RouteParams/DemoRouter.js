import React from 'react';
// Import thành phần Home từ tệp 'Home.js'.
import Home from './Home.js';
// Import thành phần ProductDetail từ tệp 'ProductDetail.js'.
import ProductDetail from './ProductDetail.js';
// Import các thành phần cần thiết từ thư viện react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Tạo một functional component RouteParams
function RouteParams() {
  // Component trả về một cây phần tử JSX, bắt đầu bằng một đối tượng Router
  return (
    <Router>
      <div>
        {/* Phần đầu của ứng dụng với các liên kết */}
        <div className='router'>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/products/:id">Product</a></li>
          </ul>
        </div>
     {/*Routes component chứa các Route components để xác định các route của ứng dụng */}
        <Routes>
          {/* Route cho trang chủ */}
          <Route path="/" element={<Home />} />
          {/* Route cho trang chi tiết sản phẩm với tham số 'id' */}
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
// Xuất (export) component để có thể sử dụng ở những nơi khác
export default RouteParams;