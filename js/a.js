var i = -1;
var img = ["Chào bé yêu của chú", 
"Nhanh quá ha, lại thêm một năm nữa mình cùng bước qua rồi này",
 "dù thời gian qua hai đứa có nhiều lần sóng gió",
  "nhưng mà cuối cùng vẫn ở lại với nhau nè", 
  "Chú béo của em tuy không giỏi văn, nhưng mà",
"Chỉ cần em vẫn còn yêu chú, thì cho dù cả thế giới này có quay lưng lại với em ",
 "thì chú vẫn sẽ nắm chặt tay em không bao giờ buông.",
"Sang năm mới, chúc cho tình yêu hai đứa ngày càng lớn hơn",
"càng hạnh phúc hơn, nhớ giận thèn ít thôi nhó",
"chúc em yêu của chú luôn mạnh khỏe,",
"học tập thật tốt nè, gặp nhiều măn mắn hơn nè,",
"Đặt biệt là phải thương thành nhiêu hơn nhó",
"còn nữa bớt nói trống không với thèn đê",
"người gì đâu học sinh giỏi văn mà toàn nói trống không với người ta,Géc",
"Hì Hì muốn đón giao thừa với em lắm nhưng mà em chưa lớn :(((",
"vậy nên chú gửi những lời này sớm sơn một chút. chin nhỗi pé nhó",
"Sau cùng,....",
"Chú chỉ muốn nói là...",
"Chú yêu Lê Thảo Nhi của chú nhiều lắm đó","...","...","...","...","...","...","...",
"Hết rồi má, chờ gì nữa :v",
"À còn nè",
"Anh yêu bé ahihi :*"];

 function next() {
    i++;
    if (i>=0){
        clearInterval(a);
        a = setInterval(next, 3500);
    }
    if (i >= img.length-1) {
        clearInterval(a);
    }
    const node = document.createElement("P");
    const textnode = document.createTextNode(img[i]);
    node.appendChild(textnode);
    document.getElementById('txt').appendChild(node).scrollIntoView();
    
}

var a = setInterval(next, 1000);