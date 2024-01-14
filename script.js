import {displayCards,addClickBtn} from './components.js';

const cards = document.querySelector('.cards .row');



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
    addClickBtn(items)
})

.catch((error) => console.error(error));






