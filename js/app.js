// Implementarsolución aquí
document.querySelector("#btn").addEventListener("click", function(){ 
    var randomColor = " #" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
    document.querySelector("#hex-value").innerHTML= randomColor;
});
