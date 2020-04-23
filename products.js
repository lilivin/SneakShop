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
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 89.99
    }
]

let productsContainer = document.getElementById('productsContainer');
let filterButton = document.getElementById('filterButton');
let moreProductsButton = document.getElementById('moreProductsButton');
let brandsList = document.getElementById('brandsList');
let resetFilterButton = document.getElementById('resetFilterButton');
let brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
let pricesArray = [];

products.forEach(function(product){
    pricesArray .push(product.price);
})

function showAllProducts() {
        brandsList.selectedIndex = 0;
        moreProductsButton.style.display = 'none';
        productsContainer.innerHTML= '';
        let product = document.createElement("div");
        product.className = 'col-md-4 my-2';
        for(let i=0; i < products.length; i++) {
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
            productsContainer.appendChild(product);
        }
}

function addProducts() {
    brandsList.selectedIndex = 0;
    moreProductsButton.style.display = 'block';
    productsContainer.innerHTML= '';
    let product = document.createElement("div");
    product.className = 'col-md-4 my-2';
    for(let i=0; i < 9; i++) {
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
        productsContainer.appendChild(product);
    }
}

addProducts();

let productsMapPrice = [];
let productsMapBrand = [];
let productsFinal = [];

function filterPrice() {
    if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value == "") {
        for(let q = 0; q < products.length; q++) {
            if(products[q].price < parseInt(document.getElementById('maxPriceOfProduct').value)) {
                productsMapPrice.push(products[q]);
            }
        }
        filterBrand();
    } else if(document.getElementById('maxPriceOfProduct').value == "" && document.getElementById('minPriceOfProduct').value != "") {
        for(let q = 0; q < products.length; q++) {
            if(products[q].price > parseInt(document.getElementById('minPriceOfProduct').value)) {
                productsMapPrice.push(products[q]);
            }
        }
        filterBrand();
    } else if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value != "") {
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
            }
        }
        sort();
    } else {
        productsMapBrand = [...productsMapPrice];
        sort();
    }
}

function sort() {
    let sortType = document.querySelector('input[name="sortTypes"]:checked');
    if (sortType != null) {
        if(sortType.value == 'up') {
            productsFinal = productsMapBrand.slice(0);
            productsFinal.sort(function(a,b) {
                return a.price - b.price;
            });
        } else if (sortType.value == 'down') {
            productsFinal = productsMapBrand.slice(0);
            productsFinal.sort(function(a,b) {
                return b.price - a.price;
            });
        }
        draw();
    } else {
        productsFinal = [...productsMapBrand];
        draw();
    }
}

function draw() {
    productsContainer.innerHTML = [];
    for(let z = 0; z < productsFinal.length; z++) {
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
        console.log(productsFinal.length);
        console.log(products.length);
        moreProductsButton.style.display = 'none';
    clearArrays();
}

function clearArrays() {
    productsMapPrice = [];
    productsMapBrand = [];
    productsFinal = [];
}

filterButton.addEventListener('click', function(e){
    e.preventDefault();
    productsContainer.innerHTML = '';
    filterPrice();
})

moreProductsButton.addEventListener('click', showAllProducts);

resetFilterButton.addEventListener('click', addProducts);