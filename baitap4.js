// Nhập chiều dài a
let a = parseFloat(prompt("Nhập chiều dài hình chữ nhật (m):"));

// Nhập chiều rộng b
let b = parseFloat(prompt("Nhập chiều rộng hình chữ nhật (m):"));

// Kiểm tra dữ liệu nhập
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("❌ Vui lòng nhập số hợp lệ và lớn hơn 0 cho cả chiều dài và chiều rộng.");
} else {
    // Công thức diện tích: S = a * b
    let area = a * b;
    alert(`Chiều dài: ${a} m\nChiều rộng: ${b} m\nDiện tích: ${area.toFixed(2)} m²`);
}