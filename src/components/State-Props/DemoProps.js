// Import React từ thư viện 'react'
import React from "react";

//Ví dụ Demo Mục 2: Props là gì ?
// Định nghĩa một functional component có tên 'Props'
const Props = (props) => {
    // Trả về JSX để hiển thị giao diện
    return (
        <div>
            <p>Name: {props.name}</p> {/* Hiển thị tên từ prop 'name' */}
            <p>Age: {props.age}</p> {/* Hiển thị tuổi từ prop 'age' */}
        </div>
    );
};
// Định nghĩa một functional component có tên 'DmoProps'
const DmoProps = () => {
    // Trả về JSX để hiển thị giao diện
    return (
        <div>
            <h1>Demo Props</h1> {/* Hiển thị tiêu đề */}
            <Props name="Alice" age="18" /> {/* Gọi component 'Props' với các prop 'name'
            và 'age' */}
        </div>
    );
}
// Xuất component 'DmoProps' như là sự export mặc định của module
export default DmoProps;