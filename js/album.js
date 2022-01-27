var i = 0;
var img = [];


    for (var j = 0; j <21; j++) {
        img[j] = "images/" + j + ".jpg";
    }


function next() {
    i++;
    if (i >= img.length) {
        i = 0;
    }
   
    document.getElementById('img').src = img[i];
    document.getElementById('index').innerText = "Ảnh " + (i + 1) + "/4";
}
var a = setInterval(next, 2000);
function go(obj) {
    if (obj == "1") {
        clearInterval(a);
    } else {
        a = setInterval(next, 2000);
    }
}