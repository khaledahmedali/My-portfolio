let header = document.querySelector("header");

window.onscroll = function(){
    if(this.scrollY >= 50){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
}
let nav_links =document.getElementById("links");
function open_colose_menu(){
    nav_links.classList.toggle("active")
}

let btn = document.getElementById("button1");

window.onscroll = function(){
  if(window.scrollY >= 600){
    btn.style.display ="block"
  }else{ btn.style.display ="none"}
}
btn.onclick = function(){
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
  })
}