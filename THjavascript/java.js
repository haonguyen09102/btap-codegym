//log
// console.log("hello");
// let count = 0;
// let button = document.getElementById('cal');
// console.log(button);
// button.addEventListener('click', function(){
//     count++
//     console.log('clicked'+ count);
// })

// prompt
// let x = prompt("enter your age: ");
// console.log("tuoi cua ban: " + x);
// document.write("tuoi cua ban: " + x);

// //alert
// let calbtn = document.getElementById("cal");
// calbtn.addEventListener("click", function(){
//     alert("xin chao")
// })



//ngay-thang-nam
// let x =prompt("ngay sinh: ");
// let ngay = parseInt(x);
// if(isNaN(ngay)){
//     alert("ko phai so")
// }
// let y =prompt("thang sinh: ");
// let thang = parseInt(y);
// let z =prompt("nam sinh: ");
// document.write(x + "-" + y + "-" + z);




//chuvi-dt hinh tron
// let x = prompt("ban kinh");
// let bankinh = parseFloat(x);
// if (!isNaN(bankinh) && bankinh > 0) {
//     alert("phu hop")
    
// } else {
//     alert("so ko phu hop")
//     prompt("nhap lai")     
// }

// let y = Math.PI;
// let pi = parseFloat(y);
// let c =2
// document.write("chu vi hcn la: " + c*bankinh*pi.toFixed(1));
// document.write("<br>")
// document.write("dt hcn la: " + (bankinh*bankinh)*pi.toFixed(1));



//lai suat ngan hang
// let x = prompt("nhập sô tiền");
// if(!isNaN(x) && x > 0){
//     alert("so phu hop")
// }
// else{
//     alert("so ko phu hop")
// }
// let y = prompt("lãi suất");
// if(!isNaN(y) && y > 0){
//     alert("so phu hop")
// }
// else{
//     alert("so ko phu hop")
// }
// let z = prompt("số năm")
// if(!isNaN(z) && z > 0){
//     alert("so phu hop")
// }
// else{
//     alert("so ko phu hop")
// }
// let tien = parseFloat(x);
// let lai = parseFloat(y);
// let nam = parseInt(z);
// let ketqua = tien*(lai/100)
// document.write("lãi suất sau 1 năm: " + ketqua.toFixed(1) + "tr");
// document.write("<br>");
// document.write("cả gốc lẫn lãi sau " + z + " năm: " + (tien+nam*ketqua.toFixed(1)) + "tr");




//in buc thu
// let x = prompt("ten nguoi nhan:");
// console.log(x);
// let y = prompt("dia diem");
// console.log(y);
// let dd = prompt("ngay");
// let mm = prompt("thang");
// let yy = prompt("nam");
// console.log("ngày"+ dd + "tháng" + mm + "năm" + yy);
// document.write("“Joe thương nhớ,")
// document.write("<br>");
// document.write("<br>");
// document.write("Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.");
// document.write("<br>");
// document.write("<br>");
// document.write("Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.");
// document.write("<br>");
// document.write("<br>");
// document.write("Anh yêu thương, đừng bao giờ rời xa em nữa nhé. Yêu anh rất nhiều.");
// document.write("<br>");
// document.write("<br>");
// document.write("Los Angeles, ngày 10 tháng 10 năm 1951.”");









//xuat du lieu
// console.log("log");
// alert("alert");
// document.write("adding a line")

//BMI
function cal(){
    let heightInput = parseFloat(document.getElementById("height").value);
    let weightInput = parseFloat(document.getElementById("weight").value);
    
    
    if(!isNaN(heightInput) && !isNaN(weightInput) && heightInput >0 && weightInput > 0){
        let bmi = weightInput / (heightInput * heightInput).toFixed(2);
    
        let ketLuan = null;
        if(bmi > 40){
            ketLuan = "beo phi cap do 3"
        } else if(35 <= bmi < 40){
            ketLuan = "beo phi cap do 2"
        } else if(30 <= BMI < 35){
            ketLuan = "beo phi cap do 1"
        } else if(25 <= BMI < 30){
            ketLuan = "thua can"
        } else if(18.5 <= BMI < 25){
            ketLuan = "binh thuong"
        } 
        else{
        chuoi ="nhap ko hop le";
    }
    document.getElementById("ketQua").innerHTML = "BMI: " + bmi;
    document.getElementById("ketLuan").innerHTML = "ket luan: " + ketLuan;
}
}
