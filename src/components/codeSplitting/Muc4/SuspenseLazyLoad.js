import React, { Suspense } from "react";
// Tạo một component lazy bằng cách sử dụng React.lazy
// Component này sẽ chỉ được tải khi cần thiết
const MyComponent = React.lazy(() => import("./MyComponent"));
// Tạo một component chính để sử dụng component lazy
function SuspenseLazyLoad() { 
    return (
        // Sử dụng Suspense để bao quanh component lazy
        // Suspense sẽ hiển thị fallback khi component lazy đang tải
        <Suspense fallback={<div>Loading...</div>}> 
            {/* Sử dụng component lazy như bình thường */}
            <MyComponent></MyComponent> 
        </Suspense> 
    ); 
} 
// Xuất component để có thể sử dụng ở nơi khác
export default SuspenseLazyLoad; 