import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 }
    ]);

    // State quản lý việc sửa đổi dữ liệu
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    
    // Thử thách 3: State hiển thị thông báo "Đã lưu!" tạm thời
    const [saveMessage, setSaveMessage] = useState("");

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age);
    }

    function cancelEdit() {
        setEditingId(null);
        setEditName("");
        setEditAge("");
    }

    function handleSave(id) {
        // Thử thách 2: Không cho phép lưu nếu chuỗi tên trống
        if (!editName.trim()) {
            alert("Tên không được để trống!");
            return;
        }

        // Tạo mảng mới cập nhật phần tử dựa trên id thông qua hàm .map()
        const updatedItems = items.map(item => 
            item.id === id 
                ? { ...item, name: editName, age: Number(editAge) } 
                : item
        );
        
        setItems(updatedItems);
        setEditingId(null); // Thoát chế độ sửa
        
        // Thử thách 3: Kích hoạt thông báo lưu thành công
        setSaveMessage("🎉 Đã lưu thay đổi thành công!");
        setTimeout(() => setSaveMessage(""), 2500); // Tự động ẩn sau 2.5s
    }

    function handleKeyDown(e, id) {
        if (e.key === "Enter") handleSave(id);
        if (e.key === "Escape") cancelEdit();
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "450px" }}>
            <h2>Quản lý thành viên (Update Inline)</h2>
            
            {saveMessage && (
                <div style={{ background: "#d4edda", color: "#155724", padding: "8px", marginBottom: "10px", borderRadius: "4px", fontWeight: "bold" }}>
                    {saveMessage}
                </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.map(item => (
                    <div key={item.id} style={{ 
                        padding: "12px", 
                        border: "1px solid #ccc", 
                        borderRadius: "6px",
                        background: editingId === item.id ? "#fff9db" : "#fff" // Thử thách 1: Highlight ô chứa dữ liệu khi đang ở chế độ sửa
                    }}>
                        {editingId === item.id ? (
                            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                <input 
                                    type="text" 
                                    value={editName} 
                                    onChange={(e) => setEditName(e.target.value)} 
                                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                                    style={{ padding: "4px", width: "120px", border: "2px solid #f1c40f" }}
                                    placeholder="Nhập tên..."
                                />
                                <input 
                                    type="number" 
                                    value={editAge} 
                                    onChange={(e) => setEditAge(e.target.value)} 
                                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                                    style={{ padding: "4px", width: "60px", border: "2px solid #f1c40f" }}
                                    placeholder="Tuổi"
                                />
                                <button onClick={() => handleSave(item.id)} style={{ background: "#2ecc71", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}>
                                    💾 Lưu
                                </button>
                                <button onClick={cancelEdit} style={{ background: "#95a5a6", color: "white", border: "none", padding: "4px 8px", cursor: "pointer" }}>
                                     hủy
                                </button>
                            </div>
                        ) : (
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span><strong>{item.name}</strong> - {item.age} tuổi</span>
                                <button onClick={() => startEdit(item)} style={{ background: "#3498db", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}>
                                    ✏️ Sửa
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpdateItem;