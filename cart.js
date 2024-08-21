


let plus = document.querySelector('.plus');
plus.addEventListener('click',()=>{
    let p = document.querySelector('.quantity');
    let pri = p.innerHTML = Number(p.innerHTML) + 1;

    let price = document.querySelector('.initial');
    price.innerHTML = Number(price.innerHTML);    
    let tot = price.innerHTML= (10.00 * pri).toFixed(2); 

    let total = document.querySelector('.totals');
    total.innerHTML = 0;
    let ans = total.innerHTML = Number(total.innerHTML) + Number(tot);
    total.innerHTML = ans.toFixed(2);
    
    

});


let minus = document.querySelector('.minus');
minus.addEventListener('click',()=>{
    let min = document.querySelector('.quantity');
    if(min.innerHTML > 0){
       var pric = min.innerHTML = Number(min.innerHTML) - 1;
    }
    
    let price = document.querySelector('.initial');
    price.innerHTML = Number(price.innerHTML);    
    let tota = price.innerHTML= (10 * pric).toFixed(2);

    let total = document.querySelector('.totals');
    total.innerHTML = 0;
    let ans = total.innerHTML = Number(total.innerHTML) + Number(tota);
    total.innerHTML = ans.toFixed(2);

});