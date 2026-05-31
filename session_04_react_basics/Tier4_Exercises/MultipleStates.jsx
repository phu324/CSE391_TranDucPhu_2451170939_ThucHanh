import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    // Thử thách 1: Thêm trường Email vào state
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Thử thách 2: Thêm state lưu thông báo lỗi validate
    const [error, setError] = useState("");

    function handleSubmit() {
        // Validate dữ liệu đầu vào
        if (!name || !age || !email) {
            setError("⚠️ Vui lòng điền đầy đủ tất cả các trường dữ liệu!");
            return;
        }
        
        const ageNum = Number(age);
        if (isNaN(ageNum) || ageNum <= 0 || ageNum >= 100) {
            setError("⚠️ Tuổi nhập vào phải lớn hơn 0 và nhỏ hơn 100!");
            return;
        }

        if (!email.includes("@")) {
            setError("⚠️ Định dạng Email không hợp lệ (phải chứa ký tự '@')!");
            return;
        }

        // Nếu hợp lệ thì xóa lỗi và chuyển trạng thái hiển thị kết quả
        setError("");
        setIsSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setIsSubmitted(false);
        setError("");
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px" }}>
            <h2>Form Đăng Ký Thành Viên</h2>
            
            {/* Thử thách 3: Hiển thị lời chào realtime khi đang nhập liệu */}
            {!isSubmitted && name && (
                <p style={{ color: "#27ae60", fontWeight: "bold" }}>Xin chào {name}!</p>
            )}

            {error && <p style={{ color: "#e74c3c", fontWeight: "bold" }}>{error}</p>}

            {!isSubmitted ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                        <label>Tên: </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "6px" }} />
                    </div>
                    
                    <div>
                        <label>Tuổi: </label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ width: "100%", padding: "6px" }} />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "6px" }} placeholder="example@gmail.com" />
                    </div>
                    
                    <div>
                        <label style={{ cursor: "pointer" }}>
                            <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
                            Là sinh viên
                        </label>
                    </div>
                    
                    <button onClick={handleSubmit} style={{ padding: "8px", background: "#3498db", color: "white", border: "none", cursor: "pointer" }}>Đăng ký</button>
                </div>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px", color: "#155724" }}>
                    <h3>✅ Đăng ký thành công!</h3>
                    <p><strong>Tên:</strong> {name}</p>
                    <p><strong>Tuổi:</strong> {age}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Sinh viên:</strong> {isStudent ? "Có" : "Không"}</p>
                    <button onClick={handleReset} style={{ marginTop: "10px", padding: "6px 12px" }}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;