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
}






function purchaseClicked() {
    
cartReceipt=document.getElementById('cartReceipt')


    var cartItem = document.getElementsByClassName('cartItem')

var title = document.getElementsByClassName('cartItemTitle')

var price = document.getElementsByClassName('cartItemPrice')

var quantity = document.getElementsByClassName('cartItemQty')

var total=document.getElementById('cartTotal').innerText

var myMsg=""

for (var i = 0; i < cartItem.length; i++)
{
myMsg+=`${title[i].innerText}%0D%0A%20%20${price[i].innerText}%20-%20%20${quantity[i].value}%20Pcs%0D%0A%0D%0A`


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




    addItemToCart(title, price, imageSrc)
    updateCartTotal()



}



function addItemToCart(title, price, imageSrc) {
    var cartItem = document.createElement('div')
    cartItem.classList.add('cartItem')
    var cartContainer = document.getElementsByClassName('cartContainer')[0]
  var cartItemTitle = document.getElementsByClassName('cartItemTitle')


 for (var i = 0; i < cartItemTitle.length; i++) {
if (cartItemTitle[i].innerText == title) {
window.alert('This item is already added to the cart')
return } }

    var cartItemContents = `
      <div class="cartFlex">
<img src="${imageSrc}" alt="" />
<h3 class="cartItemTitle">${title}</h3>
</div><hr>
<div class="cartFlex">
<span class="cartItemPrice">${price}</span>
<label>Qty: <input type="number" class="cartItemQty" value="1"></label>
<a class="btn btn-remove">Remove</a>
</div>`




    cartItem.innerHTML = cartItemContents
    cartContainer.append(cartItem)




updateCartTotal()


    cartItem.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartItem.getElementsByClassName('cartItemQty')[0].addEventListener('change', cartQtyChanged)


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
buttonClicked.parentElement.parentElement.remove();
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









