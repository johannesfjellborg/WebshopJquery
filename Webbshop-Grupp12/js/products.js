let id = 0;
let listOfAllKnobs = [];
let product = JSON.parse(localStorage.getItem("products")) || [];
let listOfKnobsInShoppingCart = product;

class Product {
  constructor(name, picture, color, material, price, shape) {
    this.id = id++;
    this.name = name;
    this.picture = picture;
    this.color = color;
    this.material = material;
    this.price = price;
    this.shape = shape;
  }
}

class CartItem {
  constructor(product, qty) {
    this.product = product;
    this.qty = qty;
  }
}

$(function () {
  objectsAndPushes();
  createHtmlWithArray(listOfAllKnobs);
  createFilterFunction();
});

function objectsAndPushes() {
  let roundKnob1 = new Product(
    "Knopp",
    "../images/rundknopp1.jpg",
    "Guld",
    "Stål",
    49,
    "Rund"
  );
  let roundKnob2 = new Product(
    "Knopp",
    "../images/rundknopp2.jpg",
    "Silver",
    "Aluminium",
    49,
    "Rund"
  );
  let roundKnob3 = new Product(
    "Knopp",
    "../images/rundknopp3.jpg",
    "Svart",
    "Zink",
    79,
    "Rund"
  );
  let roundKnob4 = new Product(
    "Knopp",
    "../images/rundknopp4.jpg",
    "Svart",
    "Aluminium",
    39,
    "Rund"
  );
  let roundKnob5 = new Product(
    "Knopp",
    "../images/rundknopp5.jpg",
    "Beige",
    "Bok",
    69,
    "Rund"
  );
  let roundKnob6 = new Product(
    "Knopp",
    "../images/rundknopp6.jpg",
    "Guld",
    "Zink",
    79,
    "Rund"
  );
  let roundKnob7 = new Product(
    "Knopp",
    "../images/rundknopp7.jpg",
    "Svart",
    "Zink",
    79,
    "Rund"
  );
  let roundKnob8 = new Product(
    "Knopp",
    "../images/rundknopp8.jpg",
    "Silver",
    "Aluminium",
    39,
    "Rund"
  );
  let roundKnob9 = new Product(
    "Knopp",
    "../images/rundknopp9.jpg",
    "Guld",
    "Stål",
    49,
    "Rund"
  );
  let roundKnob10 = new Product(
    "Knopp",
    "../images/rundknopp10.jpg",
    "Vit",
    "Plast",
    5,
    "Rund"
  );
  let roundKnob11 = new Product(
    "Knopp",
    "../images/rundknopp11.jpg",
    "Svart",
    "Zink",
    59,
    "Rund"
  );
  let roundKnob12 = new Product(
    "Knopp",
    "../images/rundknopp12.jpg",
    "Vit",
    "Porslin",
    49,
    "Rund"
  );
  let roundKnob13 = new Product(
    "Knopp",
    "../images/rundknopp13.jpg",
    "Beige",
    "Bok",
    49,
    "Rund"
  );
  let plainKnob1 = new Product(
    "Handtag",
    "../images/rakknopp1.jpg",
    "Silver",
    "Aluminium",
    69,
    "Rak"
  );
  let plainKnob2 = new Product(
    "Handtag",
    "../images/rakknopp2.jpg",
    "Silver",
    "Aluminium",
    69,
    "Rak"
  );
  let plainKnob3 = new Product(
    "Handtag",
    "../images/rakknopp3.jpg",
    "Guld",
    "Stål",
    89,
    "Rak"
  );
  let plainKnob4 = new Product(
    "Handtag",
    "../images/rakknopp4.jpg",
    "Svart",
    "Zink",
    79,
    "Rak"
  );
  let plainKnob5 = new Product(
    "Handtag",
    "../images/rakknopp5.jpg",
    "Svart",
    "Aluminium",
    59,
    "Rak"
  );
  let plainKnob6 = new Product(
    "Handtag",
    "../images/rakknopp6.jpg",
    "Svart",
    "Zink",
    49,
    "Rak"
  );
  let plainKnob7 = new Product(
    "Handtag",
    "../images/rakknopp7.jpg",
    "Silver",
    "Aluminium",
    79,
    "Rak"
  );
  let plainKnob8 = new Product(
    "Handtag",
    "../images/rakknopp8.jpg",
    "Vit",
    "Porslin",
    79,
    "Rak"
  );
  let plainKnob9 = new Product(
    "Handtag",
    "../images/rakknopp9.jpg",
    "Svart",
    "Zink",
    119,
    "Rak"
  );
  let plainKnob10 = new Product(
    "Handtag",
    "../images/rakknopp10.jpg",
    "Silver",
    "Stål",
    59,
    "Rak"
  );
  let plainKnob11 = new Product(
    "Handtag",
    "../images/rakknopp11.jpg",
    "Silver",
    "Stål",
    59,
    "Rak"
  );
  let plainKnob12 = new Product(
    "Handtag",
    "../images/rakknopp12.jpg",
    "Beige",
    "Läder",
    129,
    "Rak"
  );
  let plainKnob13 = new Product(
    "Handtag",
    "../images/rakknopp13.jpg",
    "Svart",
    "Läder",
    149,
    "Rak"
  );
  let plainKnob14 = new Product(
    "Handtag",
    "../images/rakknopp14.jpg",
    "Svart",
    "Stål",
    79,
    "Rak"
  );
  let otherKnob1 = new Product(
    "Handtag",
    "../images/uddaknopp1.jpg",
    "Beige",
    "Läder",
    99,
    "Övrig"
  );
  let otherKnob2 = new Product(
    "Handtag",
    "../images/uddaknopp2.jpg",
    "Silver",
    "Aluminium",
    29,
    "Övrig"
  );
  let otherKnob3 = new Product(
    "Handtag",
    "../images/uddaknopp3.jpg",
    "Svart",
    "Stål",
    49,
    "Övrig"
  );
  let otherKnob4 = new Product(
    "Handtag",
    "../images/uddaknopp4.jpg",
    "Svart",
    "Aluminium",
    59,
    "Övrig"
  );
  let otherKnob5 = new Product(
    "Handtag",
    "../images/uddaknopp5.jpg",
    "Silver",
    "Zink",
    79,
    "Övrig"
  );
  let otherKnob6 = new Product(
    "Handtag",
    "../images/uddaknopp6.jpg",
    "Silver",
    "Zink",
    39,
    "Övrig"
  );
  let otherKnob7 = new Product(
    "Handtag",
    "../images/uddaknopp7.jpg",
    "Vit",
    "Aluminium",
    29,
    "Övrig"
  );
  let otherKnob8 = new Product(
    "Handtag",
    "../images/uddaknopp8.jpg",
    "Svart",
    "Stål",
    40,
    "Övrig"
  );
  let otherKnob9 = new Product(
    "Handtag",
    "../images/uddaknopp9.jpg",
    "Svart",
    "Aluminium",
    39,
    "Övrig"
  );
  let otherKnob10 = new Product(
    "Handtag",
    "../images/uddaknopp10.jpg",
    "Svart",
    "Zink",
    79,
    "Övrig"
  );
  let otherKnob11 = new Product(
    "Handtag",
    "../images/uddaknopp11.jpg",
    "Svart",
    "Zink",
    99,
    "Övrig"
  );

  listOfAllKnobs.push(roundKnob1);
  listOfAllKnobs.push(plainKnob1);
  listOfAllKnobs.push(otherKnob1);
  listOfAllKnobs.push(otherKnob2);
  listOfAllKnobs.push(roundKnob2);
  listOfAllKnobs.push(plainKnob2);
  listOfAllKnobs.push(roundKnob3);
  listOfAllKnobs.push(plainKnob3);
  listOfAllKnobs.push(otherKnob3);
  listOfAllKnobs.push(otherKnob4);
  listOfAllKnobs.push(roundKnob4);
  listOfAllKnobs.push(plainKnob4);
  listOfAllKnobs.push(roundKnob5);
  listOfAllKnobs.push(plainKnob5);
  listOfAllKnobs.push(otherKnob5);
  listOfAllKnobs.push(otherKnob6);
  listOfAllKnobs.push(roundKnob6);
  listOfAllKnobs.push(plainKnob6);
  listOfAllKnobs.push(roundKnob7);
  listOfAllKnobs.push(plainKnob7);
  listOfAllKnobs.push(otherKnob7);
  listOfAllKnobs.push(otherKnob8);
  listOfAllKnobs.push(roundKnob8);
  listOfAllKnobs.push(plainKnob8);
  listOfAllKnobs.push(roundKnob9);
  listOfAllKnobs.push(plainKnob9);
  listOfAllKnobs.push(otherKnob9);
  listOfAllKnobs.push(roundKnob10);
  listOfAllKnobs.push(plainKnob10);
  listOfAllKnobs.push(otherKnob10);
  listOfAllKnobs.push(roundKnob11);
  listOfAllKnobs.push(plainKnob11);
  listOfAllKnobs.push(otherKnob11);
  listOfAllKnobs.push(roundKnob12);
  listOfAllKnobs.push(plainKnob12);
  listOfAllKnobs.push(roundKnob13);
  listOfAllKnobs.push(plainKnob13);
  listOfAllKnobs.push(plainKnob14);
}

