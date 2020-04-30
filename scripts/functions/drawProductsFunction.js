function drawProducts() {
    brandsList.selectedIndex = 0;
    productsContainer.innerHTML= '';
    let product = document.createElement("div");
    product.className = 'col-md-4 my-2';
    if(isFiltered == false) {
        if(showAllProducts == false) {
            for(let i=0; i < 9; i++) {
                let product = document.createElement("div");
                product.className = 'col-md-4 my-2';
                product.innerHTML = `
                <div class="card mb-4 h-100">
                    <img src="images/kiks.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-success px-4 py-2">New!</span>
                            <h3 class="card-title mb-0">
                                <button id='${products[i].id}' onclick='showProductsDetails(${products[i].id})' type="button" class="cos btn btn-link btn-lg text-dark p-0" data-toggle="modal" data-target="#exampleModalCenter2">
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
                moreProductsButton.style.display="block";
                productsContainer.appendChild(product);
            }
        } else {
            moreProductsButton.style.display = 'none';
            for(let i=0; i < products.length; i++) {
                let product = document.createElement("div");
                product.className = 'col-md-4 my-2';
                product.innerHTML = `
                <div class="card mb-4 h-100">
                    <img src="images/kiks.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-success px-4 py-2">New!</span>
                            <h3 class="card-title mb-0">
                                <button id='${products[i].id}' onclick='showProductsDetails(${products[i].id})' type="button" class="cos btn btn-link btn-lg text-dark p-0" data-toggle="modal" data-target="#exampleModalCenter2">
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
    } else {
        productsContainer.innerHTML = [];
        moreProductsButton.style.display = 'none';
        for(let i = 0; i < productsFinal.length; i++) {
        let productContainer = document.createElement("div");
            productContainer.className = 'col-md-4 my-2';
            productContainer.innerHTML = `
                <div class="card mb-4 h-100">
                    <img src="images/kiks.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                            <span class="badge badge-success px-4 py-2">New!</span>
                            <h3 class="card-title mb-0">
                                <button id='${productsFinal[i].id}' onclick='showProductsDetails(${productsFinal[i].id})' type="button" class="btn btn-link btn-lg text-dark p-0" data-toggle="modal" data-target="#exampleModalCenter2">
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
    }
}