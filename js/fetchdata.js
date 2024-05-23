var myHeaders = new Headers();
myHeaders.append(
  "token_dev",
  "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgsg6vJvRvBxoxvaURjikPbyqCm==="
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const locations = [
  "Cần Thơ",
  "Đà Nẵng",
  "Hải Phòng",
  "Hà Nội",
  "Hồ Chí Minh",
  "Bà Rịa",
  "Bạc Liêu",
  "Bắc Giang",
  "Bắc Ninh",
  "Bảo Lộc",
  "Biên Hòa",
  "Bến Tre",
  "Buôn Ma Thuột",
  "Cà Mau",
  "Cẩm Phả",
  "Cao Lãnh",
  "Châu Đốc",
  "Đà Lạt",
  "Điện Biên Phủ",
  "Đông Hà",
  "Đồng Hới",
  "Hà Tĩnh",
  "Hạ Long",
  "Hải Dương",
  "Hòa Bình",
  "Hội An",
  "Huế",
  "Hưng Yên",
  "Kon Tum",
  "Lạng Sơn",
  "Lào Cai",
  "Long Xuyên",
  "Móng Cái",
  "Mỹ Tho",
  "Nam Định",
  "Ninh Bình",
  "Nha Trang",
  "Cam Ranh",
  "Phan Rang–Tháp Chàm",
  "Phan Thiết",
  "Phủ Lý",
  "Pleiku",
  "Quảng Ngãi",
  "Quy Nhơn",
  "Rạch Giá",
  "Sa Đéc",
  "Sóc Trăng",
  "Sơn La",
  "Tam Kỳ",
  "Tân An",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Trà Vinh",
  "Tuy Hòa",
  "Tuyên Quang",
  "Uông Bí",
  "Việt Trì",
  "Vinh",
  "Vĩnh Yên",
  "Vĩnh Long",
  "Vũng Tàu",
  "Yên Bái",
  "Cao Bằng"
]

const bgColor = ["#428EFF", "#FFBB01", "#FF5145"];
const BG_COLOR_NUMB = 3;

function fillSelect() {
  document.getElementById("location").innerHTML =
    locations.reduce((tmp, x) => `${tmp}<option value="${x}">${x}</option>`, '<option selected value="default" disabled>Select your Place of Residence</option>');
}

fillSelect();