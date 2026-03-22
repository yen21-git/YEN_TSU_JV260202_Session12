let celsius = parseFloat(prompt("Nhập nhiệt độ (°C):"));

// Kiểm tra dữ liệu nhập
if (isNaN(celsius)) {
    alert("❌ Vui lòng nhập số hợp lệ.");
} else {
    // Chuyển đổi sang °F
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}


