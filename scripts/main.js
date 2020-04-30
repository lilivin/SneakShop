let productsContainer = document.getElementById('productsContainer');
let filterButton = document.getElementById('filterButton');
let moreProductsButton = document.getElementById('moreProductsButton');
let brandsList = document.getElementById('brandsList');
let resetFilterButton = document.getElementById('resetFilterButton');
let addButton = document.getElementById('addButton');
let pricesSumContainer = document.getElementById('pricesSumContainer');
let brandsListUserChoose = brandsList.options[brandsList.selectedIndex].value;
let pricesArray = [];
let basket = [];
let pricesSum = 0;

let basketProducts = document.getElementById('basketProducts');

let isFiltered = false;
let showAllProducts = false;

let numbersInputValue = '';

if(sessionStorage.getItem('textValues') == null){
    basket = [];
}else{
    basket =  JSON.parse(sessionStorage.getItem('textValues'));
}

drawProducts();
refreshBasket();

let productsMapPrice = [];
let productsMapBrand = [];
let productsFinal = [];

function clearArrays() {
    isFiltered = false;
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

moreProductsButton.addEventListener('click', function() {
    showAllProducts = true;
    drawProducts();
});

resetFilterButton.addEventListener('click', function() {
    isFiltered = false;
    showAllProducts = false;
    moreProductsButton.style.display = 'block';
    clearArrays();
    drawProducts();
});

function sum() {
    pricesSum = 0;
    for (let i = 0; i < basket.length; i++) {
        pricesSum += basket[i].price;
    }
    pricesSumContainer.innerHTML = `Sum: ${pricesSum.toFixed(2)}$`;
}