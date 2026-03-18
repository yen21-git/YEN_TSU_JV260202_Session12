// Nhập điểm
let test = parseFloat(prompt("Nhập điểm bài kiểm tra:"));
let mid = parseFloat(prompt("Nhập điểm giữa kỳ:"));
let final = parseFloat(prompt("Nhập điểm cuối kỳ:"));

// Tính điểm trung bình
let avg = (test + mid + final) / 3;

// Xếp loại
let rank;

if (avg >= 9) {
    rank = "Xuất sắc";
} else if (avg >= 8) {
    rank = "Giỏi";
} else if (avg >= 6.5) {
    rank = "Khá";
} else if (avg >= 5) {
    rank = "Trung bình";
} else {
    rank = "Yếu";
}

// Hiển thị kết quả
console.log("Điểm trung bình: " + avg.toFixed(2));
console.log("Xếp loại: " + rank);

alert("Điểm TB: " + avg.toFixed(2) + " - Xếp loại: " + rank);