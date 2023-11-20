import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './demo-lifecycle';

class Parent extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = {          // Khởi tạo state (trạng thái) của Parent với thuộc tính isMount bằng false
            'isMount': false
        };
    }
    handleMount() {             // Phương thức xử lý sự kiện click button để mount component
        if (this.state.isMount === false) { // Kiểm tra nếu thuộc tính isMount trong state bằng false
            this.setState({ 'isMount': true }); // Cập nhật state bằng cách set thuộc tính isMount thành true
        }
    }
    handleUnmount() {           // Phương thức xử lý sự kiện click button để unmount component
        if (this.state.isMount === true) {          // Kiểm tra nếu thuộc tính isMount trong state bằng true
            this.setState({ 'isMount': false });    // Cập nhật state bằng cách set thuộc tính isMount thành false
        }
    }
    render() { 
        return (
            <> 
                {/* Tạo button với sự kiện onClick để gọi hàm handleMount */}
                <button onClick={this.handleMount.bind(this)}>Mount</button> 
                {/* Tạo button khác với sự kiện onClick để gọi hàm handleUnmount */}
                <button onClick={this.handleUnmount.bind(this)}>Unmount</button>
                {/* Render component Counter nếu thuộc tính isMount trong state bằng true */}
                {this.state.isMount && <Counter />} 
            </>
        );
    }
}
export default Parent;