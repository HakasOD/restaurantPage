import loadPage from "./js/initilisePage";
import loadMenu from "./js/menu";
import loadContact from "./js/contact";
import logoImgUrl from "./images/burger-icon.png";

import "./style/general.css";
import "./style/home.css";
import "./style/menu.css";
import "./style/contact.css";

console.log("??");
function setNavBarLogo(){
    const logoImg = document.querySelector("#logo-img");
    logoImg.src = logoImgUrl;
    
}

function setNavBarListeners(){
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const contactBtn = document.querySelector(".contact");

    menuBtn.addEventListener("click", () => {
        removeContentChildren();
        loadMenu();
    })

    homeBtn.addEventListener("click", () => {
        removeContentChildren();
        loadPage();
    })

    contactBtn.addEventListener("click", () => {
        removeContentChildren();
        loadContact();
    })
}

function removeContentChildren(){
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

setNavBarLogo();
setNavBarListeners();
loadContact();

