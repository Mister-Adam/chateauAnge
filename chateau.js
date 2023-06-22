let imgCrousel1 = document.getElementById("image1");
let imgCrousel2 = document.getElementById("image2");
let imgCrousel3 = document.getElementById("image3");

let discCrousel1 = document.getElementById("disc1");
let discCrousel2 = document.getElementById("disc2");
let discCrousel3 = document.getElementById("disc3");



discCrousel1.addEventListener("click", function(){
    imgCrousel1.style.display = "inline-block";
    imgCrousel2.style.display = "none";
    imgCrousel3.style.display = "none";

});
discCrousel2.addEventListener("click", function(){
    imgCrousel2.style.display = "inline-block";
    imgCrousel1.style.display = "none";
    imgCrousel3.style.display = "none";
});
discCrousel3.addEventListener("click", function(){
    imgCrousel3.style.display = "inline-block";
    imgCrousel1.style.display = "none";
    imgCrousel2.style.display = "none";
});






let flecheGauche = document.getElementById("flecheGauche");
let flecheDroite = document.getElementById("flecheDroite");

if(imgCrousel1){
    flecheGauche.addEventListener("click", function(){
        imgCrousel3.style.display = "inline-block";
        imgCrousel1.style.display = "none";
        imgCrousel2.style.display = "none";
    });
};
if(imgCrousel3){
    flecheGauche.addEventListener("click", function(){
        imgCrousel2.style.display = "inline-block";
        imgCrousel1.style.display = "none";
        imgCrousel3.style.display = "none";
    });
};
if(imgCrousel2){
    flecheGauche.addEventListener("click",function(){
        imgCrousel1.style.display = "inline-block";
        imgCrousel2.style.display = "none";
        imgCrousel3.style.display = "none";
    });
};

if(imgCrousel1){
    flecheDroite.addEventListener("click", function(){
        imgCrousel2.style.display = "inline-block";
        imgCrousel1.style.display = "none";
        imgCrousel3.style.display = "none";
    });
};
if(imgCrousel2){
    flecheDroite.addEventListener("click", function(){
        imgCrousel3.style.display = "inline-block";
        imgCrousel1.style.display = "none";
        imgCrousel2.style.display = "none";
    });
};

if(imgCrousel3){
    flecheDroite.addEventListener("click", function(){
        imgCrousel1.style.display = "inline-block";
        imgCrousel2.style.display = "none";
        imgCrousel3.style.display = "none";
    });
};
