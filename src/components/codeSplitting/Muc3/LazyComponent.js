import React from 'react'; // Import thư viện React
function LazyComponent() { // Định nghĩa một component có tên LazyComponent
    return (
        <div> {/* Trả về một phần tử div */}
            <p>This is DemoLazyComponent</p>{/*Hiển thị đoạn văn bản "This is LazyComponent" */}
        </div>
    );
}
// Xuất component LazyComponent để sử dụng ở nơi khác trong ứng dụng.
export default LazyComponent;