function addToBasket(id) {
    let numbersInput = document.getElementById('numbersInput');
    numbersInputValue = numbersInput.options[numbersInput.selectedIndex].value;
    let index = null;
    if (numbersInputValue != "") {
        if(isFiltered == false) {
            for(let i = 0; i < products.length-1; i++) {
                if(id == products[i].id) {
                    index = basket.length;
                    let basketProduct = {
                        "id": index,
                        "name": products[i].brand + " " + products[i].model,
                        "size": numbersInputValue,
                        "price": products[i].price
                    } 
                    basket.push(basketProduct);
                    sessionStorage.setItem('textValues', JSON.stringify(basket));
                }
            }
        } else {
            for(let i = 0; i < productsFinal.length; i++) {
                if(id == productsFinal[i].id) {
                    index = basket.length;
                    let basketProduct = {
                        "id": index,
                        "name": productsFinal[i].brand + " " + productsFinal[i].model,
                        "size": numbersInputValue,
                        "price": productsFinal[i].price
                    } 
                    basket.push(basketProduct);
                }
            }
        }
        let div = document.createElement('div');
        div.innerHTML = `
            <div class="card w-100 my-2">
                <div class="card-body position-relative pb-0">
                    <h5 class="card-title">${basket[index].name}</h5>
                    <p class="card-text">Price: ${basket[index].price}$ | Size: ${basket[index].size}</p>
                    <button onclick="deleteFunction(${basket[index].id})" class="btn btn-danger btn-sm position-absolute buttonDelete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>`;
        basketProducts.appendChild(div);
        if(basket.length > 0) {
            productsDot.innerHTML = basket.length;
            productsDot.style.display = 'block';
        }
        $('#exampleModalCenter2').modal('hide');
    } else {
        $('.alert').show();
    }
    sum();  
}