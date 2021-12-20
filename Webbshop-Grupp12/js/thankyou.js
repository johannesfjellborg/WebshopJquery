$(function() {
    let checkoutDetails = JSON.parse(localStorage.getItem("checkoutDetails"));
    let thankYou = $("#thankYou");
    let name = checkoutDetails[0].value;
    let email = checkoutDetails[4].value;
    thankYou.append(`<div class="thankYouWrapper"><p class="thankYou"> Tack för ditt köp ${name}!</p><p class="order">Orderbekräftelse har skickats till: ${email}</p></div>`);
    thankYou.append(`<img src="../images/check-sign.png">`);
});

$(function () {
	document.getElementById("dropdownClick").onclick = function(){
		dropdownClick.querySelector(".fa-bars").classList.toggle("fa-times");
		document.querySelector(".dropdownMenuList").classList.toggle("show");	
	}
});