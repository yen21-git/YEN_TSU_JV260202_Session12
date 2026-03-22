// Nhập hệ số a, b, c
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

// Kiểm tra dữ liệu nhập
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("❌ Vui lòng nhập số hợp lệ cho a, b, c.");
} else {
    if (a === 0) {
        // Trường hợp a = 0 → phương trình bậc 1: b*x + c = 0
        if (b === 0) {
            if (c === 0) {
                alert("Phương trình có vô số nghiệm.");
            } else {
                alert("Phương trình vô nghiệm.");
            }
        } else {
            let x = -c / b;
            alert(`Phương trình bậc 1 có nghiệm: x = ${x.toFixed(2)}`);
        }
    } else {
        // Tính delta
        let delta = b * b - 4 * a * c;

        if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert(`Phương trình có 2 nghiệm phân biệt:\n x₁ = ${x1.toFixed(2)}\n x₂ = ${x2.toFixed(2)}`);
        } else if (delta === 0) {
            let x = -b / (2 * a);
            alert(`Phương trình có nghiệm kép: x = ${x.toFixed(2)}`);
        } else {
            alert("Phương trình vô nghiệm (Δ < 0).");
        }
    }
}