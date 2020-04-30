function refreshBasket() {
    for(let index = 0; index < basket.length; index++) {
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
    }
    sum();
}