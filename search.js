

// FUNZIONE BARRA RICERCA
export const searchCheck = (event) => {
    console.log(event.target);
};
//ADD EVENT ONKEYUP
export const addOnKeyUp = (search)=>{
return search.onkeyup = searchCheck
}