function deleteFunction(id) {
    basketProducts.innerHTML = '';
    productsDot.innerHTML = '';
    productsDot.style.display = 'none';
    if(basket.length <=2) {
        id = 0;
    }
    basket.splice(id, 1);
    sessionStorage.setItem('textValues', JSON.stringify(basket));
    for(let i = 0; i < basket.length; i++) {
        let div = document.createElement('div');
            div.innerHTML = `
            <div class="card w-100 my-2">
                <div class="card-body position-relative pb-0">
                    <h5 class="card-title">${basket[i].name}</h5>
                    <p class="card-text">Price: ${basket[i].price}$ | Size: ${basket[i].size}</p>
                    <button onclick="deleteFunction(${basket[i].id})" class="btn btn-danger btn-sm position-absolute buttonDelete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            `;
            basketProducts.appendChild(div);
            if(basket.length > 0) {
                productsDot.innerHTML = basket.length;
                productsDot.style.display = 'block';
            }
    }
    sum();
}