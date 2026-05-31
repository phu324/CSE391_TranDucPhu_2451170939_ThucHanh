import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);
    
    return (
        <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Bộ đếm: {count}</h2>
            
            {/* Thử thách 2: Hiển thị trạng thái số âm hay dương */}
            <p style={{ fontWeight: "bold", color: count >= 0 ? "#27ae60" : "#c0392b" }}>
                Trạng thái: {count === 0 ? "Số không" : count > 0 ? "Số dương" : "Số âm"}
            </p>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "15px" }}>
                <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
                <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
                {/* Thử thách 1: Thêm nút Tăng 5 */}
                <button onClick={() => setCount(count + 5)} style={{ background: "#2ecc71", color: "white" }}>Tăng (+5)</button>
                <button onClick={() => setCount(count * 2)}>Nhân đôi</button>
                <button onClick={() => setCount(0)} style={{ background: "#7f8c8d", color: "white" }}>Reset</button>
            </div>
        </div>
    );
}

export default NumberState;