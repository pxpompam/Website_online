function showPaymentDetails() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const paymentDetails = document.getElementById("paymentDetails");
    
    let details = '';

    if (paymentMethod === "Cash on Delivery") {
        details = '<p>Please pay upon receiving the products.</p>';
    } else if (paymentMethod === "Bank Transfer") {
        details = '<label for="bankAccount">Account Number:</label><input type="text" id="bankAccount" placeholder="Please enter account number" required>';
    } else if (paymentMethod === "Credit Card") {
        details = `
            <label for="cardNumber">Credit Card Number:</label>
            <input type="text" id="cardNumber" placeholder="XXXX-XXXX-XXXX-XXXX" required>
            <label for="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="XXX" required>
        `;
    }

    paymentDetails.innerHTML = details;
}
