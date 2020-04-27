let products = [ 
    {
        "id": 1,
        "brand": 'Nike',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 79.99
    },
    {
        "id": 2,
        "brand": 'Nike',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 99.99
    },
    {
        "id": 3,
        "brand": 'Nike',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 199.99
    },
    {
        "id": 4,
        "brand": 'Nike',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 299.99
    },
    {
        "id": 5,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 69.99
    },
    {
        "id": 6,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 79.99
    },
    {
        "id": 7,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    },
    {
        "id": 8,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    },
    {
        "id": 9,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    },
    {
        "id": 10,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    },
    {
        "id": 11,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    },
    {
        "id": 12,
        "brand": 'Adidas',
        "model": 'model',
        "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "descriptionLarge": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet diam nec molestie elementum.",
        "price": 89.99
    }
]

let productsContainer = document.getElementById('productsContainer');
let filterButton = document.getElementById('filterButton');
let moreProductsButton = document.getElementById('moreProductsButton');
let brandsList = document.getElementById('brandsList');
let resetFilterButton = document.getElementById('resetFilterButton');
let addButton = document.getElementById('addButton');
let pricesSumContainer = document.getElementById('pricesSumContainer');
let brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
let pricesArray = [];
let koszyk = [];
let pricesSum = 0;

let numbersInputValue = '';

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
                            <button id='${products[i].id}' onclick='funkcja(${products[i].id})' type="button" class="cos btn btn-link btn-lg text-dark p-0" data-toggle="modal" data-target="#exampleModalCenter2">
                                ${products[i].brand} ${products[i].model}
                            </button> 
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
                        <button id='${products[i].id}' onclick='funkcja(${products[i].id})' type="button" class="btn btn-link btn-lg text-dark p-0 btn-brand" data-toggle="modal" data-target="#exampleModalCenter2">
                            ${products[i].brand} ${products[i].model}
                        </button>
                    </h3>
                    <p class="my-1">${products[i].description}</p>
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
                console.log('done');
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
    for(let i = 0; i < productsFinal.length; i++) {
    let productContainer = document.createElement("div");
        productContainer.className = 'col-md-4 my-2';
        productContainer.innerHTML = `
            <div class="card mb-4 h-100">
                <img src="images/kiks.jpg" alt="" class="card-img-top">
                    <div class="card-body">
                        <span class="badge badge-success px-4 py-2">New!</span>
                        <h3 class="card-title mb-0">
                            <button id='${productsFinal[i].id}' onclick='funkcja2(${productsFinal[i].id})' type="button" class="btn btn-link btn-lg text-dark p-0" data-toggle="modal" data-target="#exampleModalCenter2">
                                ${productsFinal[i].brand} ${productsFinal[i].model}
                            </button> 
                        </h3>
                        <p class="mt-0">${productsFinal[i].description}</p>
                    </div>
                <div class="card-footer text-center">
                    ${productsFinal[i].price}$
                </div>
            </div>
        `
        productsContainer.appendChild(productContainer);
    }
        console.log(productsFinal);
        moreProductsButton.style.display = 'none';
}

function clearArrays() {
    productsMapPrice = [];
    productsMapBrand = [];
    productsFinal = [];
}

filterButton.addEventListener('click', function(e){
    clearArrays();
    e.preventDefault();
    productsContainer.innerHTML = '';
    filterPrice();
})

moreProductsButton.addEventListener('click', showAllProducts);

resetFilterButton.addEventListener('click', function() {
    clearArrays();
    addProducts();
    }
);


//-----------------------------------------------------------------
/*
if(sessionStorage.getItem('textValues') == null){
    var myArray =[];
}else{
    myArray =  JSON.parse(sessionStorage.getItem('textValues'));
}

function addItemToArray(){
    myArray.push(document.getElementById("txtMyText").value);
    sessionStorage.setItem('textValues', JSON.stringify(myArray));
}
moreProductsButton.addEventListener('click', addItemToArray);

*/

function sum() {
    pricesSum = 0;
    for (let i = 0; i < koszyk.length; i++) {
        pricesSum += koszyk[i].price;
    }
    pricesSumContainer.innerHTML = `Sum: ${pricesSum.toFixed(2)}$`;
}

function deleteFunction(id) {
    koszykProdukty.innerHTML = '';
    productsDot.innerHTML = '';
    productsDot.style.display = 'none';
    if(koszyk.length <=2) {
        id = 0;
    }
    koszyk.splice(id, 1);
    for(let i = 0; i < koszyk.length; i++) {
        let div = document.createElement('div');
            div.innerHTML = `
            <div class="card w-100 my-2">
                <div class="card-body position-relative pb-0">
                    <h5 class="card-title">${koszyk[i].name}</h5>
                    <p class="card-text">Price: ${koszyk[i].price}$ | Size: ${koszyk[i].size}</p>
                    <button onclick="deleteFunction(${koszyk[i].id})" class="btn btn-danger btn-sm position-absolute buttonDelete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            `;
            koszykProdukty.appendChild(div);
            if(koszyk.length > 0) {
                productsDot.innerHTML = koszyk.length;
                productsDot.style.display = 'block';
            }
    }
    sum();
}

let koszykProdukty = document.getElementById('koszykProdukty');

