import blandBurgerUrl from "./images/bland-burger.jpg";

function loadMenu(){
    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-content";
    contentDiv.appendChild(menuDiv);
    
    const blandBurgerImg = new Image();
    blandBurgerImg.src = blandBurgerUrl;
    const blandBurger = new MenuItem("Bland Burger", 8.00, "A classic of burgers, can't go wrong with this choice", blandBurgerImg);

    loadMenuItem(blandBurger, menuDiv);
}

function loadMenuItem(menuItem, parentDiv){
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    parentDiv.appendChild(menuItemDiv);

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = menuItem.name;
    menuItemDiv.appendChild(nameHeading);

    menuItemDiv.appendChild(menuItem.image);

    const pricePara = document.createElement("p");
    pricePara.textContent = menuItem.price;
    menuItemDiv.appendChild(pricePara);

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = menuItem.description;
    menuItemDiv.appendChild(descriptionPara);
}

class MenuItem {
    constructor(name, price, description, image){
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    set name(newName){
        if(typeof newName === "string"){
            this._name = newName;
        } else {
            console.error("Name must be a string");
        }
    }

    set price(newPrice){
        if(newPrice > 0){
            this._price = newPrice;
        } else {
            console.error("Price must be a positive number");            
        }
    }

    set description(newDescription){
        if(typeof newDescription === "string"){
            this._description = newDescription;
        } else {
            console.error("Description must be a string");
        }
    }

    set image(newImage){
        if(newImage instanceof HTMLImageElement){
            this._image = newImage;
        } else {
            console.error("Image must be a html image element");
        }
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get description(){
        return this._description;
    }

    get image(){
        return this._image
    }
}

export default loadMenu;