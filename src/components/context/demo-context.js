import React from "react";

// Ví dụ Demo không dùng context
const ComponentChau1 = (props) => { // Khai báo component Chau1
    return <h1>Ông bảo là "{props.message}"</h1>; // Render ra một thẻ h1 với nội dung là "Ông bảo là {props.message}"
};
const ComponentCha1 = (props) => { // Khai báo component Cha1
    return <ComponentChau1 {...props} />; // Render ra component Chau1 với các props được truyền vào
};
const ComponentOng1 = () => { // Khai báo component Ong1
    const message = "Vào w3chools học lập trình"; // Khởi tạo biến message với giá trị là "Vào w3chools học lập trình"
    return <ComponentCha1 message={message} />; // Render ra component Cha1 với props message được truyền vào
};


// Ví dụ Demo có dùng context
const MessageContext = React.createContext(); // Tạo một context tên là MessageContext
class ComponentChau2 extends React.Component { // Khai báo component Chau2
    render() { // Phương thức render
        return <h1>Ông bảo là : "{this.context}"</h1>; // Render ra một thẻ h1 với nội dung là "Ông bảo là : {this.context}"
    }
}
ComponentChau2.contextType = MessageContext; // Thiết lập contextType của component Chau2 là MessageContext
const ComponentOng2 = () => { // Khai báo component Ong2
    return (
        // Tạo một provider của context MessageContext với giá trị là "Vào w3chools học lập trình"
        <MessageContext.Provider value="Vào w3chools học lập trình"> 
            <ComponentChau2 />
        </MessageContext.Provider>
    );
};





// Ví dụ demo mục 4: Sử dụng Context

//Khởi tạo một context
const NumberContext = React.createContext();

//Khai báo một component UpdateNumber
class UpdateNumber extends React.Component {
    render() {
        //Sử dụng context để truy cập vào phương thức updateNumber()
        return (
            <button onClick={() => {
                this.context.update();
            }}>Update Number</button>
        );
    }
}
//Khai báo contextType cho component UpdateNumber
UpdateNumber.contextType = NumberContext;

//Khai báo một component ShowNumber
class ShowNumber extends React.Component {
    render() {
        //Sử dụng context để truy cập vào thuộc tính number
        return (
            <p>{this.context.number}</p>
        );
    }
}

//Khai báo contextType cho component ShowNumber
ShowNumber.contextType = NumberContext;

//Khai báo một component ContextComponent
class ContextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }

    //Phương thức updateNumber() cập nhật giá trị của thuộc tính number
    updateNumber = () => {
        this.setState({
            number: Math.random(),
        });
    };

    render() {
        //Sử dụng NumberContext.Provider để cung cấp giá trị của context cho các component con
        return (
            <NumberContext.Provider
                value={{
                    number: this.state.number,
                    update: this.updateNumber.bind(this),
                }}
            >
                {/* Sử dụng NumberContext.Consumer để truy cập vào giá trị của context trong component con */}
                <NumberContext.Consumer>
                    {() => (
                        <>
                            <ShowNumber />
                            <UpdateNumber />
                        </>
                    )}
                </NumberContext.Consumer>
            </NumberContext.Provider>
        );
    }
}


function DemoContext() {
    return (
        <>
            <ComponentOng1 />
            <ComponentOng2 />
            <ContextComponent />
        </>
    );
}
export default DemoContext;
