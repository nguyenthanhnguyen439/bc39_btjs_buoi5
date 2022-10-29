
// Tính kết quả xét tuyển


/**
 * 
 * Đầu vào:
 * Thí sinh trúng tuyển có điểm tổng kết >= diểm tiêu chuẩn VÀ không có môn nào không diểm
 * Điểm tổng kết =điẻm của 3 môn thi + diểm ưu tiên
 * Điểm ưu tiên là tổng điểm ưu tiên theo khu vực và điểm theo đối tượng
 * 
 * Khu Vực A: 2đ  |  B: 1đ  |  C: 0.5đ 
 * 
 * Yêu cầu:
 * viết chương trình: 
 * nhập điểm chuẩn của hội đồng
 * nhập điểm 3 môn của thí sinh, 
 * nhập khu vực ( không có nhập X) Và nhập đối tượng dự thi (Nhập 0 nếu không thuộc đối tượng ưu tiên)
 * 
 * Xử Lý:
 * điểm tổng kết >= diểm tiêu chuẩn
 * không có môn nào không diểm
 * Điểm tổng kết =điẻm của 3 môn thi + diểm ưu tiên
 * Điểm ưu tiên là tổng điểm ưu tiên theo khu vực và điểm theo đối tượng
 * 
 * 
 * Kết quả:
 * Thông báo thí sinh đậu hay rớt và kết quả thí sinh đạt được
 * 
 *  */


function tong_BaMon(mon_Hoa, mon_Su, mon_Dia) {
    var monHoa = document.getElementById("monHoa").value * 1;
    var monSu = document.getElementById("monSu").value * 1;
    var monDia = document.getElementById("monDia").value * 1;

    mon_Hoa = monHoa;
    mon_Dia = monDia;
    mon_Su = monSu;

    var tong_BaMon = mon_Hoa + mon_Su + mon_Dia;
    return tong_BaMon;
}

function diem_UuTien(khuVuc, doiTuong) {
    if (khuVuc = "X") {
        khuVuc = 0;
    }
    // if (doiTuong = "0") {
    //     doiTuong = 0;
    // }

    var diemUuTien = khuVuc + doiTuong
    return diemUuTien;
}


document.getElementById("Total_candidate").onclick = function () {
    var monHoa = document.getElementById("monHoa").value * 1;
    var monSu = document.getElementById("monSu").value * 1;
    var monDia = document.getElementById("monDia").value * 1;

    var thi_Sinh = document.getElementById("tenThiSinh").value;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;

    var diemChuan = document.getElementById("diemChuan").value * 1;


    var tongBaMon = tong_BaMon(monHoa, monSu, monDia);
    var diemUuTien = diem_UuTien(khuVuc, doiTuong);

    var diemTongKet = tongBaMon + diemUuTien;


    if ((diemTongKet >= diemChuan) && (monDia > 0) && (monHoa > 0) && (monSu > 0)) {
        var result = "";
        result += "<p> Thí sinh: " + thi_Sinh + "</p>";
        result += "<p> Tổng điểm: " + diemTongKet + "</p>";
        result += "<p> Trúng tuyển </p>";
        document.getElementById("info_ketQua").innerHTML = result;
    }
     if ((diemTongKet < diemChuan) || (monDia <= 0) || (monHoa <= 0) || (monSu <= 0)) {
        var result = "";
        result += "<p> Thí sinh: " + thi_Sinh + "</p>";
        result += "<p> Tổng điểm: " + diemTongKet + "</p>";
        result += "<p> Không trúng tuyển </p>";
        document.getElementById("info_ketQua").innerHTML = result;
    }
}


/**
 * TÍNH TIỀN ĐIỆN
 * Yêu cầu:
 * Nhập thông tin tiêu thụ điện:
 *  Tên KH:
 *  Số Kw:
 * 
 * Đầu vào:
 *      50 Kw đầu tiên  = 500 đ/kw
 *      50 Kw kế  = 650 đ/kw
 *      100 Kw kế = 850 đ/kw
 *      150 Kw kế = 1100 đ/kw
 *      số Kw còn lại   = 1300 đ/kw
 * 
 * Xử lý:
 *      Tiền điện = số Kw * giá điện/kw
 * Tổng số tiền điện =    tiền điện 50 kw đầu 
 *                      + tiền điện 50kw kế 
 *                      + tiền điện 100kw kế
 *                      + tiền điện 150kw kế 
 *                      + tiền điện số kw kế tiếp còn lại
 * */

