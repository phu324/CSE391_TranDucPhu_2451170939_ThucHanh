Bài 01:
1. File .jsx khác gì file .js?
Giải thích: File .js thông thường chỉ chứa code JavaScript thuần túy. File .jsx (JavaScript XML) là một đuôi mở rộng đặc biệt của React, cho phép bạn viết trực tiếp các thẻ giống như HTML vào ngay trong mã nguồn JavaScript mà không cần bọc nó trong chuỗi template string hay dùng các hàm DOM như document.createElement.

2. Tại sao phải export default App?
Giải thích: Trong cơ chế Module của ES6 JavaScript, để một file khác (ví dụ như file src/main.jsx) có thể import và sử dụng được hàm App(), thì file App.jsx bắt buộc phải mở khai báo công khai bằng từ khóa export default. Từ khóa default nghĩa là đây là thành phần xuất bản chính, mặc định của file này.

3. Thử xóa export default → chuyện gì xảy ra?
Giải thích: Nếu bạn xóa dòng đó, dự án sẽ ngay lập tức bị lỗi biên dịch (Compile Error) và màn hình trình duyệt sẽ trắng xóa. File main.jsx không thể tìm thấy hàm App để render lên root DOM, hệ thống sẽ báo lỗi: "The requested module '/src/App.jsx' does not provide an export named 'default'".
Bài 02:
Bài 1: Viết component UserProfile
JavaScript
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" />
            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
Bài 2: Viết component ProductInfo
JavaScript
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p>
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;