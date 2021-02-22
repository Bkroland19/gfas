//here we are selecting all buttons for adding to cart
let carts = document.querySelectorAll('.add-cart');

//next am gona have an array of products them

let products = [

    {
        name:'Men African Blazer',
       
        price:20000 ,
        inCart:0
    },
    {
         name:'Ankara Men Blaze',
       
        price:50000 ,
        inCart:0
    },
    {
         name:'Ankara Shirt for Men',
        price:30000 ,
        inCart:0
    },
    {
         name:'Women Mockup',
        price:25000 ,
        inCart:0
    }
    //include other products
];

//we are going to loop through all of them

for(let i = 0;i<carts.length;i++)
{
    //inside here i want to grab my carts
    carts[i].addEventListener('click' , () =>{
        console.log('button clicked');
        cartNumbers(products[i]);
        totalCost(products[i]);
        
    })
}

// to eliminate the on refresh effect of removing the cart number we are going to create a function


function onLoadCartNumbers(){

    // next we are going to check the local storage if it has an item of cartNumbers if it exists
    let pdtNumbers = localStorage.getItem('cartNumbers');


    if(pdtNumbers){
        //number of pdts on the localStorage
        document.querySelector('.count').textContent =pdtNumbers;
    }



}




//to know how many items your are adding to the cart

function cartNumbers(product) {
    let pdtNumbers = localStorage.getItem('cartNumbers');
    //lets covert the string into a cartNumbers

    pdtNumbers = parseInt(pdtNumbers);

    //if we have something in the cart lets do this
    if(pdtNumbers)
    {
        localStorage.setItem('cartNumbers',pdtNumbers + 1);
        //here we are grabbing all the products we are having on our cart
        document.querySelector('.count').textContent =pdtNumbers + 1;
    }
    // if there is no product in the Carts
    else{
        localStorage.setItem('cartNumbers',1);

        document.querySelector('.count').textContent = 1;
    }
  
    setItems(product);
}

function setItems(product) {

    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse('cartItems');


    if(cartItems != null)
    {
        if(cartItems[product.tag] == null)
        {
           cartItems = {
               //... is a rest operator in javascript
               ...cartItems,
               [product.tag]:product
           }

        }
        cartItems[product.tag].inCart +=1; 
    }else{
       product.inCart = 1;
    //wwhen we are creating this object we need to do something on it which is called JSON.stringfy because we need to pass this not as a javascript object but as a JSON object
     cartItems = {

        [product.tag]:product
    } 
    }
    
    //
    localStorage.setItem('productInCart' ,JSON.stringify (cartItems));
}

  function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');
    

     if (cartCost != null) {

        //remeber when we are returning anything from the local storage it comes as a string so we have to convert it to a string
     cartCost = parseInt(cartCost);
         localStorage.setItem('totalCost', cartCost + product.price);
     }else{

    localStorage.setItem('totalCost' ,product.price);
     }
      
  }

  function displayCart() {
      let cartItems = localStorage.getItem('productInCart');
      cartItems = JSON.parse(cartItems);
      let pdtContainer = document.querySelector('.products');

      if (cartItems && pdtContainer) {
          pdtContainer.innerHTML = '';
          // i want to check the values of my cart cartItems


          Object.values(cartItems).map(item =>{

            pdtContainer.innerHTML += `
            
            <div class = "products">
                
            
            //place the close icon here
            //here we are grabbing the image to the cart
            <img src = "./images/${item.tag}.jpg ">
            <span>&{item.name}</span>

            </div>
            <div class = "quantity">
            //place an icon here to increase or decrease the quantity
            <span>${item.inCart}</span>
            //another closing item
            </div>

            <div class="price">
            UGX${item.price},00</div>

             <div class = "total">
             UGX${item.inCart*item.price},00
             </div>
            `;





          });

          pdtContainer.innerHTML += `

          <div class = "basket">
          `;
      }
  }


// calling our function
onLoadCartNumbers();
//we want this function to run wenever we load the page thst y its declared here
displayCart();