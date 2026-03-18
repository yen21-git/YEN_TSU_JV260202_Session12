// Nhập số nguyên
let number = parseInt(prompt("Nhập một số nguyên:"));

// Kiểm tra
if (number > 0) {
    console.log("Số này lớn hơn 0");
} else if (number < 0) {
    console.log("Số này nhỏ hơn 0");
} else {
    console.log("Số này bằng 0");
}