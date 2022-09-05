var n_img = 3;
var corrente = 1;

var circleImg = document.querySelectorAll(".circle");
circleImg[corrente -1].style ="background-color: #d9d9d9; width: 20px; height: 20px";

function succ() {
    corrente++
    if(corrente>n_img){
        corrente = 1;
    }
    for(var i = n_img; i>0; i--){
        document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + i +") ").style.display = "none";
         circleImg[corrente -1].style ="background-color: #d9d9d9; width: 20px; height: 20px";
        
    }
    document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + corrente + ") ").style.display = "block";
    
    for(var i = 0; i < n_img; i++){
        circleImg[i].style ="background-color: none; width: 15px; height: 15px";
        circleImg[corrente -1].style ="background-color: #d9d9d9; width: 20px; height: 20px";
        console.log(i);
    }
    
}
function prec(){
    corrente--
    if(corrente == 0){
        corrente = n_img;
    }
    for(var i = n_img; i>0; i--){
        document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + i +") ").style.display = "none";
       
    }
    document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + corrente + ") ").style.display = "block";
    for(var i = 0; i < n_img; i++){
        circleImg[i].style ="background-color: none; width: 15px; height: 15px";
        circleImg[corrente -1].style ="background-color: #d9d9d9; width: 20px; height: 20px";
        console.log(i);
    }
}