import React from 'react'; // Import React
// Sử dụng React.lazy để tải LazyComponent một cách lười biếng
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function DemoLazyload() {
    // Sử dụng React.useState để tạo biến state
    const [isComponentLoaded, setComponentLoaded] = React.useState(null);

    React.useEffect(() => {
        const loadComponent = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Đợi 2 giây
            // Gán LazyComponent vào biến state isComponentLoaded
            setComponentLoaded(<LazyComponent />);
        };
        loadComponent(); // Gọi hàm loadComponent trong useEffect
    }, []);

    return (
        <div>
            <h1>My App</h1> {/* Tiêu đề ứng dụng */}
            {/* Kiểm tra và hiển thị nội dung tải */}
            {isComponentLoaded !== null ? isComponentLoaded : <div>Loading...</div>}
        </div>
    );
}
export default DemoLazyload; // Xuất component DemoLazyload để sử dụng ở nơi khác