let id = 0;
let listOfRandomKnobs = [];

class RandomProduct {
  constructor(name, picture, price) {
    this.id = id++;
    this.name = name;
    this.picture = picture;
    this.price = price;
  }
}

$(function () {
  objectsAndPushes();
  createHtmlWithTodaysKnob();
});

function objectsAndPushes() {
  let rRoundKnob1 = new RandomProduct("Knopp", "images/rundknopp1.jpg", 49);
  let rRoundKnob6 = new RandomProduct("Knopp", "images/rundknopp6.jpg", 49);
  let rRoundKnob9 = new RandomProduct("Knopp", "images/rundknopp9.jpg", 79);
  let rPlainKnob1 = new RandomProduct("Handtag", "images/rakknopp1.jpg", 69);
  let rPlainKnob5 = new RandomProduct("Handtag", "images/rakknopp5.jpg", 69);
  let rPlainKnob9 = new RandomProduct("Handtag", "images/rakknopp9.jpg", 89);
  let rOtherKnob1 = new RandomProduct("Handtag", "images/uddaknopp1.jpg", 99);
  let rOtherKnob6 = new RandomProduct("Handtag", "images/uddaknopp6.jpg", 29);
  let rOtherKnob9 = new RandomProduct("Handtag", "images/uddaknopp9.jpg", 49);

  listOfRandomKnobs.push(rRoundKnob1);
  listOfRandomKnobs.push(rPlainKnob1);
  listOfRandomKnobs.push(rOtherKnob1);
  listOfRandomKnobs.push(rOtherKnob6);
  listOfRandomKnobs.push(rRoundKnob6);
  listOfRandomKnobs.push(rPlainKnob5);
  listOfRandomKnobs.push(rRoundKnob9);
  listOfRandomKnobs.push(rPlainKnob9);
  listOfRandomKnobs.push(rOtherKnob9);
}

function createHtmlWithTodaysKnob() {
  $(".todaysKnob").html("");

  let randomProduct =
    listOfRandomKnobs[Math.floor(Math.random() * listOfRandomKnobs.length)];

  let todaysKnobHeader = $("<h2>")
    .html("Dagens julknoppstips")
    .addClass("todaysKnobHeader");
  let randomProductImg = $("<img>")
    .addClass("randomProductImg")
    .attr("src", randomProduct.picture)
    .on("click", function () {
      location.replace("html/products.html");
    });
  
  let randomProductName = $("<span>")
    .addClass("randomProductName")
    .html(randomProduct.name);
  let randomProductPrice = $("<span>")
    .addClass("randomProductPrice")
    .html(randomProduct.price + ":-");
  let randomProductInfo = $("<div>").addClass("randomProductInfo");
  let randomProductDiv = $("<div>")
    .attr("id", randomProduct.id)
    .addClass("randomProduct");

  $(randomProductName).appendTo(randomProductInfo);
  $(randomProductPrice).appendTo(randomProductInfo);
  $(randomProductImg).appendTo(randomProductDiv);
  $(randomProductInfo).appendTo(randomProductDiv);
  $(todaysKnobHeader).appendTo($(".todaysKnobDiv"));
  $(randomProductDiv).appendTo($(".todaysKnobDiv"));
}

$(function () {
	document.getElementById("dropdownClick").onclick = function(){
		dropdownClick.querySelector(".fa-bars").classList.toggle("fa-times");
		document.querySelector(".dropdownMenuList").classList.toggle("show");	
	}
});