function check(){
    //Khởi tạo biến 
    var msv = document.getElementById("Masv"); //Mã Sinh viên
    var name = document.getElementById("name"); // họ tên
    var email = document.getElementById("email"); // email ng dùng
    var GT = document.getElementsByName("gioitinh"); //Giới tính
    var ST = document.getElementsByName("ST"); //Sở thích
    var national = document.getElementById("national"); //Quốc tịch
    var note = document.getElementById("ghichu"); //Ghi chú

// các biến dùng báo lỗi
    var loi1 = document.getElementById("loi1");
    var loi2 = document.getElementById("loi2");
    var loi3 = document.getElementById("loi3");
    var loi4 = document.getElementById("loi4");
    var loi5 = document.getElementById("loi5");
    var loi6 = document.getElementById("loi6");
    var loi7 = document.getElementById("loi7");
    

//Kiểm tra Form
var kt=0;
	for(var i=0;i<ST.length;i++){
		if(ST[i].checked==true){
			kt++;
		}
	}// for kiểm tra sở thích

 //if lớn kiểm tra toàn form giúp người dùng biết được cần phải nhập những gì
if(msv.value.length==0 || name.value.length==0 || email.value.length==0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) || GT[0].checked==false & GT[1].checked==false || kt==0 || national.value==0){
    
    //Mã sinh viên
    if(msv.value.length==0){
        msv.style.background="yellow";
		loi1.innerText="Mã sinh viên không được để trống!";
        
    }else{
        msv.style.background="none";
        loi1.innerText="";
    }

    //Họ tên
    if(name.value.length==0){
        name.style.background="yellow";
        loi2.innerText="Họ tên không được để trống!";
       
    }else{
        name.style.background="none";
        loi2.innerText="";
    }

    //Email
    if(email.value.length==0){
        email.style.background="yellow";
        loi3.innerText="Email không được để trống!";
        
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        loi3.innerText="Email phải đúng định dạng. chỉ có một ký tự @ và phải đúng domain!";
    }else{
        email.style.background="none";
        loi3.innerText="";
    }

    //Giới tính
    if(GT[0].checked==false & GT[1].checked==false){
        loi4.innerText="Bạn phải chọn giới tính!";
		
    }else{
        loi4.innerText="";
    }

    //Sở thích 
	if(kt==0){
		loi5.innerText="Bạn phải chọn ít nhất một sở thích!";
		
	}else{
		loi5.innerText="";
	}

    //Quốc tịch
    if(national.value==0){
		loi6.innerText=" Bạn phải chọn quốc tịch!";
		
	}else{
		loi6.innerText="";
	}

    //Ghi chú "không quá 200 ký tự"
    if(note.value.length>200){
		loi7.innerText="Bạn chỉ được nhập tối đa 200 ký tự!";
		note.style.border="1px solid red";
		
	}else{
		loi7.innerText="";
		note.style.border="1px solid #ccc";
	}
    
    return false;//ngăn chặn hành động submit xảy ra tức là nó sẽ không submit form.
    }
   

    alert("Đăng ký thành công!!! \nxin hãy xác nhận thông tin trong email đã đăng ký"); // thông báo cho người dùng sau khi đăng kí thành công
//bài làm by xuân thành ph18759
}