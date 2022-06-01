document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let checkoutBtn = document.querySelector(".product-btn.btn-secondary.checkout-btn");
let timesClicked = 1

function customerFocus(item) {
    item.className = item.className.replaceAll(" collapsed", "");
    timesClicked = 1
    if (checkoutBtn.classList.contains("pay-now")) {
        checkoutBtn.classList.toggle("pay-now");
        checkoutBtn.innerHTML = "NEXT STEP";
    }
        document.querySelectorAll(".shipping-info, .card-info").forEach(item => {
            item.className += " collapsed";  
        }
    );
}

function shippingFocus(item) {
    item.className = item.className.replaceAll(" collapsed", "");
    timesClicked = 2
    if (checkoutBtn.classList.contains("pay-now")) {
        checkoutBtn.classList.toggle("pay-now");
        checkoutBtn.innerHTML = "NEXT STEP";
    }
        document.querySelectorAll(".customer-info, .card-info").forEach(item => {
            item.className += " collapsed";  
        }
    );
}

function cardFocus(item) {
    timesClicked = 3
    // if (!(checkoutBtn.classList.contains("pay-now"))) {
    //     checkoutBtn.classList.toggle("pay-now");
    //     checkoutBtn.innerHTML = "PAY $1,998";
    // }
    item.className = item.className.replaceAll(" collapsed", "");
        document.querySelectorAll(".customer-info, .shipping-info").forEach(item => {
            item.className += " collapsed";  
        }
    );
}

document.querySelectorAll(".customer-info").forEach(item => {
    item.querySelector(".title").style.cursor = "pointer"
    item.querySelector(".title").addEventListener("click", event => {
        customerFocus(item);
});
});

document.querySelectorAll(".shipping-info").forEach(item => {
    item.querySelector(".title").style.cursor = "pointer"
    item.querySelector(".title").addEventListener("click", event => {
        shippingFocus(item);
});
});

document.querySelectorAll(".card-info").forEach(item => {
    item.querySelector(".title").style.cursor = "pointer"
    item.querySelector(".title").addEventListener("click", event => {
        cardFocus(item);
});
});

// checkoutBtn.forEach(item => {
//     item.addEventListener("click", event => {
//     for(i = 0; i < 2; i++) {
//         console.log("clicked",[i])
//     }
// });
// });

let customerInfo = document.querySelector(".customer-info")
let shippingInfo = document.querySelector(".shipping-info");
let cardInfo = document.querySelector(".card-info");

const plusIncrement = () => {
    
    // console.log("clicked!");
    console.log(timesClicked)
    if (timesClicked == 1) {
        validateCustomerForm();
        // shippingFocus(shippingInfo);
        checkoutBtn.setAttribute("href", "#");
        if (checkoutBtn.classList.contains("pay-now")) {
            checkoutBtn.classList.toggle("pay-now");
            checkoutBtn.innerHTML = "NEXT STEP";
        }
    }
    if (timesClicked == 2) {
        validateShippingForm();
    }
    if (timesClicked == 3) {
        validateCardForm();
        // checkoutBtn.classList.toggle("pay-now");
        checkoutBtn.className = checkoutBtn.className += " pay-now";
        checkoutBtn.innerHTML = "PAY $1,998";
    }
    if (timesClicked == 4) {
    checkoutBtn.setAttribute("href", "/html/payment-success.html");
    }
  };

checkoutBtn.addEventListener("click", plusIncrement);

function validateCustomerForm() {
    let x = document.forms["customer-info"]["first-name", "last-name","email"].value;
    if (x == "") {
        alert("Please make sure all fields are filled correctly");
        return false;
    }
    else {
        // alert("True");
        timesClicked = 1;
        console.log(timesClicked)
        shippingFocus(shippingInfo);
        return true;
    }
}

function validateShippingForm() {
    let x = document.forms["shipping-info"]["phone-number", "street-address","suburb", "postcode", "state"].value;
    if (x == "") {
        alert("Please make sure all fields are filled correctly");
        return false;
    }
    else {
        // alert("True");
        timesClicked = 2;
        cardFocus(cardInfo);
        return true;
    }
}

function validateCardForm() {
    let x = document.forms["card-info"]["cardholder-name", "card-number","month", "year", "cvc"].value;
    if (x == "") {
        alert("Please make sure all fields are filled correctly");
        return false;
    }
    else {
        // alert("True");
        window.location.href = "/html/payment-success.html"
        return true;
    }
}

function handleCustomerForm(event) { 
    event.preventDefault(); 
    if(validateCustomerForm() == 1) {
        console.log("true");
    }
    else {
        console.log("false");
    }
} 

function handleShippingForm(event) { 
    event.preventDefault(); 
    if(validateCustomerForm() == 1) {
        console.log("true");
        if(validateShippingForm() == 1) {
            console.log("true2");
        }
        else {
            console.log("false2");
        }
    }
    else {
        console.log("false");
    }
} 

function handleForm(event) { 
    event.preventDefault(); 
    if(validateCustomerForm() == 1) {
        console.log("true");
        if(validateShippingForm() == 1) {
            console.log("true2");
            checkoutBtn.classList.toggle("pay-now");
            checkoutBtn.innerHTML = "PAY $1,998";
            if(validateCardForm() == 1) {
                console.log("true3");
            }
            else {
                console.log("false3");
            }
        }
        else {
            console.log("false2");
        }
    }
    else {
        console.log("false");
    }
} 

customerInfo.addEventListener("submit", handleCustomerForm)
shippingInfo.addEventListener("submit", handleShippingForm)
cardInfo.addEventListener("submit", handleForm)