import UserCard from "./UserCard";
import PriceTag from "./PriceTag";

function AppDemo() {
    // Dữ liệu giả lập để hiển thị danh sách 3 UserCard khác nhau
    const users = [
        { id: 1, name: "Nguyễn Văn Minh", email: "minh.nv@example.com", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" },
        { id: 2, name: "Trần Thị An", email: "an.tt@example.com", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
        { id: 3, name: "Lê Hoàng Linh", email: "linh.lh@example.com", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150" }
    ];

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <section style={{ marginBottom: "40px" }}>
                <h2>Thử thách 1 & 3: Danh sách thành viên (UserCard)</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                    {users.map(user => (
                        <UserCard 
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            avatar={user.avatar}
                        />
                    ))}
                </div>
            </section>

            <hr />

            <section style={{ marginTop: "40px" }}>
                <h2>Thử thách 2: Nhãn hiển thị giá sản phẩm (PriceTag)</h2>
                <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "6px", maxWidth: "400px" }}>
                    <div style={{ marginBottom: "15px" }}>
                        <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Sản phẩm đang giảm giá:</p>
                        <PriceTag originalPrice={25000000} salePrice={21990000} />
                    </div>
                    <div>
                        <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>Sản phẩm bán đúng giá gốc:</p>
                        <PriceTag originalPrice={350000} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AppDemo;