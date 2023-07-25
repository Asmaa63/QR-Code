let main = document.querySelector(".main");
let qrInput = main.querySelector(".form input");
let btn = main.querySelector(".form button");
let qrImg = main.querySelector(".qr-code img");
let preValue;

btn.addEventListener("click", () => {
    if(qrInput.value=="") qrInput.focus();
    else 
        main.classList.add("active");
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    btn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        main.classList.add("active");
        btn.innerText = "Generate QR Code";
    });

});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        main.classList.remove("active");
        preValue = "";
    }
});