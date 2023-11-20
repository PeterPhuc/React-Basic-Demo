// Import React
import React from 'react';


// Đây là functional component MyComponent.
// Nó nhận một đối số props và render giao diện dựa trên dữ liệu từ props.
function MyComponent(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>   {/* Xuất tên từ props */}
            <p>{props.message}</p>          {/* Xuất thông điệp từ props */}
        </div>
    );
}


// Xuất MyComponent để có thể sử dụng ở nơi khác
export default MyComponent;