function createHtmlWithArray(listOfAllKnobs) {
  $("section").html("");

  $.each(listOfAllKnobs, (i, product) => {
    let productImg = $("<img>")
      .addClass("productImg")
      .attr("src", product.picture);
    let productName = $("<span>").addClass("productName").html(product.name);
    let productPrice = $("<span>")
      .addClass("productPrice")
      .html(product.price + ":-");
    let productInfo = $("<div>").addClass("productInfo");
    let productDiv = $("<div>").attr("id", product.id).addClass("product");
    let buy = $("<span>").addClass("buy").html("KÖP");
    let buyIcon = $("<i>").addClass("fas fa-shopping-cart");
    let buyDiv = $("<div>")
      .addClass("buyDiv")
      .on("click", { p: product }, function (e) {
        let cartItem = new CartItem(product, 1);
        let exist = false;
        for (let i = 0; i < listOfKnobsInShoppingCart.length; i++) {
          if (listOfKnobsInShoppingCart[i].product.id == product.id) {
            listOfKnobsInShoppingCart[i].qty =
              listOfKnobsInShoppingCart[i].qty + 1;
            exist = true;
            localStorage.setItem(
              "products",
              JSON.stringify(listOfKnobsInShoppingCart)
            );
            break;
          }
        }

        if (!exist) {
          listOfKnobsInShoppingCart.push(cartItem);
          localStorage.setItem(
            "products",
            JSON.stringify(listOfKnobsInShoppingCart)
          );
        }

        buyIcon.addClass("sendToCart");
        setTimeout(function () {
          buyIcon.removeClass("sendToCart");
          $("#cart").addClass("shake");
          setTimeout(function () {
            $("#cart").removeClass("shake");
          }, 500);
        }, 1000);
      });

    $(productName).appendTo(productInfo);
    $(productPrice).appendTo(productInfo);
    $(productImg).appendTo(productDiv);
    $(buy).appendTo(buyDiv);
    $(buyIcon).appendTo(buyDiv);
    $(productInfo).appendTo(productDiv);
    $(buyDiv).appendTo(productDiv);
    $(productDiv).appendTo($("section"));
  });
}

