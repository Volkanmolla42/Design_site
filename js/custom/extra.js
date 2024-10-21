// for nav bar javascript codes
window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if (!nCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove("navbar-mobile");

        } else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);
    const myNavbar = document.body.querySelector("#mainNavbar");
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 74
        });
    }

});

var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();

    });
}
(function () {
    'use strict';
    var Name = document.querySelector("#name");
    var email = document.querySelector("#e-mail");
    var phone = document.querySelector("#phone");
    var message = document.querySelector("#message");
    var BtnContact = document.querySelector("#BtnContact");
    if (message.value.length == 0) {
        BtnContact.disabled = true;
    }

    const spacePattern = /^\S*$/;
    const NumericPattern = /^([^0-9]*)$/;
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/;
    Name.addEventListener("blur", controlName);
    email.addEventListener("blur", controlEmail);
    phone.addEventListener("blur", controlPhone);
    message.addEventListener("blur", controlMessage);
    message.addEventListener("keyup", controlMessage);

    function controlName() {
        var myError = document.querySelector("#ErrName");
        if (Name.value.length == 0) {
            Name.classList.add("is-invalid");
            Name.classList.remove("is-valid");
            myError.innerHTML = "isim alanı boş bırakılamaz";
            return false;
        } else if (Name.value.length < 2) {
            Name.classList.add("is-invalid");
            Name.classList.remove("is-valid");
            myError.innerHTML = "isminiz 2 karakterden az olamaz";
            return false;
        } else if (Name.value.length == 30) {
            Name.classList.add("is-invalid");
            Name.classList.remove("is-valid");
            myError.innerHTML = "isminiz 30 karakterden fazla olamaz";
            return false;
        } else if (!spacePattern.test(Name.value)) {
            Name.classList.add("is-invalid");
            Name.classList.remove("is-valid");
            myError.innerHTML = "isminizde boşluk olamaz";
            return false;
        } else if (!NumericPattern.test(Name.value)) {
            Name.classList.add("is-invalid");
            Name.classList.remove("is-valid");
            myError.innerHTML = "isminizde sayı  olamaz";
            return false;
        } else {
            Name.classList.remove("is-invalid");
            Name.classList.add("is-valid");
            return true;
        }
    }

    function controlEmail() {
        var myError = document.querySelector("#ErrE-mail")
        if (email.value.length == 0) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            myError.innerHTML = "E posta alanı boş bırakılamaz";
            return false;
        } else if (!spacePattern.test(email.value)) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            myError.innerHTML = "E-postanızda boşluk olamaz";
            return false;
        } else if (!EmailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            email.classList.remove('is-valid');
            myError.innerHTML = "Lütfen geçerli bir e-posta adresi girin";
            return false;
        } else if (email.value.length == 100) {
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
            myError.innerHTML = "E-postanız 100 karakterden fazla olamaz";
            return false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
            return true;
        }
    }

    function controlPhone() {
        var myError = document.querySelector("#ErrPhone")
        if (phone.value.length == 0) {
            phone.classList.add("is-invalid");
            phone.classList.remove("is-valid");
            myError.innerHTML = "Numara alanı boş bırakılamaz";
            return false;
        } else if (!OnlyNumberPattern.test(phone.value)) {
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
            myError.innerHTML = "Lütfen geçerli bir Telefon numarası girin";
            return false;
        } else if (!spacePattern.test(phone.value)) {
            phone.classList.add('is-invalid');
            phone.classList.remove('is-valid');
            myError.innerHTML = "Lütfen geçerli bir Telefon numarası girin";
            return false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
            return true;
        }
    }

    function controlMessage() {
        var myError = document.querySelector("#ErrMessage");
        var currentcharacterDIV = document.getElementById("currentCharacterDIV");
        if (message.value.length == 0) {
            message.classList.add("is-invalid");
            message.classList.remove("is-valid");
            myError.innerHTML = "Mesaj alanı boş bırakılamaz"
            return false;
        }
        else if (message.value.length >= 300) {
            message.classList.add("is-invalid");
            message.classList.remove("is-valid");
            currentcharacterDIV.classList.replace("text-white", "text-danger");
            myError.innerHTML = "Mesaj alanı maximum 300 karakter olabilir";


            return false;
        } else if (message.value.length < 10) {
            message.classList.add("is-invalid");
            message.classList.remove("is-valid");
            currentcharacterDIV.classList.replace("text-dark", "text-danger");
            myError.innerHTML = "Mesaj alanı minimum 10 karakter olabilir";


            return false;
        } else {
            message.classList.remove("is-invalid");
            message.classList.add("is-valid");
            currentcharacterDIV.classList.replace("text-danger", "text-dark");
            return true;
        }
    }


    message.addEventListener("keyup", function () {
        document.getElementById("current-character").textContent = message.value.length;
        if (message.value.length >= 10) {
            BtnContact.removeAttribute('disabled');
        } else {
            BtnContact.setAttribute('disabled', true);
        }
    });
    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener("submit", function (e) {
        if (!myForms.checkValidity() ||
            !controlName ||
            !controlEmail() ||
            !controlPhone ||
            !controlMessage

        ) {
            e.preventDefault();
            e.stopPropagation();
        }

    }, false);

})();