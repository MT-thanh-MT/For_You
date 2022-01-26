var i = 0;
var img = ["images/album1.jpg","images/album2.png","images/album3.jpg","images/album4.jpg"];
function prev(){
    i--;
    if(i<0){
        i=img.length-1;
    }
    document.getElementById('img').src = img[i];
    document.getElementById('index').innerText = "Ảnh " + (i+1) + "/4";   
}

function next(){
    i++;
    if(i>=img.length){
        i=0;
    }
    document.getElementById('img').src = img[i];
    document.getElementById('index').innerText = "Ảnh " + (i+1) + "/4";     
}
var a = setInterval(next,2000);
function go(obj){
    if(obj == "1"){
        clearInterval(a);
    }else{
        a =setInterval(next,2000);
    }
}