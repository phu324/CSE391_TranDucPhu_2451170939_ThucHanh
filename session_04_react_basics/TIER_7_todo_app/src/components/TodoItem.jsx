import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdate }) {
    // State phục vụ tính năng sửa nâng cao (Level 2)
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    function handleSave() {
        if (!editValue.trim()) return;
        onUpdate(todo.id, editValue);
        setIsEditing(false);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") handleSave();
        if (e.key === "Escape") {
            setEditValue(todo.text);
            setIsEditing(false);
        }
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 12px",
            background: todo.completed ? "#f8f9fa" : "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            marginBottom: "8px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            transition: "all 0.2s ease"
        }}>
            <div style={{ display: "flex", alignItems: "center", flex: 1, marginRight: "10px" }}>
                {/* Checkbox Toggle Done */}
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => onToggle(todo.id)}
                    style={{ marginRight: "12px", width: "16px", height: "16px", cursor: "pointer" }}
                />

                {isEditing ? (
                    <input 
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={handleSave}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        style={{
                            flex: 1,
                            padding: "4px 8px",
                            fontSize: "15px",
                            border: "1px solid #3498db",
                            borderRadius: "4px",
                            outline: "none"
                        }}
                    />
                ) : (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Nội dung Todo */}
                        <span 
                            onDoubleClick={() => setIsEditing(true)} // Double-click để sửa (Level 2)
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "#7f8c8d" : "#2c3e50",
                                fontSize: "15px",
                                cursor: "pointer",
                                wordBreak: "break-all"
                            }}
                        >
                            {todo.text}
                        </span>
                        {/* Hiển thị ngày tạo (Thử thách mở rộng Level 1) */}
                        <span style={{ fontSize: "11px", color: "#bdc3c7", marginTop: "2px" }}>
                            📅 {todo.createdAt}
                        </span>
                    </div>
                )}
            </div>

            <div style={{ display: "flex", gap: "6px" }}>
                {!isEditing && (
                    <button 
                        onClick={() => setIsEditing(true)}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "14px",
                            padding: "4px"
                        }}
                        title="Sửa công việc"
                    >
                        ✏️
                    </button>
                )}
                {/* Nút Xóa */}
                <button 
                    onClick={() => onDelete(todo.id)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        padding: "4px"
                    }}
                    title="Xóa công việc"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default TodoItem;