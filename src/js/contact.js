function loadContact(){
    const contentDiv = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";
    contentDiv.appendChild(contactDiv);

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phoneNumberAndLocation = document.createElement("p");
    phoneNumberAndLocation.textContent = "Phone Number: 0129392584";

    // Google maps
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3152.0488833965414!2d144.95968707663096!3d-37.812323971976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ4JzQ0LjQiUyAxNDTCsDU3JzQ0LjEiRQ!5e0!3m2!1sen!2sau!4v1719645620421!5m2!1sen!2sau")

    contactDiv.appendChild(heading);
    contactDiv.appendChild(phoneNumberAndLocation);
    contactDiv.appendChild(iframe);
}

export default loadContact;