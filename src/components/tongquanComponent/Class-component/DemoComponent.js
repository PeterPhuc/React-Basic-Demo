// Import React từ thư viện 'react'
import React from 'react';
// Định nghĩa một component lớp kế thừa từ React.Component, có tên là 'ClassComponents'
class ClassComponents extends React.Component {
    // Constructor của component, được gọi khi component được khởi tạo
    constructor(props) {
        // Gọi constructor của lớp cha (React.Component)
        super(props);
        // Khởi tạo trạng thái của component với giá trị ban đầu cho 'count' là 0
        this.state = { count: 0 };
    }
    // Phương thức xử lý sự kiện khi nút được nhấp
    handleClick = () => {
        // Sử dụng this.setState để cập nhật trạng thái (count tăng lên 1)
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };
    // Phương thức render, trả về JSX để hiển thị trên giao diện
    render() {
        return (
            <div>
              <h1>Count: {this.state.count}</h1> {/* Hiển thị giá trị của 'count' */}
              <div className="button-wrapper"> {/* Một div với class 'button-wrapper' */}
                    <button className="button-33" role="button"
                        onClick={this.handleClick} /*</div> Sự kiện nhấp nút gọi phương thức 'handleClick' */>
                        Increment
                    </button> {/* Nút 'Increment' */}
              </div>
            </div>
        );
    }
}
// Xuất component 'ClassComponents' như là sự export mặc định của module
export default ClassComponents;