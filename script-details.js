import {displayCardDetails} from './component-details.js';

let params = new URLSearchParams(window.location.search);
let urlID = params.get('id')
const cards = document.querySelector('.cards .row');

fetch(`https://striveschool-api.herokuapp.com/books/${urlID}`,
{headers: {
    Authorization: 'WBCin4nNXSKsreaoccxmci9ZP7PG2l71tn6V4TvZPuIKMfogJHBossuc',
  },
})
.then((res) => res.json())
.then((data) => {

    let item = data;
    
    cards.innerHTML = displayCardDetails(item.img, item.title, item.asin);

})
.catch((error) => console.error(error));
