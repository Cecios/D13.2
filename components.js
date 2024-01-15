let array = [];
let cart = [];
const listaCart = document.getElementById('listaCart');
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
// FUNZIONE AGGIUNGI CARRELLO
 const addToCart = function (event) {
    let id = parseInt(event.target.id)
    const check = cart.find((element)=> element === id)
    if (check) {
        console.log("elemento già presente",cart);
    }
    else{
        const nuovoElemento = id
        cart.push(nuovoElemento);
        console.log(event.target.parentNode.parentNode.parentNode.classList.value);
        console.log('elemento aggiunto',cart);
    }
    // const found = array.find((x)=>x.asin === event.target.id)
    // console.log(check);
}