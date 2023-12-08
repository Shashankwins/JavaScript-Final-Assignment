let cartNo = document.getElementById('cart')
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
const items = Object.keys(cartItems);
const productList = JSON.parse(localStorage.getItem('productList'));
if(!items.length)
{
    document.getElementById('checkOut').style.display='none';
}
for(let i=0;i<items.length;i++)
{
    for(let j=0;j<productList.length;j++)
    {
        if(productList[j].id == items[i])
        {
            const cartWrapper = document.querySelector('tbody');
            const cartProduct = document.createElement('tr');   
            cartProduct.innerHTML = `
            <tr>
                <td>${i+1}</td>
                <td><img src="${productList[j].image}" alt="Product image" width="100" height="100"></td>
                <td>₹ ${productList[j].price}</td>
                <td><input type="number" id="$[i]" name="quantity" min="3" max="10" value="3" class="form-control"></td>
                <td><button class="remove btn btn-danger" id="${items[i]}">Remove Item</i></button></td>
            </tr>`
            cartWrapper.append(cartProduct);
        }
    }
}

const removeBtn = document.querySelectorAll('.remove');
for(let i=0;i<removeBtn.length;i++)
{
    removeBtn[i].addEventListener('click', () => {
        let itemId = removeBtn[i].id;
        delete cartItems[itemId];
        sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
        window.location.reload();
    })
}

function update() {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems'))
    const items = Object.keys(cartItems)
    if(items.length)
    {
      cartNo.innerHTML = ` Cart(${items.length})`
    }
    else
    {
      cartNo.innerText= ` Cart(0)`
    }
  }
  update();

function checkOut(){
    if(!items.length)
    {
        alert('cart is empty');
    }
    else
    {
        window.location.href='./invoice.html'
    }
}