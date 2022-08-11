const ust = document.querySelector("#ust");

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 80){
        ust.style.position = "fixed";
        ust.style.top="0px";
        ust.styl.background = "#0000000";
    }
    else{
        ust.style.position = "static";
    }
})
var btn = document.getElementById("button");
btn.onclick = function(){
    window.alert("Mesajınız başarıyla iletilmiştir.");
}




