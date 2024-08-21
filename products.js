let products1 = [
    {
        id: 0,
        image: "images-latest/men-slim-fit-summer-shorts-gray.jpg",
        name: "Men slim fit summer shorts",
        ratings: {
            stars: 4,
            count: 1,
        },
        price: 599
    },
    {
        id: 1,
        image: "images-latest/plain-hooded-fleece-sweatshirt-yellow.jpg",
        name: "Plain hoods sweatshirt",
        ratings: {
            stars: 5,
            count: 2,
        },
        price: 799
    },
    {
        id: 2,
        image: "images-latest/intermediate-composite-basketball.jpg",
        name: "Composite basketball",
        ratings: {
            stars: 4.5,
            count: 3,
        },
        price: 499
    },
    {
        id: 3,
        image: "images-latest/6-piece-non-stick-baking-set.webp",
        name: "Non-stick baking set",
        ratings: {
            stars: 4.5,
            count: 3,
        },
        price: 499
    },
    {
        id: 4,
        image: "images-latest/bathroom-rug.jpg",
        name: "Bathroom rug",
        ratings: {
            stars: 4,
            count: 3,
        },
        price: 120
    },
    {
        id: 5,
        image: "images-latest/blackout-curtain-set-beige.webp",
        name: "Blackout curtains",
        ratings: {
            stars: 4.5,
            count: 3,
        },
        price: 1099
    },
    {
        id: 6,
        image: "images-latest/coffeemaker-with-glass-carafe-black.jpg",
        name: "Coffemaker",
        ratings: {
            stars: 4,
            count: 3,
        },
        price: 3155
    },
    {
        id: 7,
        image: "images-latest/cotton-bath-towels-teal.webp",
        name: "Cotton bath towels",
        ratings: {
            stars: 5,
            count: 3,
        },
        price: 144
    },
    {
        id: 8,
        image: "images-latest/double-elongated-twist-french-wire-earrings.webp",
        name: "French wire earings",
        ratings: {
            stars: 4.5,
            count: 3,
        },
        price: 99
    },
    {
        id: 9,
        image: "images-latest/liquid-laundry-detergent-plain.jpg",
        name: "Liquid laundry detergent",
        ratings: {
            stars: 5,
            count: 3,
        },
        price: 489
    },
    {
        id: 10,
        image: "images-latest/men-cozy-fleece-zip-up-hoodie-red.jpg",
        name: "Men cozy fleece",
        ratings: {
            stars: 4.5,
            count: 3,
        },
        price: 599
    }

];

let Products1 = '';

products1.forEach((product1) => {
    Products1 += `
    <div class="product-container1">
                <div class="product-image-container">
                    <img src="${product1.image}" class="image-container" alt="">
                </div>

                <div class="product-name">
                    <p>${product1.name}</p>
                </div>

                <div class="product-ratings">
                    <div class="stars">
                        <img src="ratings/rating-${product1.ratings.stars * 10}.png" class="product-rating-stars" alt="">
                    </div>
                    <div class="count">
                        
                    </div>
                </div>

                <div class="price">
                    <p>$${product1.price / 100}</p>
                </div>

                <div class="btn">
                    <button class="addToCart">Add to Cart</button>
                </div>
            </div>
    `;
});


document.querySelector(".js-product").innerHTML = Products1;

let cart = [];

let cartHTML = '';

let buttons = document.querySelectorAll('.addToCart');
buttons.forEach((button,index) =>{
    button.setAttribute('data-id',index);
    button.addEventListener('click',() =>{
    
        let productID = Number(button.getAttribute('data-id'));
        
        let findid = products1.find((productid)=> productid.id === productID);
        findid = JSON.stringify(findid);
        let par = JSON.parse(findid);
    
            //console.log(`productID:${productID} and findid:${findid}`);
            //console.log(par);
            cart.push(par);
            console.log(cart)

       

        cart.forEach((pro) =>{
            cartHTML += `
            <div class="cart-list-each">
            <div class="product-img">
            <img src="${pro.image}" class="image-container" alt="">
            </div>

            <div class="product-name">
                <div class="prod-name">
                   <h3> ${pro.name}</h>
                </div>
                <div class="btn-incere-decre">
                    <button class="minus">-</button>
                    <p class="quantity">1</p>
                    <button class="plus">+</button>
                </div>
            </div>

            <div class="initial-price">
                <p>US$<p class="initial">${pro.price}</p></p>
            </div>
        </div>
            `;

        });

    /*let findname = products1.find((productname)=> productname.name);
    let findimage = products1.find((productimage) => productimage.image);
    let findprice = products1.find((productprice) => productprice.price );

            cart.push({
                id:findid.id,
                name:findname.name,
                image:findimage.image,
                price:findprice.price
            })
            //console.log(cart)*/

            document.querySelector('.cart-list').innerHTML = cartHTML;
       
    })

});




