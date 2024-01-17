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

        const addToCart =  (event) => {
        let obj = cercaID(event)
        const check = cart.findIndex((element)=> element === obj.id )
        if (check > -1) {
                console.log("elemento già presente",cart);
                cart.splice(check,1)
                updateCartView();
                obj ? obj.classList.remove('addToCart') : null;
                console.log("elemento rimosso",cart);
        }
        else{
                cart.push(obj.id);
                updateCartView();
                obj ? obj.classList.add('addToCart') : null;
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
    let obj = cercaID(event);
    obj ? obj.classList.add('d-none') : null;
};

// ************* BUTTON "DETTAGLI"  ************* //
export const addDetailsBtn = () => {
    const detailsBtn = document.querySelectorAll('.cards .btnDetails')
    detailsBtn.forEach((element) => { element.onclick = openPage  
    });
}
const openPage = function(event){
    let obj = cercaID(event)
    console.log(obj.id);
    window.location.href = 'dettagli.html?id=' + obj.id
  }

  const cercaID = (event) => {
    let currentElement = event.target
    while (currentElement && !currentElement.classList.contains('card')) {
            currentElement = currentElement.parentNode
    }
    return currentElement
  }