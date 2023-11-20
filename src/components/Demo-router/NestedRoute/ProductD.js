//ProductD.js
// Import React và hook useParams từ thư viện react-router-dom
import React from 'react';
import { useParams } from 'react-router-dom';


// Định nghĩa một thành phần React tên là ProductDetail, nhận props là đối số.
function ProductDetail() {
  // Sử dụng hook useParams để trích xuất giá trị của tham số từ URL, ở đây là 'id'
  const { id } = useParams();
  // Trả về một JSX element (phần giao diện của thành phần).
  return (
    <div>
   {/*Một tiêu đề h1 hiển thị thông tin chi tiết sản phẩm với tham số đường dẫn "id". */}
      <h1>Product Detail for ID {id}</h1>
    </div>
  );
}
//Xuất thành phần ProductDetail để có thể import và sử dụng nó ở nơi khác trong ứng dụng.
export default ProductDetail;