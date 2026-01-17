// Welcome message
window.onload = function () {
    alert("Welcome to Shubham Pharmacy!");
};

// Store open / close
function storeStatus() {
    let hour = new Date().getHours();
    if (hour >= 9 && hour <= 21) {
        alert("Pharmacy is OPEN");
    } else {
        alert("Pharmacy is CLOSED");
    }
}

// Check medicine
function checkMedicine() {
    let med = prompt("Enter medicine name:");
    alert(med + " availability: Please contact pharmacy.");
}

// Order form
function placeOrder() {
    let name = document.getElementById("name").value;
    let medicine = document.getElementById("medicine").value;

    alert(
        "Thank you " + name +
        "! Your order for " + medicine +
        " has been received."
    );
}

// Prescription upload
function uploadPrescription() {
    alert("Prescription upload feature coming soon!");
}