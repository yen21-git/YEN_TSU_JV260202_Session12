// Nhập hệ số a
let a = parseFloat(prompt("Nhập hệ số a:"));

// Nhập hệ số b
let b = parseFloat(prompt("Nhập hệ số b:"));

// Kiểm tra dữ liệu nhập
if (isNaN(a) || isNaN(b)) {
    alert("❌ Vui lòng nhập số hợp lệ cho cả a và b.");
} else {
    if (a === 0) {
        if (b === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -b / a;
        alert(`Phương trình ${a}x + ${b} = 0 có nghiệm x = ${x.toFixed(2)}`);
    }
}
