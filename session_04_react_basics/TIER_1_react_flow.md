# 📝 Bài 1.1 — Component render lần đầu (Mount) (8 phút)

### Giải thích bản chất
Khi bạn gọi `<App />` trong mã nguồn, React sẽ thực thi hàm `App()` như một hàm JavaScript bình thường để lấy về khối mã JSX (giao diện cấu trúc). Sau đó, nó sẽ biên dịch và đẩy khối giao diện này hiển thị lên màn hình trình duyệt của người dùng. Quá trình này gọi là **Mount** (Render lần đầu).

### Code mẫu — `LifecycleDemo.jsx`
```jsx
function LifecycleDemo() {
    // Log này sẽ chạy mỗi khi hàm được thực thi
    console.log("1️⃣ Component hàm LifecycleDemo được gọi!");
    
    return (
        <div style={{ padding: "20px", border: "2px solid #3498db" }}>
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log của hệ thống</p>
            <p>Component này chỉ render MỘT lần duy nhất khi bạn tải trang.</p>
        </div>
    );
}

export default LifecycleDemo;
Bài 1.2
1. Chạy BadCounter → Nhấn nút → Thấy gì?
Trên màn hình giao diện (UI): Con số hiển thị vẫn đứng yên ở mức 0, hoàn toàn không tăng lên dù bạn có bấm nút bao nhiêu lần đi chăng nữa.

Trong tab Console (F12): Giá trị của biến count vẫn tăng tiến đều đặn theo từng cú click (1, 2, 3, 4,...).

Nguyên nhân: Biến let count là một biến JavaScript thông thường. Khi giá trị của nó thay đổi, nó không kích hoạt cơ chế vẽ lại giao diện của React, dẫn đến việc UI bị "băng hà" không đồng bộ với dữ liệu thực tế.

2. Chạy GoodCounter → Nhấn nút → Thấy gì?
Trên màn hình giao diện (UI): Con số lập tức nhảy tăng tiến đồng bộ theo thời gian thực tương ứng với số lần bạn bấm nút (1, 2, 3, 4,...).

Trong tab Console (F12): Xuất hiện liên tiếp các dòng log thông báo trạng thái cập nhật mới của State: "🔄 Component thực thi Re-render! Giá trị count hiện tại: ..." kèm theo con số thực tế vừa thay đổi.

Nguyên nhân: Hàm setCount của useState khi được gọi đã phát tín hiệu ép React phải thực thi tái cấu trúc lại component (Re-render) để cập nhật và đổ dữ liệu mới nhất lên màn hình.

3. Mở Console → Thấy log "render" mấy lần?
Khi mới tải lại trang (Mount): Dòng log thông báo render sẽ chạy 1 lần (Hoặc 2 lần nếu dự án đang bật chế độ nghiêm ngặt <StrictMode> của React để rà soát lỗi bất đồng bộ).

Khi nhấn nút ở BadCounter: Xuất hiện 0 lần (Không có bất kỳ dòng log render nào chạy lại, component hoàn toàn im lặng).

Khi nhấn nút ở GoodCounter: Xuất hiện thêm 1 lần cho mỗi cú click chuột. Bạn bấm nút bao nhiêu lần thì hàm component sẽ bị kích hoạt gọi lại đúng bấy nhiêu lần để thực hiện vẽ lại cấu trúc HTML.