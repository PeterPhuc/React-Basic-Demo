import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Thực chất, nó đang đặt tên BrowserRouter với biệt danh là Router.
function Home() {
    return <div>Trang chủ</div>;
}
function About() {
    return <div>Trang giới thiệu</div>;
}
function Contact() {
    return <div>Trang liên hệ</div>;
}
function DemoRoute() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default DemoRoute;