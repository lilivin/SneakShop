let productInfo = document.getElementById('productInfo');
let brandContainer = document.getElementById('brandContainer');
let descriptionContainer = document.getElementById('descriptionContainer');
let priceContainer = document.getElementById('priceContainer');

showProductsDetails = (productId) => {
    $('.alert').hide();
    if(isFiltered == false) {
        for(let i=0; i < products.length; i++) {
            if(productId == products[i].id) {
                brandContainer.innerHTML = `${products[i].brand} ${products[i].model}`;
                descriptionContainer.innerHTML = products[i].descriptionLarge;
                priceContainer.innerHTML = `Price: ${products[i].price}$`;
                addButton.setAttribute(`onclick`, `addToBasket(${products[i].id})`);
            }
        }
    } else {
        for(let i=0; i < productsFinal.length; i++) {
            if(productId == productsFinal[i].id) {
                brandContainer.innerHTML = `${productsFinal[i].brand} ${productsFinal[i].model}`;
                descriptionContainer.innerHTML = productsFinal[i].descriptionLarge;
                priceContainer.innerHTML = `Price: ${productsFinal[i].price}$`;
                addButton.setAttribute(`onclick`, `addToBasket(${productsFinal[i].id})`);
            }
        }
    }  
}