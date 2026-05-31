import { useState } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Sữa" },
        { id: 2, name: "Bánh mì" }
    ]);
    const [inputValue, setInputValue] = useState("");

    function handleAddItem() {
        if (!inputValue.trim()) return; // Không thêm nếu để trống
        
        const newItem = {
            id: Date.now(), // Tạo id duy nhất bằng timestamp
            name: inputValue
        };

        // Quy tắc bất biến (Immutability): Dùng spread operator để tạo mảng mới
        setItems([...items, newItem]);
        setInputValue(""); // Xóa sạch ô input sau khi thêm
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "300px" }}>
            <h2>Danh sách mua sắm (Create)</h2>
            
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Thêm món đồ mới..."
                    style={{ padding: "6px", flex: 1 }}
                />
                <button onClick={handleAddItem} style={{ background: "#2ecc71", color: "white", border: "none", padding: "6px 12px", cursor: "pointer" }}>
                    Thêm
                </button>
            </div>

            <ul style={{ paddingLeft: "20px" }}>
                {items.map(item => (
                    <li key={item.id} style={{ padding: "4px 0" }}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CreateItem;