function createFilterFunction() {
  let beigeKnobs = [];
  let goldKnobs = [];
  let silverKnobs = [];
  let blackKnobs = [];
  let whiteKnobs = [];
  let roundKnobs = [];
  let plainKnobs = [];
  let otherKnobs = [];
  let aluminiumKnobs = [];
  let woodKnobs = [];
  let leatherKnobs = [];
  let porcelainKnobs = [];
  let steelKnobs = [];
  let zinkKnobs = [];

  $(".dropdown").hide();

  $(".filterHeader").on("click", function () {
    $(".dropdown").toggle(300);
  });

  let colorDiv = $("<div>")
    .addClass("filterBy")
    .html("Färg")
    .appendTo($(".dropdown"));
  let shapeDiv = $("<div>")
    .addClass("filterBy")
    .html("Form")
    .appendTo($(".dropdown"));
  let materialDiv = $("<div>")
    .addClass("filterBy")
    .html("Material")
    .appendTo($(".dropdown"));

  $("<div>")
    .addClass("clearDiv")
    .html("Rensa filter")
    .on("click", function () {
      createHtmlWithArray(listOfAllKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo(shapeDiv);

  $("<p>")
    .addClass("filterLink")
    .html("Beige")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.color == "Beige") {
          beigeKnobs.push(product);
        }
      });
      createHtmlWithArray(beigeKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(colorDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Guld")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.color == "Guld") {
          goldKnobs.push(product);
        }
      });
      createHtmlWithArray(goldKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(colorDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Silver")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.color == "Silver") {
          silverKnobs.push(product);
        }
      });
      createHtmlWithArray(silverKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(colorDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Svart")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.color == "Svart") {
          blackKnobs.push(product);
        }
      });
      createHtmlWithArray(blackKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(colorDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Vit")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.color == "Vit") {
          whiteKnobs.push(product);
        }
      });
      createHtmlWithArray(whiteKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(colorDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Runda")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.shape == "Rund") {
          roundKnobs.push(product);
        }
      });
      createHtmlWithArray(roundKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(shapeDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Raka")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.shape == "Rak") {
          plainKnobs.push(product);
        }
      });
      createHtmlWithArray(plainKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(shapeDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Övriga")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.shape == "Övrig") {
          otherKnobs.push(product);
        }
      });
      createHtmlWithArray(otherKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(shapeDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Aluminium")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Aluminium") {
          aluminiumKnobs.push(product);
        }
      });
      createHtmlWithArray(aluminiumKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Bok")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Bok") {
          woodKnobs.push(product);
        }
      });
      createHtmlWithArray(woodKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Läder")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Läder") {
          leatherKnobs.push(product);
        }
      });
      createHtmlWithArray(leatherKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Porslin")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Porslin") {
          porcelainKnobs.push(product);
        }
      });
      createHtmlWithArray(porcelainKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Stål")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Stål") {
          steelKnobs.push(product);
        }
      });
      createHtmlWithArray(steelKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));

  $("<p>")
    .addClass("filterLink")
    .html("Zink")
    .on("click", function () {
      $.each(listOfAllKnobs, (i, product) => {
        if (product.material == "Zink") {
          zinkKnobs.push(product);
        }
      });
      createHtmlWithArray(zinkKnobs);
      $(".dropdown").hide(200);
    })
    .appendTo($(materialDiv));
}

$(function () {
	document.getElementById("dropdownClick").onclick = function(){
		dropdownClick.querySelector(".fa-bars").classList.toggle("fa-times");
		document.querySelector(".dropdownMenuList").classList.toggle("show");	
	}
});