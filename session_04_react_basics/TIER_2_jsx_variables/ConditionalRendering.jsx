import { useState } from "react";

function ConditionalRendering() {
    const [isOnline, setIsOnline] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stockCount, setStockCount] = useState(3);
    
    const score = 85;
    const hasNotification = true;
    const notificationCount = 5;
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ marginBottom: "20px" }}>
                <h3>Trạng thái hệ thống: {isOnline ? "🟢 Trực tuyến" : "🔴 Ngoại tuyến"}</h3>
                <button onClick={() => setIsOnline(!isOnline)}>Đổi trạng thái mạng</button>
            </div>

            <hr />

            <div style={{ margin: "20px 0" }}>
                <h2>{isLoggedIn ? "Chào mừng bạn quay trở lại!" : "Vui lòng đăng nhập hệ thống"}</h2>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "Đăng xuất" : "Đăng nhập nhanh"}
                </button>
                
                {isLoggedIn && (
                    <nav style={{ background: "#333", color: "#fff", padding: "10px", marginTop: "10px", borderRadius: "4px" }}>
                        <span style={{ marginRight: "15px" }}>🏠 Trang chủ</span>
                        <span style={{ marginRight: "15px" }}>📦 Kho hàng</span>
                        <span>⚙️ Cài đặt</span>
                    </nav>
                )}
            </div>

            <hr />

            <div style={{ margin: "20px 0" }}>
                <h3>Sản phẩm Laptop Gaming</h3>
                <p>Số lượng tồn kho: {stockCount}</p>
                
                {stockCount === 0 ? (
                    <span style={{ padding: "5px 10px", background: "#7f8c8d", color: "#fff", borderRadius: "3px" }}>
                        ❌ Hết hàng toàn quốc
                    </span>
                ) : (
                    <span style={{ padding: "5px 10px", background: "#2ecc71", color: "#fff", borderRadius: "3px" }}>
                        📦 Sẵn sàng giao hàng
                    </span>
                )}
                
                <div style={{ marginTop: "10px" }}>
                    <button onClick={() => stockCount > 0 && setStockCount(stockCount - 1)}>Mua 1 cái</button>
                    <button onClick={() => setStockCount(5)} style={{ marginLeft: "10px" }}>Nhập thêm hàng</button>
                </div>
            </div>

            <hr />

            <div>
                <h3>Thông báo hệ thống</h3>
                {hasNotification && notificationCount > 0 && (
                    <div style={{ background: "#fff3cd", padding: "10px", borderLeft: "5px solid #ffc107" }}>
                        Hệ thống ghi nhận bạn đang có {notificationCount} thông báo mới chưa đọc!
                    </div>
                )}
                
                <p>Xếp loại học lực hiện tại ({score} điểm): <strong>
                    {score >= 90 ? "Xuất sắc" : score >= 80 ? "Giỏi" : score >= 65 ? "Khá" : "Trung bình"}
                </strong></p>
            </div>
        </div>
    );
}

export default ConditionalRendering;