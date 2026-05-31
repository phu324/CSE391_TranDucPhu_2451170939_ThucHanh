import { useState } from "react";

function KeyboardEvents() {
    const [logs, setLogs] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleKeyDown(e) {
        // Xử lý phím Enter
        if (e.key === "Enter") {
            if (!inputValue.trim()) return;
            setLogs([...logs, `⌨️ [Enter]: ${inputValue}`]);
            setInputValue(""); // Clear input sau khi nhấn Enter
        }
        
        // Xử lý phím Escape
        if (e.key === "Escape") {
            setInputValue("");
            setLogs([...logs, `❌ [Escape]: Đã xóa nhanh nội dung input`]);
        }
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px" }}>
            <h2>Keyboard Events</h2>
            <p style={{ fontSize: "14px", color: "#666" }}>💡 Nhập chữ rồi ấn <strong>Enter</strong> để lưu log, hoặc <strong>Esc</strong> để xóa nhanh.</p>
            
            <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập nội dung tại đây..."
                style={{ padding: "8px", width: "100%", marginBottom: "15px" }}
            />

            <h4>Lịch sử thao tác phím:</h4>
            <div style={{ background: "#f5f6fa", padding: "10px", borderRadius: "4px", minHeight: "100px" }}>
                {logs.length === 0 ? (
                    <span style={{ color: "#aaa" }}>Chưa có lịch sử phím bấm...</span>
                ) : (
                    <ul style={{ margin: 0, paddingLeft: "20px" }}>
                        {logs.map((log, index) => (
                            <li key={index} style={{ marginBottom: "4px" }}>{log}</li>
                        ))}
                    </ul>
                )}
            </div>
            {logs.length > 0 && (
                <button onClick={() => setLogs([])} style={{ marginTop: "10px", padding: "4px 8px", background: "#7f8c8d", color: "white", border: "none", cursor: "pointer" }}>
                    Xóa nhật ký
                </button>
            )}
        </div>
    );
}

export default KeyboardEvents;