// Nhập số cần kiểm tra
let input = prompt("Nhập số tuổi cần kiểm tra:");

// Chuyển sang số nguyên
let age = parseInt(input, 10);

// Kiểm tra dữ liệu nhập
if (isNaN(age)) {
    alert("❌ Vui lòng nhập một số nguyên hợp lệ.");
} else {
    if (age > 0 && age < 120) {
        alert(`${age} là tuổi hợp lệ của một người.`);
    } else {
        alert(`${age} KHÔNG phải là tuổi hợp lệ của một người.`);
    }
}