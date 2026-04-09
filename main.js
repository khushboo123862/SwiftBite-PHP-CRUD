/* swiper-slider*/
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});


const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');





cartIcon.addEventListener('click', () => cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));




 





let productList = [];

const showcards = () => {

  productList.forEach(product => {

    const ordercard = document.createElement('div');
    ordercard.classList.add('order-card');

    ordercard.innerHTML = `
    <div class="cart-image">
         <img src="${product.image}">
    </div>
   <h4>${product.name}</h4>
   <h4 class="price">${product.price}</h4>
   <a href="#" class="btn card-btn">Add to cart</a>
      `;

     cardList.appendChild(ordercard);

     /* this stops to loading whole page*/
     const cardBtn = ordercard.querySelector('.card-btn');
     cardBtn.addEventListener('click', (e)=>{
         e.preventDefault();
          addTocart(product);

     });


  });

};


const  addTocart = (product)=>{

  const cartItem = document.createElement('div');
  cartList.classList.add('item');


  cartItem.innerHTML = `
     <div class="item-image">
        <img src="${product.image}">
     </div>
     <div class="detail">
        <h4>${product.name}</h4>
        <h4 class="item-total">${product.price}</h4>
     </div>
         <div class="flex">
         <a href="#" class="quantity-btn">
         <i class="fa-solid fa-minus"></i>
           </a>
           <h4 class="quantity-value">1</h4>
            <a href="#" class="quantity-btn">
           <i class="fa-solid fa-plus"></i>
           </a>
                       </div>
  `;


  cartList.appendChild(cartItem);

}

const initApp = () => {

  fetch('products.json').then
    (response => response.json()).then
    (data => {

      productList = data;
      showcards();

    })

}

initApp();