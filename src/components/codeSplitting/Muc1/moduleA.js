// Tạo một đối tượng moduleA
const moduleA = {
    // Định nghĩa thuộc tính message với giá trị là "Cập nhật thành công!"
    message: "Cập nhật thành công!",
   
    // Định nghĩa hàm greet, dùng để hiển thị thông điệp
    greet: function () {
      // Sử dụng hàm alert để hiển thị thông điệp trong một hộp thoại
      alert(this.message);
    },
  };
  // Xuất đối tượng moduleA để có thể import và sử dụng trong các component khác
  export default moduleA;