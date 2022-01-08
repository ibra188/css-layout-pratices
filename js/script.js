
const email = document.getElementById("mail");

email.addEventListener("input", function(event) {
    if (email.oninvalid.typeMismatch){
        email.setCustomValidity("i am expecting an e-mail address!");
    }else {
        email.setCustomValidity("");
    }
});




