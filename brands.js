

const brandItem = document.createElement("a");
const createImage = (title, imageSrc, url) => {
    const brandItems = document.createElement("a");
    brandItems.href = url;
    brandItems.className = "brands-images";

    const titleEl = document.createElement("div");
    titleEl.className = "centered-image-text";
    titleEl.innerText = title;

    brandItems.appendChild(titleEl);

    const imageEl = document.createElement("img");
    imageEl.src = imageSrc;
    imageEl.className = "brand-image";

    brandItems.appendChild(imageEl);

    document.getElementById("brand-image-container").appendChild(brandItems);
}

const brandItems = [
    {
        title: "STAR",
        url: "star.html",
        imageSrc: "assets/brands-image-firt.jpg"
    },
    {
        title: "BOBO",
        url: "bobo.html",
        imageSrc: "assets/brands-image-second.jpg"
    },
    {
        title: "CARAMEL",
        url: "caramel.html",
        imageSrc: "assets/brands-image-third.jpg"
    }
];

brandItems.forEach(item => {
    createImage(item.title, item.imageSrc, item.url);
});