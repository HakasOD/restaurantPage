import loadPage from "./initilisePage";
import loadMenu from "./menu";
import loadContact from "./contact";

console.log("hia");

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


setNavBarListeners();
loadPage();

