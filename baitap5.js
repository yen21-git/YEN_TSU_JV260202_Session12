// Nhập cạnh kề a
let a = parseFloat(prompt("Nhập cạnh kề a của tam giác vuông (m):"));

// Nhập cạnh kề b
let b = parseFloat(prompt("Nhập cạnh kề b của tam giác vuông (m):"));

// Kiểm tra dữ liệu nhập
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    alert("❌ Vui lòng nhập số hợp lệ và lớn hơn 0 cho cả hai cạnh.");
} else {
    // Công thức diện tích tam giác vuông: S = (a * b) / 2
    let area = (a * b) / 2;
    alert(`Cạnh a: ${a} m\nCạnh b: ${b} m\nDiện tích: ${area.toFixed(2)} m²`);
}