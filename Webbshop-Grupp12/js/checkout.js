$(function() {
    let cartItems = JSON.parse(localStorage.getItem("products"));
    let summary = $("#summary")
    let sum = 0;
    $.each(cartItems, (i, cartItem) => {
        let cartDiv = $(`<div id="${cartItem.product.id}"><div>${cartItem.product.name}</div>
        <div class="productPrice">${cartItem.product.price * cartItem.qty}:-</div></div>`)

        sum += cartItem.product.price * cartItem.qty;
        
        summary.append(cartDiv)
    })

    let totalPrice = $(`<div><p class="totalSum">Totalsumma:</p><div><p class="totalSumNr">${sum}:-</p></div></div>`)
    summary.append(totalPrice)

    let form = $("#checkoutForm")
    form.on("submit", function(event) {
        let value = $(this).serializeArray();

        if (clearCart) {
			location.reload();
			localStorage.clear();
		}

        localStorage.setItem("checkoutDetails", JSON.stringify(value))
    });
});

$(function () {
	document.getElementById("dropdownClick").onclick = function(){
		dropdownClick.querySelector(".fa-bars").classList.toggle("fa-times");
		document.querySelector(".dropdownMenuList").classList.toggle("show");	
	}
});