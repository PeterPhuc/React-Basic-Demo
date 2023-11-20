//Products.js
// Nhúng thư viện React vào file này.
import React from 'react';
// Nhúng thành phần Link từ thư viện React Router.
import { Link } from 'react-router-dom';
// Định nghĩa một thành phần React tên là Products.
function Products() {
    // Khởi tạo một mảng chứa thông tin về các sản phẩm.
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
    ];
    // Trả về một JSX element (phần giao diện của thành phần).
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => {
                        return (
                                    <li key={product.id}>
                                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                                    </li>
                                );
                        }
                    )
                }
            </ul>
        </div>
    );
}
// Xuất thành phần Products để có thể import và sử dụng nó ở nơi khác trong ứng dụng.
export default Products;