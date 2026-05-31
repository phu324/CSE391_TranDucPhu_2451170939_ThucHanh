import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Input Change Events</h2>
            <input 
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập gì đó..." 
                style={{ padding: "6px", width: "250px" }}
            />
            <p>Giá trị realtime: <strong style={{ color: "#2980b9" }}>{text}</strong></p>
        </div>
    );
}

export default InputEvents;