const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


/* var lastScrollTop=0;
header=document.getElementById('header');

window.addEventListener('scroll', function(){
var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop>lastScrollTop)
{header.style.top="-50px"}
else{header.style.top="0px"}
lastScrollTop=scrollTop}) */

const shelfContainer=document.getElementById('shelfContainer');

function displayProducts(){
let i; let l=products.length; let content="";
for (i=0;i<l;i++){content+=`

<div class="shelfItemContainer">
<div class="shelfItem">
<input type="checkbox" name="" />
<div class="toggle"></div>
<img src="${products[i].image}" alt="${products[i].name}" class="shelfItemImage" />
<p class="shelfItemTitle">${products[i].name}</p>
<span class="shelfItemPrice">Rs. ${products[i].price}</span>
<span class="oldItemPrice"><s>${products[i].oldPrice}</s></span><br>
<a class="addToCartBtn">Add To Cart &nbsp; <i class="ra-shopping-bag"></i></a>
<div class="details">
<h3>${products[i].name}</h3>
<p>${products[i].about}</p><br>
<p class="shelfItemId"><strong>Product Id:</strong> ${products[i].id}</p>
<p><strong>Video:</strong> <a href="${products[i].video}" target="_blank">${products[i].video}</a></p>
<p><strong>Price (Rs.):</strong> ${products[i].price}</p>
<p><strong>Category:</strong> ${products[i].category}</p>
<p><strong>Primary Material:</strong> ${products[i].material}</p>
<p><strong>Date Added:</strong> ${products[i].date}</p>
</div>
</div>
</div>
`;} shelfContainer.innerHTML=content}

displayProducts();


if (document.readyState == 'loading') {
document.addEventListener('DOMContentLoaded', ready) }

else { ready() }

function ready() {
var removeCartItemBtns = document.getElementsByClassName('btn-remove')
for (var i = 0; i <removeCartItemBtns.length; i++) {
var button = removeCartItemBtns[i];
button.addEventListener('click', removeCartItem)}


var cartQtyInputs = document.getElementsByClassName('cartItemQty')
    for (var i = 0; i < cartQtyInputs.length; i++) {
        var input = cartQtyInputs[i]
        input.addEventListener('change', cartQtyChanged)
    }


var addToCartBtns = document.querySelectorAll('.addToCartBtn')
    for (var i = 0; i < addToCartBtns.length; i++) {
var button = addToCartBtns[i]
button.addEventListener('click', addToCartClicked) }

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

document.getElementById('priceLowToHigh').addEventListener('click', sortByPriceLowToHigh)

document.getElementById('priceHighToLow').addEventListener('click', sortByPriceHighToLow)

document.getElementById('sortByDateBtn').addEventListener('click', sortByDate)

document.getElementById('sortByCategoryBtn').addEventListener('click', sortByCategory)

document.getElementById('sortByMaterialBtn').addEventListener('click', sortByMaterial)

}



function sortByPriceLowToHigh(){
products.sort(function (a,b){
return a.price - b.price})
displayProducts(); ready()}

function sortByPriceHighToLow(){
products.sort(function (a,b){
return b.price - a.price})
displayProducts(); ready()}

function sortByDate(){
products.sort(function(a, b){
var dateA = new Date(a.date), dateB = new Date(b.date); return dateB - dateA; })
displayProducts(); ready()}

function sortByCategory(){
products.sort(function(a, b) {
var categoryA = a.category.toLowerCase(), categoryB = b.category.toLowerCase();
if (categoryA < categoryB) return -1;
if (categoryA > categoryB) return 1;
return 0; }); displayProducts();
ready()}

function sortByMaterial(){
products.sort(function(a, b) {
var materialA = a.material.toLowerCase(), materialB = b.material.toLowerCase();
if (materialA < materialB) return -1;
if (materialA > materialB) return 1;
return 0; }); displayProducts();
ready()}


function purchaseClicked() {
    var cartItem = document.getElementsByClassName('cartItem')

var title = document.getElementsByClassName('cartItemTitle')

var price = document.getElementsByClassName('cartItemPrice')

var quantity = document.getElementsByClassName('cartItemQty')

var id = document.getElementsByClassName('cartItemId')


var total=document.getElementById('cartTotal').innerText

var myMsg=""

for (var i = 0; i < cartItem.length; i++)
{
myMsg+=`${title[i].innerText}%0D%0A${id[i].innerText}%0D%0A%20%20${price[i].innerText}%20-%20%20${quantity[i].value}%20Pcs%0D%0A%0D%0A`
}
   
var linku=`https://api.whatsapp.com/send?phone=918181040977&text=${myMsg}%0D%0ATotal:%20${total}`

document.getElementsByClassName('btn-purchase')[0].href=linku

var cartItems = document.getElementsByClassName('cartContainer')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }

updateCartTotal()
}





function addToCartClicked(event) {
var button = event.target;
var shelfItem = button.parentElement.parentElement;

    var title = shelfItem.getElementsByClassName('shelfItemTitle')[0].innerText

    var price = shelfItem.getElementsByClassName('shelfItemPrice')[0].innerText

    var imageSrc = shelfItem.getElementsByClassName('shelfItemImage')[0].src

var id = shelfItem.getElementsByClassName('shelfItemId')[0].innerText

    addItemToCart(title, price, imageSrc, id)
    updateCartTotal()



}



function addItemToCart(title, price, imageSrc, id) {
    var cartItem = document.createElement('div')
    cartItem.classList.add('cartItem')
    var cartContainer = document.getElementsByClassName('cartContainer')[0]
  var cartItemId = document.getElementsByClassName('cartItemId')


 for (var i = 0; i < cartItemId.length; i++) {
if (cartItemId[i].innerText == id) {
myFunction()
/* window.alert('This item is already added to the cart') */
return } }

    var cartItemContents = `<div>
      <div class="cartItemHeader">
<img src="${imageSrc}" alt="" />
<div class="cartItemTitle">${title}</div>
<span class="cartItemId">${id}</span>
</div>

<div class="cartItemFooter">
<label>Qty:<input type="number" class="cartItemQty" value="1"></label>
<span class="cartItemPrice">${price}</span>
<a class="btn btn-remove">Remove &nbsp;<i class="ra-bin"></i></a>
</div></div>
`;




    cartItem.innerHTML = cartItemContents
    cartContainer.append(cartItem)



updateCartTotal()


    cartItem.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartItem.getElementsByClassName('cartItemQty')[0].addEventListener('change', cartQtyChanged)

}



function myFunction(){
var cartMsg = document.getElementById("alreadyInCartMsg")
cartMsg.className="show"
setTimeout(function(){
cartMsg.className=cartMsg.className.replace("show", "")}, 3000)
}



function cartQtyChanged(event){
var input=event.target

if (isNaN(input.value) || input.value <= 0)
input.value=1

else input.value=Math.round(input.value)

updateCartTotal()

return input}



function removeCartItem(event) {
var buttonClicked = event.target;
buttonClicked.parentElement.parentElement.parentElement.remove();
updateCartTotal();
}




function updateCartTotal() {
var cartContainer = document.getElementsByClassName('cartContainer')[0]

var cartItems = cartContainer.getElementsByClassName('cartItem')
    var total = 0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName('cartItemPrice')[0]
        var quantityElement = cartItem.getElementsByClassName('cartItemQty')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs. ', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementById('cartTotal').innerText = 'Rs. ' + total






}






