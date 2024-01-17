let array = [];
let cart = [];
const listaCart = document.getElementById('listaCart');

// ************* BUTTON "AGGIUNGI AL CARRELLO"  ***************//
export const addClickBtn = (obj) => {
    array = obj
    const clickBtn = document.querySelectorAll('.cards .btnAdd')
    const handleClick = (event) => {
        addToCart(event,array)
    }
    clickBtn.forEach((element) => element.onclick = handleClick
    )};

    const addToCart =  (event,obj) => {
    console.log(obj);
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
};

 const updateCartView =  () => {
    listaCart.innerHTML = cart.length === 0 ? 'Il tuo carrello è vuoto' : `${cart.length} libri nel carrello`; 
    cart.forEach((item) => {
      addCartList(item);
    });
  };
export const addCartList = (id) => {
    const li = document.createElement("li")
    li.textContent = id
    listaCart.appendChild(li)
};


// ************* BUTTON "SALTA"  ************* //
export const addSkipBtn = () => {
     const skipBtn = document.querySelectorAll('.cards .btnSkip')
     skipBtn.forEach((element) => element.onclick = skipCard
     );
};
const skipCard = (event) => {
    let currentElement = event.target
    while (currentElement && !currentElement.classList.contains('card')) {
            currentElement = currentElement.parentNode
    }
    if (currentElement) {
        currentElement.classList.add('d-none')
    }
};

// ************* BUTTON "DETTAGLI"  ************* //
export const addDetailsBtn = (event) => {
    console.log(event);
    openPage
}
const openPage = function(){
    window.location.href = 'dettagli.html?id=' + id
  }