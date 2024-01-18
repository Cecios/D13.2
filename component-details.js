export const  displayCardDetails = (pics,detail,asin) => {
    return `<div class="col-6 col-md-4 col-lg-3">
    <div id = "${asin}"class="card w-100">
        <img src="${pics}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${detail}</h5>
        <div class="row w-100 align-items-center">
            <div class="col-7"><p class="card-text">price: 6.11</p></div>
        </div>
        <br>
            <div class="row w-100 align-items-center">

            </div>
        </div>
    </div>
</div>`

};