function selectChange() {
    let numbersInput = document.getElementById('numbersInput');
    numbersInputValue = numbersInput.options[numbersInput.selectedIndex].value;
    if(numbersInputValue == '') {
        addButton.setAttribute('disabled', 'true');
    }
}

function addToKoszyk(id) {
    let numbersInput = document.getElementById('numbersInput');
    numbersInputValue = numbersInput.options[numbersInput.selectedIndex].value;
    if (numbersInputValue != "") {
        for(let i = 0; i < products.length; i++) {
            if(id == products[i].id) {
                let index = koszyk.length;
                let productKoszyk = {
                    "id": index,
                    "name": products[i].brand + " " + products[i].model,
                    "size": numbersInputValue,
                    "price": products[i].price
                } 
                koszyk.push(productKoszyk);
                let div = document.createElement('div');
                div.innerHTML = `
                <div class="card w-100 my-2">
                    <div class="card-body position-relative pb-0">
                        <h5 class="card-title">${koszyk[index].name}</h5>
                        <p class="card-text">Price: ${koszyk[index].price}$ | Size: ${koszyk[index].size}</p>
                        <button onclick="deleteFunction(${koszyk[index].id})" class="btn btn-danger btn-sm position-absolute buttonDelete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                `;
                koszykProdukty.appendChild(div);
                if(koszyk.length > 0) {
                    productsDot.innerHTML = koszyk.length;
                    productsDot.style.display = 'block';
                }
            }
        }
            $('#exampleModalCenter2').modal('hide');
    } else {
        $('.alert').show();
    }
    sum();  
}

function addToKoszyk2(id) {
    let numbersInput = document.getElementById('numbersInput');
    numbersInputValue = numbersInput.options[numbersInput.selectedIndex].value;
    if (numbersInputValue != "") {
        for(let i = 0; i < productsFinal.length; i++) {
            if(id == productsFinal[i].id) {
                let index = koszyk.length;
                let numbersInput = document.getElementById('numbersInput');
                let numbersInputValue = numbersInput.options[numbersInput.selectedIndex].value;
                let productKoszyk = {
                    "id": index,
                    "name": productsFinal[i].brand + " " + productsFinal[i].model,
                    "size": numbersInputValue,
                    "price": productsFinal[i].price
                } 
                koszyk.push(productKoszyk);
                let div = document.createElement('div');
                div.innerHTML = `
                <div class="card w-100 my-2">
                    <div class="card-body position-relative pb-0">
                        <h5 class="card-title">${koszyk[index].name}</h5>
                        <p class="card-text">Price: ${koszyk[index].price}$ | Size: ${koszyk[index].size}</p>
                        <button onclick="deleteFunction(${koszyk[index].id})" class="btn btn-danger btn-sm position-absolute buttonDelete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                `;
                koszykProdukty.appendChild(div);
                if(koszyk.length > 0) {
                    productsDot.innerHTML = koszyk.length;
                    productsDot.style.display = 'block';
                }
            }
        }
        $('#exampleModalCenter2').modal('hide');
    } else {
        $('.alert').show();
    }
    sum();
}

let productInfo = document.getElementById('productInfo');

funkcja = (productId) => {
    for(let i=0; i < products.length; i++) {
        if(productId == products[i].id) {
            productInfo.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Produkt</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row  bc-dark">
                        <div class="col-md-12 ml-auto"><img class="w-100" src="images/bcg-newsletter.jpg"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 h3 my-2">${products[i].brand} ${products[i].model}</div>
                    </div>
                    <div class="row">
                        <p class="col-md-12">${products[i].descriptionLarge}</p>
                    </div>
                    <h5>Size</h5>
                    <select onchange="selectChange()" id="numbersInput" class="form-control col-md-4" required>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                    </select>
                    <div class="alert alert-danger alert-dismissable mt-3" style="display:none;">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        Size is empty!
                    </div>
                    <div class="row">
                        <div class="col-md-12 my-1 h5 text-right">Price: ${products[i].price}$</div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                <button id="addButton" type="button" onclick="addToKoszyk(${products[i].id})" class="btn btn-primary">Dodaj do koszyka</button>
            </div>
            `
        }
    }
}

funkcja2 = (productId) => {
    console.log('f2');
    for(let i=0; i < productsFinal.length; i++) {
        if(productId == productsFinal[i].id) {
            productInfo.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Produkt</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row  bc-dark">
                        <div class="col-md-12 ml-auto"><img class="w-100" src="images/bcg-newsletter.jpg"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 h3 my-2">${productsFinal[i].brand} ${productsFinal[i].model}</div>
                    </div>
                    <div class="row">
                        <p class="col-md-12">${productsFinal[i].descriptionLarge}</p>
                    </div>
                    <h5>Size</h5>
                    <select onchange="selectChange()" id="numbersInput" class="form-control col-md-4" required>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option>38</option>
                        <option>39</option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                    </select>
                    <div class="alert alert-danger alert-dismissable mt-3" style="display:none;">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        Size is empty!
                    </div>
                    <div class="row">
                        <div class="col-md-12 my-1 h5 text-right">Price: ${productsFinal[i].price}$</div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                <button id="addButton" type="button" onclick="addToKoszyk2(${productsFinal[i].id})" class="btn btn-primary">Dodaj do koszyka</button>
            </div>
            `
        }
    }
}