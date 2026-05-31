function TodoFilter({ filter, setFilter }) {
    const buttons = [
        { id: "all", label: "Tất cả" },
        { id: "active", label: "Chưa xong" },
        { id: "completed", label: "Hoàn thành" }
    ];

    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "8px", 
            margin: "15px 0",
            padding: "10px 0",
            borderBottom: "1px solid #eee"
        }}>
            {buttons.map((btn) => (
                <button
                    key={btn.id}
                    onClick={() => setFilter(btn.id)}
                    style={{
                        padding: "6px 14px",
                        fontSize: "14px",
                        borderRadius: "20px",
                        border: "1px solid",
                        borderColor: filter === btn.id ? "#3498db" : "#dcdde1",
                        background: filter === btn.id ? "#3498db" : "#fff",
                        color: filter === btn.id ? "#fff" : "#2f3640",
                        cursor: "pointer",
                        fontWeight: filter === btn.id ? "bold" : "normal",
                        transition: "all 0.2s ease"
                    }}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;