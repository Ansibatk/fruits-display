let fruits = [
    { name: "apple", image: "https://i.pinimg.com/736x/f9/86/e4/f986e4d28fa6ad24dfe90475dac6a248.jpg" },
    { name: "orange", image: "https://m.media-amazon.com/images/I/31mXuKEEV9L.SS700.jpg" },
    { name: "grapes", image: "https://static.lassana.com/cdn-cgi/image/width=700,quality=100,f=auto/product_images/prod-2091-1691334475863.jpg" }
];
let pineapple = { name: "pineapple", image: "https://m.media-amazon.com/images/I/51LwyQSzynL.SS700.jpg" };


fruits[0] = pineapple;
let fruitsContainer = document.getElementById("fruitsContainer");
fruits.forEach((fruit) => {
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.src = fruit.image;
    img.alt = fruit.name;
    let name = document.createElement("h3");
    name.textContent = fruit.name;
    card.appendChild(img);
    card.appendChild(name);
    fruitsContainer.appendChild(card);
});
