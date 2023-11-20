// Import React và hook useParams từ thư viện react-router-dom
import React from 'react';
import { useParams } from 'react-router-dom';


// Tạo một functional component ProductDetail
function ProductDetail() {
  // Sử dụng hook useParams để trích xuất giá trị của tham số từ URL, ở đây là 'id'
  const { id } = useParams();
  // Trả về JSX hiển thị thông tin chi tiết sản phẩm dựa trên giá trị 'id'
  return <h1>Product Detail for ID {id}</h1>;
}
// Xuất (export) component để có thể sử dụng ở những nơi khác
export default ProductDetail;