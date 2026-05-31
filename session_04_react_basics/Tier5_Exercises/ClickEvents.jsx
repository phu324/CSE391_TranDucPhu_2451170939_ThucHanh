import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    
    function handleClick() {
        setMessage("Đã click lúc " + new Date().toLocaleTimeString());
        setClickCount(clickCount + 1);
    }
    
    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Click Events</h2>
            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>
            
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleReset} style={{ marginLeft: "10px" }}>Reset</button>
        </div>
    );
}

export default ClickEvents;