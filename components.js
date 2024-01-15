let array = [];
let cart = [];
const listaCart = document.getElementById('listaCart');
// ******* EXPORT *******
export const  displayCards = (pics,detail,asin) => {
            return `<div class="col-6 col-md-4 col-lg-3">
        <div class="card w-100">
            <img src="${pics}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${detail}</h5>
            <div class="row">
                <p class="card-text">price: 6.11</p>
            </div>
                <div class="row">
                    <div class="w-75">
                        <a id = "${asin}" href="#" class="btn btn-primary">Aggiungi al carrello</a>
                    </div>
                    <div class="w-25">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    };
// AGGIUNGO EVENTO ONCLICK
export const addClickBtn = (obj) => {
    array = obj
    const addClickBtn = document.querySelectorAll('.cards a.btn')
    addClickBtn.forEach((element) => element.onclick = addToCart)
};
//AGGIUNGO EVENTO ONCLICK
export const addOnKeyUp = (search)=>{
    return search.onkeyup = searchCheck
}
// ******* EXPORT *******

// FUNZIONE AGGIUNGI/TOGLI CARRELLO
 const addToCart = function (event) {
    let targetId = event.target.id
    let target = event.target
    let currentElement = target
    const check = cart.findIndex((element)=> element === targetId)

    if (check > -1) {
        console.log("elemento già presente",cart);
        cart.splice(check,1)
        updateCartView();
        console.log("elemento rimosso",cart);
        while (currentElement && !currentElement.classList.contains('card')) {
            currentElement = currentElement.parentNode
        }
        if (currentElement) {
            currentElement.classList.remove('addToCart')
        }
    }
    else{
        cart.push(targetId);
        updateCartView();

        while (currentElement && !currentElement.classList.contains('card')) {
            currentElement = currentElement.parentNode
        }
        if (currentElement) {
            currentElement.classList.add('addToCart')
            console.log(currentElement);
        }
        console.log('elemento aggiunto',cart);
    }
    
}

const updateCartView = function () {
    listaCart.innerHTML = "Libri nel carrello:"+cart.length; 
    cart.forEach((item) => {
      addCartList(item);
    });
  };
// FUNZIONE AGGIUNGI LISTA AL CARRELLO
const addCartList = function(id){
        const li = document.createElement("li")
        li.textContent = id
        listaCart.appendChild(li)
}

// FUNZIONE BARRA RICERCA
const searchCheck = function (event) {
        console.log(event.target.value);
};

