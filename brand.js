const brands = {
    "star": {
        headerImage: "assets/brands-image-firt.jpg",
        image: "assets/star.png",
        name: "STAR",
        desc: "Welcome to <b>Star</b> <br> Perched with a stunning view of the city skyline, <b>Star</b> is one of the most exclusivedining destinations in town. Blending classic elegance with a contemporary flair, <b>Star</b> features a chic interior design complemented by a sophisticated winter garden and an open kitchen seamlessly integrated into the dining area. <br> At <b> Star</b>, we offer an exceptional culinary experience by combining world flavors with local inspirations.Our menu, which evolves with the seasons, promises a diverse and rich selection that caters to a variety of tastes. <br> In addition to our gourmet offerings, <b> Star</b> creates a unique atmosphere by harmonizing exquisite cuisine with captivating music.To complete the experience, we also boast a separate, vibrant nightclub where you can enjoy a night of entertainment and dancing. <br> Discover the perfect fusion of taste, ambiance, and entertainment at <b> Star</b >.",
        address: "Hobyar, 4, Türk Ocağı Cd. <br> 34112 Fatih/İstanbul",
        tel: "+90 212 789 98 76",
        mail: "star@cloud.com",
        breadCrumb: "Star",
        titleBrands: "Cloud-Brands-Star",
    },
    "bobo": {
        headerImage: "assets/brands-image-second.jpg",
        image: "assets/bobo.png",
        name: "BOBO",
        desc: "<b>Bobo</b> Restaurant stands out as one of Istanbul's premier event venues, offering an exceptional setting for a variety of special occasions. With its stunning city views and elegant interior design, <b>Bobo</b> Restaurant is the perfect choice for hosting events such as weddings, cocktail receptions, and gala dinners. <br> Featuring spacious and stylish salons, <b>Bobo</b> Restaurant provides an exquisite ambiance suitable for both summer and winter celebrations.The modern and sophisticated atmosphere ensures that every event is memorable and uniquely tailored to your needs. <br> Experience unforgettable moments with your guests against the backdrop of the city skyline. <b>Bobo</b> Restaurant combines a delectable menu with professional service to make every event truly special.",
        address: "Selimiye, Tıbbiye Cd No: 38, <br> 34668 Üsküdar/İstanbul",
        tel: "+90 212 123 32 10",
        mail: "bobo@cloud.com",
        breadCrumb: "Bobo",
        titleBrands: "Cloud-Brands-Bobo",
    },
    "caramel": {
        headerImage: "assets/brands-image-third.jpg",
        image: "assets/caramel.png",
        name: "CARAMEL",
        desc: "<b>Caramel</b> Restaurant embodies the essence of contemporary culinary excellence, offering a unique fusion of modern flavors and elegant atmosphere. With its vibrant ambience, exquisite cuisine, and curated music, <b>Caramel</b> captures the true spirit of fine dining. <br> Our restaurant, bar, and lounge areas provide an exclusive gastronomic experience where every detail is crafted to perfection. Whether you're enjoying a sophisticated meal, sipping on handcrafted cocktails, or relaxing in our stylish lounge, <b>Caramel</b> delivers an unforgettable culinary journey that celebrates innovation and taste. <br> Discover a world of refined dining at <b>Caramel</b> Restaurant, where each visit promises a memorable experience defined by exceptional food, ambiance, and service.",
        address: "Caddebostan, Bağdat Cad., <br> 34728 Kadıköy/İstanbul",
        tel: "+90 212 010 70 04",
        mail: "caramel@cloud.com",
        breadCrumb: "Caramel",
        titleBrands: "Cloud-Brands-Caramel",
    }
}


const params = new URLSearchParams(window.location.search);
const brandName = params.get("name").toLocaleLowerCase();

window.onload = () => {
    const brand = brands[brandName];
    if (!brand) {
        return;
    }



    const headerImageEl = document.getElementById("brand-header-image");
    const nameEl = document.getElementById("brand-name");
    const imageEl = document.getElementById("brand-image");
    const descEl = document.getElementById("brand-text");
    const addressEl = document.getElementById("brand-address");
    const telEl = document.getElementById("brand-telephone");
    const mailEl = document.getElementById("brand-mail");
    const breadCrumbEl = document.getElementById("brand-bread-crumb");
    const titleBrandsEl = document.getElementById("title-brands");

    headerImageEl.src = brand.headerImage;
    nameEl.innerHTML = brand.name;
    imageEl.src = brand.image;
    descEl.innerHTML = brand.desc;
    addressEl.innerHTML = brand.address;
    telEl.innerHTML = brand.tel;
    mailEl.innerHTML = brand.mail;
    breadCrumbEl.innerHTML = brand.breadCrumb;
    titleBrandsEl.innerHTML = brand.titleBrands;


    const brandsList = Object.entries(brands);
    const brandIndex = brandsList.findIndex(brandItem => brandItem[0] === brandName);
    if (brandIndex < 1) {
        document.getElementById("prev-button").hidden = "true";
    }
    if (brandIndex === -1 || brandIndex >= brandsList.length - 1) {
        document.getElementById("next-button").hidden = "true";
    }


}

function onPrevClick() {
    const brandsList = Object.entries(brands);
    const brandIndex = brandsList.findIndex(brandItem => brandItem[0] === brandName);
    if (brandIndex < 1) {
        return;
    }
    const prevIndex = brandIndex - 1;
    const prevBrand = brandsList[prevIndex][1];
    window.location.href = `brand.html?name=${prevBrand.name}`;
    console.log(brandsList);

}

function onNextClick() {
    const brandsList = Object.entries(brands);
    const brandIndex = brandsList.findIndex(brandItem => brandItem[0] === brandName);
    if (brandIndex === -1 || brandIndex >= brandsList.length - 1) {
        return;
    }
    const nextIndex = brandIndex + 1;
    const nextBrand = brandsList[nextIndex][1];
    window.location.href = `brand.html?name=${nextBrand.name}`;
    console.log(brandsList);

}
