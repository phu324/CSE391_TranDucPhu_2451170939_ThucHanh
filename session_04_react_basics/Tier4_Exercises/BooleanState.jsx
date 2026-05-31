import { useState } from "react";

function BooleanState() {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <div style={{ 
            padding: "20px", 
            fontFamily: "Arial, sans-serif", 
            // Thử thách 2: Thay đổi màu nền của container dựa trên state isOn
            background: isOn ? "#fff" : "#2c3e50", 
            color: isOn ? "#333" : "#fff",
            transition: "all 0.3s ease",
            borderRadius: "8px",
            maxWidth: "400px"
        }}>
            <h2>Công tắc (Boolean State)</h2>
            <p>Trạng thái đèn: <strong>{isOn ? "BẬT 💡" : "TẮT 🌑"}</strong></p>
            
            {/* Thử thách 1: Đổi chữ trên nút bấm tương ứng trạng thái */}
            <button 
                onClick={() => setIsOn(!isOn)}
                style={{
                    padding: "8px 16px",
                    background: isOn ? "#e74c3c" : "#2ecc71",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                {isOn ? "Tắt Đèn" : "Bật Đèn"}
            </button>
        </div>
    );
}

export default BooleanState;