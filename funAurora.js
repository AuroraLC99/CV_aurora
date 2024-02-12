
// MENU DESPLEGABLE

let menuVisible = false;
let menu = document.getElementById("desplegable");
function mostrarOcultar() {
  if (menuVisible == false) {
    menu.style.display = "block";
    menuVisible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

