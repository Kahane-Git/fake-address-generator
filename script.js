const streetNames = ["Main", "Maple", "Oak", "Pine", "Cedar", "Elm", "Washington", "Lincoln", "Adams", "Jefferson"];
const streetTypes = ["St", "Ave", "Blvd", "Ln", "Rd", "Ct"];
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Francisco"];
const states = [
    { name: "Alabama", abbr: "AL" }, { name: "Alaska", abbr: "AK" }, { name: "Arizona", abbr: "AZ" }, 
    { name: "California", abbr: "CA" }, { name: "Texas", abbr: "TX" }, { name: "Florida", abbr: "FL" }, 
    { name: "New York", abbr: "NY" }, { name: "Illinois", abbr: "IL" }, { name: "Pennsylvania", abbr: "PA" }, 
    { name: "Ohio", abbr: "OH" }
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateZipCode() {
    return Math.floor(10000 + Math.random() * 90000);
}

function generateAddress() {
    const streetNumber = Math.floor(Math.random() * 9999) + 1;
    const streetName = getRandomElement(streetNames);
    const streetType = getRandomElement(streetTypes);
    const city = getRandomElement(cities);
    const state = getRandomElement(states);
    const zipCode = generateZipCode();

    const fakeAddress = `${streetNumber} ${streetName} ${streetType}, ${city}, ${state.abbr} ${zipCode}`;
    
    // Ensure the output field exists before updating it
    const outputDiv = document.getElementById("address-output");
    if (outputDiv) {
        outputDiv.innerText = fakeAddress;
        document.getElementById("copy-btn").style.display = "block"; // Show copy button
    }
}

function copyAddress() {
    const addressText = document.getElementById("address-output").innerText;
    if (addressText) {
        navigator.clipboard.writeText(addressText).then(() => {
            alert("Address copied to clipboard!");
        });
    }
}
