document.getElementById('toggle').addEventListener("click" , function() {
    document.querySelector('.side-bar').style = "width:276px;left: 0;";
    document.querySelector('header .overlay').style = "display:block !important;";
})
document.querySelector('.overlay').addEventListener("click" , function() {
    document.querySelector('.side-bar').style = "width:276px;left: -75%;";
    document.querySelector('header .overlay').style = "display:none !important;";
})
