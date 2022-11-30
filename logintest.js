function kiemtra() {
    var loi = "";
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    // Kiểm tra họ tên
    var hoten = document.getElementById("hoten");
    if (hoten.value == "") {
        hoten.className = "loi";
        loi += "Họ và tên không được để trống! <br>";
    } else if (hoten.value.length > 30) {
        hoten.className = "loi";
        loi += "Họ và tên quá dài! <br>";
    }
    // Kiểm tra email
    var email = document.getElementById("email");
    if (email.value == "") {
        email.className = "loi";
        loi += "Email không được để trống! <br>";
    } else if (regex.test(email.value) == false) {
        email.className = "loi";
        loi += "Email nhập sai kí tự <br>";
    }
    //Kiểm tra số điện thoại
    var sdt = document.getElementById("sdt");
    if(sdt.value == ""){
        sdt.className = "loi";
        loi += "Số điện thoại không được để trống! ";
    }else if(sdt.value.length > 10){
        sdt.className = "loi";
        loi += "Số điện thoại quá 10 kí tự!";
    }
  
   
    //Trả về giá trị kiểm tra
    if (loi != "") {
        document.getElementById('baoloi').innerHTML = loi;
        return false;
    }
}
function nhaplai(){
    hoten.value = "";
    email.value = "";
    sdt.value = "";
}
