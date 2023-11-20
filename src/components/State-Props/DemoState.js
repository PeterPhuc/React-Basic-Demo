// Import React từ thư viện 'react'
import React from "react";

// Ví dụ Demo Mục 1: State là gì ?
// Định nghĩa một component lớp 'DmoState_1' kế thừa từ 'React.Component'
class DmoState_1 extends React.Component {
  // Constructor của component, được gọi khi component được khởi tạo
  constructor(props) {
    // Gọi constructor của lớp cha (React.Component) và truyền props vào
    super(props);
    // Khởi tạo trạng thái của component với thuộc tính 'Demo' và giá trị "DemoSate_1"
    this.state = { Demo: "DemoSate" };
  }
  // Phương thức render, trả về JSX để hiển thị giao diện
  render() {
    return (
        <div>
            <h1>ReactJS căn bản</h1>          {/* Hiển thị tiêu đề */}
            <h2>{this.state.Demo}</h2>        {/* Hiển thị giá trị của trạng thái 'Demo' */}
        </div>
    );
  }
}


// Ví dụ Demo mục 4: Read state và set state
// Định nghĩa một component lớp 'DmoState' kế thừa từ 'React.Component'
class DmoState extends React.Component {
    // Constructor của component, được gọi khi component được khởi tạo
    constructor(props) {
        // Gọi constructor của lớp cha (React.Component) và truyền props vào
        super(props);
        // Khởi tạo trạng thái ban đầu của component với các thuộc tính 'Demo' và 'isUpdated'
        this.state = {
            Demo: "DemoState",
            isUpdated: false
        };
    }
    // Phương thức render, trả về JSX để hiển thị giao diện
    render() {
        return (
            <div>
              <h1>ReactJS căn bản</h1> {/* Hiển thị tiêu đề */}
              <h2>{this.state.Demo}</h2> {/* Hiển thị giá trị của thuộc tính 'Demo' */}
              <div className="button-wrapper"> {/* Một div với class 'button-wrapper' */}
                  <button className="button-33" role="button"
                        onClick={() => {
                            // Xử lý sự kiện khi nút được nhấp
                            this.setState(prevState => ({
                                Demo: prevState.isUpdated ? "DemoState"
                                : "DemoStateCapNhat",
                                isUpdated: !prevState.isUpdated
                            }));
                        }}
                    >
                        Cập Nhật
                  </button> {/* Nút 'Cập Nhật' */}
              </div>
            </div>
        );
    }
}

export {DmoState_1, DmoState};