//lấy danh sách các thẻ tr ở phần tbody:
var the_tr_list = document.querySelectorAll("table tbody tr");

//hàm check tất cả các thẻ input[type=checkbox] & set thuộc tính disabled cho thẻ input[type=number]:
function checkFull(obj) {
    for (var i = 0; i < the_tr_list.length; i++) {
        //set checkked 
        the_tr_list[i].querySelector("input[type=checkbox]").checked = obj.checked;

        //set disabled 
        the_tr_list[i].querySelector("input[type=number]").disabled = !obj.checked ? true : false;
    }

}

//hàm ktra checked của từng input_checkbox và set thuộc tính disabled cho input_number:
function checkbox(obj) {
    obj.parentElement.parentElement.querySelector("input[type=number]").disabled = !obj.checked ? true : false;
    if (obj.checked == false) {
        obj.parentElement.parentElement.querySelector("input[type=number]").value = 0;
        obj.parentElement.parentElement.lastElementChild.innerHTML = 0;
        TongTien();
    }
}

//hàm tính tiền cho từng sản phẩm và tính tổng tiền 
function number(obj) {
    var thanh_tien = Number(obj.parentElement.previousElementSibling.innerHTML) * obj.value;
    obj.parentElement.nextElementSibling.innerHTML = thanh_tien;
    TongTien();
}

//hàm tính tổng tiền
function TongTien() {
    var tong_tien = 0;
    for (var i = 0; i < the_tr_list.length; i++) {

        var the_tong_tien = the_tr_list[i].lastElementChild.innerHTML;

        tong_tien = tong_tien + Number(the_tong_tien);

        document.getElementById("tongtien").innerHTML = tong_tien;
    }
}

//hàm chọn mức giá
function chon(obj){
    var don_gia = [];
    for(var i = 0;i<the_tr_list.length;i++){        don_gia[i]=the_tr_list[i].children[2].innerHTML;}
    switch(obj.value){
        case "0":
                for(var i=0;i<the_tr_list.length;i++){
                    the_tr_list[i].style.display = "table-row";
                }
        break;
        case "1":
            for(var i=0;i<the_tr_list.length;i++){
                if(Number(don_gia[i])<100){
                    the_tr_list[i].style.display = "table-row";
                }else{
                    the_tr_list[i].style.display = "none";}
            }
        break;
        case "2":
            for(var i=0;i<the_tr_list.length;i++){
                if(Number(don_gia[i])>100 && Number(don_gia[i])<500){
                    the_tr_list[i].style.display = "table-row";
                }else{
                    the_tr_list[i].style.display = "none";}
            }
        break;
        case "3":
            for(var i=0;i<the_tr_list.length;i++){
                if(Number(don_gia[i])>500){
                    the_tr_list[i].style.display = "table-row";
                }else{
                    the_tr_list[i].style.display = "none";}
            }
        break;
        default:

        break;
    }
}