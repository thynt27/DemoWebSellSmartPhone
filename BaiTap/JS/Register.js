/*Mật khẩu*/ 
$(document).ready(function(){
    $('#eye').click(function(){
       $(this).toggleClass('open');
       $(this).children('i').toggleClass('fa-eye-slash fa-eye');
       if($(this).hasClass('open')){
        $(this).prev().attr('type', 'text');
       }else{
        $(this).prev().attr('type', 'password');
       }
    });
    
});

/*Nhập lại mật khẩu*/ 
$(document).ready(function(){
    $('#eyes').click(function(){
       $(this).toggleClass('open');
       $(this).children('i').toggleClass('fa-eye-slash fa-eye');
       if($(this).hasClass('open')){
        $(this).prev().attr('type', 'text');
       }else{
        $(this).prev().attr('type', 'password');
       }
    });
    
});

function kiemtra() {
    var loi = "";
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    // Kiểm tra tên đăng nhập
    var masv = document.getElementById("tendangnhap");
    if (masv.value == "") {
        masv.className = "loi";
        loi += "Tên đăng nhập không được bỏ trống! <br>";
    }
   


    // Kiểm tra mật khẩu
    var hoten = document.getElementById("matkhau");
    if (hoten.value == "") {
        hoten.className = "loi";
        loi += "Mật khẩu không được để trống! <br>";
    }
    // Kiểm tra email
    var email = document.getElementById("mail");
    if (email.value == "") {
        email.className = "loi";
        loi += "Email không được để trống! <br>";
    } else if (regex.test(email.value) == false) {
        email.className = "loi";
        loi += "Email nhập sai kí tự <br>";
    }
   
    // Kiểm tra nhập lại mật khẩu
    var qt =document.getElementById("nhaplai");
    console.log(qt.value == 0);
    if(qt.value == 0){
        qt.className = "loi";
        loi += "Phải nhập lại mật khẩu! <br>"; 
    }else{
        qt.className = "";
    }
    // Kiểm tra ngày 
    var gc = document.getElementById("date");
    if(gc.value.length > 200){
        gc.className = "loi";
        loi += "Phải nhập ngày  <br>";
    }else{
        gc.className ="";
    }

     // Kiểm tra số điện thoại 
     var gc = document.getElementById("sdt");
     if(gc.value.length > 200){
         gc.className = "loi";
         loi += "Phải nhập số điện thoại <br>";
     }else{
         gc.className ="";
     }

      // Kiểm tra địa chỉ
      var gc = document.getElementById("diachi");
      if(gc.value.length > 200){
          gc.className = "loi";
          loi += "Phải nhập địa chỉ <br>";
      }else{
          gc.className ="";
      }

    //Trả về giá trị kiểm tra
    if (loi != "") {
        document.getElementById('baoloi').innerHTML = loi;
        return false;
    }
}

