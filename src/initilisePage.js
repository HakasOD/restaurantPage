import kebabImg from "./angryPfp.jpg";

function loadPage() {
    const contentDiv = document.querySelector("#content");

    const kebab = new Image();
    kebab.src = kebabImg;
    contentDiv.appendChild(kebab);

    const heading = document.createElement("h1");
    heading.textContent = "THIS IS THE BEST KEBAB SHOP WOOO";
    contentDiv.appendChild(heading);

    const para = document.createElement("p");
    para.textContent = "omg I have never had such mouth watering, cheesy kebabs in my life! They are the best in town. Crafted from the finest waters";
    contentDiv.appendChild(para);
}

export default loadPage;