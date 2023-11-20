import React from 'react';
import { useState } from 'react';
function ExampleComponent() {
  // Ví dụ về sử dụng camelCase trong JSX
  return (
    <div>
      {/* Sử dụng thuộc tính camelCase */}
      <input type="text" placeholder="Type something" onChange={handleInputChange} />
      {/* Sử dụng camelCase trong CSS */}
      <div style={{ backgroundColor: 'lightblue', fontSize: '16px', padding: '10px' }}>
        This is a styled div.
      </div>
      {/* Sử dụng camelCase trong sự kiện */}
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}
// Hàm xử lý sự kiện khi input thay đổi
function handleInputChange(event) {
  console.log('Input changed:', event.target.value);
}
// Hàm xử lý sự kiện khi button được click
function handleButtonClick() {
  console.log('Button clicked!');
}

function StyledComponent() {
  // Định nghĩa đối tượng JavaScript để đặt style cho phần tử
  const divStyle = {
    backgroundColor: 'lightblue',
    fontSize: '16px',
    padding: '10px'
  };
  return (
    <div style={divStyle}>
      This is a styled div.
    </div>
  );
}


function DynamicComponent() {
  // Sử dụng đối tượng state để theo dõi một giá trị thay đổi
  const [isClicked, setIsClicked] = useState(false);
  // Sử dụng đối tượng JavaScript để xử lý sự kiện
  const handleButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {isClicked && <p>The button was clicked!</p>}
    </div>
  );
}


function ListComponent() {
  // Đối tượng JavaScript chứa danh sách dữ liệu
  const data = ['Item 1', 'Item 2', 'Item 3'];


  // Sử dụng đối tượng JavaScript để tạo các phần tử JSX từ danh sách
  const listItems = data.map((item, index) => <li key={index}>{item}</li>);


  return (
    <ul>
      {listItems}
    </ul>
  );
}


// export default ExampleComponent;
// export default StyledComponent; 
// export default DynamicComponent;
export default ListComponent;