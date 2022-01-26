var i = -1;
var img = ["Chào bé yêu của chú", "Nhanh quá ha, lại thêm một năm nữa mình cùng bước qua r này",
 "dù thời gian qua hai đứa có nhiều lần sóng gió", "nhưng mà cuối cùng vẫn ở lại với nhau nè"];

 function next() {
    i++;
    if (i >= img.length-1) {
        clearInterval(a);
    }
    const node = document.createElement("P");
    const textnode = document.createTextNode(img[i]);
    node.appendChild(textnode);
    document.getElementById('txt').appendChild(node);
    
}
var a = setInterval(next, 2000);