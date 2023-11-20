// Import các thành phần cần thiết từ thư viện react-router-dom
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
// Component hiển thị nội dung trang chủ
function Home() {
  return <h1>Trang chủ</h1>;
}
// Component hiển thị nội dung trang About
function About() {
  return <h1>About</h1>;
}
// Component hiển thị nội dung trang Contact
function Contact() {
  return <h1>Contact</h1>;
}
// Component chứa các Link và NavLink và sử dụng React Router
function Link_Navlink() {
  return (
    // Bọc tất cả trong thẻ Router để sử dụng react-router
    <Router>
      {/* Hiển thị danh sách Link và NavLink */}
      <ul>
        {/* Div chứa các Link */}
        <div className='div_link'>
          Link
          {/* Sử dụng Link để chuyển đến các đường dẫn */}
          <Link to={'/'}><li>Home</li> </Link>
          <Link to={'/about'}><li>About</li></Link>
          <Link to={'/contact'}><li>Contact</li></Link>
        </div>
        {/* Div chứa các NavLink */}
        <div className='div_link'>
          NavLink
          {/* NavLink giống như Link nhưng có thể thêm các lớp CSS khi đường dẫn đang 
           được kích hoạt */}
          <NavLink to={"/"} ><li>Home</li></NavLink>
          <NavLink to={"/about"} ><li>About</li></NavLink>
          <NavLink to={"/contact"}><li>Contact</li></NavLink>
        </div>
      </ul>
      {/* Hiển thị các Route dựa trên đường dẫn */}
      <Routes>
        {/* Route cho trang chủ */}
        <Route path="/" exact element={<Home />} />
        {/* Route cho trang About */}
        <Route path="/about" element={<About />} />
        {/* Route cho trang Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
// Xuất component để sử dụng ở nơi khác
export default Link_Navlink;