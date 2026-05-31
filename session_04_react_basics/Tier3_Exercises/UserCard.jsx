function UserCard({ name, email, avatar }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "10px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            maxWidth: "250px",
            display: "inline-block",
            verticalAlign: "top"
        }}>
            <img 
                src={avatar || "https://via.placeholder.com/150"} 
                alt={`${name}'s avatar`} 
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "12px"
                }} 
            />
            <h3 style={{ margin: "8px 0 4px 0", color: "#333" }}>{name}</h3>
            <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>{email}</p>
        </div>
    );
}

export default UserCard;