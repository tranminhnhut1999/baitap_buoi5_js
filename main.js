/**
 * BÀI 1
 * ĐẦU VÀO 
 * Điểm chuẩn :25
 * Khu vực : 
 * -Khu vực A +2đ
 * -Khu vực B +1đ
 * -Khu vực C + 0.5đ
 * Đối tượng
 * -Đối tượng 1 +2.5đ
 * -Đối tượng 2 +1.5đ
 * -Đối tượng 3 +1đ
 * Điểm từng môn 
 */
//Điểm chuẩn 
const diem_chuan = 25;
//Khu vực 
//const khu_vuc_A = 2;
//const khu_vuc_B = 1;
//const khu_vuc_C = 0.5;
//Đối tượng 
const doi_tuong_1 = 2.5;
const doi_tuong_2 = 1.5;
const doi_tuong_3 = 1;

var mon1 = 0;
var mon2 = 0;
var mon3 = 0;
var total = 0;


var btnKetQua = document.getElementById("btnKetQua").onclick = function () {
    var mon1 = document.getElementById("mon1").value * 1;
    var mon2 = document.getElementById("mon2").value * 1;
    var mon3 = document.getElementById("mon3").value * 1;

    /**
     * Xử lý
     * -tính điểm : tổng 3 môn + khu vực + đối tượng
     * -điểm >=25, không môn 0 thì đậu
     */
    var total = mon1 + mon2 + mon3;

    var thongbao = "";
    if (total >= diem_chuan) {
        thongbao = "Bạn đã đậu";
    } else {
        thongbao = "Bạn đã rớt";
    }

    var khuvuc = "";
    if (khu_vuc_A.checked) {
        khuvuc = total + 2;
    } else if (khu_vuc_B.checked) {
        khuvuc = total + 1;
    } else if (khu_vuc_C.checked) {
        khuvuc = total + 0.5;
        return khuvuc;
    }


    /**
     * Đầu ra
     * -in ra kết quả thi
     */

    var result = "Điểm là :" + khuvuc;
    document.getElementById("kQua").innerHTML = thongbao + result;
}


/**
 * BÀI2 
 * Đầu vào  
 * 50kw đầu : 500đ/kw
 * 50kw kế tiếp : 650đ/kw
 * 100kw kế : 850đ/kw
 * 150kw kế : 1100đ/kw
 * còn lại: 1300/kw 
 */

const Kw_1 = 500;
const Kw_2 = 650;
const Kw_3 = 8500;
const Kw_4 = 1100;
const Kw_5 = 1300;


var tienKw_1 = 0;
var tienKw_2 = 0;
var tienKw_3 = 0;
var tienKw_4 = 0;
var tienKw_5 = 0;
var tongtien = 0;

function getEle(id) {
    return document.getElementById(id);
}



var btnTienDien = getEle("btnTienDien").onclick = function () {
    var soKw = getEle("soKw").value * 1;
    var hoTen = document.getElementById("user").value;
    function ttKw_1(soKw, Kw_1) {
        return soKw * Kw_1;
    }
    function ttKw_2(soKw, Kw_2) {
        return (soKw - 50) * Kw_2;
    }
    function ttKw_3(soKw, Kw_3) {
        return (soKw - 100) * Kw_3;
    }
    function ttKw_4(soKw, Kw_4) {
        return (soKw - 150) * Kw_4;
    }
    function ttKw_5(soKw, Kw_5) {
        return (soKw - 350) * Kw_5;
    }

    function tTienDien(soKw, Kw_1, Kw_2, Kw_3, Kw_4, Kw_5) {
        if (0 <= soKw && soKw <= 50) {
            tongtien = ttKw_1;
        } else if (0 <= soKw && soKw <= 50) {
            tongtien = ttKw_2;
        } else if (50 < soKw && soKw <= 100) {
            tongtien = ttKw_3;
        } else if (200 <= soKw && soKw <= 350) {
            tongtien = ttKw_4;
        } else if (soKw >= 350) {
            tongtien = ttKw_5;
        } else {
            alert("Vui lòng nhập số phù hợp")
        }
    }
    var result = "Họ tên: " + hoTen + "Tổng tiền: " + tongtien
    //getEle("tDien").innerHTML = result;
    document.getElementById("tDien").innerHTML = result;
}

/**
 * bài 3
 * Đầu vào 
 * -họ tên 
 * -tổng thu nhập
 */
var tax = 0;
var btnTinhThue = getEle("btnTinhThue").onclick = function () {
    var User = getEle("hoTen").value;
    var TNhap = getEle("tNhap").value * 1;

    /**
     * xử lý 
     * thu nhập 1 tháng * 12 = tổng thu nhập 
     * tổng thu nhập * 0.1 = thuế phải đóng
     */
    //var TTNhap = TNhap * 12;
    if (TNhap <= 60) {
        tax = TNhap * 0.05;
    } else if (6e+5 <= TNhap && TNhap >= 120e+6) {
        tax = TNhap * 0.1;
    } else if (120e+6 <= TNhap && TNhap >= 210e+6) {
        tax = TNhap * 0.15;
    } else if (210e+6 <= TNhap && TNhap >= 384e+6) {
        tax = TNhap * 0.2;
    } else if (384e+6 <= TNhap && TNhap >= 624e+6) {
        tax = TNhap * 0.25;
    } else if (624e+6 <= TNhap && TNhap >= 960e+6) {
        tax = TNhap * 0.30;
    } else if (TNhap >= 960e+6) {
        tax = TNhap * 0.35;
        return tax
    }

    /**
     * đầu ra 
     * - in ra user
     * - in ra tổng thu nhập 
     * - in ra tiền thuế
     */
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(tax)
    //var result1 = numberFormat.format(tax);
    var result2 = "Họ và tên: " + User + tax
    getEle("tThue").innerHTML = result2;
}