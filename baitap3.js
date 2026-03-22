let a = parseFloat(prompt("Nhập độ dài cạnh hình vuông (đơn vị mét):"));

// Kiểm tra dữ liệu nhập
if (isNaN(a) || a <= 0) {
    alert("❌ Vui lòng nhập số hợp lệ và lớn hơn 0.");
} else {
    // Công thức diện tích hình vuông: S = a^2
    let area = a * a;
    alert(`Cạnh: ${a} m\nDiện tích: ${area.toFixed(2)} m²`);
}