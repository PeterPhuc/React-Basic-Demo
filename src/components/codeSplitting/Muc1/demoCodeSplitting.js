import React from 'react';
class CodeSplitting extends React.Component {
    // Hàm xử lý khi nút "Cập nhật" được nhấn
    handleClick = () => {
        // Sử dụng `import()` để tải moduleA theo cách bất đồng bộ
        import('./moduleA')
            .then((module) => {
                // Sau khi module được tải thành công, chúng ta nhận được module qua tham số `module`
                // Chúng ta sử dụng `.default` để truy cập default export từ module (moduleA)
                const moduleA = module.default;
                // Gọi hàm `greet()` từ moduleA để hiển thị thông điệp
                moduleA.greet();
            })
            .catch((err) => {
                // Xử lý lỗi nếu có lỗi xảy ra trong quá trình tải moduleA
                alert('Error loading moduleA: ' + err);
            });
    };
    render() {
        return (
            <div>
                <h1>This is Demo CodeSplitting</h1>
                <br></br>
                {/* Khi nút "Cập nhật" được nhấn, hàm `handleClick` sẽ được gọi */}
                <button className="button-33" onClick={this.handleClick}>Cập nhật</button>
            </div>
        );
    }
}
export default CodeSplitting;