import burgerBannerImgUrl from "./images/banner-burger.jpg";

function loadPage() {
    const contentDiv = document.querySelector("#content");

    const burgerBannerImg = new Image();
    burgerBannerImg.src = burgerBannerImgUrl;
    contentDiv.appendChild(burgerBannerImg);

    const heading = document.createElement("h1");
    heading.textContent = "BURGER HEAVEN";
    contentDiv.appendChild(heading);

    loadAboutUsSection(contentDiv);
    
    loadReviewsSection(contentDiv);
}

function loadAboutUsSection(parentDiv){
    // Section container
    const aboutUsSection = document.createElement("section");
    aboutUsSection.id = "about-us";
    parentDiv.appendChild(aboutUsSection);

    // Content
    const aboutUsHeading = document.createElement("h2");
    aboutUsHeading.textContent = "ABOUT US";
    aboutUsSection.appendChild(aboutUsHeading);

    const aboutUsPara = document.createElement("p");
    aboutUsPara.textContent = `Founded in 1949, we are commited to providing you with the best quality burgers
    found in the southern hemisphere. Come and try our delicous array of mouth-watering burgers.`;
    aboutUsSection.appendChild(aboutUsPara);
}

function loadReviewsSection(parentDiv){
    // Section container
    const reviewsSection = document.createElement("section");
    reviewsSection.id = "reviews";
    parentDiv.appendChild(reviewsSection);

    // Content
    const reviewsHeader = document.createElement("h2");
    reviewsHeader.textContent = "REVIEWS";
    reviewsSection.appendChild(reviewsHeader);

    const review1Para = document.createElement("p");
    review1Para.textContent = "I have never had such mouth watering, cheesy burgers in my life! They are the best in town. Crafted from the finest waters"
    reviewsSection.appendChild(review1Para);

    const review2Para = document.createElement("p");
    review2Para.textContent = "What a pleasure it was to eat at such an establishment. Breathtaking...";
    reviewsSection.appendChild(review2Para);
}

export default loadPage;