var giaKw_1 = 500
var giaKw_2 = 650
var giaKw_3 = 850
var giaKw_4 = 1100
var giaKw_5 = 1300

var tienDien_1 = 0
var tienDien_2 = 0
var tienDien_3 = 0
var tienDien_4 = 0
var tienDien_5 = 0

document.getElementById("ElectricBill").onclick = function () {
    var khachHang = document.getElementById("tenKhachHang").value;
    var soKw = document.getElementById("soKw").value * 1;

    // Format VND/ tiền
    // Tạo dấu . trong tiền Việt Nam cho dễ nhìn  VD: 20000=> 20.000 
    var currentFomat = Intl.NumberFormat("VN-vn");

    var tongTienDien = "";
    var result = "";

    if (0 < soKw <= 50) {
        tienDien_1 = soKw * giaKw_1;
    }

    if (50 < soKw <= 100) {
        tienDien_1 = 50 * giaKw_1;
        tienDien_2 = (soKw - 50) * giaKw_2;
    }

    if (100 < soKw <= 200) {
        tienDien_1 = 50 * giaKw_1;
        tienDien_2 = 50 * giaKw_2;
        tienDien_3 = (soKw - 100) * giaKw_3;
    }

    if (200 < soKw <= 350) {
        tienDien_1 = 50 * giaKw_1;
        tienDien_2 = 50 * giaKw_2;
        tienDien_3 = 100 * giaKw_3;
        tienDien_4 = (soKw - 200) * giaKw_4
    }

    if (350 < soKw) {
        tienDien_1 = 50 * giaKw_1;
        tienDien_2 = 50 * giaKw_2;
        tienDien_3 = 100 * giaKw_3
        tienDien_4 = 150 * giaKw_4;
        tienDien_5 = (soKw - 350) * giaKw_5;
    }

    tongTienDien = tienDien_1 + tienDien_2 + tienDien_3 + tienDien_4 + tienDien_5;

    result += "<p>Tên khách hàng: " + khachHang + "</p>";
    result += "<p>Lượng điện tiêu thụ: " + soKw + "</p>";

    result += "<p>Tổng tiền: " + currentFomat.format(tongTienDien) + " VND </p>";
    document.getElementById("info_ElectricBill").innerHTML = result;
}



/**
 * TÍNH THUÊ THU NHẬP CÁ NHÂN
 * Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số người phụ thuộc)
 * Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau:
 * 
 * Đầu vào:
 *      THU NHẬP CHỊU THUẾ ( TRIỆU )      THUẾ XUẤT PHẢI CHỊU ( % )
 *              Lương =  60                         5 %
 *         60 < Lương <= 120                        10 %
 *        120 < Lương <= 210                        15 %
 *        210 < Lương <= 384                        20 %
 *        384 < Lương <= 624                        25 %
 *        624 < Lương <= 960                        30 %
 *        Lương 960 trở lên                        35 % 
 * 
 * Xử lý:
 *  Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * 
 * Thuế cá nhân = THU NHẬP CHỊU THUẾ * % THUẾ XUẤT PHẢI CHỊU
 * */

var thuNhap_1 = 0;
var thuNhap_2 = 0;
var thuNhap_3 = 0;
var thuNhap_4 = 0;
var thuNhap_5 = 0;
var thuNhap_6 = 0;
var thuNhap_7 = 0;



