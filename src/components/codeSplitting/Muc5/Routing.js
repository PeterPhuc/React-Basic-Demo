// Nhập các thư viện React và React Router
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Sử dụng React.lazy để tải các component Home và About khi cần thiết
const Home = React.lazy(() => import("./Home.js"));
const About = React.lazy(() => import("./About.js"));

// Tạo một component Routing để quản lý các đường dẫn trong ứng dụng
const Routing = () => {
  return (
    // Sử dụng Router để bao bọc các component con
    <Router>
      
      {/* Tạo các liên kết đến các trang Home và About */}
      <Link to="/">Trang chủ</Link> <br />
      <Link to="/about">Giới thiệu</Link>

      {/* Sử dụng Suspense để hiển thị một component fallback khi các component con đang tải */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Sử dụng Routes và Route để xác định các component sẽ được hiển thị tùy theo đường dẫn */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>

    </Router>
  );
};

// Xuất component Routing để có thể sử dụng ở nơi khác
export default Routing;
