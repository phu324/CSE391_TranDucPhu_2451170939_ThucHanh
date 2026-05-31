import { useState } from "react";

function StringState() {
    const [text, setText] = useState("");
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px" }}>
            <h2>Nhập liệu (String State)</h2>
            
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Nhập chữ vào đây..."
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
            
            <p>Bạn đang nhập: <span style={{ color: "#2980b9", fontWeight: "bold" }}>{text}</span></p>
            {/* Thử thách 1: Hiển thị số ký tự */}
            <p>Số ký tự: <strong>{text.length}</strong></p>
            
            {/* Thử thách 2: Nút xóa nhanh */}
            <button onClick={() => setText("")} style={{ background: "#e74c3c", color: "white", border: "none", padding: "6px 12px", cursor: "pointer" }}>
                Xóa nhanh (Clear)
            </button>
            
            {/* Thử thách 3: Cảnh báo khi nhập quá 20 ký tự */}
            {text.length > 20 && (
                <div style={{ color: "#e74c3c", marginTop: "10px", fontWeight: "bold" }}>
                    ⚠️ Cảnh báo: Bạn đã nhập quá giới hạn 20 ký tự!
                </div>
            )}
        </div>
    );
}

export default StringState;
