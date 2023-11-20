import React from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return <div>Trang chủ</div>;
}
function About() {
  return <div>Trang giới thiệu</div>;
}
function Contact() {
  return <div>Trang liên hệ</div>;
}

function DemoHashRouter() {
  return (
    <HashRouter>
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
export default DemoHashRouter;
