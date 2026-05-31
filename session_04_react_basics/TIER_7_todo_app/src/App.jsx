import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function TodoApp() {
    // Luồng lưu trữ LocalStorage (Thử thách mở rộng Level 2)
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("react_todos_v2");
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, text: "Học cú pháp React cơ bản", completed: true, createdAt: "31/05/2026 22:00:00" },
            { id: 2, text: "Làm bài tập bóc tách Component", completed: false, createdAt: "31/05/2026 22:15:00" },
            { id: 3, text: "Xây dựng hoàn thiện ứng dụng Todo App này", completed: false, createdAt: "31/05/2026 23:00:00" }
        ];
    });

    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    // Đồng bộ thay đổi vào localStorage mỗi khi biến mảng todos biến động
    useEffect(() => {
        localStorage.setItem("react_todos_v2", JSON.stringify(todos));
    }, [todos]);

    // Hành động Thêm Todo mới
    function handleAddTodo() {
        if (!inputValue.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false,
            // Thêm ngày tạo cho mỗi todo (Thử thách mở rộng Level 1)
            createdAt: new Date().toLocaleString("vi-VN")
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    // Hành động nhấn phím Enter tại input
    function handleKeyPress(e) {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    }

    // Hành động Đảo trạng thái Đã xong / Chưa xong
    function handleToggleTodo(id) {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    // Hành động Xóa Todo khỏi danh sách
    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // Hành động Sửa nội dung Todo (Thử thách mở rộng Level 2)
    function handleUpdateTodo(id, newText) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    }

    // Logic Tính toán giá trị phụ thuộc (Computed Values)
    const totalCount = todos.length; // Tổng số việc (Level 1)
    const activeCount = todos.filter(todo => !todo.completed).length; // Số việc chưa xong

    // Logic Lọc danh sách hiển thị
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // tất cả
    });

    // Cập nhật Placeholder động theo bộ lọc (Thử thách mở rộng Level 1)
    function getPlaceholderText() {
        if (filter === "active") return "Thêm việc cần làm gấp vào đây...";
        if (filter === "completed") return "Thêm việc đã hoàn thành bổ sung...";
        return "Nhập công việc mới rồi nhấn Enter...";
    }

    return (
        <div style={{
            maxWidth: "450px",
            margin: "40px auto",
            padding: "25px",
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            fontFamily: "Arial, sans-serif",
            color: "#2c3e50"
        }}>
            <h2 style={{ textAlign: "center", margin: "0 0 20px 0", color: "#2980b9" }}>
                📝 Todo App v2
            </h2>

            {/* Khối Nhập Liệu */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={getPlaceholderText()}
                    style={{
                        flex: 1,
                        padding: "10px 14px",
                        fontSize: "15px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        outline: "none"
                    }}
                />
                <button 
                    onClick={handleAddTodo}
                    style={{
                        background: "#2980b9",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "6px",
                        fontSize: "15px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Thêm
                </button>
            </div>

            {/* Bộ Lọc Thao Tác Thành Phần */}
            <TodoFilter filter={filter} setFilter={setFilter} />

            {/* Số Liệu Thống Kê Đi kèm */}
            <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                fontSize: "13px", 
                color: "#7f8c8d",
                marginBottom: "15px",
                padding: "0 4px"
            }}>
                <span>Tổng số việc: <strong>{totalCount}</strong></span>
                <span>Chưa hoàn thành: <strong style={{ color: "#e74c3c" }}>{activeCount}</strong></span>
            </div>

            {/* Khối Render Danh Sách Điểm Tin */}
            <div style={{ minHeight: "150px" }}>
                {filteredTodos.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#bdc3c7", fontStyle: "italic", marginTop: "30px" }}>
                        Không có công việc nào trong danh mục này!
                    </p>
                ) : (
                    filteredTodos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onToggle={handleToggleTodo}
                            onDelete={handleDeleteTodo}
                            onUpdate={handleUpdateTodo}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoApp;