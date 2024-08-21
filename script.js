let arrival = [
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
    }
]

let arrivalHTML = '';


arrival.forEach((prod) =>{
    arrivalHTML +=`
    <div class="arrival">
    <img src="${prod.image}" class="image-container" alt="">
     </div>
    `;
});

document.querySelector('.for-each-arrival-product').innerHTML = arrivalHTML;