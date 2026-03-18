// Nhập số a và b
let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));

// Kiểm tra chia hết
if (b === 0) {
    console.log("Không thể chia cho 0!");
} else if (a % b === 0) {
    console.log(a + " chia hết cho " + b);
} else {
    console.log(a + " không chia hết cho " + b);
}