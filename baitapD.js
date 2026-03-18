// Nhập 3 số
let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));
let c = parseInt(prompt("Nhập số c:"));

// Tìm số lớn nhất
let max = a;

if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}

// Hiển thị kết quả
console.log("Số lớn nhất là: " + max);