document.getElementById("Total_payable").onclick = function () {
    var hoTen = document.getElementById("hoTen").value;
    var luongMotNam = document.getElementById("luongMotNam").value * 1;
    var nNguoi = document.getElementById("nNguoi").value * 1;
    var phanTramthue = document.getElementById("phanTramthue").value * 1;
    // Format VND/ tiền
    // Tạo dấu . trong tiền Việt Nam cho dễ nhìn  VD: 20000=> 20.000 
    var currentFomat = Intl.NumberFormat("VN-vn");
    var luongChiuThue;
    var thueCaNhan;
    var result = "";

    // 1e0 === 1;
    // 1e1 === 10;
    // 1e2 === 100;
    // 1e3 === 1000;
    // 1e4 === 10000;
    // 1e5 === 100000;

    luongChiuThue = luongMotNam - (4 * 1e6) - (nNguoi * (1.6 * 1e6));

    if (0 < luongChiuThue == 60 * 1e6) {
        thuNhap_1 = (luongChiuThue * 5 / 100) * 1e6
    }

    if (60 * 1e6 < luongChiuThue <= 120 * 1e6) {
        thuNhap_1 = (60 * 5 / 100) * 1e6
        thuNhap_2 = (luongChiuThue - 60 * 1e6) * 10 / 100
    }

    if (120 * 1e6 < luongChiuThue <= 210 * 1e6) {
        thuNhap_1 = (60 * 5 / 100) * 1e6;
        thuNhap_2 = (120 * 10 / 100) * 1e6;
        thuNhap_3 = (luongChiuThue - 120 * 1e6) * 15 / 100;
    }

    if (210 * 1e6 < luongChiuThue <= 384 * 1e6) {
        thuNhap_1 = (60 * 5 / 100) * 1e6;
        thuNhap_2 = (120 * 10 / 100) * 1e6;
        thuNhap_3 = (210 * 15 / 100) * 1e6;
        thuNhap_4 = (luongChiuThue - 210 * 1e6) * 20 / 100;
    }

    if (384 * 1e6 < luongChiuThue <= 624 * 1e6) {
        thuNhap_1 = (60 * 5 / 100) * 1e6;
        thuNhap_2 = (120 * 10 / 100) * 1e6;
        thuNhap_3 = (210 * 15 / 100) * 1e6;
        thuNhap_4 = (384 * 20 / 100) * 1e6;
        thuNhap_5 = (luongChiuThue - 384 * 1e6) * 25 / 100;
    }

    if (624 * 1e6 < luongChiuThue <= 960 * 1e6) {
        thuNhap_1 = (60 * 5 / 100) * 1e6;
        thuNhap_2 = (120 * 10 / 100) * 1e6;
        thuNhap_3 = (210 * 15 / 100) * 1e6;
        thuNhap_4 = (384 * 20 / 100) * 1e6;
        thuNhap_5 = (624 * 25 / 100) * 1e6;
        thuNhap_6 = (luongChiuThue - 624 * 1e6) * 30 / 100;
    }

    if (960 * 1e6 < luongChiuThue) {
        thuNhap_1 = (60 * 5 / 100) * 1e6;
        thuNhap_2 = (120 * 10 / 100) * 1e6;
        thuNhap_3 = (210 * 15 / 100) * 1e6;
        thuNhap_4 = (384 * 20 / 100) * 1e6;
        thuNhap_5 = (624 * 25 / 100) * 1e6;
        thuNhap_6 = (960 * 30 / 100) * 1e6;
        thuNhap_7 = (luongChiuThue - 960 * 1e6) * 35 / 100;
    }



    thueCaNhan = thuNhap_1 + thuNhap_2 + thuNhap_3 + thuNhap_4 + thuNhap_5 + thuNhap_6 + thuNhap_7
    console.log(luongMotNam - 4* 1e6)
    console.log(nNguoi * 1.6* 1e6)
    console.log("Luong Chiu Thue " + luongChiuThue)
    console.log("thuNhap 1 " + thuNhap_1)
    console.log("thuNhap 2 " + thuNhap_2)
    console.log("thuNhap 3 " + thuNhap_3)
    console.log("thuNhap 4 " + thuNhap_4)
    console.log("thuNhap 5 " + thuNhap_5)
    console.log("thuNhap 6 " + thuNhap_6)
    console.log("thuNhap 7 " + thuNhap_7)
    console.log("thueCaNhan " + thueCaNhan)

    result += "<p>Họ tên: " + hoTen + "</p>";
    result += "<p>Lương 1 năm: " + currentFomat.format(luongMotNam) + "</p>";
    result += "<p>Só người phụ thuộc: " + nNguoi + "</p>";
    result += "<p>Thuế cá nhân: " + currentFomat.format(thueCaNhan) + " VND </p>";
    document.getElementById("info_payable").innerHTML = result;

}

