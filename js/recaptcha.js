// https://www.google.com/recaptcha/admin/create

// <script src="https://www.google.com/recaptcha/api.js" async defer></script>

// <div class="g-recaptcha" data-sitekey="6LeYVGcmAAAAAKbD3rrQ31mm3gxESXC2aXlqKtjs"></div>

const secretKey = "6LeYVGcmAAAAAKbD3rrQ31mm3gxESXC2aXlqKtjs";
const response = "6LeYVGcmAAAAANJwou1ROFVwRY10nRmXeIvvDBNR";
// làm thế nào để lấy được response token?
// code


fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${response}`, {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    // Xác minh thành công, tiếp tục xử lý form
  } else {
    // Xác minh thất bại, hiển thị thông báo lỗi
  }
})
.catch(error => console.error(error));