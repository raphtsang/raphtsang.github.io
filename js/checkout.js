document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let shippingInfo = document.getElementsByClassName("shipping-info")

// document.querySelectorAll(".customer-info, .shipping-info, .card-info").forEach(item => {
//     item.style.cursor = "pointer";
//     item.addEventListener("click", event => {
//         item.classList.toggle("collapsed");
//     });
// });

document.querySelectorAll(".customer-info").forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("collapsed");
        document.querySelectorAll(".shipping-info, .card-info").forEach(item => {
            item.className += " collapsed";  
            console.log("replace!")
        }
    );
});
});

document.querySelectorAll(".shipping-info").forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("collapsed");
        document.querySelectorAll(".customer-info, .card-info").forEach(item => {
            item.className += " collapsed";  
            console.log("replace!")
        }
    );
});
});

document.querySelectorAll(".card-info").forEach(item => {
    item.addEventListener("click", event => {
        item.classList.toggle("collapsed");
        document.querySelectorAll(".customer-info, .shipping-info").forEach(item => {
            item.className += " collapsed";  
            console.log("replace!")
        }
    );
});
});