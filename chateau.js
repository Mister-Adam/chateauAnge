let imgCarousel1 = document.getElementById("image1");
let imgCarousel2 = document.getElementById("image2");
let imgCarousel3 = document.getElementById("image3");

let discCarousel1 = document.getElementById("disc1");
let discCarousel2 = document.getElementById("disc2");
let discCarousel3 = document.getElementById("disc3");



discCarousel1.addEventListener("click", function(){
    imgCarousel1.style.display = "inline-block";
    imgCarousel2.style.display = "none";
    imgCarousel3.style.display = "none";
    discCarousel1.style.backgroundColor = "#260E12";
    discCarousel2.style.backgroundColor = "bisque";
    discCarousel3.style.backgroundColor = "bisque";
    

});
discCarousel2.addEventListener("click", function(){
    imgCarousel2.style.display = "inline-block";
    imgCarousel1.style.display = "none";
    imgCarousel3.style.display = "none";
    discCarousel2.style.backgroundColor = "#260E12";
    discCarousel1.style.backgroundColor = "bisque";
    discCarousel3.style.backgroundColor = "bisque";
});
discCarousel3.addEventListener("click", function(){
    imgCarousel3.style.display = "inline-block";
    imgCarousel1.style.display = "none";
    imgCarousel2.style.display = "none";
    discCarousel3.style.backgroundColor = "#260E12";
    discCarousel1.style.backgroundColor = "bisque";
    discCarousel2.style.backgroundColor = "bisque";
});


let flecheGauche = document.getElementById("flecheGauche");
let flecheDroite = document.getElementById("flecheDroite");

function Carousel(){
    if(imgCarousel1){
        flecheGauche.addEventListener("click", function(){
            imgCrousel3.style.display = "inline-block";
            imgCrousel1.style.display = "none";
            imgCrousel2.style.display = "none";
        });
    };
    if(imgCarousel1){
        flecheDroite.addEventListener("click", function(){
            imgCarousel2.style.display = "inline-block";
            imgCarousel1.style.display = "none";
            imgCarousel3.style.display = "none";
        });
    };
    if(imgCarousel2){
        flecheGauche.addEventListener("click",function(){
            imgCarousel1.style.display = "inline-block";
            imgCarousel2.style.display = "none";
            imgCarousel3.style.display = "none";
        });
    };
    if(imgCarousel2){
        flecheDroite.addEventListener("click", function(){
            imgCarousel3.style.display = "inline-block";
            imgCarousel1.style.display = "none";
            imgCarousel2.style.display = "none";
        });
    };
    if(imgCarousel3){
        flecheGauche.addEventListener("click", function(){
            imgCarousel2.style.display = "inline-block";
            imgCarousel1.style.display = "none";
            imgCarousel3.style.display = "none";
        });
    };
    if(imgCarousel3){
        flecheDroite.addEventListener("click", function(){
            imgCarousel1.style.display = "inline-block";
            imgCarousel2.style.display = "none";
            imgCarousel3.style.display = "none";
        });
    };

}


Carousel();
