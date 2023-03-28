// let txt = document.getElementById("text")
// alert(txt.innerText)

// txt.style.background = "red"

// let noidung = prompt("nhap chuoi");
// txt.innerHTML = noidung;

// Tạo bảng có 1 dòng 3 cột:
// let khoi = document.getElementById("ketqua");
//         let myTable = document.createElement("table");

        //gắn thuộc tính
        // myTable.cellpadding = "5";
        // myTable.cellspacing = "0";
        // myTable.border = "1";

        // let myRow = document.createElement("tr");
        // let col1 = document.createElement("td");
        // let col2 = document.createElement("td");
        // let col3 = document.createElement("td");
        // col1.innerHTML = "Ô 1";
        // col2.innerHTML = "Ô 2";
        // col3.innerHTML = "Ô 3";
        // myRow.appendChild(col1);
        // myRow.appendChild(col2);
        // myRow.appendChild(col3);

        // myTable.appendChild(myRow);
        // khoi.appendChild(myTable)


        //chen mot phan tu
        // let p3 = document.createElement("div");
        // p3.innerHTML = "hello";

        // let div1 = document.getElementById("myDiv");
        // let p1 = document.getElementById("p1");
        // div1.insertBefore(p3 , p1);
        
        //xoa phan tu
        // document.getElementById("p2").remove();


        // function themDoan(){
            //alert("hahaha");
        //     let myDiv = document.getElementById("myDiv");
        //     console.log(sdd.length);
        //     let doanVan = document.createElement("p");
        //     doanVan.innerHTML = "doan van n"
        //     myDiv.appendChild(doanVan);
        // }



        //kiểm tra số chẵn
    //     function check(){
    //         let giaTriNhap = document.getElementById("nhapso").value; 
    //         if(giaTriNhap === ""){
    //             alert("vui long nhập số");
    //         }else{
    //             giaTriNhap = parseInt(giaTriNhap);
    //             if(giaTriNhap %2 === 0){
    //             alert(giaTriNhap + " là số chẵn");
    //         }else{
    //             alert(giaTriNhap + " là số lẻ")
    //         }
    //     }
    // }
          

        //tính toán
        // function add(){
        //     let soThuNhat = document.getElementById("nhapso").value;
        //     soThuNhat = parseInt(soThuNhat);
        //     let soThuHai = document.getElementById("nhapso2").value;
        //     soThuHai = parseInt(soThuHai);
        //     let tong = soThuNhat + soThuHai;
        //     document.getElementById("ketqua").innerHTML = "két quả: " + tong;
        // }
        // function sub(){
        //     let soThuNhat = document.getElementById("nhapso").value;
        //     soThuNhat = parseInt(soThuNhat);
        //     let soThuHai = document.getElementById("nhapso2").value;
        //     soThuHai = parseInt(soThuHai);
        //     let hieu = soThuNhat - soThuHai;
        //     document.getElementById("ketqua").innerHTML = "két quả: " + hieu;
        // }
        // function mul(){
        //     let soThuNhat = document.getElementById("nhapso").value;
        //     soThuNhat = parseInt(soThuNhat);
        //     let soThuHai = document.getElementById("nhapso2").value;
        //     soThuHai = parseInt(soThuHai);
        //     let tich = soThuNhat * soThuHai;
        //     document.getElementById("ketqua").innerHTML = "két quả: " + tich;
        // }
        // function vision(){
        //     let soThuNhat = document.getElementById("nhapso").value;
        //     soThuNhat = parseInt(soThuNhat);
        //     let soThuHai = document.getElementById("nhapso2").value;
        //     soThuHai = parseInt(soThuHai);
        //     let thuong = soThuNhat / soThuHai;
        //     document.getElementById("ketqua").innerHTML = "két quả: " + thuong;
        // }





        //tính năm nhuận
        // function check(){
        //     let soNam = document.getElementById("nhapnam").value;
        //     soNam = parseInt(soNam);
        //     if(soNam %4 === 0){ //&& soNam %100 === 0 && soNam %400 === 0){
        //         alert("năm " + soNam + " là năm nhuận")
        //     } else{
        //         //soNam %100 === 0 && soNam %!400 === 0
        //         alert("năm " + soNam + " không là năm nhuận")
        //     }
        // }