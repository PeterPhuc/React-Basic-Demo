import React from "react";

//Ví dụ Demo mục 1: React event system
class MyComponent extends React.Component {
    handleClick() { // Khai báo hàm handleClick() sẽ được gọi khi button được click
        console.log("Button clicked!"); // In ra thông báo "Button clicked!" khi hàm handleClick() được gọi
    }

    handlePreventAnchor(e) { // Khai báo hàm handlePreventAnchor() sẽ được gọi khi link được click
        e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ anchor là truy cập link
        console.log("You had clicked a Link."); // In ra thông báo "You had clicked a Link." khi hàm handlePreventAnchor() được gọi
    }

    render() { // Trả về JSX sẽ được render bởi component
        return (
            <>
                {/* Render một button với text "Click me" và gọi hàm handleClick() khi được click */}
                <button onClick={this.handleClick}>Click me</button>
                {/* Render một thẻ anchor với text "Click_Me" và gọi hàm handlePreventAnchor() khi được click */}
                <a href="#" onClick={this.handlePreventAnchor}>
                    Click_Me
                </a>
            </>
        );
    }
}

//Ví dụ Demo mục 2: Synthetic event
class SyntheticEvent extends React.Component {
    handleSyntheticEvent = (event) => {
        event.preventDefault();                     // Ngăn chặn hành động mặc định của button là submit form
        console.log('Synthetic event triggered!');  // In ra thông báo "Synthetic event triggered!" khi hàm handleSyntheticEvent() được gọi
    }

    handleSubmit = (event) => {
        event.preventDefault();             // Ngăn chặn hành động mặc định của form là submit form
        console.log('Form submitted!');     // In ra thông báo "Form submitted!" khi hàm handleSubmit() được gọi
    }

    render() {
        return (
            <div className="Synthetic">
                {/* form sẽ gọi hàm handleSubmit() khi nó được submit */}
                <form onSubmit={this.handleSubmit}>
                    {/* gọi hàm handleSyntheticEvent() khi button được click */}
                    <button onClick={this.handleSyntheticEvent}>Click me</button>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

//Ví dụ Demo mục 3: Truyền tham số xử lý event
class PassParams extends React.Component {
    handleClick = (param) => {
        console.log('Nút đã được nhấp với tham số:', param);
    }
    render() {
        const parameter = 'tham số mẫu';
        return (
            <div className="ParamDemo">
                <button onClick={() => this.handleClick(parameter)}>Nhấp vào tôi</button>
            </div>
        );
    }
}

const DemoEvent = () => {
    return (
        <>
            <MyComponent />
            <SyntheticEvent />
            <PassParams />
        </>
    );
}
export default DemoEvent;