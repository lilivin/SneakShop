let products = [ 
    {
        "brand": 'Nike',
        "model": 'model',
        "description": 'opis',
        "price": 79.99
    },
    {
        "brand": 'Nike',
        "model": 'model',
        "description": 'opis',
        "price": 99.99
    },
    {
        "brand": 'Nike',
        "model": 'model',
        "description": 'opis',
        "price": 199.99
    },
    {
        "brand": 'Nike',
        "model": 'model',
        "description": 'opis',
        "price": 299.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 69.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 79.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    },
]

let productsContainer = document.getElementById('productsContainer');
let filterButton = document.getElementById('filterButton');
let brandsList = document.getElementById('brandsList');
let resetFilterButton = document.getElementById('resetFilterButton');
let brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
let pricesArray = [];

products.forEach(function(product){
    pricesArray .push(product.price);
})


function addProducts() {
    brandsList.selectedIndex = 0;
    productsContainer.innerHTML= '';
    let product = document.createElement("div");
    product.className = 'col-md-4 my-2';
    for(let i=0; i <= products.length-1; i++) {
        let product = document.createElement("div");
        product.className = 'col-md-4 my-2';
        product.innerHTML = `
        <div class="card mb-4 h-100">
            <img src="images/kiks.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <span class="badge badge-success px-4 py-2">New!</span>
                    <h3 class="card-title mb-0">
                        ${products[i].brand} ${products[i].model}
                    </h3>
                    <p class="mt-0">${products[i].description}</p>
                </div>
            <div class="card-footer text-center">
                ${products[i].price}$
            </div>
        </div>
        `
        console.log(product);
        productsContainer.appendChild(product);
    }
}

/*

function filterProductsBrand() {
    let product = document.createElement("div");
    product.className = 'col-md-4 my-2';
        for(let i=0; i <= products.length-1; i++) {
            if(products[i].brand == brandsListUserChoose) {
                let product = document.createElement("div");
                product.className = 'col-md-4 my-2';
                product.innerHTML = `
                <div class="card mb-4 h-100">
                    <img src="images/kiks.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-success px-4 py-2">New!</span>
                            <h3 class="card-title mb-0">
                                ${products[i].brand} ${products[i].model}
                            </h3>
                            <p class="mt-0">${products[i].description}</p>
                        </div>
                    <div class="card-footer text-center">
                        ${products[i].price}$
                    </div>
                </div>
                `
                console.log(product);
                productsContainer.appendChild(product);
            } else {
                return
            }
        }
}

function filterProductsPrice() {
    
    for(let z=0; z < products.length; z++) {
        console.log(products[z].price);
        console.log(z);
        if(products[z].price < priceOfProduct) {
            let product = document.createElement("div");
            product.className = 'col-md-4 my-2';
            product.innerHTML = `
            <div class="card mb-4 h-100">
                <img src="images/kiks.jpg" alt="" class="card-img-top">
                    <div class="card-body">
                        <span class="badge badge-success px-4 py-2">New!</span>
                        <h3 class="card-title mb-0">
                            ${products[z].brand} ${products[z].model}
                        </h3>
                        <p class="mt-0">${products[z].description}</p>
                    </div>
                <div class="card-footer text-center">
                    ${products[z].price}$
                </div>
            </div>
            `
            console.log(product);
            productsContainer.appendChild(product);
        } else {
            console.log('cos');
        }
    }
}

*/

let productsMapPrice = [];
let productsMapBrand = [];
let productsFinal = [];

function filterPrice() {
    //let priceOfProduct = document.getElementById('priceOfProduct').value;
    if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value == "") {
        console.log("min");
        for(let q = 0; q < products.length; q++) {
            if(products[q].price < parseInt(document.getElementById('maxPriceOfProduct').value)) {
                productsMapPrice.push(products[q]);
            }
        }
        filterBrand();
    } else if(document.getElementById('maxPriceOfProduct').value == "" && document.getElementById('minPriceOfProduct').value != "") {
        console.log("max");
        for(let q = 0; q < products.length; q++) {
            if(products[q].price > parseInt(document.getElementById('minPriceOfProduct').value)) {
                productsMapPrice.push(products[q]);
            }
        }
        filterBrand();
    } else if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value != "") {
        console.log("oba");
        for(let q = 0; q < products.length; q++) {
            if((parseInt(document.getElementById('minPriceOfProduct').value) < products[q].price) && (products[q].price < parseInt(document.getElementById('maxPriceOfProduct').value))) {
                productsMapPrice.push(products[q]);
            }
        }
        filterBrand();
    } else {
        productsMapPrice = [...products];
        filterBrand();
    }
}

function filterBrand() {
    if(brandsList.options[brandsList.selectedIndex].value != '') {
        for(let q = 0; q < productsMapPrice.length; q++) {
            if(productsMapPrice[q].brand == brandsList.options[brandsList.selectedIndex].value) {
                productsMapBrand.push(productsMapPrice[q]);
                console.log('push')
            }
        }
    } else {
        productsMapBrand = [...productsMapPrice];
    }
}

function sort() {
    let sortType = document.querySelector('input[name="sortTypes"]:checked').value;
    productsFinal = [...productsMapBrand];
    if(sortType == 'up') {
        productsFinal.price.sort(function(a, b){return a-b});
    } else if (sortType == 'down') {
        productsFinal.sort(function(a, b){return b-a});
    }
}

addProducts();

function draw() {
    productsContainer.innerHTML = [];
    for(let z = 0; z < productsFinal.length; z++) {
        console.log(z);
        console.log(productsFinal);
    let productContainer = document.createElement("div");
        productContainer.className = 'col-md-4 my-2';
        productContainer.innerHTML = `
            <div class="card mb-4 h-100">
                <img src="images/kiks.jpg" alt="" class="card-img-top">
                    <div class="card-body">
                        <span class="badge badge-success px-4 py-2">New!</span>
                        <h3 class="card-title mb-0">
                            ${productsFinal[z].brand} ${productsFinal[z].model}
                        </h3>
                        <p class="mt-0">${productsFinal[z].description}</p>
                    </div>
                <div class="card-footer text-center">
                    ${productsFinal[z].price}$
                </div>
            </div>
        `
        productsContainer.appendChild(productContainer);
    }
}

filterButton.addEventListener('click', function(e){
    e.preventDefault();
    productsContainer.innerHTML = '';
    //brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
    //filterProductsBrand();
    //filterProductsPrice();
    filterPrice();
    filterBrand();
    //sort();
    draw();
})

resetFilterButton.addEventListener('click', addProducts);