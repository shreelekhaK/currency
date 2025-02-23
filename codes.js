const countryList = {
  USD: "US", INR: "IN", EUR: "FR", GBP: "GB", AUD: "AU", CAD: "CA", SGD: "SG", JPY: "JP", CNY: "CN", NZD: "NZ"
};

const fromCurrency = document.querySelector("select[name='from']");
const toCurrency = document.querySelector("select[name='to']");
const fromFlag = document.querySelector(".from img");
const toFlag = document.querySelector(".to img");

// Function to update flag based on currency selection
const updateFlag = (element, currency) => {
  element.src = `https://flagsapi.com/${countryList[currency]}/shiny/64.png`;
};

// Populate dropdowns dynamically
for (let currency in countryList) {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.value = option2.value = currency;
  option1.textContent = option2.textContent = currency;
  
  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
}

// Set default values and flags
fromCurrency.value = "USD";
toCurrency.value = "INR";
updateFlag(fromFlag, "USD");
updateFlag(toFlag, "INR");

// Add event listeners to update flag on change
fromCurrency.addEventListener("change", () => updateFlag(fromFlag, fromCurrency.value));
toCurrency.addEventListener("change", () => updateFlag(toFlag, toCurrency.value));
