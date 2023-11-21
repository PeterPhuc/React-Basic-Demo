import React from "react";
import {BrowserRouter as Router,Routes,Route,Link,Navigate,} from "react-router-dom";
import LoginPage from "./login";

const RedirectPage = () => {
  // Tạo một component chức năng có tên RedirectPage
  const handleLogin = () => {
    // Tạo một function có tên handleLogin, dùng để kiểm tra xem người dùng đã đăng nhập hay chưa.
    if (localStorage.getItem("user-is-login") == "false") {
      // Kiểm tra xem giá trị của key "user-is-login" trong localStorage có bằng 'false' không.
      return false;
      // Nếu giá trị bằng 'false', trả về false, nghĩa là người dùng chưa đăng nhập.
    }
    return true;
    // Nếu giá trị bằng 'true', trả về true, nghĩa là người dùng đã đăng nhập.
  };

  return (
    <>
      <Router>
        {/* Sử dụng Router để quản lý các tuyến đường routing. */}
        {handleLogin() ? <h1>Trang chủ</h1> : <Navigate to="/login" />}
        {/* Kiểm tra điều kiện đã đăng nhập bằng cách gọi function handleLogin().
          Nếu đã đăng nhập, hiển thị nội dung "Trang chủ".
          Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập "/login".
        */}
        <Routes>
          {/* Định nghĩa các tuyến đường routing. */}
          <Route path="/login" element={<LoginPage />} />
          {/* Định nghĩa tuyến đường "/login", sử dụng component LoginPage để hiển thị trang đăng nhập. */}
        </Routes>
      </Router>
    </>
  );
};
export default RedirectPage;
