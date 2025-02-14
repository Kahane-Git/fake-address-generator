{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const streetNames = ["Main", "Maple", "Oak", "Pine", "Cedar", "Elm", "Washington", "Lincoln", "Adams", "Jefferson"];\
const streetTypes = ["St", "Ave", "Blvd", "Ln", "Rd", "Ct"];\
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Francisco"];\
const states = [\
    \{ name: "Alabama", abbr: "AL" \}, \{ name: "Alaska", abbr: "AK" \}, \{ name: "Arizona", abbr: "AZ" \}, \
    \{ name: "California", abbr: "CA" \}, \{ name: "Texas", abbr: "TX" \}, \{ name: "Florida", abbr: "FL" \}, \
    \{ name: "New York", abbr: "NY" \}, \{ name: "Illinois", abbr: "IL" \}, \{ name: "Pennsylvania", abbr: "PA" \}, \
    \{ name: "Ohio", abbr: "OH" \}\
];\
\
function getRandomElement(arr) \{\
    return arr[Math.floor(Math.random() * arr.length)];\
\}\
\
function generateZipCode() \{\
    return Math.floor(10000 + Math.random() * 90000);\
\}\
\
function generateAddress() \{\
    const streetNumber = Math.floor(Math.random() * 9999) + 1;\
    const streetName = getRandomElement(streetNames);\
    const streetType = getRandomElement(streetTypes);\
    const city = getRandomElement(cities);\
    const state = getRandomElement(states);\
    const zipCode = generateZipCode();\
\
    const fakeAddress = `$\{streetNumber\} $\{streetName\} $\{streetType\}, $\{city\}, $\{state.abbr\} $\{zipCode\}`;\
    \
    document.getElementById("address-output").innerText = fakeAddress;\
    document.getElementById("copy-btn").style.display = "block";\
\}\
\
function copyAddress() \{\
    const addressText = document.getElementById("address-output").innerText;\
    navigator.clipboard.writeText(addressText).then(() => \{\
        alert("Address copied to clipboard!");\
    \});\
\}\
}