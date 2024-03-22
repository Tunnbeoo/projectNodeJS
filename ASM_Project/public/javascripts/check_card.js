var cartCount = 0;

function addToCart(event, name, price, imgSrc) {
    event.preventDefault();
    // Code to add the product to the cart goes here
    cartCount++;
    var cart = document.getElementById('cart');
    var product = `
        <div class="row  justify-content-between">
            <div class="col-auto col-md-7">
                <div class="media flex-column flex-sm-row">
                    <img class=" img-fluid" src="${imgSrc}" width="62" height="62">
                    <div class="media-body  my-auto">
                        <div class="row ">
                            <div class="col-auto">
                                <p class="mb-0"><b>${name}</b></p><small class="text-muted">1 Week Subscription</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" pl-0 flex-sm-col col-auto  my-auto">
                <p class="boxed-1">${cartCount}</p>
            </div>
            <div class=" pl-0 flex-sm-col col-auto  my-auto ">
                <p><b>${price}</b></p>
            </div>
        </div>
        <hr class="my-2">`;
    cart.innerHTML += product;
    alert('Product has been added to the cart!');
}

fetch('JSON/product.json')
    .then(response => response.json())
    .then(data => {
        var options = document.querySelector('.options');
        data.products.forEach(product => {
            var link = document.createElement('a');
            link.href = '';
            link.className = 'option1';
            link.onclick = function (event) {
                addToCart(event, product.name, product.price, product.imgSrc);
            };
            link.innerText = 'Add To Cart';
            options.appendChild(link);
        });
    });