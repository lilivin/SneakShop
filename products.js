let products = [ 
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
        "price": 99.99
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
        "price": 99.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 99.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 99.99
    },
    {
        "brand": 'Adidas',
        "model": 'model',
        "description": 'opis',
        "price": 99.99
    },
]

let productsContainer = document.getElementById('productsContainer');
let filterButton = document.getElementById('filterButton');
let brandsList = document.getElementById('brandsList');
let resetFilterButton = document.getElementById('resetFilterButton');
let brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;



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

function filterProducts() {
    productsContainer.innerHTML = '';
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
                console.log('brak')
            }
        }
}



addProducts();

filterButton.addEventListener('click', function(e){
    e.preventDefault();
    brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
    filterProducts();
})

resetFilterButton.addEventListener('click', addProducts);