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

function getProduct(product){
    const div = document.createElement("div");
    div.classList.add("card");
    div.appendChild(getTitle(product.name));
    // div.appendChild(getImages(product.images));
    div.appendChild(getDescription(product.desc));
    return div;
}


document.addEventListener("DOMContentLoaded", async e=>{

    products.innerHTML = "???";

    const response = await fetch("./data/products.json");//GET
    const data = await response.json();
    data.forEach(p => products.appendChild(getProduct(p)));


});//end loaded