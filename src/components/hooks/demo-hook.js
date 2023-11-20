import React, { useState, useEffect } from 'react';

function DemoUseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function DemoUseEffect() {
    const [title, setTitle] = useState(''); // Khởi tạo state (trạng thái) của DemoUseEffect với thuộc tính title bằng ""

    useEffect(() => { // Hàm effect
        console.log(title); // In ra giá trị của title
    }); // Hàm effect sẽ được gọi khi component được render lần đầu tiên, sau đó sẽ được gọi lại mỗi khi state thay đổi

    return (
        <div>
            <input onChange={ // Sự kiện change của input
                (event) => { // Hàm xử lý sự kiện change
                    setTitle(event.target.value); // Cập nhật giá trị của title
                }
            } />
        </div>
    );
}

function DemoHook() {
    return (
        <>
            <DemoUseState />
            <DemoUseEffect />
        </>
    );
}

export default DemoHook;