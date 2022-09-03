const menu = document.getElementById("menu");
const toggle = document.getElementById("togglebtn");
let open = false;
console.log(toggle.children[0]);
toggle.addEventListener("click", () => {
  if (!open) {
    menu.classList.remove("hide");
    menu.classList.add("show");
    toggle.children[0].src = "./images/icon-close.svg";
    open = true;
  } else {
    menu.classList.add("hide");
    menu.classList.remove("show");
    toggle.children[0].src = "./images/icon-hamburger.svg";
    open = false;
  }
});
