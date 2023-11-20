import React from "react";

// Ví dụ demo Biểu thức trong JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Nguyễn',
  lastName: 'Trí'
};
const Element = () => (<h1>Xin chào, {formatName(user)}! </h1>);


// Ví dụ demo Các toán tử logic
// Ví dụ 1
const MyFunction1 = () => {
  const isAuthenticated = true; 
  const isAdmin = false;
  return (
    // Trả về một div chứa các thông báo khác nhau tùy thuộc vào trạng thái đăng nhập của người dùng
    <div>
      {isAuthenticated && isAdmin && <h1>Bạn là admin đã đăng nhập</h1>}
      {isAuthenticated && !isAdmin && <h1>Bạn là người dùng đã đăng nhập</h1>}
      {!isAuthenticated && <h1>Bạn chưa đăng nhập</h1>}
    </div>
  );
};
// Ví dụ 2
const MyFunction2 = () => {
  const isAuthenticated = true;
  return (
    <div>
      {isAuthenticated ? <h1>Bạn đã đăng nhập</h1> : <h1>Bạn chưa đăng nhập</h1>}
    </div>
  );
};


// Ví dụ Demo Chỉ định các phần tử con
//Đúng cú pháp
//Phải bọc nó bằng một tags
const Demo1 = () => (
  <div>
    <h1>Hello</h1>
    <p>Welcome to ReactJS</p>
  </div>
);
//Viết sai
//Các phần từ không được bọc
// const Demo2 = () => (
//     <h1>Hello</h1>
//     <p>Welcome to ReactJS</p>
// );

const css = {
  'border': '1px solid #000',
}
const css2 = {...{'border-collapse': 'separate',}, ...css};
class Columns extends React.Component {
  render() {
    return (
        <React.Fragment>           {/* Trả về 2 thẻ td ứng với 2 ô trong table */}
            <td style={css}>Hello</td>
            <td style={css}>World</td>
        </React.Fragment> 
    );
  }
}
class Table extends React.Component {
  render() {
    return (
      <table style={css2}>
        <tr>
          <Columns></Columns>     {/* Một component tên là Columns */}
        </tr>
      </table>
    );
  }
}


const DemoJSX = function() {
    return (
        <>
            <Element />

            <MyFunction1 />
            <MyFunction2 />

            <Demo1 />

            <Table />
        </>
    );
}

export default DemoJSX;