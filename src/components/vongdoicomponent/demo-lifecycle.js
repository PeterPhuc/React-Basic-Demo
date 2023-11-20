import React from 'react';

class Counter extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { count: 0 };          // Khởi tạo state (trạng thái) của Counter với thuộc tính count bằng 0
        console.log('Constructor called');  // In ra thông báo khi khởi tạo Counter
    }

    componentDidMount() {                   // Phương thức được gọi ngay khi component được render lần đầu tiên
        console.log('Component mounted');   // In ra thông báo khi component đã được mount
    }

    componentDidUpdate() {                  // Phương thức được gọi sau khi component được cập nhật (state thay đổi)
        console.log("Update", this.state.count); // In ra thông báo cập nhật cùng với giá trị state.count hiện tại
    }

    componentWillUnmount() {                // Phương thức được gọi ngay trước khi component bị unmount (gỡ bỏ)
        console.log('Component unmounted'); // In ra thông báo khi component đã được unmount
    }

    increment = () => {                     // Hàm xử lý sự kiện click button để tăng giá trị count
        this.setState({ count: this.state.count + 1 }); // Cập nhật state.count bằng cách tăng thêm 1
    }

    render() { 
        return (
            // Tạo một thẻ div với class "counter"
            <div className="counter"> 
                {/* Tạo một thẻ p để hiển thị giá trị count */}
                <p>Count: {this.state.count}</p> 
                {/* Tạo một button với sự kiện onClick để gọi hàm increment */}
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
}

export default Counter;