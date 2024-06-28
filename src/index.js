import loadPage from "./initilisePage";
import loadMenu from "./menu";

console.log("hmmssads1");
function setNavBarListeners(){
    const menuBtn = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        removeContentChildren();
        loadMenu();
    })
}

function removeContentChildren(){
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}


setNavBarListeners();
loadPage();

