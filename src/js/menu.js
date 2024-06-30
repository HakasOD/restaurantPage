import blandBurgerUrl from "../images/bland-burger.jpg";
import bigBurgerUrl from "../images/big-big-burger.jpg";
import mushroomBurgerUrl from "../images/mushroom-burger.jpg";
import normalBurgerUrl from "../images/normal-burger.jpg";

function loadMenu(){
    const contentDiv = document.querySelector("#content");

    // Menu Heading
    const menuHeaderDiv = document.createElement("div");
    menuHeaderDiv.classList.add("menu-header");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "MENU";
    menuHeaderDiv.appendChild(menuHeader);

    contentDiv.appendChild(menuHeaderDiv);

    // Append Menu
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-content";
    contentDiv.appendChild(menuDiv);
    
    loadMenuItems(menuDiv);
}

function loadMenuItems(parentElement){
    const normalBurgerImg = new Image();
    normalBurgerImg.src = normalBurgerUrl;
    const normalBurger = new MenuItem("The Classic", 10, "Can't go wrong with this one", normalBurgerImg );

    const bigBurgerImg = new Image();
    bigBurgerImg.src = bigBurgerUrl;
    const bigBurger = new MenuItem("Big Burger", 14.99, "Big and juicy", bigBurgerImg);

    const mushroomBurgerImg = new Image();
    mushroomBurgerImg.src = mushroomBurgerUrl;
    const mushroomBurger = new MenuItem("Mushroom Burger", 10, "Mushroomy goodness", mushroomBurgerImg);

    const blandBurgerImg = new Image();
    blandBurgerImg.src = blandBurgerUrl;
    const blandBurger = new MenuItem("Bland Burger", 3.00, "Bland but cheap", blandBurgerImg);

    loadMenuItem(normalBurger, parentElement);
    loadMenuItem(bigBurger, parentElement);
    loadMenuItem(mushroomBurger, parentElement);
    loadMenuItem(blandBurger, parentElement);
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
    pricePara.textContent = menuItem.formattedPrice;
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

    get formattedPrice(){
        return "$" + this._price;
    }

    get description(){
        return this._description;
    }

    get image(){
        return this._image
    }
}

export default loadMenu;