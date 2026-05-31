function ListRendering() {
    const danhSachSanPham = [
        { id: "sp01", name: "Chuột không dây Logitech", price: 350000 },
        { id: "sp02", name: "Bàn phím cơ Akko", price: 1250000 },
        { id: "sp03", name: "Tai nghe Kingston HyperX", price: 1800000 },
        { id: "sp04", name: "Lót chuột cỡ lớn", price: 95000 },
        { id: "sp05", name: "Màn hình Dell Ultrasharp", price: 5500000 }
    ];

    const tongTienCacSanPham = danhSachSanPham.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Quản Lý Giỏ Hàng</h2>
            
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                    <tr style={{ background: "#2c3e50", color: "#fff" }}>
                        <th style={{ border: "1px solid #ddd", padding: "10px" }}>STT</th>
                        <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Tên sản phẩm</th>
                        <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "right" }}>Đơn giá</th>
                    </tr>
                </thead>
                <tbody>
                    {danhSachSanPham.map((sanPham, index) => {
                        const laSanPhamCaoCap = sanPham.price > 1000000;
                        
                        return (
                            <tr key={sanPham.id}>
                                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
                                    {index + 1}
                                </td>
                                <td style={{ 
                                    border: "1px solid #ddd", 
                                    padding: "10px",
                                    color: laSanPhamCaoCap ? "#e74c3c" : "#2c3e50",
                                    fontWeight: laSanPhamCaoCap ? "bold" : "normal"
                                }}>
                                    {sanPham.name} {laSanPhamCaoCap && "🔥 (Premium)"}
                                </td>
                                <td style={{ 
                                    border: "1px solid #ddd", 
                                    padding: "10px", 
                                    textAlign: "right",
                                    color: laSanPhamCaoCap ? "#e74c3c" : "#2c3e50"
                                }}>
                                    {sanPham.price.toLocaleString("vi-VN")} đ
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr style={{ background: "#f9f9f9", fontWeight: "bold" }}>
                        <td colSpan="2" style={{ border: "1px solid #ddd", padding: "10px", textAlign: "right" }}>
                            Tổng giá trị đơn hàng:
                        </td>
                        <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "right", color: "#27ae60", fontSize: "1.1em" }}>
                            {tongTienCacSanPham.toLocaleString("vi-VN")} đ
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ListRendering;