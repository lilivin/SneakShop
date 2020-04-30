//Filter prices

function filterPrice() {
    isFiltered = true;
    for(let q = 0; q < products.length; q++) {
        if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value == "") {
                if(products[q].price < parseInt(document.getElementById('maxPriceOfProduct').value)) {
                    productsMapPrice.push(products[q]);
                }
        } else if(document.getElementById('maxPriceOfProduct').value == "" && document.getElementById('minPriceOfProduct').value != "") {
                if(products[q].price > parseInt(document.getElementById('minPriceOfProduct').value)) {
                    productsMapPrice.push(products[q]);
                }
        } else if(document.getElementById('maxPriceOfProduct').value != "" && document.getElementById('minPriceOfProduct').value != "") {
                if((parseInt(document.getElementById('minPriceOfProduct').value) < products[q].price) && (products[q].price < parseInt(document.getElementById('maxPriceOfProduct').value))) {
                    productsMapPrice.push(products[q]);
                }
        } else {
            productsMapPrice = [...products]; 
        }
    }
    filterBrand();
}

//Filter brands

function filterBrand() {
    if(brandsList.options[brandsList.selectedIndex].value != '') {
        for(let q = 0; q < productsMapPrice.length; q++) {
            if(productsMapPrice[q].brand == brandsList.options[brandsList.selectedIndex].value) {
                productsMapBrand.push(productsMapPrice[q]);
                console.log('done');
            }
        }
    } else {
        productsMapBrand = [...productsMapPrice];   
    }
    sort();
}

//sort

function sort() {
    let sortType = document.querySelector('input[name="sortTypes"]:checked');
    if (sortType != null) {
        productsFinal = productsMapBrand.slice(0);
        if(sortType.value == 'up') {
            productsFinal.sort(function(a,b) {
                return a.price - b.price;
            });
        } else if (sortType.value == 'down') {
            productsFinal.sort(function(a,b) {
                return b.price - a.price;
            });
        }
    } else {
        productsFinal = [...productsMapBrand];
    }
    drawProducts();
}