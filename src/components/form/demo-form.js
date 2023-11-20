// Import React từ thư viện 'react'
import React from 'react';

// Ví dụ Demo mục 1.2: phần Text area
// Định nghĩa một component lớp 'EssayForm' kế thừa từ 'React.Component'
class EssayForm extends React.Component {
    // Constructor của component, được gọi khi component được khởi tạo
    constructor(props) {
        // Gọi constructor của lớp cha (React.Component) và truyền props vào
        super(props);
        // Khởi tạo trạng thái ban đầu của component với giá trị mặc định cho textarea
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };
        // Bind các phương thức với instance của component để đảm bảo this đúng context
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Phương thức xử lý thay đổi giá trị của textarea
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    // Phương thức xử lý khi gửi form
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);   // Hiển thị thông báo
        event.preventDefault();                                 // Ngăn chặn hành vi mặc định của form
    }
    // Phương thức render, trả về JSX để hiển thị giao diện
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />{/*TextArea*/}
                </label><br></br>
                <input type="submit" value="Submit" className='input_css' /> {/* Button */}
            </form>
        );
    }
}


// Ví dụ Demo mục 1.2: phần The select Tag
// Định nghĩa một component lớp 'FlavorForm' kế thừa từ 'React.Component'
class FlavorForm extends React.Component {
    // Constructor của component, được gọi khi component được khởi tạo
    constructor(props) {
        // Gọi constructor của lớp cha (React.Component) và truyền props vào
        super(props);
        // Khởi tạo trạng thái ban đầu của component với giá trị mặc định cho select
        this.state = { value: 'coconut' };
        // Bind các phương thức với instance của component để đảm bảo this đúng context
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // Phương thức xử lý thay đổi giá trị của select
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    // Phương thức xử lý khi gửi form
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value); // Hiển thị thông báo
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    }
    // Phương thức render, trả về JSX để hiển thị giao diện
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:<br></br>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label><br></br>
                <input type="submit" value="Submit" className='input_css' /> {/* Button */}
            </form>
        );
    }
}


// Ví dụ Demo mục 2: phần Controlled Component
// Định nghĩa một component lớp 'ControlledForm' kế thừa từ 'React.Component'
class ControlledForm extends React.Component {
    // Constructor của component, được gọi khi component được khởi tạo
    constructor(props) {
        // Gọi constructor của lớp cha (React.Component) và truyền props vào
        super(props);
        // Khởi tạo trạng thái ban đầu của component với giá trị mặc định cho input
        this.state = { inputText: '' };
    }
    // Phương thức xử lý thay đổi giá trị của input
    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    }
    // Phương thức xử lý khi gửi form
    handleSubmit = (event) => {
        alert('Submitted: ' + this.state.inputText); // Hiển thị thông báo
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    }
    // Phương thức render, trả về JSX để hiển thị giao diện
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                />
                <button type="submit" className='button-33'>Submit</button>
            </form>
        );
    }
}


// Ví dụ Demo mục 2: phần Uncontrolled Component
// Định nghĩa một functional component có tên 'UncontrolledForm'
function UncontrolledForm() {
    // Tạo một tham chiếu (ref) bằng cách sử dụng React.createRef()
    const inputRef = React.createRef();
    // Phương thức xử lý khi gửi form
    const handleSubmit = (event) => {
        // Hiển thị thông báo chứa giá trị của input thông qua tham chiếu
        alert('Submitted: ' + inputRef.current.value);
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    }
    // Trả về JSX để hiển thị giao diện
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} /> {/* Input với tham chiếu */}
            <button type="submit" className='button-33'>Submit</button> {/* Button */}
        </form>
    );
}



// Ví dụ Demo mục 3: Validation form
// Khai báo một lớp LoginForm mở rộng từ React.Component
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const errors = {};

        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }

        console.log('Login data:', { email, password });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    render() {
        const { email, password, errors } = this.state;

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email:  </label>
                        <input type="email" value={email} onChange={this.handleEmailChange} />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password:  </label>
                        <input type="password" value={password} onChange={this.handlePasswordChange} />
                        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    </div>
                    <button type="submit" className='button-33'>Login</button>
                </form>
            </div>
        );
    }
}



function DemoForm() {
    return (
        <>
            {/* <EssayForm />
            <FlavorForm />

            <ControlledForm />
            <UncontrolledForm /> */}

            <LoginForm />
        </>
    );
}

export default DemoForm;