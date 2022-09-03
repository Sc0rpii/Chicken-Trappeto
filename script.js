var n_img = 2;
var corrente = 1;

function succ() {
    corrente++
    if(corrente>n_img){
        corrente = 1;
    }
    for(var i = n_img; i>0; i--){
        document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + i +") ").style.display = "none";
    }
    document.querySelector("#menu .menu-slide .img-slider img:nth-child(" + corrente + ") ").style.display = "block";
    console.log(i);
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
    console.log(i);
}