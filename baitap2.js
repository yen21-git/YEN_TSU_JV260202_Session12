// 1 mét = 3.28084 feet
const METER_TO_FEET = 3.28084;

// Yêu cầu người dùng nhập số mét
let meters = parseFloat(prompt("Nhập chiều dài (mét):"));

// Kiểm tra dữ liệu nhập
if (isNaN(meters)) {
    alert("❌ Vui lòng nhập số hợp lệ.");
} else {
    let feet = meters * METER_TO_FEET;
    alert(`${meters} mét = ${feet.toFixed(2)} feet`);
}