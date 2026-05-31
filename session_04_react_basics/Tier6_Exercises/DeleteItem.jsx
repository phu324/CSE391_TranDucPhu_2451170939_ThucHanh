import { useState } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Làm bài tập React" },
        { id: 2, name: "Quét nhà" },
        { id: 3, name: "Nấu cơm" }
    ]);

    function handleDelete(id) {
        // Dùng .filter() để lọc ra mảng mới loại bỏ phần tử có id trùng khớp
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "350px" }}>
            <h2>Danh sách việc cần làm (Delete)</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.length === 0 ? (
                    <p style={{ color: "#aaa", italic: "true" }}>Bạn đã hoàn thành tất cả công việc!</p>
                ) : (
                    items.map(item => (
                        <div key={item.id} style={{ 
                            display: "flex", 
                            justifyContent: "space-between", 
                            alignItems: "center",
                            padding: "8px", 
                            background: "#f8f9fa", 
                            border: "1px solid #eee",
                            borderRadius: "4px"
                        }}>
                            <span>{item.name}</span>
                            <button 
                                onClick={() => handleDelete(item.id)}
                                style={{ background: "#e74c3c", color: "white", border: "none", padding: "4px 8px", borderRadius: "3px", cursor: "pointer" }}
                            >
                                🗑️ Xóa
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default DeleteItem;