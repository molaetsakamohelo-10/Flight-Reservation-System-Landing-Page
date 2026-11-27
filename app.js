
// GENERATE QR CODE
const websiteURL ="https://molaetsakamohelo-10.github.io/Flight-Reservation-System/"

const qrContainer = document.getElementById("qrcode");

if (qrContainer && window.QRCode) {
    new QRCode(qrContainer, {
        text: websiteURL,
        width: 180,
        height: 180,
        colorDark: "#183d58",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// DARK AND LIGHT THEME

const themeButton = document.getElementById("theme");

if (themeButton) {
    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            this.textContent = "☀ Light";
        } else {
            this.textContent = "☾ Theme";
        }

    });

    // CONTACT FORM

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    this.reset();

});
}
