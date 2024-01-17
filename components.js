
export const  displayCards = (pics,detail,asin) => {
            return `<div class="col-6 col-md-4 col-lg-3">
        <div class="card w-100">
            <img src="${pics}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${detail}</h5>
            <div class="row">
                <p class="card-text">price: 6.11</p>
            </div>
                <div class="row w-100">
                    <div class="w-75">
                        <a id = "${asin}" href="#" class="btnAdd btn btn-primary">Aggiungi al carrello</a>
                    </div>
                    <div class="w-25">
                        <a href="#" class="btnSkip btn btn-secondary">Salta</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    };


