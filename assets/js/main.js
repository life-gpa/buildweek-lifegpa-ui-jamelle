function openDrawerMenu() {
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

let headerElement = document.querySelector('header')

window.onresize = function () {
  if (window.innerWidth ) {
    
  }
  
}