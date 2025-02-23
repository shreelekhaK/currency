const API_KEY = "05c5d90fd9614bd05fd984d9"; // Replace with your actual API key
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

// Function to fetch and update exchange rate
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let fromCurr = document.querySelector("select[name='from']");
    let toCurr = document.querySelector("select[name='to']");
    let msg = document.querySelector(".msg");

    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const from = fromCurr.value;
    const to = toCurr.value;

    const URL = `${BASE_URL}/${from}`;
    console.log("Fetching:", URL); // Debugging

    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log("API Response:", data); // Debugging

        let rate = data.conversion_rates[to];
        if (!rate) {
            throw new Error("Invalid exchange rate data");
        }

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${from} = ${finalAmount.toFixed(2)} ${to}`;
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        msg.innerText = "Failed to fetch exchange rate.";
    }
};

// Add event listener to the button
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    updateExchangeRate();
});
