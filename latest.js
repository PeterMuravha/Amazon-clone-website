let products= [
    {
        id:"01",
        image:"images-latest/men-slim-fit-summer-shorts-gray.jpg",
        name:"Men slim fit summer shorts",
        ratings:{
            stars:4,
            count:1,
        },
        price:599
    },
    {
        id:"02",
        image:"images-latest/plain-hooded-fleece-sweatshirt-yellow.jpg",
        name:"Plain hoods sweatshirt",
        ratings:{
            stars:5,
            count:2,
        },
        price:799
    },
    {
        id:"03",
        image:"images-latest/intermediate-composite-basketball.jpg",
        name:"Composite basketball",
        ratings:{
            stars:4.5,
            count:3,
        },
        price:499
    },
    {
        id:"04",
        image:"images-latest/6-piece-non-stick-baking-set.webp",
        name:"Non-stick baking set",
        ratings:{
            stars:4.5,
            count:3,
        },
        price:499
    },
    {
        id:"05",
        image:"images-latest/bathroom-rug.jpg",
        name:"Bathroom rug",
        ratings:{
            stars:4,
            count:3,
        },
        price:120
    },
    {
        id:"06",
        image:"images-latest/blackout-curtain-set-beige.webp",
        name:"Blackout curtains",
        ratings:{
            stars:4.5,
            count:3,
        },
        price:1099
    },
    {
        id:"07",
        image:"images-latest/coffeemaker-with-glass-carafe-black.jpg",
        name:"Coffemaker",
        ratings:{
            stars:4,
            count:3,
        },
        price:3155
    },
    {
        id:"08",
        image:"images-latest/cotton-bath-towels-teal.webp",
        name:"Cotton bath towels",
        ratings:{
            stars:5,
            count:3,
        },
        price:144
    },
    {
        id:"09",
        image:"images-latest/double-elongated-twist-french-wire-earrings.webp",
        name:"French wire earings",
        ratings:{
            stars:4.5,
            count:3,
        },
        price:99
    },
    {
        id:"10",
        image:"images-latest/liquid-laundry-detergent-plain.jpg",
        name:"Liquid laundry detergent",
        ratings:{
            stars:5,
            count:3,
        },
        price:489
    },
    {
        id:"11",
        image:"images-latest/men-cozy-fleece-zip-up-hoodie-red.jpg",
        name:"Men cozy fleece",
        ratings:{
            stars:4.5,
            count:3,
        },
        price:599
    }

];

let LatestProducts = '';

products.forEach((product) =>{
    LatestProducts +=`
    <div class="product-container product-container1">
                <div class="product-image-container">
                    <img src="${product.image}" class="image-container" alt="">
                </div>

                <div class="product-name">
                    <p>${product.name}</p>
                </div>

                <div class="product-ratings">
                    <div class="stars">
                        <img src="ratings/rating-${product.ratings.stars * 10}.png" class="product-rating-stars" alt="">
                    </div>
                    <div class="count">
                        
                    </div>
                </div>

                <div class="price">
                    <p>$${product.price / 100}</p>
                </div>
            </div>
    `;
});

document.querySelector(".js-product-grid").innerHTML = LatestProducts;

