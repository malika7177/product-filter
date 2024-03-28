let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "https://i.pinimg.com/originals/56/0f/80/560f80344a6c05e7bdc9871879367d58.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://mishka-shop.com/upload/resize_cache/webp/iblock/0e8/29a538f8_12a9_11eb_8126_2cfda1e15e3a_29a538f9_12a9_11eb_8126_2cfda1e15e3a.resize1.webp",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://www.vila.com/dw/image/v2/BDTC_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw9b45541e/pim-static/VL/14082767/14082767_CoronetBlue_003.jpg?sw=900&sh=1200",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://www.johnelliott.com/cdn/shop/products/LEATHER_MOTO_JACKET_BLACK_FLAT.jpg?v=1696288948",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2F7e%2F7d7e9744ab760f6624905a883fb4d45e8ab51c6f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_flare%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://m.media-amazon.com/images/I/61jDJ2c5WkL._AC_UY1000_.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://img1.shopcider.com/product/1635234035000-4Xfbfz.jpg?x-oss-process=image/resize,w_1050,m_lfit/quality,Q_60/interlace,1",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };