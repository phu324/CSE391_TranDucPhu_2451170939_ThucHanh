import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    // Thử thách 3: State lưu trữ thông báo lỗi realtime độc lập
    const [errors, setErrors] = useState({});

    // Hàm cập nhật state chung cho các input trường dữ liệu
    function handleChange(e) {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);
        
        // Thử thách 3: Chạy validate realtime trực tiếp khi người dùng đang gõ
        let currentErrors = { ...errors };
        
        if (name === "email") {
            if (value && !value.includes("@")) {
                currentErrors.email = "Email bắt buộc phải chứa ký tự '@'!";
            } else {
                delete currentErrors.email;
            }
        }
        
        if (name === "confirmPassword") {
            if (value !== formData.password) {
                currentErrors.confirmPassword = "Mật khẩu xác nhận chưa trùng khớp!";
            } else {
                delete currentErrors.confirmPassword;
            }
        }

        if (name === "password") {
            if (formData.confirmPassword && value !== formData.confirmPassword) {
                currentErrors.confirmPassword = "Mật khẩu xác nhận chưa trùng khớp!";
            } else if (value === formData.confirmPassword) {
                delete currentErrors.confirmPassword;
            }
        }
        
        setErrors(currentErrors);
    }

    function handleSubmit(e) {
        // Sử dụng bắt buộc để ngăn hành vi reload lại trang mặc định của trình duyệt
        e.preventDefault();
        
        let submitErrors = {};
        // Thử thách 1: Kiểm tra validate email chứa cấu trúc '@' khi submit
        if (!formData.email.includes("@")) {
            submitErrors.email = "Cấu trúc định dạng Email không hợp lệ!";
        }
        // Thử thách 2: Kiểm tra đối chiếu trường xác nhận mật khẩu
        if (formData.password !== formData.confirmPassword) {
            submitErrors.confirmPassword = "Mật khẩu xác nhận không trùng khớp!";
        }
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            submitErrors.form = "Vui lòng hoàn thiện đầy đủ thông tin vào các trường bắt buộc!";
        }

        if (Object.keys(submitErrors).length > 0) {
            setErrors(submitErrors);
            return;
        }

        setErrors({});
        setIsSubmitted(true);
    }

    function handleReset() {
        setFormData({ name: "", email: "", password: "", confirmPassword: "", message: "" });
        setErrors({});
        setIsSubmitted(false);
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "400px" }}>
            <h2>Form Đăng Ký Hệ Thống</h2>
            
            {errors.form && <p style={{ color: "#e74c3c", fontWeight: "bold" }}>⚠️ {errors.form}</p>}

            {!isSubmitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div>
                        <label>Tên thành viên (*):</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "6px" }} />
                    </div>
                    
                    <div>
                        <label>Email liên hệ (*):</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "6px" }} />
                        {errors.email && <span style={{ color: "#e74c3c", fontSize: "13px" }}>{errors.email}</span>}
                    </div>

                    <div>
                        <label>Mật khẩu (*):</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "6px" }} />
                    </div>

                    <div>
                        <label>Xác nhận mật khẩu (*):</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={{ width: "100%", padding: "6px" }} />
                        {errors.confirmPassword && <span style={{ color: "#e74c3c", fontSize: "13px" }}>{errors.confirmPassword}</span>}
                    </div>
                    
                    <div>
                        <label>Ý kiến/Tin nhắn bổ sung:</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "6px", minHeight: "60px" }} />
                    </div>
                    
                    <button type="submit" style={{ padding: "10px", background: "#2ecc71", color: "white", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                        Gửi dữ liệu (Submit)
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: "15px", borderRadius: "4px", color: "#155724" }}>
                    <h3>✅ Đã gửi form thành công!</h3>
                    <p><strong>Tên:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Tin nhắn kèm theo:</strong> {formData.message || "(Không có)"}</p>
                    <button onClick={handleReset} style={{ marginTop: "10px", padding: "6px 12px", cursor: "pointer" }}>Đăng ký lại</button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;