function getDescription(desc){
    const div = document.createElement("div");
    div.classList.add("desc");
    div.innerText = desc;
    return div;
}

function getTitle(name){
    const div = document.createElement("div");
    div.classList.add("title");
    div.innerText = name;
    return div;
}
function getPrice(amount){
    const div = document.createElement("div");
    div.classList.add("amount");
    div.innerText = "$" + amount.toFixed(2);
    return div;
}

function getImages(images){
    const img = document.createElement("img");
    img.classList.add("image");
    const image = images[0]; //Use First. TODO find and use "default"
    img.src = image.path;
    img.alt = image.name;
    return img;
}
function getBuyButton(product){
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Add to Cart"
    button.dataset.product = encodeURI(JSON.stringify(product));
    return button;
}
function getProduct(product){
    const div = document.createElement("div");
    div.classList.add("card");
    div.appendChild(getBuyButton(product));
    div.appendChild(getTitle(product.name));
    div.appendChild(getPrice(product.price));
    div.appendChild(getImages(product.images));
    div.appendChild(getDescription(product.desc));
    return div;
}


document.addEventListener("DOMContentLoaded", async e=>{

    products.innerHTML = "";

    const response = await fetch("./data/products.json");//GET
    const data = await response.json();
    data.forEach(p => products.appendChild(getProduct(p)));

});//end loaded