function PriceTag({ originalPrice, salePrice }) {
    // Tính phần trăm giảm giá nếu có giá khuyến mãi
    const hasSale = salePrice && salePrice < originalPrice;
    const discountPercent = hasSale ? Math.round(((originalPrice - salePrice) / originalPrice) * 100) : 0;

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "8px 0" }}>
            {hasSale ? (
                <div>
                    <span style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#e74c3c",
                        marginRight: "8px"
                    }}>
                        {salePrice.toLocaleString("vi-VN")} đ
                    </span>
                    <span style={{
                        fontSize: "14px",
                        color: "#7f8c8d",
                        textDecoration: "line-through",
                        marginRight: "8px"
                    }}>
                        {originalPrice.toLocaleString("vi-VN")} đ
                    </span>
                    <span style={{
                        fontSize: "12px",
                        background: "#e74c3c",
                        color: "#fff",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontWeight: "bold"
                    }}>
                        -{discountPercent}%
                    </span>
                </div>
            ) : (
                <span style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#2c3e50"
                }}>
                    {originalPrice.toLocaleString("vi-VN")} đ
                </span>
            )}
        </div>
    );
}

export default PriceTag;