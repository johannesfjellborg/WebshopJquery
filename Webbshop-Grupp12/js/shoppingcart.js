let cartItems;

$(function () {	
	cartItems = JSON.parse(localStorage.getItem("products"));
	let totalDiv = $("<div>").addClass("total").html("<p>Totalt:</p><span id='total'>0</span>");
	let sum = 0;

	$.each(cartItems, (i, cartItem) => {
		let cartDiv = $("<div id='"+cartItem.product.id+"'>").addClass("product");
		let imgDiv = $("<div>").addClass("img");
		let titleDiv = $("<div>").addClass("title");
		let priceDiv = $("<div>").addClass("price");
		let qtyDiv = $("<div>").addClass("qty");
		let productImg = $("<img>").addClass("productImg").attr("src", cartItem.product.picture);
		let productTitle = $("<h3>").addClass("productTitle").html(cartItem.product.name);
		let productPrice = $("<p>").addClass("productPrice").html(cartItem.product.price + ":-");
		let productQty = $("<input type='number' min='1'>").addClass("productQty").val(cartItem.qty).on('change', {c: cartItem}, updatePrice);

		$(cartDiv).appendTo($("section"));
		$(imgDiv).appendTo(cartDiv);
		$(titleDiv).appendTo(cartDiv);
		$(priceDiv).appendTo(cartDiv);
		$(qtyDiv).appendTo(cartDiv);
		$(productImg).appendTo(imgDiv);
		$(productTitle).appendTo(titleDiv);
		$(productPrice).appendTo(priceDiv);
		$(productQty).appendTo(qtyDiv);

		sum += cartItem.product.price * cartItem.qty;
	})

	$(totalDiv).appendTo($(".totalDiv"));
	$("#total").text(sum + ":-");

	$("#clearCart").on('click', function(){
		let clearCart = confirm("Vill du verkligen rensa varukorgen? Vi har superfina knoppar!");
		if (clearCart) {
			location.reload();
			localStorage.clear();
		}
	});
});

function updatePrice(e) {
	let currentQty = parseInt($(this).val());
	let sum = 0;

	for(let i = 0; i < cartItems.length; i++){
		if(cartItems[i].product.id == e.data.c.product.id) {
			cartItems[i].qty = currentQty;
			localStorage.setItem("products", JSON.stringify(cartItems));
		}
		sum += cartItems[i].product.price * cartItems[i].qty;
	}

	$("#total").text(sum + ":-");
}

$(function () {
	document.getElementById("dropdownClick").onclick = function(){
		dropdownClick.querySelector(".fa-bars").classList.toggle("fa-times");
		document.querySelector(".dropdownMenuList").classList.toggle("show");	
	}
});