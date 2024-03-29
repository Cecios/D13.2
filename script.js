import {displayCards} from './components.js';
import {addSkipBtn,addClickBtn,addDetailsBtn} from './btn.js';
import {addOnKeyUp} from './search.js';
const cards = document.querySelector('.cards .row');
const search = document.getElementById('search');

fetch('https://striveschool-api.herokuapp.com/books',{
headers: {
    Authorization: 'WBCin4nNXSKsreaoccxmci9ZP7PG2l71tn6V4TvZPuIKMfogJHBossuc',
  },
})
.then((res)=> res.json())
.then((data) => {
    const items = data;
    items.map((item) => {
        cards.innerHTML += displayCards(item.img, item.title, item.asin)
        
    })    
    addClickBtn(items);
    addSkipBtn();
    addDetailsBtn();
    addOnKeyUp(search);
})

.catch((error) => console.alert(error));






